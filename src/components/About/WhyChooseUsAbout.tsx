"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const WhyChooseUsAbout: React.FC = () => {
  const t = useTranslations('about.whyChooseUs');

  return (
    <>
      <section className="security-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">{t('subtitle')}</span>
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-password"></i>
                <h3>{t('reason1.title')}</h3>
                <p>{t('reason1.description')}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-cyber-security"></i>
                <h3>{t('reason2.title')}</h3>
                <p>{t('reason2.description')}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-security"></i>
                <h3>{t('reason3.title')}</h3>
                <p>{t('reason3.description')}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-price-tag"></i>
                <h3>{t('reason4.title')}</h3>
                <p>{t('reason4.description')}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-support"></i>
                <h3>{t('reason5.title')}</h3>
                <p>{t('reason5.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsAbout;
