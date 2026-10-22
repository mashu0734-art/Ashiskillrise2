import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
  Briefcase,
  Code,
  Palette,
  MessageSquare,
  Bot,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { LEARNING_PATHS, LearningPath } from '../data/learningPathsData';

export default function LearningPathsPage() {
  const getPathIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="h-6 w-6" />;
      case 'Code': return <Code className="h-6 w-6" />;
      case 'Palette': return <Palette className="h-6 w-6" />;
      case 'MessageSquare': return <MessageSquare className="h-6 w-6" />;
      case 'Bot': return <Bot className="h-6 w-6" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6" />;
      default: return <Compass className="h-6 w-6" />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="max-w-2xl space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Compass className="h-4 w-4" />
          <span>Structured Career Roadmaps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Learning Paths
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Step-by-step ordered curriculums combining multiple digital courses to help you transition into freelancing or modern digital employment.
        </p>
      </div>

      {/* Grid of 6 Learning Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LEARNING_PATHS.map(path => (
          <div
            key={path.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-sm">
                  {getPathIcon(path.icon)}
                </div>
                <span className="text-xs font-medium text-slate-400 tabular-nums">
                  {path.estimatedHours} Hours Total
                </span>
              </div>

              <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">
                {path.category}
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {path.title}
              </h2>

              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                {path.description}
              </p>

              {/* Learning Objectives Preview */}
              <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Key Skills Acquired
                </span>
                {path.learningObjectives.slice(0, 3).map((obj, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="line-clamp-2 leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium tabular-nums">
                {path.courseIds.length} Core Courses
              </span>
              <Link
                to={`/learning-paths/${path.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:hover:bg-blue-900/40 transition-colors"
              >
                <span>View Roadmap</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
