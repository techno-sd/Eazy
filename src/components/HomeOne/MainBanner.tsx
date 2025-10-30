"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Features from "./Features";
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const t = useTranslations('home.mainBanner');
  const locale = useLocale();

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

      <div
        className="banner-area"
        style={{
          backgroundImage: `url(/img/home-one/cover.png)`
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
              >
                <motion.span
                  variants={fadeInUp}
                >
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
        <Features />

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
