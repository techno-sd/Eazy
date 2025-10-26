"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Features from "./Features";
import { useTranslations, useLocale } from 'next-intl';

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const t = useTranslations('home.mainBanner');
  const locale = useLocale();

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className="banner-area"
        style={{
          backgroundImage: `url(/img/home-one/home1-banner.jpg)`
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="banner-text">
                <span>
                  {t('badge')}
                </span>
                <h1>{t('title')}</h1>
                <p>
                  {t('description')}
                </p>

                <div className="banner-btn">
                  <Link href={`/${locale}/contact`} className="default-btn">
                    {t('bookingNow')}
                  </Link>

                  <Link href={`/${locale}/about`} className="default-btn active">
                    {t('aboutUs')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="video-btn-animat one">
                <div onClick={() => setToggler(!toggler)} className="video-btn">
                  <i className="bx bx-play"></i>
                </div>
              </div>
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
