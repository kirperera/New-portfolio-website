import React, { useState } from 'react';

interface EmbedFacadeProps {
  title: string;
  demoUrl: string;
  previewImage?: string;
  keyFinding: string;
  embedType?: 'bi' | 'ml' | 'gis';
}

export default function EmbedFacade({
  title,
  demoUrl,
  previewImage,
  keyFinding,
  embedType = 'bi',
}: EmbedFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="my-8 rounded-lg border border-slate-300 overflow-hidden bg-white shadow-subtle">
      {/* Header bar */}
      <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
          <span className="text-xs font-semibold tracking-wide uppercase">
            {embedType === 'bi' && 'Interactive Power BI / BI Report'}
            {embedType === 'ml' && 'Live ML Model Inference Space'}
            {embedType === 'gis' && 'Interactive Geospatial Map'}
          </span>
        </div>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-teal-300 hover:text-white underline inline-flex items-center gap-1"
        >
          <span>Open Fullscreen</span>
          <span>↗</span>
        </a>
      </div>

      {/* Embedded View or Click-to-Load Facade (FR-DEMO-04, FR-DEMO-05) */}
      {!isLoaded ? (
        <div className="relative p-8 md:p-12 bg-slate-950 text-white flex flex-col items-center justify-center text-center min-h-[340px]">
          {previewImage && (
            <img
              src={previewImage}
              alt={`${title} dashboard preview`}
              className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-[1px]"
              loading="lazy"
            />
          )}
          <div className="relative z-10 max-w-lg space-y-4">
            <h4 className="text-lg font-bold font-serif">{title}</h4>
            <div className="p-3 bg-slate-900/90 border border-slate-700 rounded text-xs text-slate-300 leading-relaxed">
              <strong className="text-teal-400 block mb-1">Key Finding Summary:</strong>
              {keyFinding}
            </div>
            <p className="text-xs text-slate-400">
              To preserve page loading performance, external interactive frames load strictly on-demand.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsLoaded(true)}
                className="px-5 py-2.5 rounded bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold shadow-sm transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Activate Interactive Demo</span>
                <span>▶</span>
              </button>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-slate-600 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors"
              >
                Open in New Tab ↗
              </a>
            </div>
          </div>
        </div>
      ) : hasError ? (
        /* Fallback if external host fails - FR-DEMO-05 */
        <div className="p-8 bg-surface-alt text-center space-y-3">
          <p className="text-sm font-semibold text-slate-800">
            Unable to embed external iframe directly due to third-party host restrictions.
          </p>
          <p className="text-xs text-muted max-w-md mx-auto">
            {keyFinding}
          </p>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary text-white text-xs font-semibold rounded hover:bg-primary-dark"
          >
            Launch Demo Directly in New Window ↗
          </a>
        </div>
      ) : (
        /* Loaded Iframe */
        <div className="relative w-full h-[540px] bg-slate-100">
          <iframe
            src={demoUrl}
            title={title}
            className="w-full h-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            referrerPolicy="no-referrer-when-downgrade"
            onError={() => setHasError(true)}
          />
        </div>
      )}
    </div>
  );
}
