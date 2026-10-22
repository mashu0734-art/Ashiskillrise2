import React from 'react';
import { Layers, ArrowRight, CheckCircle2, Code, FileText, Download } from 'lucide-react';

export default function PracticeProjectsPage() {
  const projects = [
    {
      id: 'proj-1',
      title: 'Responsive Modern Portfolio Landing Page',
      domain: 'Web Development',
      difficulty: 'Beginner',
      duration: '4-6 hours',
      description: 'Build a mobile-first personal portfolio showcasing 3 projects, contact form with validation, and responsive dark mode using HTML, CSS, and Tailwind.',
      skills: ['Semantic HTML5', 'Tailwind CSS', 'Flexbox & CSS Grid', 'Mobile Responsiveness'],
      deliverable: 'A live hosted URL on Cloudflare Pages or GitHub Pages.'
    },
    {
      id: 'proj-2',
      title: 'Freelance Client Proposal & Contract Deck',
      domain: 'Freelancing',
      difficulty: 'Beginner',
      duration: '2-3 hours',
      description: 'Create a complete 3-tier service proposal for a realistic client project, specifying deliverables, milestone billing, and a service contract with revision limits.',
      skills: ['Proposal Writing', 'Value Pricing', 'Scope Definition', 'Contract Clauses'],
      deliverable: 'A 2-page PDF proposal ready for client presentation.'
    },
    {
      id: 'proj-3',
      title: 'Corporate Brand Style Guide Tile',
      domain: 'Graphic Design',
      difficulty: 'Beginner',
      duration: '3-4 hours',
      description: 'Develop a cohesive visual brand system: custom logo mark, primary & secondary typography pairings, 60-30-10 color scheme, and export WebP icons.',
      skills: ['Typography Pairing', 'Color Harmony', 'Asset Export', 'Brand Guidelines'],
      deliverable: 'Figma board or high-res vector style tile export.'
    },
    {
      id: 'proj-4',
      title: 'Automated Sales Pipeline Spreadsheet',
      domain: 'Microsoft Office / Excel',
      difficulty: 'Intermediate',
      duration: '3 hours',
      description: 'Transform an unorganized 500-row customer transaction log into a dynamic dashboard with XLOOKUP formulas, Pivot Tables, and visual KPI cards.',
      skills: ['XLOOKUP', 'Pivot Tables', 'Data Cleaning', 'Dashboard Design'],
      deliverable: 'Interactive Excel or Sheets file with summary charts.'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <div className="max-w-2xl space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Layers className="h-4 w-4" />
          <span>Hands-On Portfolio Building</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Practical Projects
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Prove your competency with real-world project briefs that you can include in your client portfolio or job application case studies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div
            key={p.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 transition-all"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-blue-600 dark:text-blue-400">{p.domain}</span>
                <span>{p.duration}</span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {p.title}
              </h2>

              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.description}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Core Skills Tested:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {p.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 truncate max-w-[200px]">
                {p.deliverable}
              </span>
              <button
                onClick={() => alert(`Project brief loaded for "${p.title}". Download starter assets from course module.`)}
                className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
              >
                Start Project Brief
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
