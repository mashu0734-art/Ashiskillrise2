import { Course, INITIAL_COURSES, CATEGORIES } from '../data/coursesData';
import { LearningPath, LEARNING_PATHS } from '../data/learningPathsData';

export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  role: string;
}

export interface ProgressState {
  completedLessonIds: string[];
  percent: number;
}

const LOCAL_STORAGE_USER_KEY = 'ashiskillrise_active_user';
const LOCAL_STORAGE_TOKEN_KEY = 'ashiskillrise_auth_token';
const LOCAL_STORAGE_PROGRESS_KEY = 'ashiskillrise_user_progress';
const LOCAL_STORAGE_NOTES_KEY = 'ashiskillrise_user_notes';
const LOCAL_STORAGE_BOOKMARKS_KEY = 'ashiskillrise_user_bookmarks';
const LOCAL_STORAGE_ENROLLED_KEY = 'ashiskillrise_user_enrolled';

// Default demo user for instant frictionless testing
const DEFAULT_DEMO_USER: User = {
  id: 'usr_demo_1',
  email: 'learner@ashiskillrise.org',
  fullName: 'Alex Morgan',
  avatarUrl: '',
  role: 'student'
};

function getLocalData<T>(key: string, fallback: T): T {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
}

function setLocalData<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage quota errors
  }
}

