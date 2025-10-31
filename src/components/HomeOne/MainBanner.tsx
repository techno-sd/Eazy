"use client";

import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Features from "./Features";
import { useTranslations, useLocale } from 'next-intl';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const t = useTranslations('home.mainBanner');
  const locale = useLocale();
  const bannerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Button-specific animations
  const buttonY = useTransform(scrollY, [0, 400], [0, -80]);
  const buttonOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Smooth spring animations
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const springButtonY = useSpring(buttonY, { stiffness: 100, damping: 30 });

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 30, y: y * 30 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants for directional animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <motion.div
        ref={bannerRef}
        className="banner-area"
        style={{
          backgroundImage: `url(/img/home-one/cover.png)`,
        }}
      >

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <motion.div
                className="banner-text"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                style={{ scale }}
              >
                <motion.span
                  className="badge-enhanced"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="badge-glow"></span>
                  {t('badge')}
                </motion.span>
                <motion.h1
                  variants={fadeInLeft}
                  style={{ y: springY2 }}
                >
                  {t('title')}
                </motion.h1>
                <motion.p
                  variants={fadeInRight}
                  style={{ y: springY1 }}
                >
                  {t('description')}
                </motion.p>

                <motion.div
                  className="banner-btn"
                  variants={fadeInUp}
                  style={{
                    y: springButtonY,
                    opacity: buttonOpacity
                  }}
                >
                  <Link href={`/${locale}/contact`} className="default-btn magnetic-btn">
                    <span className="btn-text">{t('bookingNow')}</span>
                    <span className="btn-bg"></span>
                    <span className="btn-ripple"></span>
                  </Link>

                  <Link href={`/${locale}/about`} className="default-btn active magnetic-btn">
                    <span className="btn-text">{t('aboutUs')}</span>
                    <span className="btn-bg"></span>
                    <span className="btn-ripple"></span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features */}
        <motion.div style={{ y: springY1 }}>
          <Features />
        </motion.div>

        <div className="lines">
          <motion.div className="line" style={{ y: springY1 }} />
          <motion.div className="line" style={{ y: springY2 }} />
          <motion.div className="line" style={{ y: springY1 }} />
        </div>
      </motion.div>

      <style jsx global>{`

        /* Enhanced Badge */
        .banner-area .banner-text span.badge-enhanced {
          position: relative;
          display: inline-block;
          padding: 0 !important;
          background: none !important;
          background-color: transparent !important;
          backdrop-filter: none !important;
          border: none !important;
          border-radius: 0 !important;
          font-weight: 600 !important;
          letter-spacing: 1px;
          overflow: visible;
          cursor: default;
          box-shadow: none !important;
        }

        .badge-glow {
          display: none;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        /* Magnetic Button Effect */
        .magnetic-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .magnetic-btn .btn-text {
          position: relative;
          z-index: 2;
        }

        .magnetic-btn .btn-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: inherit;
          z-index: 1;
        }

        .magnetic-btn:hover .btn-bg {
          transform: scale(1);
        }

        .magnetic-btn .btn-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .magnetic-btn:hover .btn-ripple {
          width: 300px;
          height: 300px;
          opacity: 0;
        }

        .magnetic-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(12, 75, 162, 0.4);
        }

        /* Enhanced Banner Text */
        .banner-text {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .banner-text h1 {
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .banner-text p {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .banner-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .gradient-orb {
            filter: blur(60px);
          }

          .orb-1, .orb-2, .orb-3 {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </>
  );
};

export default MainBanner;
