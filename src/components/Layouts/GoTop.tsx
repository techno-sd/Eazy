"use client";

import React, { useState, useEffect } from "react";

const GoTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress for circular progress indicator
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));
    };

    document.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial call

    return () => {
      document.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="go-top-wrapper" onClick={scrollToTop}>
          <div className="go-top">
            {/* Circular Progress Ring */}
            <svg className="progress-ring" width="60" height="60">
              <circle
                className="progress-ring-circle-bg"
                stroke="#e0e0e0"
                strokeWidth="3"
                fill="transparent"
                r="26"
                cx="30"
                cy="30"
              />
              <circle
                className="progress-ring-circle"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="transparent"
                r="26"
                cx="30"
                cy="30"
                strokeDasharray={`${2 * Math.PI * 26}`}
                strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d80650" />
                  <stop offset="100%" stopColor="#ff0866" />
                </linearGradient>
              </defs>
            </svg>

            {/* Icon */}
            <div className="go-top-icon">
              <i className="bx bx-chevrons-up"></i>
            </div>

            {/* Ripple Effect */}
            <span className="ripple"></span>
          </div>
        </div>
      )}

      <style jsx>{`
        .go-top-wrapper {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9998;
          cursor: pointer;
          animation: fadeInUp 0.4s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .go-top {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .go-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(216, 6, 80, 0.3);
        }

        .go-top:active {
          transform: translateY(-2px) scale(0.95);
        }

        .progress-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 60px;
          transform: rotate(-90deg);
          pointer-events: none;
        }

        .progress-ring-circle-bg {
          transition: stroke-dashoffset 0.3s ease;
        }

        .progress-ring-circle {
          transition: stroke-dashoffset 0.3s ease;
          stroke-linecap: round;
        }

        .go-top-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .go-top-icon i {
          font-size: 28px;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .ripple {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #d80650;
          opacity: 0;
          animation: ripple 2s ease-out infinite;
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        /* RTL Support */
        [dir="rtl"] .go-top-wrapper {
          right: auto;
          left: 30px;
        }

        /* Mobile Responsive */
        @media (max-width: 767px) {
          .go-top-wrapper {
            bottom: 20px;
            right: 20px;
          }

          [dir="rtl"] .go-top-wrapper {
            right: auto;
            left: 20px;
          }

          .go-top {
            width: 50px;
            height: 50px;
          }

          .progress-ring {
            width: 50px;
            height: 50px;
          }

          .progress-ring-circle,
          .progress-ring-circle-bg {
            r: 21;
            cx: 25;
            cy: 25;
          }

          .go-top-icon i {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default GoTop;
