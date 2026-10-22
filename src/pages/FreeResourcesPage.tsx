import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Search, BookOpen, ExternalLink } from 'lucide-react';

export default function FreeResourcesPage() {
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const resources = [
    {
      id: 'res-1',
      title: 'The Modern Freelancer Service Agreement Template',
      category: 'Freelancing',
      type: 'DOCX / Markdown',
      size: '24 KB',
      description: 'Battle-tested contract clauses covering milestone payments, scope definitions, intellectual property transfer, and revision limits.'
    },
    {
      id: 'res-2',
      title: 'ATS-Optimized Single-Column Resume Template',
      category: 'Career',
      type: 'PDF / DOCX',
      size: '45 KB',
      description: 'Clean typographic CV template guaranteed to parse accurately through Workday, Lever, Greenhouse, and other ATS platforms.'
    },
    {
      id: 'res-3',
      title: 'Prompt Engineering Constraint Cheat Sheet',
      category: 'AI Tools',
      type: 'PDF Guide',
      size: '1.2 MB',
      description: 'Quick reference formulas for zero-shot, few-shot, negative constraints, and output formatting prompts.'
    },
    {
      id: 'res-4',
      title: 'Flexbox & CSS Grid Visual Reference Card',
      category: 'Web Development',
      type: 'Cheatsheet',
      size: '800 KB',
      description: 'Visual diagrams of justify-content, align-items, grid-template-columns, and mobile media queries.'
    },
    {
      id: 'res-5',
      title: '25 High-Impact Business Email Swipe Files',
      category: 'Communication',
      type: 'Text File',
      size: '18 KB',
      description: 'Templates for client cold outreach, meeting rescheduling, delayed deadline notices, and asking for referrals.'
    },
    {
      id: 'res-6',
      title: 'Top 30 Excel Formulas & Shortcut Keys',
      category: 'Microsoft Office',
      type: 'Spreadsheet',
      size: '65 KB',
      description: 'Working examples of XLOOKUP, INDEX-MATCH, IF-AND logic, and Pivot Table calculation shortcuts.'
    }
  ];

  const handleDownload = (title: string) => {
    setDownloaded(title);
    setTimeout(() => setDownloaded(null), 3000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <div className="max-w-2xl space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <BookOpen className="h-4 w-4" />
          <span>Curated Open Toolkits</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Free Learning Resources
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Cheat sheets, templates, and reference guides designed to support your day-to-day workflow.
        </p>
      </div>

      {downloaded && (
        <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Ready! "{downloaded}" has been saved to your downloads.</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map(res => (
          <div
            key={res.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 transition-all"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-blue-600 dark:text-blue-400">{res.category}</span>
                <span>{res.size}</span>
              </div>

              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {res.title}
              </h2>

              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {res.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">{res.type}</span>
              <button
                onClick={() => handleDownload(res.title)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-400 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
