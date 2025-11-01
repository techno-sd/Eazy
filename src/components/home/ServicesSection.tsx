"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
      image: "/img/solution/solution-img2.jpg",
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      delay: 0.1
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
      image: "/img/solution/solution-img3.jpg",
      gradient: "linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)",
      delay: 0.2
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
      image: "/img/solution/solution-img4.jpg",
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      delay: 0.3
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
      image: "/img/solution/solution-img5.jpg",
      gradient: "linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)",
      delay: 0.4
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
      image: "/img/solution/solution-img6.jpg",
      gradient: "linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)",
      delay: 0.5,
      badge: t('smeEazy.badge') || 'Premium Program'
    }
  ];

  // 3D Tilt Component
  const ServiceCard3D: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    };

    return (
      <motion.div
        ref={cardRef}
        className="col-lg-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: service.delay }}
      >
        <motion.div
          className="service-card-enhanced-row service-card-3d"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="row g-0 align-items-center">
            {/* Service Image Column */}
            <div className="col-lg-4 col-md-5">
              <motion.div
                className="service-image-wrapper"
                style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="service-image"
                  loading="lazy"
                />
                <motion.div
                  className="image-overlay"
                  style={{
                    background: service.gradient,
                    opacity: isHovered ? 0.15 : 0,
                  }}
                />
                <motion.div
                  className="service-icon-badge"
                  style={{
                    background: service.gradient,
                    transform: isHovered ? "translateZ(50px) scale(1.1)" : "translateZ(20px) scale(1)",
                  }}
                >
                  <i className={service.icon}></i>
                </motion.div>
                {service.badge && (
                  <motion.div
                    className="service-badge"
                    style={{
                      transform: isHovered ? "translateZ(40px)" : "translateZ(15px)",
                    }}
                  >
                    <i className="bx bx-star"></i>
                    <span>{service.badge}</span>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Service Content Column */}
            <div className="col-lg-8 col-md-7">
              <motion.div
                className="service-body"
                style={{ transform: isHovered ? "translateZ(25px)" : "translateZ(0px)" }}
              >
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-features-list">
                  {service.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: service.delay + (idx * 0.1) }}
                    >
                      <i className="bx bx-check-circle"></i>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Spotlight Effect */}
          <motion.div
            className="spotlight-effect"
            style={{
              background: `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        </motion.div>
      </motion.div>
    );
  };

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
              <ServiceCard3D key={index} service={service} index={index} />
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
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 20px 60px rgba(12, 75, 162, 0.12),
            0 0 0 1px rgba(12, 75, 162, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid transparent;
          margin-bottom: 30px;
        }

        /* 3D Card Enhancements */
        .service-card-3d {
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .service-card-enhanced-row:hover {
          box-shadow:
            0 30px 90px rgba(12, 75, 162, 0.25),
            0 0 0 2px rgba(12, 75, 162, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 1);
          border-color: rgba(12, 75, 162, 0.3);
          transform: translateY(-5px);
        }

        .service-card-enhanced-row::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 50%, #0C4BA2 100%);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: shimmer 3s linear infinite;
        }

        .service-card-enhanced-row:hover::after {
          opacity: 1;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* Spotlight Effect */
        .spotlight-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
          transition: opacity 0.3s ease;
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
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 15px 40px rgba(12, 75, 162, 0.4),
            0 0 0 3px rgba(255, 255, 255, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.3);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 10;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }

        .service-card-enhanced-row:hover .service-icon-badge {
          transform: scale(1.2) rotate(15deg) translateY(-5px);
          box-shadow:
            0 20px 50px rgba(12, 75, 162, 0.5),
            0 0 0 4px rgba(255, 255, 255, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.5);
          animation: none;
        }

        .service-icon-badge i {
          font-size: 40px;
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          transition: all 0.3s ease;
        }

        .service-card-enhanced-row:hover .service-icon-badge i {
          transform: scale(1.1);
        }

        /* Service Badge (Premium) */
        .service-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(255, 193, 7, 0.95) 0%, rgba(255, 152, 0, 0.95) 100%);
          backdrop-filter: blur(15px);
          border-radius: 30px;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow:
            0 10px 30px rgba(255, 193, 7, 0.4),
            0 0 0 2px rgba(255, 255, 255, 0.3);
          z-index: 10;
          transition: all 0.4s ease;
          animation: pulse-badge 3s ease-in-out infinite;
        }

        @keyframes pulse-badge {
          0%, 100% {
            box-shadow:
              0 10px 30px rgba(255, 193, 7, 0.4),
              0 0 0 2px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow:
              0 15px 40px rgba(255, 193, 7, 0.6),
              0 0 0 3px rgba(255, 255, 255, 0.5);
          }
        }

        .service-card-enhanced-row:hover .service-badge {
          transform: scale(1.1) rotate(-3deg);
          animation: none;
        }

        .service-badge i {
          font-size: 20px;
          color: #fff;
          animation: star-spin 4s linear infinite;
        }

        @keyframes star-spin {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.2);
          }
        }

        /* Service Body */
        .service-body {
          padding: 40px;
        }

        .service-title {
          font-size: 32px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 30px;
          transition: all 0.4s ease;
          position: relative;
          padding-bottom: 15px;
        }

        .service-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .service-card-enhanced-row:hover .service-title {
          color: #0C4BA2;
          transform: translateX(5px);
        }

        .service-card-enhanced-row:hover .service-title::after {
          width: 80px;
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
          font-size: 24px;
          margin-right: 15px;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.3s ease;
          position: relative;
        }

        .service-card-enhanced-row:hover .service-features-list li i {
          transform: scale(1.2) rotate(360deg);
          color: #1FB6E8;
        }

        .service-features-list li i::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(12, 75, 162, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card-enhanced-row:hover .service-features-list li i::before {
          opacity: 1;
        }

        .service-features-list li span {
          color: #64748b;
          font-size: 16px;
          line-height: 1.8;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .service-card-enhanced-row:hover .service-features-list li span {
          color: #1a1a1a;
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
