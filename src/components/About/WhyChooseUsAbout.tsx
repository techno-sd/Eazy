"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const WhyChooseUsAbout: React.FC = () => {
  const t = useTranslations('about.whyChooseUs');
  const locale = useLocale();

  const reasons = [
    {
      icon: "bx bx-shield-alt-2",
      title: t('reason1.title'),
      description: t('reason1.description'),
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      iconBg: "#0C4BA2",
      number: "01",
      delay: "100"
    },
    {
      icon: "bx bx-trending-up",
      title: t('reason2.title'),
      description: t('reason2.description'),
      gradient: "linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)",
      iconBg: "#1FB6E8",
      number: "02",
      delay: "200"
    },
    {
      icon: "bx bx-diamond",
      title: t('reason3.title'),
      description: t('reason3.description'),
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      iconBg: "#0C4BA2",
      number: "03",
      delay: "300"
    },
    {
      icon: "bx bx-dollar-circle",
      title: t('reason4.title'),
      description: t('reason4.description'),
      gradient: "linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)",
      iconBg: "#1FB6E8",
      number: "04",
      delay: "400"
    },
    {
      icon: "bx bx-support",
      title: t('reason5.title'),
      description: t('reason5.description'),
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      iconBg: "#0C4BA2",
      number: "05",
      delay: "500"
    }
  ];

  return (
    <>
      <section className="why-choose-us-area ptb-100">
        <div className="container">
          {/* Section Header */}
          <div className="section-header" data-aos="fade-up">
            <div className="section-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              background: 'linear-gradient(135deg, rgba(12, 75, 162, 0.1) 0%, rgba(31, 182, 232, 0.1) 100%)',
              borderRadius: '30px',
              color: '#0C4BA2',
              fontWeight: 600,
              fontSize: '14px',
              marginBottom: '20px',
              border: '2px solid rgba(12, 75, 162, 0.2)'
            }}>
              <i className="bx bx-bulb" style={{ fontSize: '20px' }}></i>
              <span>{t('subtitle') || 'Why Choose Us'}</span>
            </div>
            <h2 className="section-main-title" style={{
              fontSize: '42px',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '15px',
              lineHeight: 1.2
            }}>
              {t('title') || 'Why Choose Us?'}
            </h2>
            <div className="title-underline" style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%)',
              borderRadius: '2px',
              margin: '0 auto 20px'
            }}></div>
            <p className="section-description" style={{
              fontSize: '16px',
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              {t('description') || 'We provide world-class cybersecurity solutions with cutting-edge technology'}
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="row g-4 mt-4">
            {reasons.map((reason, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={reason.delay}>
                <div className="why-choose-card">
                  {/* Background Number */}
                  <div className="card-number" style={{ color: `${reason.iconBg}10` }}>
                    {reason.number}
                  </div>

                  {/* Icon Wrapper */}
                  <div className="icon-wrapper">
                    <div className="icon-circle" style={{ background: reason.gradient }}>
                      <i className={reason.icon}></i>
                      <div className="icon-ring-1"></div>
                      <div className="icon-ring-2"></div>
                    </div>
                    <div className="icon-glow" style={{
                      background: `radial-gradient(circle, ${reason.iconBg}40 0%, transparent 70%)`
                    }}></div>
                  </div>

                  {/* Content */}
                  <div className="card-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="card-arrow" style={{ color: reason.iconBg }}>
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="card-overlay" style={{ background: reason.gradient }}></div>

                  {/* Shine Effect */}
                  <div className="card-shine"></div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="cta-card">
                <div className="cta-content">
                  <div className="cta-icon-box">
                    <i className="bx bx-conversation"></i>
                  </div>
                  <h3>{t('ctaTitle') || 'Ready to Get Started?'}</h3>
                  <p>{t('ctaDescription') || "Let's discuss how we can secure your digital infrastructure"}</p>
                  <Link href={`/${locale}/contact`} className="default-btn">
                    {t('contactUs') || 'Contact Us Now'}
                  </Link>
                </div>
                <div className="cta-pattern"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="section-decoration">
          <div className="deco-shape deco-1"></div>
          <div className="deco-shape deco-2"></div>
          <div className="deco-shape deco-3"></div>
        </div>
      </section>

      <style jsx>{`
        .why-choose-us-area {
          position: relative;
          background: #f9fafb;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          animation: badgeFloat 3s ease-in-out infinite;
        }

        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .why-choose-card {
          position: relative;
          background: white;
          padding: 40px 35px;
          border-radius: 25px;
          height: 100%;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .why-choose-card::before {
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

        .why-choose-card:hover::before {
          transform: translateX(100%);
        }

        .why-choose-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(12, 75, 162, 0.15);
          border-color: rgba(12, 75, 162, 0.2);
        }

        .card-number {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 120px;
          font-weight: 900;
          line-height: 1;
          z-index: 0;
          transition: all 0.5s ease;
        }

        .why-choose-card:hover .card-number {
          transform: scale(1.2) rotate(10deg);
          opacity: 0.15;
        }

        .icon-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 30px;
          z-index: 1;
        }

        .icon-circle {
          position: relative;
          width: 90px;
          height: 90px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .why-choose-card:hover .icon-circle {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 0 12px 30px rgba(12, 75, 162, 0.25);
        }

        .icon-circle i {
          font-size: 48px;
          color: white;
          position: relative;
          z-index: 1;
          transition: all 0.4s ease;
        }

        .why-choose-card:hover .icon-circle i {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-ring-1,
        .icon-ring-2 {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: pulse-ring 3s ease-out infinite;
        }

        .icon-ring-1 {
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
        }

        .icon-ring-2 {
          top: -25px;
          left: -25px;
          right: -25px;
          bottom: -25px;
          animation-delay: 1.5s;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          z-index: 0;
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }

        .card-content {
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .card-content h3 {
          font-size: 26px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 18px;
          line-height: 1.3;
          transition: all 0.3s ease;
        }

        .why-choose-card:hover .card-content h3 {
          color: #0C4BA2;
          transform: translateX(5px);
        }

        .card-content p {
          font-size: 15.5px;
          color: #666;
          line-height: 1.8;
          margin: 0;
        }

        .card-arrow {
          position: absolute;
          bottom: 30px;
          right: 30px;
          width: 45px;
          height: 45px;
          background: rgba(12, 75, 162, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.4s ease;
          z-index: 1;
        }

        .card-arrow i {
          font-size: 24px;
          color: #0C4BA2;
        }

        .why-choose-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0;
          opacity: 0.05;
          transition: height 0.5s ease;
          border-radius: 0 0 25px 25px;
        }

        .why-choose-card:hover .card-overlay {
          height: 50%;
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.7s ease;
        }

        .why-choose-card:hover .card-shine {
          left: 100%;
        }

        .cta-card {
          position: relative;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          padding: 50px 40px;
          border-radius: 25px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          overflow: hidden;
          transition: all 0.5s ease;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.3);
        }

        .cta-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 70px rgba(12, 75, 162, 0.4);
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-icon-box {
          width: 90px;
          height: 90px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          transition: all 0.4s ease;
        }

        .cta-card:hover .cta-icon-box {
          transform: scale(1.1) rotate(15deg);
          background: rgba(255, 255, 255, 0.3);
        }

        .cta-icon-box i {
          font-size: 45px;
          color: white;
        }

        .cta-content h3 {
          font-size: 26px;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
        }

        .cta-content p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 40px;
          background: white;
          color: #0C4BA2;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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
          background: linear-gradient(90deg, transparent, rgba(12, 75, 162, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          gap: 18px;
        }

        .button-icon {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .button-icon i {
          font-size: 20px;
          color: white;
        }

        .cta-button:hover .button-icon {
          transform: translateX(5px);
        }

        .cta-pattern {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0.1;
          background-image:
            radial-gradient(circle at 20% 30%, white 2px, transparent 2px),
            radial-gradient(circle at 60% 70%, white 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, white 1px, transparent 1px);
          background-size: 50px 50px;
          animation: patternMove 20s linear infinite;
        }

        @keyframes patternMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .section-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .deco-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(12, 75, 162, 0.05) 0%, transparent 70%);
        }

        .deco-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          right: -150px;
          animation: float1 25s ease-in-out infinite;
        }

        .deco-2 {
          width: 400px;
          height: 400px;
          bottom: -150px;
          left: -150px;
          animation: float2 20s ease-in-out infinite;
        }

        .deco-3 {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 30%;
          animation: float3 30s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.1); }
        }

        @media (max-width: 991px) {
          .section-main-title {
            font-size: 32px !important;
          }

          .section-main-title span {
            font-size: 42px !important;
          }

          .why-choose-card {
            padding: 35px 30px;
          }

          .icon-wrapper {
            width: 80px;
            height: 80px;
          }

          .icon-circle {
            width: 80px;
            height: 80px;
          }

          .icon-circle i {
            font-size: 38px;
          }

          .card-content h3 {
            font-size: 20px;
          }

          .cta-card {
            padding: 40px 30px;
          }
        }

        @media (max-width: 767px) {
          .section-main-title {
            font-size: 28px !important;
          }

          .section-main-title span {
            font-size: 38px !important;
          }

          .why-choose-card {
            padding: 30px 25px;
          }

          .card-number {
            font-size: 80px;
          }

          .card-content h3 {
            font-size: 18px;
          }

          .card-content p {
            font-size: 14px;
          }

          .cta-content h3 {
            font-size: 22px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default WhyChooseUsAbout;
