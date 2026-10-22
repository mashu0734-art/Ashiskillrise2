import React, { useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface AdBannerProps {
  slot?: string;
  format?: 'horizontal' | 'rectangle' | 'responsive';
  className?: string;
}

/**
 * AdBanner Component
 * Compliant with Google AdSense policies:
 * - Clear "ADVERTISEMENT" attribution label
 * - Responsive sizing and clean container constraints
 * - Graceful fallback to educational patronage when ad blockers or unapproved slots are present
 */
export default function AdBanner({ slot = 'default-slot', format = 'responsive', className = '' }: AdBannerProps) {
  useEffect(() => {
    try {
      // If AdSense window.adsbygoogle is loaded, push ad
      const win = window as any;
      if (typeof win !== 'undefined' && win.adsbygoogle && Array.isArray(win.adsbygoogle)) {
        win.adsbygoogle.push({});
      }
    } catch {
      // Ignored for environments without active AdSense script
    }
  }, []);

  return (
    <div className={`my-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/40 p-4 text-center transition-all ${className}`}>
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/60 dark:border-slate-800/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
        <span>Advertisement</span>
        <span className="flex items-center gap-1 text-[9px] text-slate-400 font-normal lowercase">
          <span>supports free education</span>
          <Heart className="h-2.5 w-2.5 text-rose-500 fill-rose-500" />
        </span>
      </div>

      {/* AdSense Unit Container */}
      <div className="min-h-[90px] flex items-center justify-center">
        {/* Real AdSense Ins Tag (will populate once publisher ID is verified) */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: '90px' }}
          data-ad-client="ca-pub-0000000000000000"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />

        {/* Fallback Educational Patron Banner when pending or local */}
        <div className="py-2 px-4 text-center space-y-1">
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Ashiskillrise is 100% Free · Supported by Community Sponsors</span>
          </div>
          <p className="text-[11px] text-slate-500 max-w-lg mx-auto">
            Ethical, non-intrusive advertising helps keep 60+ courses, quizzes, and certificates accessible to learners worldwide without paywalls.
          </p>
        </div>
      </div>
    </div>
  );
}
