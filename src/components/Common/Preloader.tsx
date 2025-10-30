"use client";

import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Mark React as loaded
    document.body.classList.add('react-loaded');

    let animationFrameId: number;
    const startTime = Date.now();
    const minDisplayTime = 300; // 0.3 seconds - ultra fast

    // Ultra-fast progress animation
    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const targetProgress = Math.min((elapsed / minDisplayTime) * 100, 100);

      setProgress((prev) => {
        const diff = targetProgress - prev;
        const increment = diff * 0.5; // Ultra fast increment
        const newProgress = prev + increment;

        if (newProgress >= 98) {
          // Check if minimum time has passed
          if (elapsed >= minDisplayTime) {
            setIsLoading(false);
            document.body.classList.add('page-loaded');
            return 100;
          }
        }

        animationFrameId = requestAnimationFrame(animateProgress);
        return newProgress;
      });
    };

    // Start animation immediately
    animationFrameId = requestAnimationFrame(animateProgress);

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <div className="preloader-overlay">
        <div className="preloader-content">
          {/* Logo/Icon */}
          <div className="preloader-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L4 6V11C4 16.5 7.5 21.5 12 23C16.5 21.5 20 16.5 20 11V6L12 2Z"
                stroke="url(#gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0C4BA2" />
                  <stop offset="100%" stopColor="#1FB6E8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Progress Bar */}
          <div className="preloader-progress">
            <div
              className="preloader-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <div className="preloader-percentage">
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #010c16;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          opacity: 1;
          transition: opacity 0.15s ease-out;
        }

        .preloader-content {
          text-align: center;
          transform: translateY(-20px);
        }

        .preloader-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
          animation: iconFloat 1.5s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .preloader-icon svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 15px rgba(31, 182, 232, 0.4));
        }

        .preloader-icon path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawPath 0.8s ease-out forwards;
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        .preloader-progress {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          margin: 0 auto 15px;
          overflow: hidden;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .preloader-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 2px;
          transition: width 0.1s linear;
          box-shadow: 0 0 10px rgba(31, 182, 232, 0.5);
          position: relative;
        }

        .preloader-progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 40px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
          animation: shimmer 1s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .preloader-percentage {
          font-size: 14px;
          font-weight: 600;
          color: #1FB6E8;
          font-family: var(--font-rubik, sans-serif);
          letter-spacing: 0.5px;
          text-shadow: 0 0 10px rgba(31, 182, 232, 0.3);
        }

        @media (max-width: 768px) {
          .preloader-icon {
            width: 60px;
            height: 60px;
          }

          .preloader-progress {
            width: 160px;
          }
        }

        /* Fade out animation */
        :global(body.page-loaded) .preloader-overlay {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default Preloader;
