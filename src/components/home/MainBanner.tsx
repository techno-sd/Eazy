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

  // Remove scroll-based parallax and button animations
  const springY1 = 0;
  const springY2 = 0;
  const springButtonY = 0;
  const scale = 1;
  const buttonOpacity = 1;

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
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  const fadeInLeft: any = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  const fadeInRight: any = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  const staggerContainer: any = {
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
                >
                  {t('title')}
                </motion.h1>

                <motion.p
                  variants={fadeInRight}
                >
                  {t('description')}
                </motion.p>

                <motion.div
                  className="banner-btn"
                  variants={fadeInUp}
                  style={{}}
                >
                  <Link href={`/${locale}/contact`} className="default-btn">
                    {t('bookingNow')}
                  </Link>
                  <Link href={`/${locale}/about`} className="default-btn active">
                    {t('aboutUs')}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <Features />
        </div>

        <div className="lines">
          <motion.div className="line" />
          <motion.div className="line" />
          <motion.div className="line" />
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

        /* Enhanced Hero Button Hover */
        .default-btn,
        .default-btn.active {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .default-btn:hover,
        .default-btn.active:hover {
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          color: #fff !important;
          box-shadow: 0 8px 32px rgba(31,182,232,0.18), 0 2px 12px rgba(12,75,162,0.12);
          transform: translateY(-3px) scale(1.04);
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
