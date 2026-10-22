import { signJwt, verifyJwt } from './lib/jwt';
import { INITIAL_COURSES, CATEGORIES } from '../src/data/coursesData';
import { LEARNING_PATHS } from '../src/data/learningPathsData';

export interface Env {
  DB?: any; // Cloudflare D1 Database binding
  ASSETS?: any; // Cloudflare Worker Static Assets binding
  JWT_SECRET?: string;
  ENVIRONMENT?: string;
}

// In-memory demo fallback store for sessions when D1 is not configured
const inMemoryUsers: Map<string, any> = new Map([
  [
    'learner@ashiskillrise.org',
    {
      id: 'usr_demo_1',
      email: 'learner@ashiskillrise.org',
      password_hash: 'demo123',
      full_name: 'Alex Morgan',
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
      role: 'student',
      enrolledCourseIds: ['course-1', 'course-5'],
      progress: {
        'course-1': { completedLessonIds: ['l-ai-1', 'l-ai-2'], percent: 40 },
        'course-5': { completedLessonIds: ['l-web-1'], percent: 20 }
      },
      bookmarks: [
        { id: 'bm_1', courseId: 'course-1', lessonId: 'l-ai-2', note: 'Prompt engineering 4-part structure' }
      ],
      notes: {
        'l-ai-1': 'LLMs predict next tokens based on probability distributions.'
      }
    }
  ]
]);

function jsonResponse(data: unknown, status = 200, headers: HeadersInit = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      ...headers
    }
  });
}

function handleCors(request: Request): Response | null {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400'
      }
    });
  }
  return null;
}

