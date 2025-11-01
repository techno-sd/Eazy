"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const CoreValues: React.FC = () => {
  const t = useTranslations('about.coreValues');

  const values = [
    {
      icon: "bx bx-shield-alt-2",
      iconBg: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      key: "integrity",
      delay: 100
    },
    {
      icon: "bx bx-bulb",
      iconBg: "linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)",
      key: "innovation",
      delay: 200
    },
    {
      icon: "bx bx-lock-alt",
      iconBg: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      key: "securityFirst",
      delay: 300
    },
    {
      icon: "bx bx-user-circle",
      iconBg: "linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)",
      key: "customerFocus",
      delay: 400
    }
  ];

  return (
    <>
      <section className="core-values-area ptb-100">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center" data-aos="fade-up">
            <div className="values-badge">
              <i className="bx bx-award"></i>
              <span>{t('subtitle') || 'Our Values'}</span>
            </div>
            <h2 className="section-title">
              {t('title') || 'Core Values'}
              <span className="title-dot">.</span>
            </h2>
            <div className="title-underline"></div>
            <p className="section-description">
              {t('description') || 'The principles that guide everything we do'}
            </p>
          </div>

          {/* Values Grid */}
          <div className="row g-4">
            {values.map((value, index) => (
              <div
                key={value.key}
                className="col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay={value.delay}
              >
                <div className="value-card">
                  <div className="value-card-inner">
                    <div className="value-icon-wrapper">
                      <div
                        className="value-icon"
                        style={{ background: value.iconBg }}
                      >
                        <i className={value.icon}></i>
                      </div>
                      <div className="icon-pulse"></div>
                    </div>

                    <div className="value-content">
                      <h3>{t(`${value.key}.title`)}</h3>
                      <p>{t(`${value.key}.description`)}</p>
                    </div>

                    <div className="value-number">0{index + 1}</div>
                  </div>

                  <div className="card-shine"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="values-stats" data-aos="fade-up" data-aos-delay="500">
            <div className="row g-4">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bx bx-trophy"></i>
                  </div>
                  <div className="stat-content">
                    <h4>10+</h4>
                    <p>{t('yearsExperience') || 'Years of Excellence'}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bx bx-check-shield"></i>
                  </div>
                  <div className="stat-content">
                    <h4>100%</h4>
                    <p>{t('commitment') || 'Commitment to Quality'}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bx bx-certification"></i>
                  </div>
                  <div className="stat-content">
                    <h4>ISO</h4>
                    <p>{t('certified') || 'Certified & Compliant'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="values-decoration">
          <div className="decoration-shape shape-1"></div>
          <div className="decoration-shape shape-2"></div>
          <div className="decoration-shape shape-3"></div>
        </div>
      </section>

      <style jsx>{`
        .core-values-area {
          position: relative;
          background: #f9fafb;
          overflow: hidden;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .values-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.1) 0%, rgba(31, 182, 232, 0.1) 100%);
          border-radius: 30px;
          color: #0C4BA2;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 20px;
          border: 2px solid rgba(12, 75, 162, 0.2);
        }

        .values-badge i {
          font-size: 20px;
        }

        .section-title {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .title-dot {
          color: #0C4BA2;
          font-size: 52px;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 2px;
          margin: 0 auto 20px;
        }

        .section-description {
          font-size: 16px;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .value-card {
          height: 100%;
          background: white;
          border-radius: 25px;
          padding: 40px 35px;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, transparent 0%, #0C4BA2 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .value-card:hover::before {
          transform: translateX(100%);
        }

        .value-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(12, 75, 162, 0.15);
          border-color: rgba(12, 75, 162, 0.2);
        }

        .value-card-inner {
          position: relative;
          z-index: 2;
          border-radius: 20px;
        }

        .value-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          margin-bottom: 25px;
        }

        .value-icon {
          width: 90px;
          height: 90px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .value-icon i {
          font-size: 48px;
          color: white;
          transition: all 0.4s ease;
        }

        .value-card:hover .value-icon {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 0 12px 30px rgba(12, 75, 162, 0.25);
        }

        .value-card:hover .value-icon i {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: inherit;
          opacity: 0.5;
          animation: pulse 2s ease-out infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .value-content h3 {
          font-size: 26px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 18px;
          line-height: 1.3;
          transition: all 0.3s ease;
        }

        .value-card:hover .value-content h3 {
          color: #0C4BA2;
          transform: translateX(5px);
        }

        .value-content p {
          font-size: 15.5px;
          color: #666;
          line-height: 1.8;
          margin: 0;
        }

        .value-number {
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 72px;
          font-weight: 800;
          color: rgba(12, 75, 162, 0.05);
          line-height: 1;
          transition: all 0.3s ease;
        }

        .value-card:hover .value-number {
          color: rgba(12, 75, 162, 0.1);
          transform: scale(1.1);
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
        }

        .value-card:hover .card-shine {
          left: 100%;
        }

        .values-stats {
          margin-top: 60px;
          padding: 50px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 2px solid rgba(12, 75, 162, 0.1);
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.1);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: white;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.15);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon i {
          font-size: 28px;
          color: white;
        }

        .stat-content h4 {
          font-size: 32px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 5px;
          line-height: 1;
        }

        .stat-content p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          font-weight: 600;
        }

        .values-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .decoration-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(12, 75, 162, 0.05) 0%, transparent 70%);
        }

        .shape-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          right: -200px;
          animation: float 20s ease-in-out infinite;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          bottom: -150px;
          left: -150px;
          animation: float 15s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 18s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @media (max-width: 991px) {
          .section-title {
            font-size: 32px;
          }

          .title-dot {
            font-size: 42px;
          }

          .value-card {
            padding: 35px 30px;
          }

          .values-stats {
            padding: 40px 30px;
          }
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 28px;
          }

          .title-dot {
            font-size: 38px;
          }

          .value-card {
            padding: 30px 25px;
          }

          .value-content h3 {
            font-size: 20px;
          }

          .value-content p {
            font-size: 14px;
          }

          .value-number {
            font-size: 56px;
            top: 20px;
            right: 20px;
          }

          .values-stats {
            padding: 30px 20px;
          }

          .stat-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default CoreValues;
