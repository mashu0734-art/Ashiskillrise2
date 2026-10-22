import React, { useState, useEffect } from 'react';
import { LineChart, CheckCircle2, Clock, Award, BookOpen } from 'lucide-react';
import { api } from '../../lib/api';
import { Course } from '../../data/coursesData';

export default function DashboardProgressPage() {
  const [courses, setCourses] = useState<(Course & { progressPercent: number; completedLessonIds: string[] })[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const c = await api.getEnrolledCourses();
        setCourses(c);
      } catch {
        // fallback
      }
    }
    load();
  }, []);

  const totalLessons = courses.reduce((acc, c) => acc + c.lessonCount, 0);
  const totalCompleted = courses.reduce((acc, c) => acc + (c.completedLessonIds?.length || 0), 0);
  const overallPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Learning Analytics & Progress
        </h2>
        <p className="text-xs text-slate-500">
          A breakdown of your skill acquisition metrics and completion velocity.
        </p>
      </div>

      {/* Aggregate Overview Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Overall Completion Rate
            </span>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums mt-1">
              {overallPercent}%
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {totalCompleted} of {totalLessons} curriculum lessons mastered
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-slate-400 block">Total Exercises</span>
              <span className="font-bold text-slate-900 dark:text-white text-base tabular-nums">{totalCompleted}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-slate-400 block">Quizzes Passed</span>
              <span className="font-bold text-slate-900 dark:text-white text-base tabular-nums">{totalCompleted}</span>
            </div>
          </div>
        </div>

        <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {/* Breakdown by Domain */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Progress by Course
        </h3>

        <div className="space-y-4">
          {courses.map(c => (
            <div key={c.id} className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">{c.title}</span>
                <span className="font-bold tabular-nums text-slate-600 dark:text-slate-300">
                  {c.progressPercent}% ({c.completedLessonIds?.length || 0}/{c.lessonCount} lessons)
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${c.progressPercent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
