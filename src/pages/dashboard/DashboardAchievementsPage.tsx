import React, { useState } from 'react';
import { Trophy, Award, CheckCircle2, Star, ShieldCheck, Zap, Download, Printer, ExternalLink, Sparkles } from 'lucide-react';
import { INITIAL_COURSES, Course } from '../../data/coursesData';
import CertificateModal from '../../components/CertificateModal';

export default function DashboardAchievementsPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const completedCourses = INITIAL_COURSES.slice(0, 2); // Demo completed courses for Alex Morgan

  const achievements = [
    {
      id: 'ach-1',
      title: 'First Step Milestone',
      description: 'Completed your first interactive lesson on Ashiskillrise.',
      icon: CheckCircle2,
      date: 'Earned 3 days ago',
      unlocked: true
    },
    {
      id: 'ach-2',
      title: 'Prompt Architecture Apprentice',
      description: 'Successfully constructed a 4-part constraint prompt with zero hallucinations.',
      icon: Zap,
      date: 'Earned yesterday',
      unlocked: true
    },
    {
      id: 'ach-3',
      title: 'Semantic Web Builder',
      description: 'Mastered semantic HTML5 elements and the CSS Box Model.',
      icon: ShieldCheck,
      date: 'Earned 2 hours ago',
      unlocked: true
    },
    {
      id: 'ach-4',
      title: 'Freelance Proposal Specialist',
      description: 'Drafted a customized 3-tier proposal with payment milestones.',
      icon: Trophy,
      date: 'In Progress (3/5 lessons)',
      unlocked: false
    },
    {
      id: 'ach-5',
      title: 'Curriculum Graduate',
      description: 'Complete all lessons of an educational course and pass all quizzes.',
      icon: Award,
      date: 'Unlocked (2 Courses Completed)',
      unlocked: true
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Achievements & Certificates
        </h2>
        <p className="text-xs text-slate-500">
          Celebrate your study milestones, exercise submissions, and verified credentials.
        </p>
      </div>

      {/* Verified Certificates Showcase */}
      <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/60 to-orange-50/40 p-6 dark:border-amber-900/40 dark:from-amber-950/20 dark:to-orange-950/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Earned Certificates of Completion
              </h3>
              <p className="text-xs text-slate-500">
                Official verifiable certificates. Print, save as PDF, or link directly on LinkedIn.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-3 py-1 rounded-full">
            {completedCourses.length} Earned
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {completedCourses.map(course => (
            <div
              key={course.id}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shadow-sm"
            >
              <div className="flex items-center gap-3 truncate">
                <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 font-serif font-bold text-base">
                  SR
                </div>
                <div className="truncate">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {course.title}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Verified Credential · {course.categoryName}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCourse(course)}
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 transition-colors shrink-0 shadow-sm flex items-center gap-1.5"
              >
                <Award className="h-3.5 w-3.5" />
                <span>View</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Badges Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Milestone Badges
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(ach => (
            <div
              key={ach.id}
              className={`p-5 rounded-2xl border transition-all ${
                ach.unlocked
                  ? 'border-blue-200 bg-white dark:border-blue-900/50 dark:bg-slate-900 shadow-sm'
                  : 'border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/40 opacity-75'
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    ach.unlocked
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-200 text-slate-400 dark:bg-slate-800'
                  }`}
                >
                  <ach.icon className="h-5 w-5" />
                </div>

                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    ach.unlocked
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                  }`}
                >
                  {ach.unlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>

              <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-white">
                {ach.title}
              </h3>

              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {ach.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                {ach.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <CertificateModal
          course={selectedCourse}
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}
