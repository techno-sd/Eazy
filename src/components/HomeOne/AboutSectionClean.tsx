"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

const AboutSectionClean: React.FC = () => {
  const t = useTranslations('home.about');
  const locale = useLocale();

  return (
    <>
      <section className="about-area-clean ptb-100">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-lg-6 col-md-12">
              <div className="about-image-wrapper" data-aos="fade-right" data-aos-duration="1000">
                <div className="main-image-container">
                  <Image
                    src="/img/home-7-8-9/safer-world/safer-world.png"
                    alt={t('imageAlt') || 'Cybersecurity Solutions'}
                    width={645}
                    height={595}
                    className="main-image"
                    priority
                  />
                  <div className="image-overlay"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="floating-element element-1">
                  <i className="bx bx-shield-quarter"></i>
                </div>
                <div className="floating-element element-2">
                  <i className="bx bx-lock-alt"></i>
                </div>
                <div className="floating-element element-3">
                  <i className="bx bx-code-alt"></i>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6 col-md-12">
              <div className="about-content-clean" data-aos="fade-left" data-aos-duration="1000">
                {/* Section Header */}
                <div className="section-header-modern">
                  <span className="badge-label" data-aos="fade-down" data-aos-delay="100">
                    <i className="bx bx-shield-alt-2"></i>
                    <span>{t('subtitle') || 'Who We Are'}</span>
                  </span>
                  <h2 className="section-title-modern" data-aos="fade-up" data-aos-delay="200">
                    {t('title') || 'Leading Cybersecurity Solutions Provider'}
                    <span className="dot-accent">.</span>
                  </h2>
                  <div className="title-accent-line"></div>
                </div>

                {/* Description */}
                <p className="lead-text" data-aos="fade-up" data-aos-delay="300">
                  {t('description') || 'We provide comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity in an ever-evolving threat landscape.'}
                </p>

                {/* Vision & Mission Cards */}
                <div className="vision-mission-cards" data-aos="fade-up" data-aos-delay="350">
                  <div className="vm-card vision-card">
                    <div className="vm-icon">
                      <i className="bx bx-bullseye"></i>
                    </div>
                    <div className="vm-content">
                      <h4>{t('vision.title') || 'الرؤية'}</h4>
                      <p>{t('vision.description') || 'أن نكون الخيار الأول في المملكة والمنطقة لتقديم حلول رقمية وأمنية مبتكرة تُمكّن المؤسسات من مواكبة التغيرات وتحقيق الاستدامة الرقمية.'}</p>
                    </div>
                  </div>

                  <div className="vm-card mission-card">
                    <div className="vm-icon">
                      <i className="bx bx-target-lock"></i>
                    </div>
                    <div className="vm-content">
                      <h4>{t('mission.title') || 'الرسالة'}</h4>
                      <p>{t('mission.description') || 'تمكين المؤسسات من بناء بنية تحتية آمنة وذكية باستخدام أحدث تقنيات الذكاء الاصطناعي والبيانات الضخمة والأمن السيبراني، بما يتماشى مع استراتيجية التحول الرقمي ورؤية المملكة 2030'}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="about-cta" data-aos="fade-up" data-aos-delay="500">
                  <Link href={`/${locale}/about`} className="btn-modern-primary">
                    <span className="btn-content">
                      <span className="btn-text">{t('learnMoreButton') || 'Learn More About Us'}</span>
                      <i className="bx bx-right-arrow-alt"></i>
                    </span>
                    <span className="btn-hover-effect"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="bg-decoration decoration-1"></div>
        <div className="bg-decoration decoration-2"></div>
      </section>

      <style jsx>{`
        .about-area-clean {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          overflow: hidden;
        }

        /* Image Wrapper */
        .about-image-wrapper {
          position: relative;
        }

        .main-image-container {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(12, 75, 162, 0.15),
            0 0 0 1px rgba(12, 75, 162, 0.1);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .main-image-container:hover {
          transform: translateY(-8px);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 24px;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.05) 0%, rgba(31, 182, 232, 0.05) 100%);
          pointer-events: none;
        }

        /* Floating Elements */
        .floating-element {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #fff;
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.2);
          animation: floatUpDown 4s ease-in-out infinite;
        }

        .element-1 {
          top: 20px;
          right: -20px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          animation-delay: 0s;
        }

        .element-2 {
          bottom: 100px;
          left: -20px;
          background: linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%);
          animation-delay: 1s;
        }

        .element-3 {
          bottom: 20px;
          right: 50px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          animation-delay: 2s;
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        /* Section Header Modern */
        .section-header-modern {
          margin-bottom: 30px;
        }

        .badge-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.08) 0%, rgba(31, 182, 232, 0.08) 100%);
          border: 1px solid rgba(12, 75, 162, 0.15);
          border-radius: 50px;
          color: #0C4BA2;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .badge-label:hover {
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.12) 0%, rgba(31, 182, 232, 0.12) 100%);
          transform: translateX(5px);
        }

        .badge-label i {
          font-size: 18px;
        }

        .section-title-modern {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .dot-accent {
          color: #0C4BA2;
          font-size: 48px;
        }

        .title-accent-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 2px;
          margin-bottom: 25px;
        }

        /* Lead Text */
        .lead-text {
          font-size: 18px;
          line-height: 1.8;
          color: #64748b;
          margin-bottom: 30px;
        }

        /* Vision & Mission Cards */
        .vision-mission-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 35px;
        }

        .vm-card {
          display: flex;
          gap: 20px;
          padding: 25px;
          background: #fff;
          border-radius: 20px;
          border: 2px solid #e2e8f0;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .vm-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #0C4BA2 0%, #1FB6E8 100%);
          transition: width 0.4s ease;
        }

        .vm-card:hover {
          border-color: #0C4BA2;
          box-shadow: 0 12px 40px rgba(12, 75, 162, 0.15);
          transform: translateX(8px);
        }

        .vm-card:hover::before {
          width: 100%;
          opacity: 0.05;
        }

        .vm-icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.1) 0%, rgba(31, 182, 232, 0.1) 100%);
          color: #0C4BA2;
          font-size: 30px;
          transition: all 0.3s ease;
        }

        .vm-card:hover .vm-icon {
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: #fff;
          transform: scale(1.1) rotate(5deg);
        }

        .vm-content {
          flex: 1;
        }

        .vm-content h4 {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .vm-content p {
          font-size: 15px;
          line-height: 1.7;
          color: #64748b;
          margin: 0;
        }

        /* CTA Button */
        .about-cta {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 30px;
        }

        .btn-modern-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          border-radius: 50px;
          text-decoration: none;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.3);
          transition: all 0.3s ease;
        }

        .btn-modern-primary:hover {
          box-shadow: 0 15px 40px rgba(12, 75, 162, 0.4);
          transform: translateY(-3px);
          color: #fff;
        }

        .btn-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-content i {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .btn-modern-primary:hover .btn-content i {
          transform: translateX(5px);
        }

        .btn-hover-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-modern-primary:hover .btn-hover-effect {
          left: 100%;
        }

        /* Background Decorations */
        .bg-decoration {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
          pointer-events: none;
        }

        .decoration-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          top: -200px;
          right: -200px;
        }

        .decoration-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%);
          bottom: -150px;
          left: -150px;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .section-title-modern {
            font-size: 36px;
          }

          .vm-card {
            padding: 20px;
          }

          .vm-icon {
            width: 50px;
            height: 50px;
            font-size: 26px;
          }

          .vm-content h4 {
            font-size: 18px;
          }

          .vm-content p {
            font-size: 14px;
          }

          .floating-element {
            width: 60px;
            height: 60px;
            font-size: 28px;
          }
        }

        @media (max-width: 767px) {
          .section-title-modern {
            font-size: 28px;
          }

          .dot-accent {
            font-size: 36px;
          }

          .lead-text {
            font-size: 16px;
          }

          .vm-card {
            flex-direction: column;
            padding: 20px;
            gap: 15px;
          }

          .vm-icon {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          .vm-content h4 {
            font-size: 17px;
          }

          .vm-content p {
            font-size: 14px;
          }

          .vm-card:hover {
            transform: translateX(4px);
          }

          .floating-element {
            display: none;
          }

          .main-image-container {
            margin-bottom: 40px;
          }
        }

        /* RTL Support */
        [dir="rtl"] .badge-label:hover {
          transform: translateX(-5px);
        }

        [dir="rtl"] .btn-modern-primary:hover .btn-content i {
          transform: translateX(-5px);
        }

        [dir="rtl"] .vm-card {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .vm-card::before {
          left: auto;
          right: 0;
        }

        [dir="rtl"] .vm-card:hover {
          transform: translateX(-8px);
        }

        @media (max-width: 767px) {
          [dir="rtl"] .vm-card {
            flex-direction: column;
          }

          [dir="rtl"] .vm-card:hover {
            transform: translateX(-4px);
          }
        }
      `}</style>
    </>
  );
};

export default AboutSectionClean;
