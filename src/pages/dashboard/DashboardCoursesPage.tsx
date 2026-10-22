import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, CheckCircle2, Clock } from 'lucide-react';
import { api } from '../../lib/api';
import { Course } from '../../data/coursesData';

export default function DashboardCoursesPage() {
  const [courses, setCourses] = useState<(Course & { progressPercent: number; completedLessonIds: string[] })[]>([]);
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed'>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const c = await api.getEnrolledCourses();
        setCourses(c);
      } catch {
        // fallback
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const filtered = courses.filter(c => {
    if (filter === 'completed') return c.progressPercent === 100;
    if (filter === 'in-progress') return c.progressPercent < 100;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            My Enrolled Courses
          </h2>
          <p className="text-xs text-slate-500">
            Track your ongoing lessons and view completion metrics.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'in-progress', label: 'In Progress' },
            { id: 'completed', label: 'Completed' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === t.id
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-xs text-slate-500">Loading your courses...</div>
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(course => (
            <div
              key={course.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm hover:border-slate-300 transition-all"
            >
              <div>
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-3.5">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{course.categoryName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.difficulty}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {course.title}
                </h3>

                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Progress</span>
                    <span className="font-bold tabular-nums text-slate-900 dark:text-white">
                      {course.progressPercent}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all"
                      style={{ width: `${course.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 tabular-nums">
                  {course.completedLessonIds?.length || 0} / {course.lessonCount} lessons completed
                </span>
                <Link
                  to={`/learn/${course.slug}/${course.sections[0]?.lessons[0]?.slug}`}
                  className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700"
                >
                  Continue Lesson
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
          <BookOpen className="mx-auto h-8 w-8 text-slate-400" />
          <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-white">No courses match this filter</h3>
          <p className="mt-1 text-xs text-slate-500">Explore the catalog to discover new courses.</p>
          <Link
            to="/courses"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Explore Catalog
          </Link>
        </div>
      )}
    </div>
  );
}
