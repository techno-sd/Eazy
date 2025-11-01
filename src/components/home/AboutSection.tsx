"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

const AboutSection: React.FC = () => {
  const t = useTranslations('home.about');
  const locale = useLocale();

  return (
    <>
      <section className="about-area ptb-100 bg-f4f6fc">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-aos="fade-right" data-aos-duration="1000">
                <Image
                  src="/img/home-7-8-9/safer-world/safer-world.png"
                  alt={t('imageAlt')}
                  width={645}
                  height={595}
                  className="rounded-3 shadow-lg"
                  style={{ objectFit: 'cover' }}
                />

                {/* Decorative Elements */}
                <div className="about-shape-1">
                  <Image
                    src="/img/shape/shape1.png"
                    alt="shape"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content" data-aos="fade-left" data-aos-duration="1000">
                <div className="section-header">
                  <span className="sub-title">
                    <i className="flaticon-cyber-security"></i>
                    {t('subtitle')}
                  </span>
                  <h2 className="section-main-title">
                    {t('title')}
                    <span className="title-highlight">.</span>
                  </h2>
                  <div className="title-underline"></div>
                </div>
                <p className="lead">{t('description')}</p>

                {/* Stats or Key Metrics */}
                <div className="stats-container">
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="stats-box" data-aos="zoom-in" data-aos-delay="100">
                        <div className="stats-icon">
                          <i className="bx bx-time-five"></i>
                        </div>
                        <div className="stats-content">
                          <h3 className="text-primary mb-1">
                            <span className="odometer" data-count="15">15</span>+
                          </h3>
                          <p className="mb-0">{t('stats.yearsExperience') || 'Years Experience'}</p>
                        </div>
                        <div className="stats-progress">
                          <div className="progress-bar"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="stats-box" data-aos="zoom-in" data-aos-delay="200">
                        <div className="stats-icon">
                          <i className="bx bx-smile"></i>
                        </div>
                        <div className="stats-content">
                          <h3 className="text-primary mb-1">
                            <span className="odometer" data-count="500">500</span>+
                          </h3>
                          <p className="mb-0">{t('stats.clients') || 'Happy Clients'}</p>
                        </div>
                        <div className="stats-progress">
                          <div className="progress-bar" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="row g-4 mt-3">
                  <div className="col-lg-6 col-md-6">
                    <div className="feature-card vision-card h-100" data-aos="fade-up" data-aos-delay="300">
                      <div className="feature-header">
                        <div className="icon-box mb-3">
                          <i className="flaticon-target text-primary fs-2"></i>
                          <div className="icon-bg"></div>
                        </div>
                        <div className="feature-badge vision-badge">
                          <i className="bx bx-bulb"></i>
                        </div>
                      </div>
                      <h4 className="mb-3">
                        <span className="card-label">{t('vision.title') || 'الرؤية'}</span>
                      </h4>
                      <p className="text-muted mb-0">
                        {t('vision.description') || 'أن نكون الخيار الأول في المملكة والمنطقة لتقديم حلول رقمية وأمنية مبتكرة تُمكّن المؤسسات من مواكبة التغيرات وتحقيق الاستدامة الرقمية.'}
                      </p>
                      <div className="feature-arrow">
                        <i className="bx bx-right-arrow-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="feature-card mission-card h-100" data-aos="fade-up" data-aos-delay="400">
                      <div className="feature-header">
                        <div className="icon-box mb-3">
                          <i className="flaticon-goal text-primary fs-2"></i>
                          <div className="icon-bg"></div>
                        </div>
                        <div className="feature-badge mission-badge">
                          <i className="bx bx-target-lock"></i>
                        </div>
                      </div>
                      <h4 className="mb-3">
                        <span className="card-label">{t('mission.title') || 'الرسالة'}</span>
                      </h4>
                      <p className="text-muted mb-0">
                        {t('mission.description') || 'تمكين المؤسسات من بناء بنية تحتية آمنة وذكية باستخدام أحدث تقنيات الذكاء الاصطناعي والبيانات الضخمة والأمن السيبراني، بما يتماشى مع استراتيجية التحول الرقمي ورؤية المملكة 2030'}
                      </p>
                      <div className="feature-arrow">
                        <i className="bx bx-right-arrow-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Values */}
                <div className="core-values-section mt-5" data-aos="fade-up" data-aos-delay="500">
                  <div className="values-header text-center mb-4">
                    <h3 className="values-title">
                      <i className="bx bx-diamond"></i>
                      {t('coreValues.title') || 'قيمنا الأساسية'}
                    </h3>
                  </div>
                  <div className="row g-3">
                    <div className="col-lg-6 col-md-6">
                      <div className="value-item" data-aos="zoom-in" data-aos-delay="600">
                        <div className="value-icon integrity-icon">
                          <i className="bx bx-shield-quarter"></i>
                        </div>
                        <div className="value-content">
                          <h5>{t('coreValues.integrity.title') || 'النزاهة والشفافية'}</h5>
                          <p>{t('coreValues.integrity.description') || 'الثقة أساس علاقتنا مع عملائنا.'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="value-item" data-aos="zoom-in" data-aos-delay="700">
                        <div className="value-icon innovation-icon">
                          <i className="bx bx-bulb"></i>
                        </div>
                        <div className="value-content">
                          <h5>{t('coreValues.innovation.title') || 'الابتكار المستمر'}</h5>
                          <p>{t('coreValues.innovation.description') || 'حلول جديدة لمواجهة تحديات المستقبل.'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="value-item" data-aos="zoom-in" data-aos-delay="800">
                        <div className="value-icon security-icon">
                          <i className="bx bx-lock-alt"></i>
                        </div>
                        <div className="value-content">
                          <h5>{t('coreValues.security.title') || 'الأمن أولًا'}</h5>
                          <p>{t('coreValues.security.description') || 'حماية الأصول الرقمية من التهديدات.'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="value-item" data-aos="zoom-in" data-aos-delay="900">
                        <div className="value-icon customer-icon">
                          <i className="bx bx-user-check"></i>
                        </div>
                        <div className="value-content">
                          <h5>{t('coreValues.customer.title') || 'العميل محور الاهتمام'}</h5>
                          <p>{t('coreValues.customer.description') || 'حلول مصممة حسب احتياجات كل مؤسسة'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="about-btn mt-5" data-aos="fade-up" data-aos-delay="500">
                  <Link href={`/${locale}/about`} className="premium-btn">
                    <span className="btn-text">{t('learnMoreButton')}</span>
                    <span className="btn-icon">
                      <i className="bx bx-right-arrow-alt"></i>
                    </span>
                    <span className="btn-shine"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Shape */}
        <div className="about-shape-2">
          <Image
            src="/img/shape/shape2.png"
            alt="shape"
            width={200}
            height={200}
          />
        </div>
      </section>

      <style jsx>{`
        .about-area {
          position: relative;
          overflow: hidden;
        }

        .about-image {
          position: relative;
          z-index: 1;
        }

        .about-shape-1 {
          position: absolute;
          top: -30px;
          left: -30px;
          z-index: -1;
          animation: rotate 20s linear infinite;
        }

        .about-shape-2 {
          position: absolute;
          bottom: 50px;
          right: 50px;
          z-index: 0;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Section Header Enhancements */
        .section-header {
          margin-bottom: 30px;
        }

        .sub-title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.1) 0%, rgba(255, 8, 102, 0.1) 100%);
          border-radius: 30px;
          color: #d80650;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 20px;
          border: 1px solid rgba(216, 6, 80, 0.2);
          transition: all 0.3s ease;
        }

        .sub-title:hover {
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.15) 0%, rgba(255, 8, 102, 0.15) 100%);
          transform: translateY(-2px);
        }

        .sub-title i {
          font-size: 18px;
        }

        .section-main-title {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .title-highlight {
          color: #d80650;
          font-size: 52px;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #d80650 0%, #ff0866 100%);
          border-radius: 2px;
          margin-bottom: 20px;
          position: relative;
        }

        .title-underline::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 30px;
          height: 100%;
          background: white;
          animation: slideUnderline 2s ease-in-out infinite;
        }

        @keyframes slideUnderline {
          0%, 100% { left: 0; }
          50% { left: 50px; }
        }

        /* Enhanced Stats Container */
        .stats-container {
          margin: 30px 0;
        }

        .stats-box {
          padding: 25px 20px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .stats-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.05) 0%, rgba(255, 8, 102, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stats-box:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(216, 6, 80, 0.15);
          border-color: #d80650;
        }

        .stats-box:hover::before {
          opacity: 1;
        }

        .stats-icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .stats-icon i {
          font-size: 24px;
          color: white;
        }

        .stats-box:hover .stats-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .stats-content h3 {
          font-weight: 800;
          font-size: 2.8rem;
          line-height: 1;
        }

        .stats-content p {
          font-size: 13px;
          font-weight: 600;
          color: #666;
        }

        .stats-progress {
          width: 100%;
          height: 3px;
          background: #f0f0f0;
          border-radius: 2px;
          margin-top: 15px;
          overflow: hidden;
        }

        .progress-bar {
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, #d80650 0%, #ff0866 100%);
          border-radius: 2px;
          animation: fillProgress 1.5s ease-out forwards;
        }

        @keyframes fillProgress {
          to { width: 100%; }
        }

        /* Enhanced Feature Cards */
        .feature-card {
          padding: 35px 30px;
          background: white;
          border-radius: 20px;
          border: 2px solid #e8e8e8;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(216, 6, 80, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #d80650 0%, #ff0866 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(216, 6, 80, 0.2);
          border-color: #d80650;
        }

        .feature-card:hover::after {
          transform: scaleX(1);
        }

        .feature-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .icon-box {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.1) 0%, rgba(255, 8, 102, 0.1) 100%);
          border-radius: 18px;
          transition: all 0.4s ease;
          position: relative;
        }

        .icon-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          border-radius: 18px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover .icon-box {
          transform: scale(1.15) rotate(-5deg);
        }

        .feature-card:hover .icon-bg {
          opacity: 1;
        }

        .feature-card:hover .icon-box i {
          color: white !important;
          position: relative;
          z-index: 1;
        }

        .feature-badge {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
          box-shadow: 0 5px 20px rgba(216, 6, 80, 0.3);
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-badge {
          transform: scale(1.1) rotate(5deg);
        }

        .card-label {
          position: relative;
          padding-bottom: 8px;
        }

        .card-label::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #d80650 0%, #ff0866 100%);
          transition: width 0.4s ease;
        }

        .feature-card:hover .card-label::after {
          width: 100%;
        }

        .feature-card h4 {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          transition: color 0.3s ease;
        }

        .feature-card:hover h4 {
          color: #d80650;
        }

        .vision-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .mission-badge {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .vision-card:hover {
          border-color: #667eea;
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.25);
        }

        .mission-card:hover {
          border-color: #f093fb;
          box-shadow: 0 20px 50px rgba(240, 147, 251, 0.25);
        }

        .feature-arrow {
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

        .feature-arrow i {
          font-size: 22px;
          color: #d80650;
        }

        .feature-card:hover .feature-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Premium Button */
        .premium-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 40px;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(216, 6, 80, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }

        .premium-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ff0866 0%, #d80650 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .premium-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(216, 6, 80, 0.4);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .premium-btn:hover::before {
          opacity: 1;
        }

        .btn-text, .btn-icon {
          position: relative;
          z-index: 1;
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .btn-icon i {
          font-size: 22px;
        }

        .premium-btn:hover .btn-icon {
          transform: translateX(5px);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
        }

        .premium-btn:hover .btn-shine {
          left: 100%;
        }

        .bg-f4f6fc {
          background-color: #f4f6fc;
        }

        .lead {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #5f6368;
          margin-bottom: 25px;
        }

        @media (max-width: 991px) {
          .about-image {
            margin-bottom: 40px;
          }

          .section-main-title {
            font-size: 32px;
          }

          .stats-content h3 {
            font-size: 2.2rem;
          }

          .feature-card {
            padding: 25px 20px;
          }
        }

        /* Core Values Section */
        .core-values-section {
          padding: 40px 35px;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.03) 0%, rgba(255, 8, 102, 0.03) 100%);
          border-radius: 25px;
          border: 2px dashed rgba(216, 6, 80, 0.2);
          position: relative;
          overflow: hidden;
        }

        .core-values-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(216, 6, 80, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .values-header {
          position: relative;
          z-index: 1;
        }

        .values-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          position: relative;
          padding-bottom: 15px;
        }

        .values-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #d80650 0%, #ff0866 100%);
          border-radius: 2px;
        }

        .values-title i {
          font-size: 32px;
          color: #d80650;
        }

        .value-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 25px;
          background: white;
          border-radius: 18px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          height: 100%;
        }

        .value-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(216, 6, 80, 0.05), transparent);
          transition: left 0.5s ease;
        }

        .value-item:hover {
          transform: translateX(8px);
          box-shadow: 0 10px 40px rgba(216, 6, 80, 0.15);
          border-color: #d80650;
        }

        .value-item:hover::before {
          left: 100%;
        }

        .value-icon {
          width: 55px;
          height: 55px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s ease;
          position: relative;
        }

        .value-icon i {
          font-size: 28px;
          color: white;
          position: relative;
          z-index: 1;
        }

        .integrity-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
        }

        .innovation-icon {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          box-shadow: 0 5px 20px rgba(240, 147, 251, 0.3);
        }

        .security-icon {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          box-shadow: 0 5px 20px rgba(79, 172, 254, 0.3);
        }

        .customer-icon {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          box-shadow: 0 5px 20px rgba(67, 233, 123, 0.3);
        }

        .value-item:hover .value-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .value-content h5 {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .value-item:hover .value-content h5 {
          color: #d80650;
        }

        .value-content p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 991px) {
          .core-values-section {
            padding: 30px 25px;
          }

          .values-title {
            font-size: 24px;
          }

          .value-item {
            padding: 20px;
          }

          .value-icon {
            width: 50px;
            height: 50px;
          }

          .value-icon i {
            font-size: 24px;
          }
        }

        @media (max-width: 767px) {
          .section-main-title {
            font-size: 28px;
          }

          .title-highlight {
            font-size: 38px;
          }

          .stats-content h3 {
            font-size: 2rem;
          }

          .core-values-section {
            padding: 25px 20px;
          }

          .values-title {
            font-size: 20px;
          }

          .value-content h5 {
            font-size: 16px;
          }

          .value-content p {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutSection;
