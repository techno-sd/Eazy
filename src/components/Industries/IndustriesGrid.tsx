"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const IndustriesGrid: React.FC = () => {
  const t = useTranslations('industries');
  const locale = useLocale();

  const industries = [
    {
      icon: "flaticon-profile",
      title: t('government.title'),
      description: t('government.description'),
      services: [t('government.service1'), t('government.service2'), t('government.service3')],
      color: "#3b82f6",
      delay: "100"
    },
    {
      icon: "flaticon-payment",
      title: t('banking.title'),
      description: t('banking.description'),
      services: [t('banking.service1'), t('banking.service2'), t('banking.service3')],
      color: "#10b981",
      delay: "200"
    },
    {
      icon: "flaticon-data-analytics",
      title: t('energy.title'),
      description: t('energy.description'),
      services: [t('energy.service1'), t('energy.service2'), t('energy.service3')],
      color: "#f59e0b",
      delay: "300"
    },
    {
      icon: "flaticon-scientist",
      title: t('healthcare.title'),
      description: t('healthcare.description'),
      services: [t('healthcare.service1'), t('healthcare.service2'), t('healthcare.service3')],
      color: "#ef4444",
      delay: "400"
    },
    {
      icon: "flaticon-training",
      title: t('education.title'),
      description: t('education.description'),
      services: [t('education.service1'), t('education.service2'), t('education.service3')],
      color: "#8b5cf6",
      delay: "500"
    },
    {
      icon: "flaticon-rocket",
      title: t('sme.title'),
      description: t('sme.description'),
      services: [t('sme.service1'), t('sme.service2'), t('sme.service3')],
      color: "#ec4899",
      delay: "600"
    }
  ];

  return (
    <>
      <section className="industries-area ptb-100 bg-f9fafb">
        <div className="container">
          {/* Section Header */}
          <div className="section-title" data-aos="fade-up">
            <span className="sub-title">
              <i className="bx bx-building-house"></i>
              {t('subtitle')}
            </span>
            <h2>{t('title')}</h2>
            <p className="mx-auto" style={{ maxWidth: '750px' }}>
              {t('description')}
            </p>
          </div>

          {/* Industries Grid */}
          <div className="row g-4">
            {industries.map((industry, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={industry.delay}>
                <div className="industry-card h-100">
                  {/* Header with Icon */}
                  <div className="industry-header">
                    <div className="industry-icon" style={{ background: `${industry.color}15` }}>
                      <i className={industry.icon} style={{ color: industry.color }}></i>
                    </div>
                    <div className="industry-badge" style={{ background: industry.color }}>
                      <i className="bx bx-star"></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="industry-content">
                    <h3>{industry.title}</h3>
                    <p className="industry-description">{industry.description}</p>

                    {/* Services List */}
                    <ul className="industry-services">
                      {industry.services.map((service, idx) => (
                        <li key={idx}>
                          <i className="bx bx-badge-check" style={{ color: industry.color }}></i>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="industry-footer">
                    <Link href={`/${locale}/industries`} className="industry-link" style={{ color: industry.color }}>
                      {t('learnMore') || 'Learn More'}
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>

                  {/* Hover Effect */}
                  <div className="industry-overlay" style={{ background: `linear-gradient(135deg, ${industry.color}ee, ${industry.color}aa)` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="row mt-5" data-aos="fade-up" data-aos-delay="700">
            <div className="col-12 text-center">
              <div className="industries-cta">
                <h3>{t('ctaTitle') || 'Ready to Transform Your Industry?'}</h3>
                <p>{t('ctaDescription') || 'Get in touch with our experts to discuss your specific industry needs'}</p>
                <Link href={`/${locale}/contact`} className="default-btn btn-lg">
                  <i className="bx bx-envelope"></i>
                  {t('contactUs') || 'Contact Us'}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="industries-pattern"></div>
      </section>

      <style jsx>{`
        .industries-area {
          position: relative;
          overflow: hidden;
        }

        .bg-f9fafb {
          background-color: #f9fafb;
        }

        .industry-card {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .industry-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, currentColor 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .industry-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .industry-card:hover::before {
          transform: translateX(100%);
        }

        .industry-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
        }

        .industry-icon {
          width: 80px;
          height: 80px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }

        .industry-icon i {
          font-size: 42px;
          transition: transform 0.3s ease;
        }

        .industry-card:hover .industry-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .industry-card:hover .industry-icon i {
          transform: scale(1.15);
        }

        .industry-badge {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        .industry-badge i {
          color: white;
          font-size: 18px;
        }

        .industry-content {
          flex: 1;
        }

        .industry-content h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1a1a1a;
          transition: color 0.3s ease;
        }

        .industry-card:hover .industry-content h3 {
          color: #d80650;
        }

        .industry-description {
          color: #666;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .industry-services {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }

        .industry-services li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 10px;
          transition: transform 0.3s ease;
        }

        .industry-card:hover .industry-services li {
          transform: translateX(5px);
        }

        .industry-services li i {
          font-size: 22px;
          margin-right: 10px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .industry-services li span {
          color: #555;
          font-size: 14px;
          line-height: 1.6;
        }

        .industry-footer {
          padding-top: 20px;
          border-top: 1px solid #f0f0f0;
        }

        .industry-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .industry-link i {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .industry-link:hover {
          gap: 12px;
        }

        .industry-link:hover i {
          transform: translateX(5px);
        }

        .industry-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          border-radius: 20px;
        }

        .industry-card:hover .industry-overlay {
          opacity: 0.03;
        }

        .industries-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 60px 40px;
          border-radius: 25px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .industries-cta::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px;
          right: -100px;
        }

        .industries-cta h3 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
          color: white;
        }

        .industries-cta p {
          font-size: 18px;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.95);
        }

        .industries-cta .default-btn {
          background: white;
          color: #667eea;
          padding: 15px 40px;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
        }

        .industries-cta .default-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .industries-pattern {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 300px;
          background:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(81, 67, 217, 0.02) 10px,
              rgba(81, 67, 217, 0.02) 20px
            );
          z-index: 0;
          pointer-events: none;
        }

        @media (max-width: 991px) {
          .industry-card {
            padding: 30px;
          }

          .industries-cta h3 {
            font-size: 28px;
          }

          .industries-cta p {
            font-size: 16px;
          }

          .industries-cta {
            padding: 40px 30px;
          }
        }

        @media (max-width: 767px) {
          .industry-content h3 {
            font-size: 20px;
          }

          .industry-icon {
            width: 65px;
            height: 65px;
          }

          .industry-icon i {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
};

export default IndustriesGrid;
