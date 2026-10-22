import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  Play,
  ArrowRight,
  FileText,
  UserCheck,
  ChevronRight,
  Lock,
  Share2,
  Bookmark
} from 'lucide-react';
import { api } from '../lib/api';
import { Course, INITIAL_COURSES } from '../data/coursesData';
import { useAuth } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrolling, setEnrolling] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    async function loadCourse() {
      if (!slug) return;
      setIsLoading(true);
      try {
        const found = await api.getCourseBySlug(slug);
        setCourse(found);
        if (found) {
          const enrolled = await api.getEnrolledCourses();
          setIsEnrolled(enrolled.some(e => e.id === found.id));
        }
      } catch {
        // fallback
      } finally {
        setIsLoading(false);
      }
    }
    loadCourse();
  }, [slug]);

  const handleEnroll = async () => {
    if (!course) return;
    setEnrolling(true);
    try {
      await api.enrollInCourse(course.id);
      setIsEnrolled(true);
      // Navigate to first lesson
      const firstLesson = course.sections[0]?.lessons[0];
      if (firstLesson) {
        navigate(`/learn/${course.slug}/${firstLesson.slug}`);
      }
    } catch {
      // fallback
    } finally {
      setEnrolling(false);
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em]" />
        <p className="mt-4 text-xs text-slate-500">Loading course curriculum...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <BookOpen className="mx-auto h-12 w-12 text-slate-400" />
        <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Course Not Found</h2>
        <p className="mt-2 text-xs text-slate-500">The requested course could not be located.</p>
        <Link
          to="/courses"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-700"
        >
          Return to Course Catalog
        </Link>
      </div>
    );
  }

  const firstLesson = course.sections[0]?.lessons[0];
  const relatedCourses = INITIAL_COURSES.filter(
    c => c.id !== course.id && (c.categoryId === course.categoryId || c.difficulty === course.difficulty)
  ).slice(0, 3);

  return (
    <div className="pb-16 space-y-12">
      {/* 1. Course Header / Hero Banner */}
      <section className="border-b border-slate-200/80 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <Link to="/courses" className="hover:text-blue-600">Courses</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/courses?category=${course.categorySlug}`} className="hover:text-blue-600">
              {course.categoryName}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-900 dark:text-white truncate font-medium">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">{course.categoryName}</span>
                <span aria-hidden="true">·</span>
                <span>{course.difficulty}</span>
                <span aria-hidden="true">·</span>
                <span>{course.language}</span>
                <span aria-hidden="true">·</span>
                <span>{course.isPremium ? 'Premium' : 'Free Open Access'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {/* Course Key Stats */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span>Duration: <strong className="text-slate-900 dark:text-white tabular-nums">{course.durationMinutes} minutes</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-slate-400" />
                  <span>Curriculum: <strong className="text-slate-900 dark:text-white tabular-nums">{course.lessonCount} lessons</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-slate-400" />
                  <span>Certificate: <strong className="text-slate-900 dark:text-white">Upon Completion</strong></span>
                </div>
              </div>

              {/* Instructor Mini Box */}
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {course.instructor.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {course.instructor.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card / CTA Enrollment Box */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900 sticky top-24">
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 mb-4">
                  {!imgError ? (
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-blue-900 text-white font-bold text-sm">
                      {course.title}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {course.isPremium ? '$29' : 'Free'}
                    </span>
                    <span className="text-xs text-slate-500">Full Lifetime Access</span>
                  </div>

                  {firstLesson && (
                    <button
                      onClick={handleEnroll}
                      disabled={enrolling}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 disabled:opacity-50 transition-all"
                    >
                      <Play className="h-4 w-4 fill-white" />
                      <span>{isEnrolled ? 'Continue Learning' : 'Start Course Now'}</span>
                    </button>
                  )}

                  <p className="text-[11px] text-center text-slate-500">
                    Self-paced · Interactive quiz included · No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Syllabus & Learning Objectives */}
          <div className="lg:col-span-8 space-y-10">
            {/* Learning Objectives */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                What You Will Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Syllabus / Lessons List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Course Curriculum
                </h2>
                <span className="text-xs text-slate-500 tabular-nums">
                  {course.sections.length} Section · {course.lessonCount} Lessons
                </span>
              </div>

              <div className="space-y-4">
                {course.sections.map(section => (
                  <div
                    key={section.id}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {section.title}
                      </span>
                      <span className="text-[11px] text-slate-500 tabular-nums">
                        {section.lessons.length} lessons
                      </span>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {section.lessons.map(lesson => (
                        <Link
                          key={lesson.id}
                          to={`/learn/${course.slug}/${lesson.slug}`}
                          className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 shrink-0">
                              <Play className="h-3 w-3 fill-current" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {lesson.title}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                Practice Exercise & Quiz
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span className="tabular-nums">{lesson.durationMinutes}m</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites & Completion Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Prerequisites
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {course.prerequisites.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Completion Requirements
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {course.completionRequirements}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Instructor & Related Tracks */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                About the Instructor
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="h-12 w-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {course.instructor.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">{course.instructor.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated educator specializing in applied digital skill acquisition, real-world case studies, and career transition coaching.
              </p>
            </div>

            {/* Quick Share / Bookmark */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 flex items-center justify-around text-xs text-slate-600 dark:text-slate-400">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Course link copied to clipboard!');
                }}
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>Share Course</span>
              </button>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
              <button
                onClick={handleEnroll}
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <Bookmark className="h-4 w-4" />
                <span>Save to Library</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Related Courses
            </h2>
            <Link to="/courses" className="text-xs font-semibold text-blue-600 hover:underline">
              View All Courses
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCourses.map(rc => (
              <CourseCard key={rc.id} course={rc} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
