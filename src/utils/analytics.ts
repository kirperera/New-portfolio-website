// Safe privacy-friendly event tracking wrapper (Cookie-free, no consent banner required - FR-ANL-01, FR-ANL-02)

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }
}

export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  } else {
    // In dev or without tracker, safely log to console
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${eventName}:`, props);
    }
  }
}
