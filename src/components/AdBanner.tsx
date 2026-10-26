import React, { useEffect, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export type AdsterraUnitType =
  | '728x90'
  | '468x60'
  | '300x250'
  | '320x50'
  | '160x600'
  | '160x300'
  | 'native'
  | 'responsive-leaderboard'
  | 'responsive-banner';

interface AdBannerProps {
  unit?: AdsterraUnitType;
  className?: string;
  showLabel?: boolean;
}

export const ADSTERRA_CONFIGS = {
  '728x90': {
    key: '1d965226449e10c9d7344f587317661d',
    width: 728,
    height: 90,
    name: 'Banner 728x90 (Leaderboard)'
  },
  '468x60': {
    key: '2192f9d876435de8fa8204395e04b709',
    width: 468,
    height: 60,
    name: 'Banner 468x60 (Standard)'
  },
  '300x250': {
    key: 'ae49eb9a1944ab89bda4d3d38bfc5b77',
    width: 300,
    height: 250,
    name: 'Banner 300x250 (Medium Rectangle)'
  },
  '320x50': {
    key: 'e2625434e6ab7c2d46d44df9763c76dc',
    width: 320,
    height: 50,
    name: 'Banner 320x50 (Mobile)'
  },
  '160x600': {
    key: '626c2c9d90519859953bbbf0b94069fe',
    width: 160,
    height: 600,
    name: 'Banner 160x600 (Wide Skyscraper)'
  },
  '160x300': {
    key: 'e8a740885f28dc3a7f434cc4e1d541b5',
    width: 160,
    height: 300,
    name: 'Banner 160x300 (Skyscraper)'
  }
} as const;

type IframeUnitKey = keyof typeof ADSTERRA_CONFIGS;

function IframeAdUnit({ unitKey }: { unitKey: IframeUnitKey }) {
  const config = ADSTERRA_CONFIGS[unitKey];

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${config.key}',
      'format' : 'iframe',
      'height' : ${config.height},
      'width' : ${config.width},
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://bicea.org/22/${config.key}"></script>
</body>
</html>`;

  return (
    <div
      className="flex items-center justify-center overflow-hidden mx-auto transition-all"
      style={{
        maxWidth: '100%',
        minHeight: `${config.height}px`
      }}
    >
      <iframe
        title={`adsterra-${unitKey}`}
        srcDoc={html}
        width={config.width}
        height={config.height}
        className="border-0 overflow-hidden mx-auto block max-w-full"
        scrolling="no"
      />
    </div>
  );
}

function NativeAdUnit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the native banner script for Adsterra NativeBanner_1 (31872515)
    const script = document.createElement('script');
    script.src = 'https://bicea.org/21/560a11cef2e751a938cbbba8d8395e1e';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      try {
        script.remove();
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center justify-center">
      <div id="container-560a11cef2e751a938cbbba8d8395e1e" className="w-full min-h-[120px] flex items-center justify-center" />
    </div>
  );
}

/**
 * AdBanner Component
 * Renders Adsterra monetization ad units safely inside React SPA
 * Supports all 7 provided Adsterra units:
 * 1. Native Banner (container-560a11cef2e751a938cbbba8d8395e1e)
 * 2. 728x90 Leaderboard
 * 3. 468x60 Standard Banner
 * 4. 300x250 Medium Rectangle
 * 5. 320x50 Mobile Leaderboard
 * 6. 160x600 Wide Skyscraper
 * 7. 160x300 Skyscraper
 * Plus responsive wrappers for desktop/mobile switching
 */
export default function AdBanner({
  unit = 'responsive-leaderboard',
  className = '',
  showLabel = true
}: AdBannerProps) {
  const { isUrdu } = useLanguage();

  const renderContent = () => {
    if (unit === 'native') {
      return <NativeAdUnit />;
    }

    if (unit === 'responsive-leaderboard') {
      return (
        <>
          {/* Desktop & Tablet: 728x90 */}
          <div className="hidden md:flex justify-center w-full">
            <IframeAdUnit unitKey="728x90" />
          </div>
          {/* Small Tablet: 468x60 */}
          <div className="hidden sm:flex md:hidden justify-center w-full">
            <IframeAdUnit unitKey="468x60" />
          </div>
          {/* Mobile phone: 320x50 */}
          <div className="flex sm:hidden justify-center w-full">
            <IframeAdUnit unitKey="320x50" />
          </div>
        </>
      );
    }

    if (unit === 'responsive-banner') {
      return (
        <>
          {/* Tablet & Desktop: 468x60 */}
          <div className="hidden sm:flex justify-center w-full">
            <IframeAdUnit unitKey="468x60" />
          </div>
          {/* Mobile phone: 320x50 */}
          <div className="flex sm:hidden justify-center w-full">
            <IframeAdUnit unitKey="320x50" />
          </div>
        </>
      );
    }

    return <IframeAdUnit unitKey={unit as IframeUnitKey} />;
  };

  return (
    <div
      className={`my-6 overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-slate-900/40 p-3 sm:p-4 text-center transition-all ${className}`}
    >
      {showLabel && (
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/60 dark:border-slate-800/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          <span className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-amber-500" />
            <span>{isUrdu ? 'اشتہار / اسپانسرڈ' : 'Advertisement'}</span>
          </span>
          <span className="flex items-center gap-1 text-[9px] text-slate-400 font-normal">
            <span>{isUrdu ? 'تعلیم کی مفت فراہمی' : 'supports free education'}</span>
            <Heart className="h-2.5 w-2.5 text-rose-500 fill-rose-500" />
          </span>
        </div>
      )}

      <div className="flex items-center justify-center min-h-[50px]">
        {renderContent()}
      </div>
    </div>
  );
}
