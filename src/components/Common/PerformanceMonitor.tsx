"use client";

import { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry: any = entries[entries.length - 1];
          console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        // Observer not supported
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        // Observer not supported
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              console.log('CLS:', clsValue);
            }
          });
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        // Observer not supported
      }
    }

    // Report page load time
    window.addEventListener('load', () => {
      const perfData: any = performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('Page Load Time:', pageLoadTime, 'ms');
    });
  }, []);

  return null;
};

export default PerformanceMonitor;
