"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const WhyChooseUsAbout: React.FC = () => {
  const t = useTranslations('about.whyChooseUs');
  const locale = useLocale();

  const reasons = [
    {
      icon: "flaticon-password",
      title: t('reason1.title'),
      description: t('reason1.description'),
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      iconBg: "#667eea",
      delay: "100"
    },
    {
      icon: "flaticon-cyber-security",
      title: t('reason2.title'),
      description: t('reason2.description'),
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      iconBg: "#f093fb",
      delay: "200"
    },
    {
      icon: "flaticon-security",
      title: t('reason3.title'),
      description: t('reason3.description'),
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      iconBg: "#4facfe",
      delay: "300"
    },
    {
      icon: "flaticon-price-tag",
      title: t('reason4.title'),
      description: t('reason4.description'),
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      iconBg: "#43e97b",
      delay: "400"
    },
    {
      icon: "flaticon-support",
      title: t('reason5.title'),
      description: t('reason5.description'),
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      iconBg: "#fa709a",
      delay: "500"
    }
  ];

  return (
    <>
      <section className="why-choose-us-area ptb-100 bg-gradient">
        <div className="container">
          {/* Section Header */}
          <div className="section-title white-title" data-aos="fade-up">
            <span className="sub-title">
              <i className="bx bx-bulb"></i>
              {t('subtitle')}
            </span>
            <h2 className="text-white">{t('title')}</h2>
            <p className="text-white-70 mx-auto" style={{ maxWidth: '700px' }}>
              {t('description')}
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="row g-4 justify-content-center">
            {reasons.map((reason, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={reason.delay}>
                <div className="why-choose-card">
                  {/* Icon Circle */}
                  <div className="choose-icon-wrapper">
                    <div className="choose-icon" style={{ background: reason.gradient }}>
                      <i className={reason.icon}></i>
                    </div>
                    <div className="icon-ring" style={{ borderColor: reason.iconBg }}></div>
                    <div className="icon-pulse" style={{ background: reason.iconBg }}></div>
                  </div>

                  {/* Content */}
                  <div className="choose-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>

                  {/* Number Badge */}
                  <div className="number-badge" style={{ background: reason.gradient }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Hover Gradient */}
                  <div className="card-gradient" style={{ background: reason.gradient }}></div>
                </div>
              </div>
            ))}

            {/* Featured CTA Card */}
            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
              <div className="why-choose-cta-card">
                <div className="cta-icon">
                  <i className="bx bx-message-square-dots"></i>
                </div>
                <h3>{t('ctaTitle') || 'Have Questions?'}</h3>
                <p>{t('ctaDescription') || "We're here to help you make the right choice for your business"}</p>
                <Link href={`/${locale}/contact`} className="cta-btn">
                  {t('contactUs') || 'Contact Us'}
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="row mt-5" data-aos="fade-up" data-aos-delay="700">
            <div className="col-12">
              <div className="stats-wrapper">
                <div className="row g-4 justify-content-center">
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <i className="bx bx-trophy"></i>
                      </div>
                      <h3><span className="counter">150</span>+</h3>
                      <p>{t('stat1') || 'Awards Won'}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <i className="bx bx-shield-alt-2"></i>
                      </div>
                      <h3><span className="counter">500</span>+</h3>
                      <p>{t('stat2') || 'Projects Secured'}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <i className="bx bx-user-check"></i>
                      </div>
                      <h3><span className="counter">300</span>+</h3>
                      <p>{t('stat3') || 'Happy Clients'}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <i className="bx bx-support"></i>
                      </div>
                      <h3>24/7</h3>
                      <p>{t('stat4') || 'Support Available'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="animated-bg">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      <style jsx>{`
        .why-choose-us-area {
          position: relative;
          background-color: #010c16;
          overflow: hidden;
        }

        .bg-gradient {
          background-color: #010c16;
        }

        .text-white-70 {
          color: rgba(255, 255, 255, 0.85);
        }

        .white-title .sub-title {
          color: white;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 30px;
        }

        .why-choose-card {
          position: relative;
          background: white;
          padding: 40px 30px;
          border-radius: 25px;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          height: 100%;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .why-choose-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
        }

        .why-choose-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .why-choose-card:hover::before {
          left: 100%;
        }

        .choose-icon-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 30px;
        }

        .choose-icon {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          transition: transform 0.5s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .why-choose-card:hover .choose-icon {
          transform: scale(1.1) rotate(360deg);
        }

        .choose-icon i {
          font-size: 45px;
          color: white;
        }

        .icon-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px dashed;
          border-radius: 50%;
          opacity: 0.3;
          animation: rotate 20s linear infinite;
          z-index: 1;
        }

        .icon-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          opacity: 0.2;
          animation: pulse 2s ease-out infinite;
          z-index: 0;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0;
          }
        }

        .choose-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1a1a1a;
          transition: color 0.3s ease;
        }

        .why-choose-card:hover .choose-content h3 {
          color: #667eea;
        }

        .choose-content p {
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        .number-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: 700;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .why-choose-card:hover .number-badge {
          transform: scale(1.15) rotate(5deg);
        }

        .card-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0;
          opacity: 0.05;
          transition: height 0.4s ease;
          z-index: 0;
          border-radius: 0 0 25px 25px;
        }

        .why-choose-card:hover .card-gradient {
          height: 100%;
        }

        .why-choose-cta-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 40px 30px;
          border-radius: 25px;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: all 0.4s ease;
        }

        .why-choose-cta-card:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-15px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .cta-icon {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          transition: transform 0.3s ease;
        }

        .why-choose-cta-card:hover .cta-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .cta-icon i {
          font-size: 40px;
          color: #667eea;
        }

        .why-choose-cta-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
        }

        .why-choose-cta-card p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 25px;
          line-height: 1.7;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 35px;
          background: white;
          color: #667eea;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          gap: 15px;
        }

        .cta-btn i {
          font-size: 22px;
          transition: transform 0.3s ease;
        }

        .cta-btn:hover i {
          transform: translateX(5px);
        }

        .stats-wrapper {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.15);
          border-radius: 25px;
          padding: 40px 20px;
          position: relative;
          z-index: 1;
        }

        .why-choose-us-area > .container {
          position: relative;
          z-index: 1;
        }

        .stat-item {
          text-align: center;
          position: relative;
        }

        .stat-icon {
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          transition: all 0.3s ease;
        }

        .stat-item:hover .stat-icon {
          background: white;
          transform: scale(1.1);
        }

        .stat-icon i {
          font-size: 35px;
          color: white;
          transition: color 0.3s ease;
        }

        .stat-item:hover .stat-icon i {
          color: #667eea;
        }

        .stat-item h3 {
          font-size: 42px;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
          line-height: 1;
        }

        .stat-item p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 500;
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          top: -200px;
          left: -100px;
          animation: float1 20s ease-in-out infinite;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: -150px;
          right: -50px;
          animation: float2 15s ease-in-out infinite;
        }

        .shape-3 {
          width: 200px;
          height: 200px;
          top: 50%;
          right: 10%;
          animation: float3 25s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-50px, -50px) rotate(180deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 40px) scale(1.2); }
        }

        @media (max-width: 991px) {
          .why-choose-card {
            padding: 35px 25px;
          }

          .choose-icon-wrapper {
            width: 80px;
            height: 80px;
          }

          .choose-icon {
            width: 80px;
            height: 80px;
          }

          .choose-icon i {
            font-size: 35px;
          }

          .stat-item h3 {
            font-size: 32px;
          }

          .stats-wrapper {
            padding: 30px 15px;
          }
        }

        @media (max-width: 767px) {
          .choose-content h3 {
            font-size: 20px;
          }

          .stat-icon {
            width: 55px;
            height: 55px;
          }

          .stat-icon i {
            font-size: 28px;
          }

          .stat-item h3 {
            font-size: 28px;
          }

          .stat-item p {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default WhyChooseUsAbout;
