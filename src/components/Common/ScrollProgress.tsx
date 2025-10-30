"use client";

import React, { useState, useEffect } from "react";

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress-wrapper">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <style jsx>{`
        .scroll-progress-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(0, 0, 0, 0.05);
          z-index: 9999;
          pointer-events: none;
        }

        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #d80650 0%, #ff0866 50%, #d80650 100%);
          background-size: 200% 100%;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px rgba(216, 6, 80, 0.5);
          animation: shimmer 2s linear infinite;
          position: relative;
        }

        .scroll-progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5));
          filter: blur(10px);
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Hide on small screens for better UX */
        @media (max-width: 767px) {
          .scroll-progress-wrapper {
            height: 3px;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollProgress;
