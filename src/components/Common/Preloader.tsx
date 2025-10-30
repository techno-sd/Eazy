"use client";

import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader-wrapper">
      <div className="preloader-content">
        {/* Shield Icon with Animation */}
        <div className="shield-container">
          <div className="shield-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L4 6V11C4 16.5 7.5 21.5 12 23C16.5 21.5 20 16.5 20 11V6L12 2Z"
                stroke="url(#shield-gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shield-path"
              />
              <path
                d="M12 8V12"
                stroke="url(#shield-gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="shield-check"
              />
              <path
                d="M12 16H12.01"
                stroke="url(#shield-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                className="shield-dot"
              />
              <defs>
                <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0C4BA2" />
                  <stop offset="100%" stopColor="#1FB6E8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="pulse-ring ring-1"></div>
          <div className="pulse-ring ring-2"></div>
          <div className="pulse-ring ring-3"></div>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <h3>Securing Connection</h3>
          <p>Initializing security protocols...</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            <div className="progress-glow"></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
      </div>

      <style jsx>{`
        .preloader-wrapper {
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
          animation: fadeOut 0.5s ease-out 0.3s forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        .preloader-content {
          text-align: center;
        }

        .shield-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .shield-icon {
          position: relative;
          z-index: 2;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .shield-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawShield 2s ease-out forwards;
        }

        @keyframes drawShield {
          to {
            stroke-dashoffset: 0;
          }
        }

        .shield-check {
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
          animation: drawCheck 1s ease-out 1s forwards;
        }

        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }

        .shield-dot {
          opacity: 0;
          animation: fadeInDot 0.5s ease-out 1.5s forwards;
        }

        @keyframes fadeInDot {
          to {
            opacity: 1;
          }
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid #1FB6E8;
          border-radius: 50%;
          animation: pulse 2s ease-out infinite;
        }

        .ring-1 {
          width: 100px;
          height: 100px;
          animation-delay: 0s;
        }

        .ring-2 {
          width: 100px;
          height: 100px;
          animation-delay: 0.7s;
        }

        .ring-3 {
          width: 100px;
          height: 100px;
          animation-delay: 1.4s;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        .loading-text {
          margin-bottom: 30px;
        }

        .loading-text h3 {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .loading-text p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .progress-container {
          position: relative;
          width: 300px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          margin: 0 auto;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 2px;
          transition: width 0.3s ease;
          position: relative;
          box-shadow: 0 0 10px rgba(31, 182, 232, 0.5);
        }

        .progress-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5));
          animation: shimmer 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .progress-text {
          position: absolute;
          top: -30px;
          right: 0;
          font-size: 12px;
          font-weight: 600;
          color: #1FB6E8;
        }

        @media (max-width: 767px) {
          .shield-container {
            width: 100px;
            height: 100px;
          }

          .shield-icon svg {
            width: 60px;
            height: 60px;
          }

          .loading-text h3 {
            font-size: 20px;
          }

          .progress-container {
            width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
