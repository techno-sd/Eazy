"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const Vision2030Content: React.FC = () => {
  const t = useTranslations('vision2030');
  const locale = useLocale();

  const focusAreas = [
    {
      icon: "bx bx-shield-alt-2",
      title: t('focus1.title'),
      description: t('focus1.description'),
      color: "#0C4BA2",
      delay: "100"
    },
    {
      icon: "bx bxs-buildings",
      title: t('focus2.title'),
      description: t('focus2.description'),
      color: "#1FB6E8",
      delay: "200"
    },
    {
      icon: "bx bx-trending-up",
      title: t('focus3.title'),
      description: t('focus3.description'),
      color: "#0C4BA2",
      delay: "300"
    },
    {
      icon: "bx bx-brain",
      title: t('focus4.title'),
      description: t('focus4.description'),
      color: "#1FB6E8",
      delay: "400"
    }
  ];

  return (
    <>
      <section className="vision2030-area ptb-100">
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
              <i className="bx bx-flag" style={{ fontSize: '20px' }}></i>
              <span>{t('subtitle') || 'رؤيتنا 2030'}</span>
            </div>
            <h2 className="section-main-title" style={{
              fontSize: '42px',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '15px',
              lineHeight: 1.2
            }}>
              {t('title') || 'رؤيتنا 2030 (Alignment with Vision 2030)'}
              <span style={{ color: '#0C4BA2', fontSize: '52px' }}>.</span>
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
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              {t('description') || 'We believe that cybersecurity and digital innovation are two fundamental pillars of Saudi Vision 2030'}
            </p>
          </div>

          <div className="row g-5 align-items-center mt-4">
            {/* Image Column */}
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <div className="vision-image-wrapper">
                <div className="main-image">
                  <Image
                    src="/img/vision 2020.jpg"
                    alt="Saudi Vision 2030"
                    width={900}
                    height={800}
                    className="rounded-4"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Floating Stats Badge */}
                <div className="vision-badge">
                  <div className="badge-icon">
                    <i className="bx bx-trending-up"></i>
                  </div>
                  <div className="badge-content">
                    <h4>2030</h4>
                    <p>{t('badgeText') || 'Saudi Vision'}</p>
                  </div>
                </div>

                {/* Decorative Shape */}
                <div className="image-shape"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6">
              <div className="vision2030-content">
                {/* Focus Areas Grid */}
                <div className="row g-4">
                  {focusAreas.map((area, index) => (
                    <div key={index} className="col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={area.delay}>
                      <div className="focus-card">
                        <div className="card-shine"></div>
                        <div className="focus-icon" style={{
                          background: `linear-gradient(135deg, ${area.color}15 0%, ${area.color}25 100%)`,
                          borderColor: `${area.color}30`
                        }}>
                          <i className={area.icon} style={{ color: area.color }}></i>
                        </div>
                        <div className="focus-content">
                          <h4>{area.title}</h4>
                          <p>{area.description}</p>
                        </div>
                        <div className="focus-arrow" style={{ color: area.color }}>
                          <i className="bx bx-right-arrow-alt"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="vision-cta mt-5" data-aos="fade-up" data-aos-delay="500">
                  <Link href={`/${locale}/vision-2030`} className="premium-btn">
                    <span className="btn-text">{t('learnMore') || 'Explore Vision 2030'}</span>
                    <span className="btn-icon">
                      <i className="bx bx-right-arrow-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="bg-decoration">
          <div className="shape-circle shape-1"></div>
          <div className="shape-circle shape-2"></div>
          <div className="shape-circle shape-3"></div>
        </div>
      </section>

      <style jsx>{`
        .vision2030-area {
          position: relative;
          background: #f8f9fc;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .vision-image-wrapper {
          position: relative;
        }

        .main-image {
          position: relative;
          z-index: 2;
          box-shadow: 0 25px 70px rgba(12, 75, 162, 0.15);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .vision-image-wrapper:hover .main-image {
          transform: translateY(-10px);
          box-shadow: 0 35px 90px rgba(12, 75, 162, 0.25);
        }

        .vision-badge {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 25px 30px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(12, 75, 162, 0.2);
          display: flex;
          align-items: center;
          gap: 20px;
          z-index: 3;
          border: 1px solid rgba(12, 75, 162, 0.1);
          animation: floatBadge 3s ease-in-out infinite;
        }

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .badge-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .badge-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .badge-icon i {
          font-size: 32px;
          color: white;
          position: relative;
          z-index: 1;
        }

        .badge-content h4 {
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 5px;
          line-height: 1;
        }

        .badge-content p {
          font-size: 14px;
          color: #666;
          margin: 0;
          font-weight: 600;
        }

        .image-shape {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.1) 0%, rgba(31, 182, 232, 0.1) 100%);
          border-radius: 50%;
          z-index: 1;
          animation: rotate 25s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .vision-stats {
          padding: 35px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 2px solid rgba(12, 75, 162, 0.1);
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.1);
          position: relative;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
          position: relative;
          padding: 15px;
          background: white;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.15);
        }

        .stat-icon {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon i {
          font-size: 28px;
          color: white;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 5px;
        }

        .stat-item p {
          font-size: 13px;
          color: #666;
          margin: 0;
          font-weight: 600;
        }

        .focus-card {
          position: relative;
          padding: 35px 28px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 25px;
          border: 2px solid rgba(12, 75, 162, 0.08);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(12, 75, 162, 0.15), transparent);
          transition: left 0.6s ease;
        }

        .focus-card:hover .card-shine {
          left: 100%;
        }

        .focus-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 65px rgba(12, 75, 162, 0.25);
          border-color: rgba(12, 75, 162, 0.3);
          background: rgba(255, 255, 255, 1);
        }

        .focus-icon {
          width: 80px;
          height: 80px;
          border-radius: 22px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .focus-icon i {
          font-size: 38px;
          transition: all 0.4s ease;
        }

        .focus-card:hover .focus-icon {
          transform: scale(1.15) rotate(-8deg);
          box-shadow: 0 12px 30px rgba(12, 75, 162, 0.3);
        }

        .focus-card:hover .focus-icon i {
          transform: scale(1.1);
        }

        .focus-content {
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .focus-content h4 {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
          transition: color 0.3s ease;
        }

        .focus-card:hover .focus-content h4 {
          color: #0C4BA2;
        }

        .focus-content p {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        .focus-arrow {
          position: absolute;
          bottom: 25px;
          right: 25px;
          width: 45px;
          height: 45px;
          background: rgba(12, 75, 162, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.4s ease;
        }

        .focus-arrow i {
          font-size: 24px;
        }

        .focus-card:hover .focus-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .premium-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: white;
          font-size: 16px;
          font-weight: 700;
          border-radius: 50px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.3);
          border: 2px solid transparent;
        }

        .premium-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .premium-btn:hover::before {
          opacity: 1;
        }

        .premium-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(12, 75, 162, 0.4);
        }

        .btn-text, .btn-icon {
          position: relative;
          z-index: 1;
        }

        .btn-icon {
          font-size: 24px;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .premium-btn:hover .btn-icon {
          transform: translateX(5px);
        }

        .bg-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .shape-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(12, 75, 162, 0.05) 0%, transparent 70%);
        }

        .shape-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          right: -200px;
          animation: float1 20s ease-in-out infinite;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          bottom: -150px;
          left: -150px;
          animation: float2 15s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float3 18s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }

        @media (max-width: 991px) {
          .section-main-title {
            font-size: 32px !important;
          }

          .section-main-title span {
            font-size: 42px !important;
          }

          .vision-badge {
            padding: 20px 25px;
            left: 20px;
            bottom: 20px;
          }

          .badge-icon {
            width: 50px;
            height: 50px;
          }

          .badge-icon i {
            font-size: 26px;
          }

          .badge-content h4 {
            font-size: 28px;
          }

          .vision-stats {
            padding: 25px;
          }

          .stat-value {
            font-size: 28px !important;
          }

          .focus-card {
            padding: 25px 20px;
          }
        }

        @media (max-width: 767px) {
          .section-main-title {
            font-size: 28px !important;
          }

          .section-main-title span {
            font-size: 38px !important;
          }

          .vision-badge {
            position: relative;
            left: 0;
            bottom: 0;
            margin-top: 20px;
          }

          .stat-item {
            flex-direction: column;
            text-align: center;
          }

          .stat-icon {
            width: 50px;
            height: 50px;
          }

          .stat-icon i {
            font-size: 24px;
          }

          .stat-value {
            font-size: 24px !important;
          }

          .focus-number {
            font-size: 56px;
          }

          .premium-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Vision2030Content;
