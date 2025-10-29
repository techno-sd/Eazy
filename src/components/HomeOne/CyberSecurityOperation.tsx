"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const CyberSecurityOperation: React.FC = () => {
  const t = useTranslations('home.cyberSecurityOperation');

  return (
    <>
      <section className="cybersecurity-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="cybersecurity-content">
                <h2>{t('title')}</h2>
                <p>
                  {t('description')}
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="cybersecurity-item">
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature1')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature2')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature3')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature4')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature5')}
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature6')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature7')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature8')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature9')}
                      </li>
                      <li>
                        <i className="bx bx-check"></i>
                        {t('feature10')}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pr-0">
              <div className="cybersecurity-img"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CyberSecurityOperation;
