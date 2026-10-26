import React, { useState } from 'react';
import { Award, Briefcase, FileText, CheckCircle2, ChevronRight, Calculator, MessageSquare } from 'lucide-react';
import AdBanner from '../components/AdBanner';

export default function CareerPage() {
  // Mini freelance rate calculator
  const [targetMonthlyIncome, setTargetMonthlyIncome] = useState(3000);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25);
  const [weeksPerYear, setWeeksPerYear] = useState(48);

  const totalBillableHoursYear = billableHoursPerWeek * weeksPerYear;
  const annualTarget = targetMonthlyIncome * 12;
  const calculatedHourlyRate = totalBillableHoursYear > 0 ? Math.round(annualTarget / totalBillableHoursYear) : 0;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      <div className="max-w-2xl space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Award className="h-4 w-4" />
          <span>Employment & Freelance Transition</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Career Development Hub
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Prepare your credentials, optimize your resume for recruiters, calculate your freelance project rates, and master interview questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Career Tools & Guides */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span>ATS Resume Building Guide</span>
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Most online job applications are filtered by Applicant Tracking Systems before a recruiter reads them. Follow these 4 non-negotiable rules:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Single-column format: Avoid floating text boxes, tables, and graphic score bars.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Standard headers: Use exact labels like "Experience", "Education", and "Skills".</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Quantified impact: Use the X-Y-Z formula ("Accomplished X by doing Z, measured by Y").</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Clean PDF export: Ensure text is highlightable and searchable rather than flattened image.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              <span>STAR Behavioral Interview Simulator</span>
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              When an interviewer asks "Tell me about a time you solved a tough problem under a tight deadline":
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <strong className="text-purple-600">S - Situation (15%)</strong>
                <p className="mt-1 text-slate-500">Brief context of the client project or bottleneck.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <strong className="text-purple-600">T - Task (15%)</strong>
                <p className="mt-1 text-slate-500">The specific deliverable you were responsible for.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <strong className="text-blue-600">A - Action (50%)</strong>
                <p className="mt-1 text-slate-500">The concrete steps and technical choices YOU executed.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <strong className="text-emerald-600">R - Result (20%)</strong>
                <p className="mt-1 text-slate-500">The quantifiable outcome or metrics achieved.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Freelance Rate Calculator */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-emerald-600" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Freelance Hourly Rate Calculator
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Calculate the minimum hourly fee needed to hit your target take-home income while factoring non-billable client administrative time.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Target Monthly Income</span>
                  <span className="font-mono text-blue-600 tabular-nums">${targetMonthlyIncome}</span>
                </label>
                <input
                  type="range"
                  min={1000}
                  max={15000}
                  step={250}
                  value={targetMonthlyIncome}
                  onChange={e => setTargetMonthlyIncome(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Billable Hours / Week (after admin)</span>
                  <span className="font-mono text-blue-600 tabular-nums">{billableHoursPerWeek} hrs</span>
                </label>
                <input
                  type="range"
                  min={10}
                  max={40}
                  step={1}
                  value={billableHoursPerWeek}
                  onChange={e => setBillableHoursPerWeek(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Working Weeks / Year (allowing vacations)</span>
                  <span className="font-mono text-blue-600 tabular-nums">{weeksPerYear} weeks</span>
                </label>
                <input
                  type="range"
                  min={40}
                  max={52}
                  step={1}
                  value={weeksPerYear}
                  onChange={e => setWeeksPerYear(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                Recommended Minimum Rate
              </span>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                ${calculatedHourlyRate} <span className="text-xs font-normal text-slate-400">/ hour</span>
              </div>
              <span className="text-[10px] text-slate-500 block">
                For fixed projects, quote milestones based on estimated hours × ${calculatedHourlyRate}.
              </span>
            </div>
          </div>

          {/* Adsterra Medium Rectangle (300x250) in Sidebar */}
          <AdBanner unit="300x250" className="my-0" />
        </div>
      </div>

      {/* Adsterra Leaderboard Banner */}
      <AdBanner unit="responsive-leaderboard" />
    </div>
  );
}
