"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const BigDataAnalytics: React.FC = () => {
  const t = useTranslations('home.services.bigData');

  return (
    <>
      <section className="cybersecurity-area ptb-100 bg-color">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="cybersecurity-content">
                <span className="sub-title">Data Intelligence</span>
                <h2>{t('title')}</h2>
                <p>
                  Transform your data into actionable insights with our comprehensive big data and analytics solutions that drive informed decision-making and business growth.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="cybersecurity-item">
                      <li>
                        <i className="bx bx-check"></i>
                        {t('service1')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('service2')}
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('service3')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('service4')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pr-0">
              <div
                className="cybersecurity-img"
                style={{
                  backgroundImage: `url(/img/cybersecurity-img-2.jpg)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BigDataAnalytics;
