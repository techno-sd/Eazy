"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const ServicesSection: React.FC = () => {
  const t = useTranslations('home.services');

  return (
    <>
      <section className="security-area pb-70">
        <div className="container">
          <div className="section-title">
            <span>{t('subtitle')}</span>
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
          </div>

          <div className="row">
            {/* AI Solutions */}
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-artificial-intelligence"></i>
                <h3>{t('aiSolutions.title')}</h3>
                <ul>
                  <li><i className="bx bx-check"></i> {t('aiSolutions.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('aiSolutions.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('aiSolutions.service3')}</li>
                </ul>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-cyber-security"></i>
                <h3>{t('cybersecurity.title')}</h3>
                <ul>
                  <li><i className="bx bx-check"></i> {t('cybersecurity.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('cybersecurity.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('cybersecurity.service3')}</li>
                  <li><i className="bx bx-check"></i> {t('cybersecurity.service4')}</li>
                </ul>
              </div>
            </div>

            {/* Big Data */}
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-big-data"></i>
                <h3>{t('bigData.title')}</h3>
                <ul>
                  <li><i className="bx bx-check"></i> {t('bigData.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('bigData.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('bigData.service3')}</li>
                  <li><i className="bx bx-check"></i> {t('bigData.service4')}</li>
                </ul>
              </div>
            </div>

            {/* Cloud Computing */}
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-cloud-computing"></i>
                <h3>{t('cloudComputing.title')}</h3>
                <ul>
                  <li><i className="bx bx-check"></i> {t('cloudComputing.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('cloudComputing.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('cloudComputing.service3')}</li>
                  <li><i className="bx bx-check"></i> {t('cloudComputing.service4')}</li>
                </ul>
              </div>
            </div>

            {/* SME-EAZY Program */}
            <div className="col-lg-8 col-md-12">
              <div className="single-security">
                <i className="flaticon-rocket"></i>
                <h3>{t('smeEazy.title')}</h3>
                <p>{t('smeEazy.description')}</p>
                <ul>
                  <li><i className="bx bx-check"></i> {t('smeEazy.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('smeEazy.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('smeEazy.service3')}</li>
                  <li><i className="bx bx-check"></i> {t('smeEazy.service4')}</li>
                </ul>
                <p style={{marginTop: '15px', fontStyle: 'italic'}}>
                  <i className="bx bx-info-circle"></i> {t('smeEazy.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
