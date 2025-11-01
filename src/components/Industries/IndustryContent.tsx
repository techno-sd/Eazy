"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

interface IndustryContentProps {
  industryKey: string;
  icon: string;
  image: string;
  gradient: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

const IndustryContent: React.FC<IndustryContentProps> = ({
  industryKey,
  icon,
  image,
  gradient,
  stats
}) => {
  const tIndustry = useTranslations('industries');
  const locale = useLocale();

  const title = tIndustry(`${industryKey}.title`);
  const description = tIndustry(`${industryKey}.description`);

  // Get service items
  const getServices = () => {
    const services: { title: string; description: string }[] = [];
    let i = 1;
    while (i <= 5) {
      try {
        const key = `${industryKey}.service${i}`;
        if (tIndustry.has(key)) {
          services.push({
            title: tIndustry(key),
            description: tIndustry.has(`${key}Desc`) ? tIndustry(`${key}Desc`) : ''
          });
          i++;
        } else {
          break;
        }
      } catch {
        break;
      }
    }
    return services;
  };

  const services = getServices();

  return (
    <>
      <section className="industry-content-area ptb-100">
        <div className="container">
          {/* Hero Section */}
          <div className="industry-hero">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="hero-content">
                  <div className="icon-badge" style={{ background: gradient }}>
                    <i className={icon}></i>
                  </div>
                  <h1 className="hero-title">{title}</h1>
                  <p className="hero-description">{description}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image-wrapper">
                  <div className="image-container">
                    <Image
                      src={image}
                      alt={title}
                      width={600}
                      height={500}
                      className="hero-image"
                    />
                    <div className="image-overlay" style={{ background: gradient }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section (if provided) */}
          {stats && stats.length > 0 && (
            <motion.div
              className="stats-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="row g-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="col-lg-3 col-md-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                  >
                    <div className="stat-card" style={{ borderTopColor: gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#0C4BA2' }}>
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Solutions Section */}
          <motion.div
            className="solutions-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="section-header">
              <span className="section-badge">Our Solutions</span>
              <h2>Specialized Security Solutions</h2>
              <p>Tailored cybersecurity services designed for your industry's unique challenges</p>
            </div>

            <div className="row g-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="col-lg-4 col-md-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                >
                  <div className="solution-card">
                    <div className="card-header">
                      <div className="card-number" style={{ background: gradient }}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="card-icon" style={{ background: gradient }}>
                        <i className="bx bx-check-shield"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>{service.title}</h3>
                      {service.description && <p>{service.description}</p>}
                    </div>
                    <div className="card-footer">
                      <div className="card-arrow" style={{ color: gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#0C4BA2' }}>
                        <i className="bx bx-right-arrow-alt"></i>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="cta-card" style={{ background: gradient }}>
              <div className="cta-content">
                <div className="cta-icon">
                  <i className="bx bx-conversation"></i>
                </div>
                <h3>Ready to Secure Your Industry?</h3>
                <p>Let's discuss how we can protect your organization with industry-specific solutions</p>
                <Link href={`/${locale}/contact`} className="cta-button">
                  <span>Get in Touch</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
              <div className="cta-pattern"></div>
            </div>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="bg-decorations">
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
          <div className="deco-circle deco-3"></div>
        </div>
      </section>

      <style jsx>{`
        .industry-content-area {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          overflow: hidden;
        }

        /* Hero Section */
        .industry-hero {
          margin-bottom: 80px;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .icon-badge {
          width: 100px;
          height: 100px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          box-shadow: 0 15px 40px rgba(12, 75, 162, 0.3);
        }

        .icon-badge i {
          font-size: 50px;
          color: white;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-description {
          font-size: 18px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .hero-image-wrapper {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(12, 75, 162, 0.15);
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          z-index: 1;
        }

        /* Stats Section */
        .stats-section {
          margin-bottom: 80px;
        }

        .stat-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.08);
          transition: all 0.4s ease;
          border-top: 4px solid;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.02) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(12, 75, 162, 0.15);
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-card h3 {
          font-size: 42px;
          font-weight: 800;
          color: #0C4BA2;
          margin-bottom: 10px;
        }

        .stat-card p {
          font-size: 16px;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        /* Solutions Section */
        .solutions-section {
          margin-bottom: 80px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          display: inline-block;
          padding: 10px 24px;
          background: linear-gradient(135deg, rgba(12, 75, 162, 0.1) 0%, rgba(31, 182, 232, 0.1) 100%);
          border-radius: 30px;
          color: #0C4BA2;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .section-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .section-header p {
          font-size: 16px;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Solution Cards */
        .solution-card {
          background: white;
          border-radius: 25px;
          padding: 35px;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.08);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .solution-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 70px rgba(12, 75, 162, 0.2);
          border-color: rgba(12, 75, 162, 0.2);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
          position: relative;
          z-index: 1;
        }

        .card-number {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: 800;
          box-shadow: 0 8px 20px rgba(12, 75, 162, 0.3);
          transition: transform 0.4s ease;
        }

        .solution-card:hover .card-number {
          transform: scale(1.1) rotate(10deg);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.25);
          transition: all 0.4s ease;
        }

        .solution-card:hover .card-icon {
          transform: scale(1.15) rotate(-10deg);
        }

        .card-icon i {
          font-size: 32px;
          color: white;
        }

        .card-body {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .card-body h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .solution-card:hover .card-body h3 {
          color: #0C4BA2;
        }

        .card-body p {
          font-size: 15px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        .card-footer {
          margin-top: 20px;
          position: relative;
          z-index: 1;
        }

        .card-arrow {
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
        }

        .card-arrow i {
          font-size: 24px;
        }

        .solution-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* CTA Section */
        .cta-section {
          margin-top: 80px;
        }

        .cta-card {
          position: relative;
          padding: 60px 50px;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(12, 75, 162, 0.3);
        }

        .cta-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-icon {
          width: 90px;
          height: 90px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          transition: transform 0.4s ease;
        }

        .cta-card:hover .cta-icon {
          transform: scale(1.1) rotate(15deg);
        }

        .cta-icon i {
          font-size: 45px;
          color: white;
        }

        .cta-content h3 {
          font-size: 36px;
          font-weight: 800;
          color: white;
          margin-bottom: 15px;
        }

        .cta-content p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 30px;
          line-height: 1.7;
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
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          gap: 18px;
          color: #0C4BA2;
        }

        .cta-button i {
          font-size: 22px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover i {
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
          z-index: 1;
        }

        @keyframes patternMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Background Decorations */
        .bg-decorations {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .deco-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(12, 75, 162, 0.08) 0%, transparent 70%);
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
          left: 50%;
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
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .hero-title {
            font-size: 36px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .cta-content h3 {
            font-size: 28px;
          }

          .solution-card {
            padding: 30px;
          }
        }

        @media (max-width: 767px) {
          .hero-title {
            font-size: 28px;
          }

          .hero-description {
            font-size: 16px;
          }

          .section-header h2 {
            font-size: 26px;
          }

          .solution-card {
            padding: 25px;
          }

          .cta-card {
            padding: 40px 30px;
          }

          .cta-content h3 {
            font-size: 24px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }

        /* RTL Support */
        [dir="rtl"] .card-header {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .card-arrow {
          transform: translateX(20px);
        }

        [dir="rtl"] .solution-card:hover .card-arrow {
          transform: translateX(0);
        }

        [dir="rtl"] .cta-button:hover i {
          transform: translateX(-5px);
        }
      `}</style>
    </>
  );
};

export default IndustryContent;
