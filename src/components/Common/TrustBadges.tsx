"use client";

import React from "react";
import { useTranslations } from "next-intl";

const TrustBadges: React.FC = () => {
  const t = useTranslations("common");

  const badges = [
    {
      icon: "bx bx-shield-quarter",
      title: "ISO 27001",
      subtitle: "Certified",
      color: "#0C4BA2",
    },
    {
      icon: "bx bx-check-shield",
      title: "NCA",
      subtitle: "Compliant",
      color: "#1FB6E8",
    },
    {
      icon: "bx bx-lock-alt",
      title: "GDPR",
      subtitle: "Ready",
      color: "#0C4BA2",
    },
    {
      icon: "bx bx-certification",
      title: "CISA",
      subtitle: "Verified",
      color: "#1FB6E8",
    },
  ];

  return (
    <div className="trust-badges-container">
      <div className="trust-badges-wrapper">
        {badges.map((badge, index) => (
          <div key={index} className="trust-badge-item" data-index={index}>
            <div className="badge-icon" style={{ borderColor: badge.color }}>
              <i className={badge.icon} style={{ color: badge.color }}></i>
            </div>
            <div className="badge-content">
              <h4>{badge.title}</h4>
              <p>{badge.subtitle}</p>
            </div>
            <div className="badge-glow" style={{ background: `${badge.color}20` }}></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .trust-badges-container {
          padding: 40px 0;
          position: relative;
        }

        .trust-badges-wrapper {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .trust-badge-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 60px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: default;
        }

        .trust-badge-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(31, 182, 232, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.3);
        }

        .badge-icon {
          width: 44px;
          height: 44px;
          border: 2px solid;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .trust-badge-item:hover .badge-icon {
          transform: rotate(360deg) scale(1.1);
        }

        .badge-icon i {
          font-size: 24px;
          transition: all 0.3s ease;
        }

        .badge-content {
          position: relative;
          z-index: 1;
        }

        .badge-content h4 {
          font-size: 16px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
          line-height: 1.2;
        }

        .badge-content p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1;
        }

        .badge-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 60px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .trust-badge-item:hover .badge-glow {
          opacity: 1;
        }

        @media (max-width: 991px) {
          .trust-badges-wrapper {
            gap: 15px;
          }

          .trust-badge-item {
            padding: 14px 20px;
          }

          .badge-icon {
            width: 40px;
            height: 40px;
          }

          .badge-icon i {
            font-size: 20px;
          }

          .badge-content h4 {
            font-size: 14px;
          }

          .badge-content p {
            font-size: 11px;
          }
        }

        @media (max-width: 767px) {
          .trust-badges-wrapper {
            gap: 10px;
          }

          .trust-badge-item {
            padding: 12px 16px;
          }

          .badge-icon {
            width: 36px;
            height: 36px;
          }

          .badge-icon i {
            font-size: 18px;
          }

          .badge-content h4 {
            font-size: 13px;
          }

          .badge-content p {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBadges;
