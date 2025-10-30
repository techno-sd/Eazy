"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      setIsVisible(scrollTop > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`scroll-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        {/* SVG Circle Progress */}
        <svg className="progress-ring" width="56" height="56">
          <circle
            className="progress-ring-bg"
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
          />
          <circle
            className="progress-ring-circle"
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
            transform="rotate(-90 28 28)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0C4BA2" />
              <stop offset="100%" stopColor="#1FB6E8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow Icon */}
        <i className="bx bx-chevron-up"></i>

        {/* Ripple Effect */}
        <span className="ripple"></span>
      </button>

      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 56px;
          height: 56px;
          background: rgba(12, 75, 162, 0.9);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9997;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.4);
          overflow: hidden;
        }

        .scroll-to-top.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .scroll-to-top:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 50px rgba(12, 75, 162, 0.6);
        }

        .scroll-to-top:active {
          transform: translateY(-3px) scale(0.95);
        }

        .progress-ring {
          position: absolute;
          top: 0;
          left: 0;
        }

        .progress-ring-circle {
          transition: stroke-dashoffset 0.2s ease;
        }

        .scroll-to-top i {
          font-size: 28px;
          color: white;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .scroll-to-top:hover i {
          transform: translateY(-3px);
        }

        .ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(31, 182, 232, 0.3);
          opacity: 0;
          pointer-events: none;
        }

        .scroll-to-top:active .ripple {
          animation: ripple-effect 0.6s ease-out;
        }

        @keyframes ripple-effect {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }

        @media (max-width: 991px) {
          .scroll-to-top {
            bottom: 90px;
            left: 20px;
            width: 50px;
            height: 50px;
          }

          .progress-ring {
            width: 50px;
            height: 50px;
          }

          .progress-ring-bg,
          .progress-ring-circle {
            cx: 25;
            cy: 25;
            r: 21;
          }

          .progress-ring-circle {
            transform: rotate(-90deg);
            transform-origin: 25px 25px;
          }

          .scroll-to-top i {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
