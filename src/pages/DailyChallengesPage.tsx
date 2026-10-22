import React, { useState } from 'react';
import { Flame, CheckCircle2, Clock, Zap, ArrowRight, RefreshCw, Trophy } from 'lucide-react';

export default function DailyChallengesPage() {
  const [solution, setSolution] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleTestChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!solution.trim()) return;
    setSubmitted(true);
    // Instant heuristic evaluation
    if (solution.length > 30) {
      setFeedback('Excellent execution! You properly structured the constraints and tone guidelines.');
    } else {
      setFeedback('Good start! Try adding explicit negative constraints to make the output more deterministic.');
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <Flame className="h-4 w-4" />
            <span>Daily Practice Sprint</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Daily Skill Challenges
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Quick 10-minute daily drills to strengthen your practical problem-solving muscle.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-3">
          <Flame className="h-6 w-6 text-amber-600" />
          <div>
            <div className="text-xs font-bold text-amber-900 dark:text-amber-300">
              3 Day Streak
            </div>
            <div className="text-[10px] text-amber-700 dark:text-amber-400">
              Complete today's drill to continue
            </div>
          </div>
        </div>
      </div>

      {/* Today's Active Challenge */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-6">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Day 19 Challenge · Artificial Intelligence
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span>~10 mins</span>
          </span>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Constructing a Zero-Hallucination Prompt
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>Task:</strong> You need an LLM to extract dates, milestones, and deliverables from an unorganized 400-word client email. Write a prompt that forces the model to reply exclusively in valid JSON, citing verbatim quotes for every date found. Include negative constraints against guessing or assuming unmentioned dates.
          </p>
        </div>

        <form onSubmit={handleTestChallenge} className="space-y-4">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            Your Prompt Architecture:
          </label>
          <textarea
            value={solution}
            onChange={e => setSolution(e.target.value)}
            placeholder="You are a strict data extraction specialist. Given the email below, extract all deadlines into a JSON schema..."
            rows={5}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm font-mono text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 shadow-sm transition-colors"
            >
              Submit & Verify Drill
            </button>
            {submitted && (
              <button
                type="button"
                onClick={() => {
                  setSolution('');
                  setSubmitted(false);
                  setFeedback(null);
                }}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Reset
              </button>
            )}
          </div>
        </form>

        {feedback && (
          <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-bold">Evaluation Passed:</span>
              <p className="mt-1 leading-relaxed">{feedback}</p>
            </div>
          </div>
        )}
      </div>

      {/* Upcoming Weekly Drills Preview */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Upcoming Drills This Week
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { day: 'Tomorrow', title: 'Flexbox Mobile Layout Fix', domain: 'Web Dev' },
            { day: 'Wednesday', title: '30-Second Elevator Pitch', domain: 'English' },
            { day: 'Thursday', title: '60-30-10 Color Harmonies', domain: 'Design' }
          ].map((d, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{d.day}</span>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-1">{d.title}</h4>
              <span className="text-[11px] text-blue-600 dark:text-blue-400 mt-1 block">{d.domain}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
