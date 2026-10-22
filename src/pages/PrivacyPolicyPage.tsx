import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <Shield className="h-4 w-4" />
          <span>Legal & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last updated: October 19, 2026 · Effective immediately
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700 dark:text-slate-300">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            1. Overview & Commitment to Free Education
          </h2>
          <p>
            Ashiskillrise (“we”, “our”, or “us”) is dedicated to providing high-quality, 100% free digital education, practice lessons, and career tools. We respect your privacy and process personal data transparently, minimally, and securely. We do not sell your personal information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Account Information:</strong> When you register or sign in, we collect your name and email address.</li>
            <li><strong>Learning Progress & Activity:</strong> Course enrollments, completed lessons, quiz responses, bookmarks, and notes are stored to calculate your progress and issue completion certificates.</li>
            <li><strong>Technical & Usage Data:</strong> Standard server logs, IP addresses, browser user-agents, and referrer URLs collected for security and performance optimization on Cloudflare's global edge network.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            3. Cookies, Analytics & Third-Party Advertising
          </h2>
          <p>
            We use cookies and local browser storage (such as localStorage) to keep you signed in, persist dark/light theme preferences, and save offline progress.
          </p>
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 dark:border-blue-900/40 dark:bg-blue-950/20 text-xs space-y-2">
            <h4 className="font-bold text-blue-950 dark:text-blue-200 flex items-center gap-1.5">
              <Eye className="h-4 w-4 text-blue-600" />
              <span>Google AdSense & DoubleClick Cookie Notice</span>
            </h4>
            <p>
              Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites on the internet. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites. Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-blue-600">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-blue-600">aboutads.info</a>.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            4. How We Use Information
          </h2>
          <p>
            We use your information exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deliver courses, verify quizzes, and render downloadable completion certificates</li>
            <li>Provide student dashboard metrics and streak tracking</li>
            <li>Send optional weekly educational digests if explicitly subscribed</li>
            <li>Protect our infrastructure from spam, denial-of-service, and fraudulent abuse</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            5. Your Data Rights (GDPR & CCPA)
          </h2>
          <p>
            Regardless of geographic location, Ashiskillrise users enjoy full sovereignty over their data:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Access & Export:</strong> Request a full copy of your learning records and notes.</li>
            <li><strong>Correction & Deletion:</strong> Update your profile or request permanent deletion of your account at any time via Settings or email.</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from newsletter emails via the 1-click link in any email footer.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            6. Contact Us
          </h2>
          <p>
            For privacy inquiries or data requests, contact our privacy officer at: <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">privacy@ashiskillrise.org</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
