import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Clock,
  BookOpen,
  CheckCircle2,
  Trophy,
  ArrowRight,
  TrendingUp,
  Bookmark,
  Calendar
} from 'lucide-react';
import { api } from '../../lib/api';
import { Course, INITIAL_COURSES } from '../../data/coursesData';
import { useAuth } from '../../context/AuthContext';
import CourseCard from '../../components/CourseCard';

export default function DashboardOverviewPage() {
  const { user } = useAuth();
  const [enrolled, setEnrolled] = useState<(Course & { progressPercent: number; completedLessonIds: string[] })[]>([]);
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [c, b] = await Promise.all([api.getEnrolledCourses(), api.getBookmarks()]);
        setEnrolled(c);
        setBookmarks(b);
      } catch {
        // fallback
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const totalCompletedLessons = enrolled.reduce(
    (acc, c) => acc + (c.completedLessonIds ? c.completedLessonIds.length : 0),
    0
  );

  const activeCourse = enrolled.length > 0 ? enrolled[0] : null;
  const recommended = INITIAL_COURSES.filter(
    c => !enrolled.some(e => e.id === c.id)
  ).slice(0, 3);

  return (
    <div className="space-y-8">
      {/* 1. Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Enrolled Courses</span>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {enrolled.length}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Active curricula</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Completed Lessons</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {totalCompletedLessons}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Exercises passed</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Weekly Study Time</span>
            <Clock className="h-4 w-4 text-purple-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            3.5 hrs
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Target: 5 hrs/week</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>Saved Bookmarks</span>
            <Bookmark className="h-4 w-4 text-amber-600" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {bookmarks.length}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Reference notes</div>
        </div>
      </div>

      {/* 2. Continue Learning Spotlight */}
      {activeCourse && (
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 shadow-md">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Continue Learning
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold">
              {activeCourse.title}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 line-clamp-2">
              {activeCourse.description}
            </p>

            <div className="pt-2 space-y-1.5">
              <div className="flex justify-between text-xs text-blue-200">
                <span>Course Progress</span>
                <span className="font-bold tabular-nums">{activeCourse.progressPercent}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full bg-emerald-400 rounded-full transition-all"
                  style={{ width: `${activeCourse.progressPercent}%` }}
                />
              </div>
            </div>

            <div className="pt-3">
              <Link
                to={`/learn/${activeCourse.slug}/${activeCourse.sections[0]?.lessons[0]?.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-slate-900 hover:bg-blue-50 transition-colors shadow-sm"
              >
                <Play className="h-4 w-4 fill-current" />
                <span>Resume Lesson</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 3. In-Progress Courses & Weekly Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Enrolled Courses List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              My Active Courses
            </h3>
            <Link to="/dashboard/courses" className="text-xs font-semibold text-blue-600 hover:underline">
              View All ({enrolled.length})
            </Link>
          </div>

          <div className="space-y-3">
            {enrolled.map(course => (
              <div
                key={course.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {course.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span>{course.categoryName}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums font-semibold text-blue-600 dark:text-blue-400">
                        {course.progressPercent}% Completed
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/learn/${course.slug}/${course.sections[0]?.lessons[0]?.slug}`}
                  className="rounded-lg bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-400 whitespace-nowrap self-end sm:self-auto"
                >
                  Continue
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Weekly Learning Activity */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Weekly Learning Activity
          </h3>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>Last 7 Days</span>
              </span>
              <span className="font-bold text-slate-900 dark:text-white">4 active days</span>
            </div>

            {/* Micro Activity Bar Chart */}
            <div className="grid grid-cols-7 gap-1.5 items-end h-20 pt-2">
              {[
                { day: 'Mon', h: '40%' },
                { day: 'Tue', h: '70%' },
                { day: 'Wed', h: '20%' },
                { day: 'Thu', h: '85%' },
                { day: 'Fri', h: '60%' },
                { day: 'Sat', h: '10%' },
                { day: 'Sun', h: '0%' }
              ].map(d => (
                <div key={d.day} className="flex flex-col items-center gap-1">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-16 flex items-end">
                    <div
                      className="w-full bg-blue-600 rounded-t transition-all"
                      style={{ height: d.h }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400">{d.day}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              Keep your streak alive by practicing one exercise today.
            </div>
          </div>
        </div>
      </div>

      {/* 4. Recommended Next Courses */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Recommended Courses for You
          </h3>
          <Link to="/courses" className="text-xs font-semibold text-blue-600 hover:underline">
            Explore All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommended.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
