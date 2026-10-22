import React from 'react';
import { FileText, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Scale className="h-4 w-4" />
          <span>Terms of Service</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500">
          Last updated: October 19, 2026 · Effective immediately
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700 dark:text-slate-300">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Ashiskillrise (the “Website”), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the Website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            2. 100% Free Educational Access
          </h2>
          <p>
            All courses, lessons, quizzes, learning paths, practice exercises, downloadable resources, and completion certificates on Ashiskillrise are provided free of charge for personal educational enrichment and professional development.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            3. Intellectual Property & Educational License
          </h2>
          <p>
            Curriculum content, tutorials, diagrams, interactive quizzes, and course text are owned by Ashiskillrise or licensed contributors. You are granted a limited, personal, non-exclusive license to study, review, and apply the concepts. You may not scrape, mass-mirror, or resell our curriculum materials as paid content.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            4. User Conduct
          </h2>
          <p>
            You agree to use Ashiskillrise respectfully and lawfully. You must not:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Attempt to breach, probe, or overload our Cloudflare serverless edge infrastructure</li>
            <li>Forge completion credentials or falsely misrepresent certificate authenticity</li>
            <li>Upload malicious scripts or automated spam via interactive input sandboxes</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            5. Disclaimers & Limitation of Liability
          </h2>
          <p>
            Ashiskillrise materials are provided "as is" without warranty of any kind. While our curricula are authored according to current industry best practices, we cannot guarantee specific employment outcomes, freelance revenues, or third-party platform approval. In no event shall Ashiskillrise be liable for indirect or consequential damages.
          </p>
        </section>
      </div>
    </div>
  );
}
