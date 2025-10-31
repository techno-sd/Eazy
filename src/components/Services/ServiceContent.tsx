"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface ServiceContentProps {
  translationKey: string;
  icon: string;
  image: string;
  gradient: string;
  badge?: string;
}

const ServiceContent: React.FC<ServiceContentProps> = ({
  translationKey,
  icon,
  image,
  gradient,
  badge
}) => {
  const tServices = useTranslations('home.services');

  // Get service data
  const title = tServices(`${translationKey}.title`);
  const description = tServices.has(`${translationKey}.description`)
    ? tServices(`${translationKey}.description`)
    : '';
  const note = tServices.has(`${translationKey}.note`)
    ? tServices(`${translationKey}.note`)
    : '';

  // Get all service items dynamically
  const getServiceItems = () => {
    const items: string[] = [];
    let i = 1;
    while (i <= 10) { // Maximum 10 items
      try {
        const key = `${translationKey}.service${i}`;
        if (tServices.has(key)) {
          items.push(tServices(key));
          i++;
        } else {
          break;
        }
      } catch {
        break;
      }
    }
    return items;
  };

  const serviceItems = getServiceItems();

  return (
    <>
      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Hero Section */}
              <motion.div
                className="service-hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="service-hero-content">
                      {badge && (
                        <motion.div
                          className="service-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <i className="bx bx-star"></i>
                          <span>{badge}</span>
                        </motion.div>
                      )}
                      <motion.div
                        className="icon-wrapper"
                        style={{ background: gradient }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <i className={icon}></i>
                      </motion.div>
                      <h1 className="service-main-title">{title}</h1>
                      {description && (
                        <p className="service-description">{description}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <motion.div
                      className="service-hero-image"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={500}
                        className="service-image"
                      />
                      <div className="image-decoration" style={{ background: gradient }}></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Services List Section */}
              <motion.div
                className="services-list-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="section-header">
                  <h2>What We Offer</h2>
                  <div className="title-line" style={{ background: gradient }}></div>
                </div>

                <div className="row g-4">
                  {serviceItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="col-lg-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + (index * 0.1) }}
                    >
                      <div className="service-item-card">
                        <div className="item-number" style={{ color: gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#0C4BA2' }}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="item-icon" style={{ background: gradient }}>
                          <i className="bx bx-check-circle"></i>
                        </div>
                        <div className="item-content">
                          <p>{item}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Note Section (for SME-EAZY only) */}
              {note && (
                <motion.div
                  className="note-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <div className="note-content">
                    <i className="bx bx-info-circle"></i>
                    <p>{note}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-details-area {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        /* Hero Section */
        .service-hero {
          background: white;
          border-radius: 30px;
          padding: 60px;
          box-shadow: 0 20px 60px rgba(12, 75, 162, 0.1);
          margin-bottom: 50px;
          position: relative;
          overflow: hidden;
        }

        .service-hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.03) 0%, rgba(31, 182, 232, 0.03) 100%);
          border-radius: 50% 0 0 50%;
          z-index: 0;
        }

        .service-hero-content {
          position: relative;
          z-index: 1;
        }

        .service-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(255, 193, 7, 0.95) 0%, rgba(255, 152, 0, 0.95) 100%);
          border-radius: 30px;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 10px 30px rgba(255, 193, 7, 0.4);
          margin-bottom: 30px;
        }

        .service-badge i {
          font-size: 20px;
        }

        .icon-wrapper {
          width: 100px;
          height: 100px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          box-shadow: 0 15px 40px rgba(12, 75, 162, 0.3);
        }

        .icon-wrapper i {
          font-size: 50px;
          color: white;
        }

        .service-main-title {
          font-size: 48px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .service-description {
          font-size: 18px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .service-hero-image {
          position: relative;
          z-index: 1;
        }

        .service-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
        }

        .image-decoration {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          opacity: 0.1;
          z-index: -1;
        }

        /* Services List Section */
        .services-list-section {
          margin-top: 60px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .title-line {
          width: 100px;
          height: 4px;
          border-radius: 2px;
          margin: 0 auto;
        }

        .service-item-card {
          background: white;
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.08);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          min-height: 150px;
        }

        .service-item-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(12, 75, 162, 0.15);
          border-color: rgba(12, 75, 162, 0.2);
        }

        .item-number {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 60px;
          font-weight: 900;
          opacity: 0.05;
          line-height: 1;
        }

        .item-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(12, 75, 162, 0.3);
          transition: transform 0.4s ease;
        }

        .service-item-card:hover .item-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .item-icon i {
          font-size: 26px;
          color: white;
        }

        .item-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .item-content p {
          font-size: 16px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
          font-weight: 500;
        }

        .service-item-card:hover .item-content p {
          color: #1a1a1a;
        }

        /* Note Section */
        .note-section {
          margin-top: 50px;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.05) 0%, rgba(31, 182, 232, 0.05) 100%);
          border-radius: 20px;
          padding: 30px 40px;
          border-left: 5px solid #0C4BA2;
        }

        .note-content {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .note-content i {
          font-size: 32px;
          color: #0C4BA2;
          flex-shrink: 0;
        }

        .note-content p {
          font-size: 16px;
          color: #1a1a1a;
          line-height: 1.8;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .service-hero {
            padding: 40px;
          }

          .service-main-title {
            font-size: 36px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .service-item-card {
            padding: 25px;
          }
        }

        @media (max-width: 767px) {
          .service-hero {
            padding: 30px 20px;
          }

          .service-main-title {
            font-size: 28px;
          }

          .service-description {
            font-size: 16px;
          }

          .section-header h2 {
            font-size: 26px;
          }

          .service-item-card {
            padding: 20px;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .item-number {
            font-size: 40px;
          }

          .note-section {
            padding: 20px;
          }

          .note-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }

        /* RTL Support */
        [dir="rtl"] .service-item-card {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .item-number {
          right: auto;
          left: 20px;
        }

        [dir="rtl"] .note-section {
          border-left: none;
          border-right: 5px solid #0C4BA2;
        }

        [dir="rtl"] .note-content {
          flex-direction: row-reverse;
        }
      `}</style>
    </>
  );
};

export default ServiceContent;
