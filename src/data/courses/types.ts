export interface LessonQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonResource {
  title: string;
  url: string;
  type: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  durationMinutes: number;
  orderIndex: number;
  content: string;
  videoUrl?: string;
  videoUrlUrdu?: string;
  practicePrompt: string;
  quiz: LessonQuiz;
  resources?: LessonResource[];
}

export interface CourseSection {
  id: string;
  title: string;
  orderIndex: number;
  lessons: Lesson[];
}

export interface FinalProject {
  title: string;
  brief: string;
  requirements: string[];
  starterTemplate?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  categoryName: string;
  categorySlug: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMinutes: number;
  lessonCount: number;
  language: string;
  isPremium: boolean;
  thumbnail: string;
  learningObjectives: string[];
  completionRequirements: string;
  prerequisites: string[];
  sections: CourseSection[];
  finalQuiz?: LessonQuiz[]; // Comprehensive questions for certification
  finalProject?: FinalProject;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
}
