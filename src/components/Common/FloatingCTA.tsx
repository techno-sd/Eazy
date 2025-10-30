"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`floating-cta ${isVisible ? "visible" : ""}`}>
        <Link href={`/${locale}/contact`} className="cta-button">
          <div className="cta-icon">
            <i className="bx bx-shield-alt-2"></i>
          </div>
          <div className="cta-text">
            <span className="cta-label">Free Consultation</span>
            <span className="cta-subtitle">Get Protected Now</span>
          </div>
          <div className="cta-arrow">
            <i className="bx bx-right-arrow-alt"></i>
          </div>
        </Link>

        {/* Chat Button */}
        <button className="chat-button" aria-label="Open Chat">
          <i className="bx bx-conversation"></i>
          <span className="chat-pulse"></span>
        </button>
      </div>

      <style jsx>{`
        .floating-cta {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          gap: 15px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .floating-cta.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: white;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(12, 75, 162, 0.5);
        }

        .cta-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-icon i {
          font-size: 22px;
        }

        .cta-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .cta-label {
          font-size: 14px;
          font-weight: 700;
          line-height: 1;
        }

        .cta-subtitle {
          font-size: 11px;
          opacity: 0.9;
        }

        .cta-arrow {
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(5px);
        }

        .cta-arrow i {
          font-size: 18px;
        }

        .chat-button {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.4);
          transition: all 0.3s ease;
          position: relative;
        }

        .chat-button:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 50px rgba(12, 75, 162, 0.5);
        }

        .chat-pulse {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 2px solid #1FB6E8;
          animation: pulse 2s ease-out infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @media (max-width: 767px) {
          .floating-cta {
            bottom: 20px;
            right: 20px;
          }

          .cta-button {
            padding: 12px 20px;
          }

          .cta-text {
            display: none;
          }

          .cta-arrow {
            display: none;
          }

          .chat-button {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCTA;