export const api = {
  async getCourses(filters?: { category?: string; difficulty?: string; search?: string }): Promise<Course[]> {
    try {
      const params = new URLSearchParams();
      if (filters?.category && filters.category !== 'all') params.set('category', filters.category);
      if (filters?.difficulty && filters.difficulty !== 'all') params.set('difficulty', filters.difficulty);
      if (filters?.search) params.set('search', filters.search);

      const res = await fetch(`/api/courses?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        return data.courses;
      }
    } catch {
      // Fallback to local catalog
    }

    // Local filtering
    let courses = [...INITIAL_COURSES];
    if (filters?.category && filters.category !== 'all') {
      courses = courses.filter(
        c => c.categorySlug === filters.category || c.categoryId === filters.category
      );
    }
    if (filters?.difficulty && filters.difficulty !== 'all') {
      courses = courses.filter(c => c.difficulty.toLowerCase() === filters.difficulty?.toLowerCase());
    }
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      courses = courses.filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.categoryName.toLowerCase().includes(q)
      );
    }
    return courses;
  },

  async getCourseBySlug(slug: string): Promise<Course | null> {
    try {
      const res = await fetch(`/api/courses/${slug}`);
      if (res.ok) {
        const data = await res.json();
        return data.course;
      }
    } catch {
      // Fallback
    }
    const found = INITIAL_COURSES.find(c => c.slug === slug || c.id === slug);
    return found || null;
  },

  async getCategories() {
    return CATEGORIES;
  },

  async getLearningPaths(): Promise<LearningPath[]> {
    try {
      const res = await fetch('/api/learning-paths');
      if (res.ok) {
        const data = await res.json();
        return data.learningPaths;
      }
    } catch {
      // Fallback
    }
    return LEARNING_PATHS;
  },

  async getLearningPathBySlug(slug: string): Promise<{ path: LearningPath; courses: Course[] } | null> {
    const learningPath = LEARNING_PATHS.find(p => p.slug === slug || p.id === slug);
    if (!learningPath) return null;
    const courses = learningPath.courseIds
      .map(id => INITIAL_COURSES.find(c => c.id === id))
      .filter(Boolean) as Course[];
    return { path: learningPath, courses };
  },

  // --- AUTHENTICATION ---
  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (!token) {
      const cached = getLocalData<User | null>(LOCAL_STORAGE_USER_KEY, null);
      return cached;
    }

    try {
      const res = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.user) return data.user;
      }
    } catch {
      // Fallback
    }
    return getLocalData<User | null>(LOCAL_STORAGE_USER_KEY, null);
  },

  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.token);
        setLocalData(LOCAL_STORAGE_USER_KEY, data.user);
        return data;
      }
    } catch {
      // Fallback
    }

    // Default demo credentials or any valid email
    const user: User = {
      id: `usr_${Date.now()}`,
      email,
      fullName: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(email)}`,
      role: 'student'
    };
    const mockToken = `token_${Date.now()}`;
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, mockToken);
    setLocalData(LOCAL_STORAGE_USER_KEY, user);
    return { user, token: mockToken };
  },

  async register(email: string, password: string, fullName: string): Promise<{ user: User; token: string }> {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.token);
        setLocalData(LOCAL_STORAGE_USER_KEY, data.user);
        return data;
      }
    } catch {
      // Fallback
    }

    const user: User = {
      id: `usr_${Date.now()}`,
      email,
      fullName,
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fullName)}`,
      role: 'student'
    };
    const mockToken = `token_${Date.now()}`;
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, mockToken);
    setLocalData(LOCAL_STORAGE_USER_KEY, user);
    return { user, token: mockToken };
  },

  async logout(): Promise<void> {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // ignore
    }
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  },

  // --- ENROLLMENTS & PROGRESS ---
  async getEnrolledCourses(): Promise<(Course & { progressPercent: number; completedLessonIds: string[] })[]> {
    const enrolledIds = getLocalData<string[]>(LOCAL_STORAGE_ENROLLED_KEY, ['course-1', 'course-5']);
    const progressMap = getLocalData<Record<string, ProgressState>>(LOCAL_STORAGE_PROGRESS_KEY, {
      'course-1': { completedLessonIds: ['l-ai-1', 'l-ai-2'], percent: 40 },
      'course-5': { completedLessonIds: ['l-web-1'], percent: 20 }
    });

    return enrolledIds
      .map(id => {
        const course = INITIAL_COURSES.find(c => c.id === id);
        if (!course) return null;
        const prog = progressMap[id] || { completedLessonIds: [], percent: 0 };
        return {
          ...course,
          progressPercent: prog.percent,
          completedLessonIds: prog.completedLessonIds
        };
      })
      .filter(Boolean) as (Course & { progressPercent: number; completedLessonIds: string[] })[];
  },

  async enrollInCourse(courseId: string): Promise<boolean> {
    const enrolled = getLocalData<string[]>(LOCAL_STORAGE_ENROLLED_KEY, ['course-1', 'course-5']);
    if (!enrolled.includes(courseId)) {
      enrolled.push(courseId);
      setLocalData(LOCAL_STORAGE_ENROLLED_KEY, enrolled);
    }
    return true;
  },

  async getCourseProgress(courseId: string): Promise<ProgressState> {
    const progressMap = getLocalData<Record<string, ProgressState>>(LOCAL_STORAGE_PROGRESS_KEY, {
      'course-1': { completedLessonIds: ['l-ai-1', 'l-ai-2'], percent: 40 },
      'course-5': { completedLessonIds: ['l-web-1'], percent: 20 }
    });
    return progressMap[courseId] || { completedLessonIds: [], percent: 0 };
  },

  async setLessonCompleted(courseId: string, lessonId: string, completed: boolean): Promise<ProgressState> {
    const progressMap = getLocalData<Record<string, ProgressState>>(LOCAL_STORAGE_PROGRESS_KEY, {
      'course-1': { completedLessonIds: ['l-ai-1', 'l-ai-2'], percent: 40 },
      'course-5': { completedLessonIds: ['l-web-1'], percent: 20 }
    });

    if (!progressMap[courseId]) {
      progressMap[courseId] = { completedLessonIds: [], percent: 0 };
    }

    const current = progressMap[courseId];
    if (completed && !current.completedLessonIds.includes(lessonId)) {
      current.completedLessonIds.push(lessonId);
    } else if (!completed && current.completedLessonIds.includes(lessonId)) {
      current.completedLessonIds = current.completedLessonIds.filter(id => id !== lessonId);
    }

    const course = INITIAL_COURSES.find(c => c.id === courseId);
    const total = course ? course.lessonCount : 5;
    current.percent = Math.min(100, Math.round((current.completedLessonIds.length / total) * 100));

    // Also auto-enroll if not enrolled
    await this.enrollInCourse(courseId);

    setLocalData(LOCAL_STORAGE_PROGRESS_KEY, progressMap);
    return current;
  },

  // --- NOTES ---
  async getLessonNote(lessonId: string): Promise<string> {
    const notes = getLocalData<Record<string, string>>(LOCAL_STORAGE_NOTES_KEY, {
      'l-ai-1': 'Key learning: Large Language Models predict next tokens based on probability distributions.'
    });
    return notes[lessonId] || '';
  },

  async saveLessonNote(lessonId: string, content: string): Promise<void> {
    const notes = getLocalData<Record<string, string>>(LOCAL_STORAGE_NOTES_KEY, {});
    notes[lessonId] = content;
    setLocalData(LOCAL_STORAGE_NOTES_KEY, notes);
  },

  // --- BOOKMARKS ---
  async getBookmarks(): Promise<{ courseId: string; lessonId: string; title: string; courseTitle: string }[]> {
    return getLocalData(LOCAL_STORAGE_BOOKMARKS_KEY, [
      {
        courseId: 'course-1',
        lessonId: 'l-ai-2',
        title: '2. Prompt Engineering: Precision and Constraints',
        courseTitle: 'Introduction to Artificial Intelligence'
      }
    ]);
  },

  async toggleBookmark(courseId: string, lessonId: string, title: string, courseTitle: string): Promise<boolean> {
    const bookmarks = await this.getBookmarks();
    const existingIndex = bookmarks.findIndex(b => b.courseId === courseId && b.lessonId === lessonId);
    if (existingIndex >= 0) {
      bookmarks.splice(existingIndex, 1);
      setLocalData(LOCAL_STORAGE_BOOKMARKS_KEY, bookmarks);
      return false; // removed
    } else {
      bookmarks.push({ courseId, lessonId, title, courseTitle });
      setLocalData(LOCAL_STORAGE_BOOKMARKS_KEY, bookmarks);
      return true; // added
    }
  },

  async isBookmarked(courseId: string, lessonId: string): Promise<boolean> {
    const bookmarks = await this.getBookmarks();
    return bookmarks.some(b => b.courseId === courseId && b.lessonId === lessonId);
  },

  // --- NEWSLETTER ---
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    return { success: true, message: 'Thank you for subscribing to Ashiskillrise learning updates!' };
  }
};
