import React, { useState, useRef } from 'react';
import { Award, Download, Printer, Share2, Check, X, ShieldCheck, Heart, Sparkles, Linkedin } from 'lucide-react';
import { Course } from '../data/coursesData';
import { useAuth } from '../context/AuthContext';

interface CertificateModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ course, isOpen, onClose }: CertificateModalProps) {
  const { user } = useAuth();
  const [studentName, setStudentName] = useState(user?.fullName || 'Alex Morgan');
  const [isEditingName, setIsEditingName] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const verificationId = `SR-${course.slug.toUpperCase().slice(0, 6)}-${Math.abs(course.id.split('').reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0)).toString(36).toUpperCase().padStart(6, '0')}`;
  const issueDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/courses/${course.slug}?verify=${verificationId}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const linkedInCertUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(
    course.title
  )}&organizationName=Ashiskillrise%20Education&issueYear=${new Date().getFullYear()}&issueMonth=${
    new Date().getMonth() + 1
  }&certUrl=${encodeURIComponent(`${window.location.origin}/courses/${course.slug}`)}&certId=${verificationId}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Official Certificate of Completion
              </h3>
              <p className="text-[11px] text-slate-500">
                Verifiable credential ID: <span className="font-mono text-slate-700 dark:text-slate-300">{verificationId}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Certificate Canvas / Container */}
        <div className="p-6 sm:p-8 bg-slate-100 dark:bg-slate-950/50 flex justify-center">
          <div
            ref={certRef}
            id="printable-certificate"
            className="w-full max-w-3xl bg-white text-slate-900 rounded-2xl p-8 sm:p-12 shadow-xl border-8 border-double border-amber-600/30 relative overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(#f8fafc 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          >
            {/* Corner Decorative Crests */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600/50" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600/50" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600/50" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600/50" />

            {/* Certificate Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold tracking-widest uppercase">
                <Sparkles className="h-3 w-3" />
                <span>Ashiskillrise Global Learning</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-slate-900 pt-2">
                Certificate of Completion
              </h2>
              <p className="text-xs text-slate-500 uppercase tracking-widest">
                This credential is proudly awarded to
              </p>
            </div>

            {/* Recipient Name */}
            <div className="text-center my-6">
              {isEditingName ? (
                <div className="flex items-center justify-center gap-2 max-w-xs mx-auto">
                  <input
                    type="text"
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                    className="border border-slate-300 rounded-lg px-3 py-1 text-center font-serif text-lg font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter recipient name"
                  />
                  <button
                    onClick={() => setIsEditingName(false)}
                    className="px-2.5 py-1 text-xs bg-slate-900 text-white rounded-lg font-medium"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="group inline-flex items-center gap-2 cursor-pointer" onClick={() => setIsEditingName(true)}>
                  <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-blue-950 underline decoration-amber-500/50 decoration-2 underline-offset-8">
                    {studentName}
                  </h1>
                  <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    (edit)
                  </span>
                </div>
              )}
            </div>

            {/* Achievement Text */}
            <div className="text-center max-w-xl mx-auto space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                for successfully completing the comprehensive educational curriculum and passing all hands-on practical evaluations in:
              </p>
              <div className="text-xl sm:text-2xl font-bold font-sans text-slate-900">
                {course.title}
              </div>
              <p className="text-[11px] text-slate-500">
                Category: <span className="font-semibold text-slate-700">{course.categoryName}</span> · Estimated Time: <span className="font-semibold text-slate-700">{Math.round(course.durationMinutes / 60)} Hours</span> · Level: <span className="font-semibold text-slate-700">{course.difficulty}</span>
              </p>
            </div>

            {/* Signatures & Seal */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <div className="font-serif italic text-base text-slate-800 font-semibold">
                  {course.instructor.name}
                </div>
                <div className="text-[11px] text-slate-500">{course.instructor.role}</div>
                <div className="text-[10px] text-slate-400">Lead Curriculum Instructor</div>
              </div>

              {/* Gold Verification Seal */}
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-1 shadow-md flex items-center justify-center text-white">
                  <div className="h-full w-full rounded-full border-2 border-white/60 flex flex-col items-center justify-center p-1 text-[8px] font-bold uppercase tracking-tighter">
                    <ShieldCheck className="h-5 w-5 mb-0.5 text-white" />
                    <span>Verified</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-slate-400 mt-1">{verificationId}</span>
              </div>

              <div className="sm:text-right">
                <div className="font-mono text-xs font-bold text-slate-800">{issueDate}</div>
                <div className="text-[11px] text-slate-500">Date of Issue</div>
                <div className="text-[10px] text-slate-400">ashiskillrise.org/verify</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls & Sharing */}
        <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <Printer className="h-4 w-4" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href={linkedInCertUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] text-white text-xs font-semibold hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>Add to LinkedIn</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium transition-colors"
            >
              {copiedLink ? <Check className="h-4 w-4 text-emerald-600" /> : <Share2 className="h-4 w-4" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share Verification Link'}</span>
            </button>
          </div>

          {/* Ethical Patron Notice */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <Heart className="h-3.5 w-3.5 text-rose-500 shrink-0" />
            <span>100% Free Forever · No Paywalls</span>
          </div>
        </div>
      </div>
    </div>
  );
}
