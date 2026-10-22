import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Clock,
  CheckCircle2,
  ChevronRight,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { api } from '../lib/api';
import { LearningPath } from '../data/learningPathsData';
import { Course } from '../data/coursesData';
import CourseCard from '../components/CourseCard';

export default function LearningPathDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [pathData, setPathData] = useState<{ path: LearningPath; courses: Course[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      setIsLoading(true);
      try {
        const res = await api.getLearningPathBySlug(slug);
        setPathData(res);
      } catch {
        // fallback
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em]" />
        <p className="mt-4 text-xs text-slate-500">Loading learning pathway...</p>
      </div>
    );
  }

  if (!pathData) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <Compass className="mx-auto h-12 w-12 text-slate-400" />
        <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Learning Path Not Found</h2>
        <p className="mt-2 text-xs text-slate-500">The requested pathway does not exist.</p>
        <Link
          to="/learning-paths"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-700"
        >
          View All Learning Paths
        </Link>
      </div>
    );
  }

  const { path, courses } = pathData;

  return (
    <div className="pb-16 space-y-12">
      {/* Path Header */}
      <section className="border-b border-slate-200/80 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <Link to="/learning-paths" className="hover:text-blue-600">Learning Paths</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-900 dark:text-white truncate font-medium">{path.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-purple-600 dark:text-purple-400">{path.category}</span>
              <span aria-hidden="true">·</span>
              <span>{path.estimatedHours} Total Study Hours</span>
              <span aria-hidden="true">·</span>
              <span>{courses.length} Ordered Courses</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {path.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {path.description}
            </p>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {courses.length > 0 && (
                <Link
                  to={`/courses/${courses[0].slug}`}
                  className="rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Start First Course: {courses[0].title}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Path Details Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Ordered Curriculum Courses */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Ordered Curriculum ({courses.length} Courses)
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Complete these courses in sequence to build foundational knowledge before moving to client deliverables.
              </p>

              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-extrabold text-sm dark:bg-blue-950/40 dark:text-blue-400">
                        0{index + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                          <span>{course.categoryName}</span>
                          <span aria-hidden="true">·</span>
                          <span>{course.difficulty}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{course.durationMinutes} mins</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {course.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                          {course.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/courses/${course.slug}`}
                      className="shrink-0 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-600 transition-colors whitespace-nowrap"
                    >
                      View Course
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Outcomes & Career Opportunities */}
          <div className="lg:col-span-4 space-y-6">
            {/* Objectives */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                What You Will Achieve
              </h3>
              <div className="space-y-3">
                {path.learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-4 w-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Target Career Roles
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                {path.careerOpportunities.map((role, i) => (
                  <li key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 font-medium text-slate-900 dark:text-white">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
