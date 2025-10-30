"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const ServicesSection: React.FC = () => {
  const t = useTranslations('home.services');
  const locale = useLocale();

  const services = [
    {
      icon: "flaticon-artificial-intelligence",
      title: t('aiSolutions.title'),
      items: [
        t('aiSolutions.service1'),
        t('aiSolutions.service2'),
        t('aiSolutions.service3'),
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      delay: "100"
    },
    {
      icon: "flaticon-cyber-security",
      title: t('cybersecurity.title'),
      items: [
        t('cybersecurity.service1'),
        t('cybersecurity.service2'),
        t('cybersecurity.service3'),
        t('cybersecurity.service4'),
      ],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      delay: "200"
    },
    {
      icon: "flaticon-big-data",
      title: t('bigData.title'),
      items: [
        t('bigData.service1'),
        t('bigData.service2'),
        t('bigData.service3'),
        t('bigData.service4'),
      ],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      delay: "300"
    },
    {
      icon: "flaticon-cloud-computing",
      title: t('cloudComputing.title'),
      items: [
        t('cloudComputing.service1'),
        t('cloudComputing.service2'),
        t('cloudComputing.service3'),
        t('cloudComputing.service4'),
      ],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      delay: "400"
    }
  ];

  return (
    <>
      <section className="services-area ptb-100">
        <div className="container">
          {/* Section Header */}
          <div className="section-title" data-aos="fade-up">
            <span className="sub-title">
              <i className="bx bx-shield-quarter"></i>
              {t('subtitle')}
            </span>
            <h2>{t('title')}</h2>
            <p className="mx-auto" style={{ maxWidth: '700px' }}>
              {t('description')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={service.delay}>
                <div className="service-card h-100">
                  <div className="service-icon-wrapper" style={{ background: service.gradient }}>
                    <i className={service.icon}></i>
                  </div>

                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <ul className="service-features">
                      {service.items.map((item, idx) => (
                        <li key={idx}>
                          <i className="bx bx-check-circle"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-hover-overlay" style={{ background: service.gradient }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* SME-EAZY Featured Service */}
          <div className="row mt-5" data-aos="fade-up" data-aos-delay="500">
            <div className="col-lg-12">
              <div className="featured-service-card">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-md-3 text-center">
                    <div className="featured-icon">
                      <i className="flaticon-rocket"></i>
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-6">
                    <div className="featured-content">
                      <span className="badge bg-primary mb-2">
                        <i className="bx bx-star"></i> {t('smeEazy.badge') || 'Premium Program'}
                      </span>
                      <h3 className="mb-3">{t('smeEazy.title')}</h3>
                      <p className="mb-3">{t('smeEazy.description')}</p>

                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="feature-item">
                            <i className="bx bx-check-double text-success"></i>
                            <span>{t('smeEazy.service1')}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="feature-item">
                            <i className="bx bx-check-double text-success"></i>
                            <span>{t('smeEazy.service2')}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="feature-item">
                            <i className="bx bx-check-double text-success"></i>
                            <span>{t('smeEazy.service3')}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="feature-item">
                            <i className="bx bx-check-double text-success"></i>
                            <span>{t('smeEazy.service4')}</span>
                          </div>
                        </div>
                      </div>

                      <div className="info-note mt-3">
                        <i className="bx bx-info-circle"></i>
                        <span>{t('smeEazy.note')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 text-center">
                    <Link href={`/${locale}/services`} className="default-btn">
                      <i className="bx bx-right-arrow-alt"></i>
                      {t('learnMore') || 'Learn More'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="services-shape"></div>
      </section>

      <style jsx>{`
        .services-area {
          position: relative;
          background: white;
          overflow: hidden;
        }

        .service-card {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          border: 2px solid transparent;
        }

        .service-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: rgba(216, 6, 80, 0.05);
          transition: height 0.4s ease;
          z-index: 0;
        }

        .service-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 60px rgba(216, 6, 80, 0.2);
          border-color: rgba(216, 6, 80, 0.3);
        }

        .service-card:hover::before {
          height: 100%;
        }

        .service-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .service-icon-wrapper i {
          font-size: 40px;
          color: white;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon-wrapper {
          transform: scale(1.1) rotateY(360deg);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .service-content {
          position: relative;
          z-index: 1;
        }

        .service-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1a1a1a;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-content h3 {
          color: #d80650;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-features li {
          transform: translateX(5px);
        }

        .service-features li i {
          color: #d80650;
          font-size: 20px;
          margin-right: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-features li span {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
        }

        .featured-service-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 25px;
          padding: 50px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.3);
        }

        .featured-service-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .featured-icon {
          width: 120px;
          height: 120px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .featured-icon i {
          font-size: 60px;
          color: white;
        }

        .featured-content {
          color: white;
        }

        .featured-content .badge {
          padding: 8px 15px;
          font-size: 13px;
          font-weight: 600;
          border-radius: 20px;
        }

        .featured-content h3 {
          font-size: 32px;
          font-weight: 700;
          color: white;
        }

        .featured-content p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.8;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 15px;
        }

        .feature-item i {
          font-size: 24px;
          flex-shrink: 0;
        }

        .info-note {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 20px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          border-left: 4px solid #ffc107;
          color: white;
          font-size: 14px;
          backdrop-filter: blur(5px);
        }

        .info-note i {
          font-size: 24px;
          color: #ffc107;
          flex-shrink: 0;
        }

        .services-shape {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40%;
          height: 60%;
          background: linear-gradient(135deg, rgba(81, 67, 217, 0.05) 0%, rgba(27, 206, 223, 0.05) 100%);
          border-radius: 50% 0 0 0;
          z-index: 0;
        }

        @media (max-width: 991px) {
          .featured-service-card {
            padding: 30px;
          }

          .featured-content h3 {
            font-size: 24px;
          }

          .featured-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
          }

          .featured-icon i {
            font-size: 40px;
          }

          .service-card {
            padding: 30px 20px;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 767px) {
          .featured-service-card .default-btn {
            margin-top: 20px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesSection;
