-- Ashiskillrise Cloudflare D1 Initial Database Migration
-- Schema for Users, Courses, Sections, Lessons, Enrollments, Progress, and Notes

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT DEFAULT 'student',
  is_verified INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. User Profiles Table
CREATE TABLE IF NOT EXISTS user_profiles (
  id TEXT PRIMARY KEY,
  user_id TEXT UNIQUE NOT NULL,
  bio TEXT,
  headline TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  website_url TEXT,
  skills TEXT, -- comma-separated or JSON array
  target_career TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  icon TEXT NOT NULL,
  description TEXT,
  order_index INTEGER DEFAULT 0
);

-- 4. Courses Table
CREATE TABLE IF NOT EXISTS courses (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id TEXT NOT NULL,
  difficulty TEXT NOT NULL, -- 'Beginner', 'Intermediate', 'Advanced'
  duration_minutes INTEGER NOT NULL,
  lesson_count INTEGER DEFAULT 5,
  language TEXT DEFAULT 'English',
  is_premium INTEGER DEFAULT 0,
  thumbnail_url TEXT,
  learning_objectives TEXT NOT NULL, -- JSON array of strings
  completion_requirements TEXT NOT NULL,
  prerequisites TEXT NOT NULL,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 5. Course Sections Table
CREATE TABLE IF NOT EXISTS course_sections (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL,
  title TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- 6. Lessons Table
CREATE TABLE IF NOT EXISTS lessons (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL,
  section_id TEXT,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  video_url TEXT,
  duration_minutes INTEGER DEFAULT 15,
  order_index INTEGER DEFAULT 0,
  practice_prompt TEXT,
  quiz_data TEXT, -- JSON structure of quiz questions
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  FOREIGN KEY (section_id) REFERENCES course_sections(id) ON DELETE SET NULL,
  UNIQUE (course_id, slug)
);

-- 7. Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id TEXT NOT NULL,
  enrolled_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  completed_at DATETIME,
  progress_percent INTEGER DEFAULT 0,
  last_accessed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  UNIQUE (user_id, course_id)
);

-- 8. Lesson Progress Table
CREATE TABLE IF NOT EXISTS lesson_progress (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  completed INTEGER DEFAULT 1,
  completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
  UNIQUE (user_id, lesson_id)
);

-- 9. Bookmarks Table
CREATE TABLE IF NOT EXISTS bookmarks (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id TEXT NOT NULL,
  lesson_id TEXT,
  note TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
  UNIQUE (user_id, course_id, lesson_id)
);

-- 10. Lesson Notes Table
CREATE TABLE IF NOT EXISTS lesson_notes (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  course_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  content TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
  UNIQUE (user_id, lesson_id)
);

-- 11. Learning Paths Table
CREATE TABLE IF NOT EXISTS learning_paths (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  estimated_hours INTEGER NOT NULL,
  icon TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 12. Learning Path Courses Table
CREATE TABLE IF NOT EXISTS learning_path_courses (
  id TEXT PRIMARY KEY,
  learning_path_id TEXT NOT NULL,
  course_id TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  FOREIGN KEY (learning_path_id) REFERENCES learning_paths(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  UNIQUE (learning_path_id, course_id)
);

-- 13. Newsletter Subscriptions Table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category_id);
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_lessons_course ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_user ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_user_course ON lesson_progress(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_user ON bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_notes_user_lesson ON lesson_notes(user_id, lesson_id);

-- Initial Categories Seed
INSERT OR IGNORE INTO categories (id, slug, name, icon, description, order_index) VALUES
  ('cat_ai', 'artificial-intelligence', 'Artificial Intelligence', 'Bot', 'Harness AI workflows, prompt engineering, and modern intelligence tools.', 1),
  ('cat_comm', 'english-communication', 'English Communication', 'MessageSquare', 'Master professional workplace conversations, emails, and presentations.', 2),
  ('cat_freelance', 'freelancing', 'Freelancing Fundamentals', 'Briefcase', 'Launch a thriving freelance career, pitch high-paying clients, and deliver work.', 3),
  ('cat_design', 'graphic-design', 'Graphic Design', 'Palette', 'Build visual identities, layout compositions, and brand systems.', 4),
  ('cat_web', 'web-development', 'Web Development', 'Code', 'Create responsive web apps with HTML, CSS, JavaScript, and modern tooling.', 5),
  ('cat_mktg', 'digital-marketing', 'Digital Marketing', 'TrendingUp', 'Drive organic traffic, grow social followings, and execute campaigns.', 6),
  ('cat_video', 'video-editing', 'Video Editing', 'Video', 'Cut engaging short-form and long-form video content.', 7),
  ('cat_writing', 'content-writing', 'Content Writing', 'PenTool', 'Craft compelling blogs, newsletters, and persuasive marketing copy.', 8),
  ('cat_office', 'microsoft-office', 'Microsoft Office', 'FileSpreadsheet', 'Automate data analysis, formulas, and presentations with Excel.', 9),
  ('cat_career', 'career-development', 'Career Development', 'Award', 'Craft stand-out resumes, portfolio showcases, and interview techniques.', 10);
