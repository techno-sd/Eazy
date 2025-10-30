"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const IndustriesGrid: React.FC = () => {
  const t = useTranslations('industries');
  const locale = useLocale();

  const industries = [
    {
      icon: "bx bxs-landmark",
      title: t('government.title'),
      description: t('government.description'),
      services: [t('government.service1'), t('government.service2'), t('government.service3')],
      color: "#0C4BA2",
      delay: "100"
    },
    {
      icon: "bx bx-credit-card",
      title: t('banking.title'),
      description: t('banking.description'),
      services: [t('banking.service1'), t('banking.service2'), t('banking.service3')],
      color: "#1FB6E8",
      delay: "200"
    },
    {
      icon: "bx bx-broadcast",
      title: t('energy.title'),
      description: t('energy.description'),
      services: [t('energy.service1'), t('energy.service2'), t('energy.service3')],
      color: "#0C4BA2",
      delay: "300"
    },
    {
      icon: "bx bx-plus-medical",
      title: t('healthcare.title'),
      description: t('healthcare.description'),
      services: [t('healthcare.service1'), t('healthcare.service2'), t('healthcare.service3')],
      color: "#1FB6E8",
      delay: "400"
    },
    {
      icon: "bx bxs-graduation",
      title: t('education.title'),
      description: t('education.description'),
      services: [t('education.service1'), t('education.service2'), t('education.service3')],
      color: "#0C4BA2",
      delay: "500"
    },
    {
      icon: "bx bxs-store",
      title: t('sme.title'),
      description: t('sme.description'),
      services: [t('sme.service1'), t('sme.service2'), t('sme.service3')],
      color: "#1FB6E8",
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
              <div key={index} className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={industry.delay}>
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
                  
                  {/* Decorative Background Icons */}
                  <div className="industry-bg-icon">
                    <i className={industry.icon} style={{ color: `${industry.color}08` }}></i>
                  </div>
                  
                  {/* Floating Decorative Icons */}
                  <div className="floating-icon floating-icon-1" style={{ color: `${industry.color}15` }}>
                    <i className="bx bx-check-shield"></i>
                  </div>
                  <div className="floating-icon floating-icon-2" style={{ color: `${industry.color}12` }}>
                    <i className="bx bx-lock-alt"></i>
                  </div>
                  <div className="floating-icon floating-icon-3" style={{ color: `${industry.color}10` }}>
                    <i className="bx bx-trending-up"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore All Industries Button */}
          <div className="row mt-5" data-aos="fade-up" data-aos-delay="650">
            <div className="col-12 text-center">
              <Link href={`/${locale}/industries`} className="explore-industries-btn">
                <span>{t('viewAll') || 'Explore All Industries'}</span>
                <i className="bx bx-right-arrow-circle"></i>
              </Link>
            </div>
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
          border-radius: 25px;
          padding: 40px 35px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 2px solid transparent;
        }

        .industry-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, transparent 0%, currentColor 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .industry-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(12, 75, 162, 0.15);
          border-color: rgba(12, 75, 162, 0.2);
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
          width: 90px;
          height: 90px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .industry-icon i {
          font-size: 48px;
          transition: all 0.4s ease;
        }

        .industry-card:hover .industry-icon {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 0 12px 30px rgba(12, 75, 162, 0.25);
        }

        .industry-card:hover .industry-icon i {
          transform: scale(1.1) rotate(5deg);
        }

        .industry-badge {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .industry-card:hover .industry-badge {
          transform: rotate(15deg) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
        }

        .industry-badge i {
          color: white;
          font-size: 20px;
        }

        .industry-content {
          flex: 1;
        }

        .industry-content h3 {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 18px;
          color: #1a1a1a;
          transition: all 0.3s ease;
          line-height: 1.3;
        }

        .industry-card:hover .industry-content h3 {
          color: #0C4BA2;
          transform: translateX(5px);
        }

        .industry-description {
          color: #666;
          font-size: 15.5px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .industry-services {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
        }

        .industry-services li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 14px;
          padding: 10px 12px;
          background: rgba(12, 75, 162, 0.03);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .industry-card:hover .industry-services li {
          transform: translateX(5px);
          background: rgba(12, 75, 162, 0.06);
        }

        .industry-services li i {
          font-size: 24px;
          margin-right: 12px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .industry-services li span {
          color: #555;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
        }

        .industry-footer {
          padding-top: 25px;
          border-top: 2px solid #f5f5f5;
          margin-top: auto;
        }

        .industry-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 8px 0;
        }

        .industry-link i {
          font-size: 24px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .industry-link:hover {
          gap: 15px;
        }

        .industry-link:hover i {
          transform: translateX(8px) scale(1.1);
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

        .industry-bg-icon {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 0;
          opacity: 0.4;
          transition: all 0.6s ease;
          pointer-events: none;
        }

        .industry-bg-icon i {
          font-size: 180px;
          transform: rotate(-15deg);
          transition: all 0.6s ease;
        }

        .industry-card:hover .industry-bg-icon {
          opacity: 0.6;
          transform: scale(1.1) rotate(5deg);
        }

        .industry-card:hover .industry-bg-icon i {
          transform: rotate(-10deg);
        }

        .floating-icon {
          position: absolute;
          z-index: 0;
          opacity: 0.6;
          transition: all 0.5s ease;
          pointer-events: none;
        }

        .floating-icon i {
          font-size: 40px;
        }

        .floating-icon-1 {
          top: 20px;
          right: 20px;
          animation: float 3s ease-in-out infinite;
        }

        .floating-icon-2 {
          top: 50%;
          left: 15px;
          animation: float 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .floating-icon-3 {
          bottom: 80px;
          left: 30px;
          animation: float 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .industry-card:hover .floating-icon {
          opacity: 0.8;
        }

        .industry-card:hover .floating-icon-1 {
          transform: translateY(-5px) rotate(10deg);
        }

        .industry-card:hover .floating-icon-2 {
          transform: translateX(-5px) rotate(-10deg);
        }

        .industry-card:hover .floating-icon-3 {
          transform: translateY(5px) rotate(5deg);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .explore-industries-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 45px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: white;
          font-size: 17px;
          font-weight: 700;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.3);
          position: relative;
          overflow: hidden;
        }

        .explore-industries-btn::before {
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

        .explore-industries-btn:hover::before {
          opacity: 1;
        }

        .explore-industries-btn span,
        .explore-industries-btn i {
          position: relative;
          z-index: 1;
        }

        .explore-industries-btn i {
          font-size: 24px;
          transition: transform 0.3s ease;
        }

        .explore-industries-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(12, 75, 162, 0.4);
          color: white;
        }

        .explore-industries-btn:hover i {
          transform: translateX(5px);
        }

        .industries-cta {
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
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
          color: #0C4BA2;
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
              rgba(12, 75, 162, 0.02) 10px,
              rgba(12, 75, 162, 0.02) 20px
            );
          z-index: 0;
          pointer-events: none;
        }

        @media (max-width: 991px) {
          .industry-card {
            padding: 35px 28px;
          }

          .industry-content h3 {
            font-size: 24px;
          }

          .industry-icon {
            width: 80px;
            height: 80px;
          }

          .industry-icon i {
            font-size: 42px;
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
          .industry-card {
            padding: 30px 25px;
          }

          .industry-content h3 {
            font-size: 22px;
          }

          .industry-icon {
            width: 70px;
            height: 70px;
          }

          .industry-icon i {
            font-size: 36px;
          }

          .industry-badge {
            width: 38px;
            height: 38px;
          }

          .industry-services li {
            padding: 8px 10px;
          }

          .explore-industries-btn {
            padding: 16px 35px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default IndustriesGrid;
