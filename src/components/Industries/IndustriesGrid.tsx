"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const IndustriesGrid: React.FC = () => {
  const t = useTranslations('industries');

  return (
    <>
      <section className="security-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span>{t('subtitle')}</span>
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>{t('government.title')}</h3>
                <p>{t('government.description')}</p>
                <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
                  <li><i className="bx bx-check"></i> {t('government.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('government.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('government.service3')}</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-payment"></i>
                <h3>{t('banking.title')}</h3>
                <p>{t('banking.description')}</p>
                <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
                  <li><i className="bx bx-check"></i> {t('banking.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('banking.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('banking.service3')}</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-data-analytics"></i>
                <h3>{t('energy.title')}</h3>
                <p>{t('energy.description')}</p>
                <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
                  <li><i className="bx bx-check"></i> {t('energy.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('energy.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('energy.service3')}</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-scientist"></i>
                <h3>{t('healthcare.title')}</h3>
                <p>{t('healthcare.description')}</p>
                <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
                  <li><i className="bx bx-check"></i> {t('healthcare.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('healthcare.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('healthcare.service3')}</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-training"></i>
                <h3>{t('education.title')}</h3>
                <p>{t('education.description')}</p>
                <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
                  <li><i className="bx bx-check"></i> {t('education.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('education.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('education.service3')}</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-rocket"></i>
                <h3>{t('sme.title')}</h3>
                <p>{t('sme.description')}</p>
                <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
                  <li><i className="bx bx-check"></i> {t('sme.service1')}</li>
                  <li><i className="bx bx-check"></i> {t('sme.service2')}</li>
                  <li><i className="bx bx-check"></i> {t('sme.service3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesGrid;
