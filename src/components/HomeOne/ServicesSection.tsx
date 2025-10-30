"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      image: "/img/home-six/services/chatbot.png",
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
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
      image: "/img/home-six/services/services-2.png",
      gradient: "linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)",
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
      image: "/img/home-six/services/big-data.jpg",
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
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
      image: "/img/home-six/services/cloud-computing.jpg",
      gradient: "linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)",
      delay: "400"
    },
    {
      icon: "flaticon-rocket",
      title: t('smeEazy.title'),
      items: [
        t('smeEazy.service1'),
        t('smeEazy.service2'),
        t('smeEazy.service3'),
        t('smeEazy.service4'),
      ],
      image: "/img/home-six/services/software.png",
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      delay: "500",
      badge: t('smeEazy.badge') || 'Premium Program'
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
              <div key={index} className="col-lg-12" data-aos="fade-up" data-aos-delay={service.delay}>
                <div className="service-card-enhanced-row">
                  <div className="row g-0 align-items-center">
                    {/* Service Image Column */}
                    <div className="col-lg-4 col-md-5">
                      <div className="service-image-wrapper">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={500}
                          height={400}
                          className="service-image"
                        />
                        <div className="image-overlay" style={{ background: service.gradient }}></div>
                        <div className="service-icon-badge" style={{ background: service.gradient }}>
                          <i className={service.icon}></i>
                        </div>
                        {service.badge && (
                          <div className="service-badge">
                            <i className="bx bx-star"></i>
                            <span>{service.badge}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Service Content Column */}
                    <div className="col-lg-8 col-md-7">
                      <div className="service-body">
                        <h3 className="service-title">{service.title}</h3>
                        <ul className="service-features-list">
                          {service.items.map((item, idx) => (
                            <li key={idx}>
                              <i className="bx bx-check-circle"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <div className="services-shape"></div>
      </section>

      <style jsx>{`
        .services-area {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          overflow: hidden;
        }

        /* Enhanced Service Card with Row Layout */
        .service-card-enhanced-row {
          position: relative;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          margin-bottom: 20px;
        }

        .service-card-enhanced-row:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(12, 75, 162, 0.15);
          border-color: #0C4BA2;
        }

        /* Service Image Section */
        .service-image-wrapper {
          position: relative;
          height: 350px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          transition: transform 0.5s ease;
          padding: 30px;
        }

        .service-card-enhanced-row:hover .service-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card-enhanced-row:hover .image-overlay {
          opacity: 0.1;
        }

        /* Service Icon Badge */
        .service-icon-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 70px;
          height: 70px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.3);
          transition: all 0.4s ease;
          z-index: 10;
        }

        .service-card-enhanced-row:hover .service-icon-badge {
          transform: scale(1.15) rotate(10deg);
        }

        .service-icon-badge i {
          font-size: 36px;
          color: white;
        }

        /* Service Badge (Premium) */
        .service-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          color: #0C4BA2;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 8px 20px rgba(12, 75, 162, 0.15);
          z-index: 10;
        }

        .service-badge i {
          font-size: 18px;
          color: #ffc107;
        }

        /* Service Body */
        .service-body {
          padding: 40px;
        }

        .service-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 25px;
          transition: color 0.3s ease;
        }

        .service-card-enhanced-row:hover .service-title {
          color: #0C4BA2;
        }

        /* Service Features List */
        .service-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .service-features-list li {
          display: flex;
          align-items: flex-start;
          transition: transform 0.3s ease;
        }

        .service-card-enhanced-row:hover .service-features-list li {
          transform: translateX(8px);
        }

        .service-features-list li i {
          color: #0C4BA2;
          font-size: 22px;
          margin-right: 12px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-features-list li span {
          color: #64748b;
          font-size: 15px;
          line-height: 1.7;
        }

        /* Background Shape */
        .services-shape {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40%;
          height: 60%;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.03) 0%, rgba(31, 182, 232, 0.03) 100%);
          border-radius: 50% 0 0 0;
          z-index: 0;
          pointer-events: none;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .service-image-wrapper {
            height: 300px;
          }

          .service-image {
            padding: 20px;
          }

          .service-body {
            padding: 30px;
          }

          .service-title {
            font-size: 24px;
          }

          .service-features-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .service-image-wrapper {
            height: 250px;
          }

          .service-image {
            padding: 15px;
          }

          .service-icon-badge {
            width: 60px;
            height: 60px;
            bottom: 15px;
            left: 15px;
          }

          .service-icon-badge i {
            font-size: 30px;
          }

          .service-badge {
            top: 15px;
            right: 15px;
            padding: 8px 16px;
            font-size: 12px;
          }

          .service-body {
            padding: 25px 20px;
          }

          .service-title {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .service-features-list {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .service-features-list li {
            font-size: 14px;
          }
        }

        /* RTL Support */
        [dir="rtl"] .service-features-list li {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .service-features-list li i {
          margin-right: 0;
          margin-left: 12px;
        }

        [dir="rtl"] .service-card-enhanced-row:hover .service-features-list li {
          transform: translateX(-8px);
        }

        [dir="rtl"] .service-icon-badge {
          left: auto;
          right: 20px;
        }

        [dir="rtl"] .service-badge {
          right: auto;
          left: 20px;
        }
      `}</style>
    </>
  );
};

export default ServicesSection;