async function getAuthUser(request: Request, env: Env): Promise<any | null> {
  const authHeader = request.headers.get('Authorization');
  let token: string | null = null;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7);
  } else {
    // Check cookie
    const cookieHeader = request.headers.get('Cookie');
    if (cookieHeader) {
      const match = cookieHeader.match(/ashiskillrise_token=([^;]+)/);
      if (match) token = match[1];
    }
  }

  if (!token) return null;
  const secret = env.JWT_SECRET || 'ashiskillrise_secure_default_secret_key_32chars';
  const payload = await verifyJwt(token, secret);
  if (!payload || !payload.sub) return null;

  // If D1 is bound, query user from D1
  if (env.DB) {
    try {
      const user = await env.DB.prepare('SELECT id, email, full_name, avatar_url, role FROM users WHERE id = ?')
        .bind(payload.sub)
        .first();
      return user || null;
    } catch {
      // Fallback
    }
  }

  // Fallback to in-memory store
  for (const user of inMemoryUsers.values()) {
    if (user.id === payload.sub) return user;
  }

  return { id: payload.sub, email: payload.email, full_name: payload.name, role: 'student' };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = handleCors(request);
    if (cors) return cors;

    const url = new URL(request.url);
    const path = url.pathname;

    // --- API ROUTES ---
    if (path.startsWith('/api/')) {
      // 1. Health check
      if (path === '/api/health') {
        return jsonResponse({
          status: 'healthy',
          service: 'Ashiskillrise Cloudflare API',
          d1Connected: Boolean(env.DB),
          timestamp: new Date().toISOString()
        });
      }

      // 2. Courses API
      if (path === '/api/courses' && request.method === 'GET') {
        const category = url.searchParams.get('category');
        const difficulty = url.searchParams.get('difficulty');
        const search = url.searchParams.get('search')?.toLowerCase();

        let filtered = [...INITIAL_COURSES];

        if (category && category !== 'all') {
          filtered = filtered.filter(
            c => c.categorySlug === category || c.categoryId === category
          );
        }
        if (difficulty && difficulty !== 'all') {
          filtered = filtered.filter(c => c.difficulty.toLowerCase() === difficulty.toLowerCase());
        }
        if (search) {
          filtered = filtered.filter(
            c =>
              c.title.toLowerCase().includes(search) ||
              c.description.toLowerCase().includes(search) ||
              c.categoryName.toLowerCase().includes(search)
          );
        }

        return jsonResponse({ courses: filtered, total: filtered.length });
      }

      // 3. Course detail by slug
      if (path.startsWith('/api/courses/') && request.method === 'GET') {
        const slug = path.replace('/api/courses/', '');
        const course = INITIAL_COURSES.find(c => c.slug === slug || c.id === slug);
        if (!course) {
          return jsonResponse({ error: 'Course not found' }, 404);
        }
        return jsonResponse({ course });
      }

      // 4. Categories list
      if (path === '/api/categories' && request.method === 'GET') {
        return jsonResponse({ categories: CATEGORIES });
      }

      // 5. Learning Paths API
      if (path === '/api/learning-paths' && request.method === 'GET') {
        return jsonResponse({ learningPaths: LEARNING_PATHS });
      }

      if (path.startsWith('/api/learning-paths/') && request.method === 'GET') {
        const slug = path.replace('/api/learning-paths/', '');
        const learningPath = LEARNING_PATHS.find(p => p.slug === slug || p.id === slug);
        if (!learningPath) {
          return jsonResponse({ error: 'Learning path not found' }, 404);
        }
        // Attach full course objects
        const fullCourses = learningPath.courseIds
          .map(id => INITIAL_COURSES.find(c => c.id === id))
          .filter(Boolean);
        return jsonResponse({ learningPath: { ...learningPath, courses: fullCourses } });
      }

      // 6. Auth: Register
      if (path === '/api/auth/register' && request.method === 'POST') {
        try {
          const body = (await request.json()) as any;
          const { email, password, fullName } = body;
          if (!email || !password || !fullName) {
            return jsonResponse({ error: 'Missing required fields' }, 400);
          }

          if (inMemoryUsers.has(email)) {
            return jsonResponse({ error: 'User already exists with this email' }, 409);
          }

          const newUser = {
            id: `usr_${Date.now()}`,
            email,
            password_hash: password, // In production, hash via bcrypt/scrypt
            full_name: fullName,
            avatar_url: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fullName)}`,
            role: 'student',
            enrolledCourseIds: [],
            progress: {},
            bookmarks: [],
            notes: {}
          };

          inMemoryUsers.set(email, newUser);

          const secret = env.JWT_SECRET || 'ashiskillrise_secure_default_secret_key_32chars';
          const token = await signJwt(
            { sub: newUser.id, email: newUser.email, name: newUser.full_name, role: newUser.role },
            secret
          );

          return jsonResponse(
            {
              user: {
                id: newUser.id,
                email: newUser.email,
                fullName: newUser.full_name,
                avatarUrl: newUser.avatar_url,
                role: newUser.role
              },
              token
            },
            201,
            { 'Set-Cookie': `ashiskillrise_token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800` }
          );
        } catch {
          return jsonResponse({ error: 'Invalid request body' }, 400);
        }
      }

      // 7. Auth: Login
      if (path === '/api/auth/login' && request.method === 'POST') {
        try {
          const body = (await request.json()) as any;
          const { email, password } = body;
          if (!email || !password) {
            return jsonResponse({ error: 'Email and password required' }, 400);
          }

          let user = inMemoryUsers.get(email);
          if (!user && email === 'learner@ashiskillrise.org') {
            // Demo user fallback
            user = inMemoryUsers.get('learner@ashiskillrise.org');
          }

          if (!user || user.password_hash !== password) {
            return jsonResponse({ error: 'Invalid credentials. Try learner@ashiskillrise.org / demo123' }, 401);
          }

          const secret = env.JWT_SECRET || 'ashiskillrise_secure_default_secret_key_32chars';
          const token = await signJwt(
            { sub: user.id, email: user.email, name: user.full_name, role: user.role },
            secret
          );

          return jsonResponse(
            {
              user: {
                id: user.id,
                email: user.email,
                fullName: user.full_name,
                avatarUrl: user.avatar_url,
                role: user.role
              },
              token
            },
            200,
            { 'Set-Cookie': `ashiskillrise_token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800` }
          );
        } catch {
          return jsonResponse({ error: 'Failed to process login' }, 400);
        }
      }

      // 8. Auth: Me
      if (path === '/api/auth/me' && request.method === 'GET') {
        const authUser = await getAuthUser(request, env);
        if (!authUser) {
          return jsonResponse({ user: null });
        }
        return jsonResponse({ user: authUser });
      }

      // 9. Auth: Logout
      if (path === '/api/auth/logout' && request.method === 'POST') {
        return jsonResponse(
          { success: true },
          200,
          { 'Set-Cookie': `ashiskillrise_token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0` }
        );
      }

      // 10. Enrollments & User Progress
      if (path === '/api/my-courses' && request.method === 'GET') {
        const authUser = await getAuthUser(request, env);
        if (!authUser) {
          return jsonResponse({ error: 'Unauthorized' }, 401);
        }
        const userRec = inMemoryUsers.get(authUser.email) || authUser;
        const enrolledIds: string[] = userRec.enrolledCourseIds || ['course-1', 'course-5'];
        const courses = enrolledIds
          .map(id => {
            const c = INITIAL_COURSES.find(item => item.id === id);
            if (!c) return null;
            const progress = userRec.progress?.[id] || { completedLessonIds: [], percent: 0 };
            return {
              ...c,
              progressPercent: progress.percent,
              completedLessonIds: progress.completedLessonIds
            };
          })
          .filter(Boolean);

        return jsonResponse({ courses });
      }

      // Enroll in course
      if (path === '/api/enrollments' && request.method === 'POST') {
        const authUser = await getAuthUser(request, env);
        if (!authUser) return jsonResponse({ error: 'Unauthorized' }, 401);

        const body = (await request.json()) as any;
        const { courseId } = body;
        if (!courseId) return jsonResponse({ error: 'Missing courseId' }, 400);

        const userRec = inMemoryUsers.get(authUser.email);
        if (userRec) {
          if (!userRec.enrolledCourseIds.includes(courseId)) {
            userRec.enrolledCourseIds.push(courseId);
            userRec.progress[courseId] = { completedLessonIds: [], percent: 0 };
          }
        }
        return jsonResponse({ success: true, courseId });
      }

      // Progress update
      if (path === '/api/progress' && request.method === 'POST') {
        const authUser = await getAuthUser(request, env);
        if (!authUser) return jsonResponse({ error: 'Unauthorized' }, 401);

        const body = (await request.json()) as any;
        const { courseId, lessonId, completed } = body;
        const userRec = inMemoryUsers.get(authUser.email);
        if (userRec) {
          if (!userRec.progress[courseId]) {
            userRec.progress[courseId] = { completedLessonIds: [], percent: 0 };
          }
          const prog = userRec.progress[courseId];
          if (completed && !prog.completedLessonIds.includes(lessonId)) {
            prog.completedLessonIds.push(lessonId);
          } else if (!completed && prog.completedLessonIds.includes(lessonId)) {
            prog.completedLessonIds = prog.completedLessonIds.filter((id: string) => id !== lessonId);
          }
          const course = INITIAL_COURSES.find(c => c.id === courseId);
          const totalLessons = course ? course.lessonCount : 5;
          prog.percent = Math.round((prog.completedLessonIds.length / totalLessons) * 100);
          return jsonResponse({ progress: prog });
        }
        return jsonResponse({ success: true });
      }

      // Newsletter
      if (path === '/api/newsletter' && request.method === 'POST') {
        const body = (await request.json()) as any;
        if (!body.email || !body.email.includes('@')) {
          return jsonResponse({ error: 'Please enter a valid email address' }, 400);
        }
        return jsonResponse({ success: true, message: 'Thank you for subscribing to Ashiskillrise updates!' });
      }

      return jsonResponse({ error: 'Endpoint not found' }, 404);
    }

    // Static Assets serving (Cloudflare Worker with Static Assets)
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Ashiskillrise Cloudflare Worker Ready', { status: 200 });
  }
};
