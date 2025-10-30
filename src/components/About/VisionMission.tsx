"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const VisionMission: React.FC = () => {
  const t = useTranslations('about');

  return (
    <>
      <section className="vision-mission-area ptb-100 bg-f4f6fc">
        <div className="container">
          {/* Section Header */}
          <div className="section-header" data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              background: 'linear-gradient(135deg, rgba(216, 6, 80, 0.1) 0%, rgba(255, 8, 102, 0.1) 100%)',
              borderRadius: '30px',
              color: '#0C4BA2',
              fontWeight: 600,
              fontSize: '14px',
              marginBottom: '20px',
              border: '2px solid rgba(216, 6, 80, 0.2)'
            }}>
              <i className="bx bx-bullseye" style={{ fontSize: '20px' }}></i>
              <span>{t('subtitle') || 'Our Direction'}</span>
            </div>
            <h2 className="section-main-title" style={{
              fontSize: '42px',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '15px',
              lineHeight: 1.2
            }}>
              {t('title') || 'Vision & Mission'}
              <span className="title-highlight" style={{ color: '#0C4BA2', fontSize: '52px' }}>.</span>
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
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              {t('description') || 'Guiding principles that drive our commitment to excellence and innovation'}
            </p>
          </div>

          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <div className="vision-image-wrapper">
                <div className="main-image">
                  <Image
                    src="/img/approach-img.jpg"
                    alt="About Eazy Cyber Agent"
                    width={660}
                    height={700}
                    className="rounded-4"
                  />
                </div>

                {/* Decorative Shape */}
                <div className="image-shape"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6">
              <div className="vision-mission-content">
                {/* Vision Card */}
                <div className="vm-card vision-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="vm-card-header">
                    <div className="vm-icon vision-icon">
                      <i className="flaticon-target"></i>
                    </div>
                    <div className="vm-badge">
                      <i className="bx bx-bulb"></i>
                    </div>
                  </div>
                  <div className="vm-content">
                    <h3>{t('vision.title') || 'الرؤية'}</h3>
                    <p>
                      {t('vision.description') || 'أن نكون الخيار الأول في المملكة والمنطقة لتقديم حلول رقمية وأمنية مبتكرة تُمكّن المؤسسات من مواكبة التغيرات وتحقيق الاستدامة الرقمية.'}
                    </p>
                  </div>
                  <div className="vm-arrow">
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="vm-card mission-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="vm-card-header">
                    <div className="vm-icon mission-icon">
                      <i className="flaticon-goal"></i>
                    </div>
                    <div className="vm-badge">
                      <i className="bx bx-target-lock"></i>
                    </div>
                  </div>
                  <div className="vm-content">
                    <h3>{t('mission.title') || 'الرسالة'}</h3>
                    <p>
                      {t('mission.description') || 'تمكين المؤسسات من بناء بنية تحتية آمنة وذكية باستخدام أحدث تقنيات الذكاء الاصطناعي والبيانات الضخمة والأمن السيبراني، بما يتماشى مع استراتيجية التحول الرقمي ورؤية المملكة 2030'}
                    </p>
                  </div>
                  <div className="vm-arrow">
                    <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="vm-highlights" data-aos="fade-up" data-aos-delay="400">
                  <div className="highlight-item">
                    <i className="bx bx-check-circle"></i>
                    <span>{t('highlight1') || 'Industry Leading Solutions'}</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bx bx-check-circle"></i>
                    <span>{t('highlight2') || 'Vision 2030 Aligned'}</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bx bx-check-circle"></i>
                    <span>{t('highlight3') || 'Innovation Focused'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Shape */}
        <div className="bg-shape-decoration">
          <div className="shape-circle shape-1"></div>
          <div className="shape-circle shape-2"></div>
        </div>
      </section>

      <style jsx>{`
        .vision-mission-area {
          position: relative;
          overflow: hidden;
        }

        .vision-mission-area.bg-f4f6fc {
          background-color: #f4f6fc;
        }

        .vision-mission-area .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .vision-mission-area .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.1) 0%, rgba(255, 8, 102, 0.1) 100%);
          border-radius: 30px;
          color: #0C4BA2;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 20px;
          border: 2px solid rgba(216, 6, 80, 0.2);
        }

        .vision-mission-area .section-badge i {
          font-size: 20px;
        }

        .vision-mission-area .section-main-title {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .vision-mission-area .title-highlight {
          color: #0C4BA2;
          font-size: 52px;
        }

        .vision-mission-area .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 2px;
          margin: 0 auto 20px;
        }

        .vision-mission-area .section-description {
          font-size: 16px;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .vision-mission-area .vision-image-wrapper {
          position: relative;
        }

        .vision-mission-area .main-image {
          position: relative;
          z-index: 2;
        }

        .vision-mission-area .main-image img {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .image-shape {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.1) 0%, rgba(31, 182, 232, 0.1) 100%);
          border-radius: 50%;
          z-index: 1;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .vision-mission-content {        .badge-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-icon i {
          font-size: 32px;
          color: white;
        }

        .badge-content h4 {
          font-size: 32px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 5px;
          line-height: 1;
        }

        .badge-content p {
          font-size: 13px;
          color: #666;
          margin: 0;
          font-weight: 600;
        }

        .image-shape {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.1) 0%, rgba(255, 8, 102, 0.1) 100%);
          border-radius: 50%;
          z-index: 1;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .vision-mission-content {
          position: relative;
        }

        .vm-card {
          background: white;
          padding: 35px 30px;
          border-radius: 20px;
          margin-bottom: 25px;
          border: 2px solid #e8e8e8;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .vm-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(216, 6, 80, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .vm-card:hover::before {
          left: 100%;
        }

        .vm-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(216, 6, 80, 0.15);
          border-color: #0C4BA2;
        }

        .vm-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .vm-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.1) 0%, rgba(255, 8, 102, 0.1) 100%);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          position: relative;
        }

        .vm-icon i {
          font-size: 32px;
          color: #0C4BA2;
          transition: all 0.3s ease;
        }

        .vm-card:hover .vm-icon {
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          transform: scale(1.1) rotate(-5deg);
        }

        .vm-card:hover .vm-icon i {
          color: white;
        }

        .vm-badge {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          box-shadow: 0 5px 20px rgba(216, 6, 80, 0.3);
          transition: all 0.3s ease;
        }

        .vm-card:hover .vm-badge {
          transform: scale(1.1) rotate(5deg);
        }

        .vm-content h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .vm-content p {
          font-size: 15px;
          color: #666;
          line-height: 1.8;
          margin: 0;
        }

        .vm-arrow {
          position: absolute;
          bottom: 25px;
          right: 25px;
          width: 40px;
          height: 40px;
          background: #f8f9fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.4s ease;
        }

        .vm-arrow i {
          font-size: 22px;
          color: #0C4BA2;
        }

        .vm-card:hover .vm-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .vm-highlights {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 30px;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.05) 0%, rgba(255, 8, 102, 0.05) 100%);
          border-radius: 18px;
          border: 2px dashed rgba(216, 6, 80, 0.2);
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .highlight-item i {
          font-size: 24px;
          color: #0C4BA2;
        }

        .bg-shape-decoration {
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
          background: radial-gradient(circle, rgba(216, 6, 80, 0.08) 0%, transparent 70%);
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

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @media (max-width: 991px) {
          .section-main-title {
            font-size: 32px;
          }

          .title-highlight {
            font-size: 42px;
          }

          .floating-badge {
            padding: 20px 25px;
          }

          .vm-card {
            padding: 30px 25px;
          }
        }

        @media (max-width: 767px) {
          .section-main-title {
            font-size: 28px;
          }

          .title-highlight {
            font-size: 38px;
          }

          .vm-content h3 {
            font-size: 20px;
          }

          .vm-content p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default VisionMission;
