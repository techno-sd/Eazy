"use client";
  

import React from "react";
import { useTranslations } from 'next-intl';

const WebsiteSecurity: React.FC = () => {
  const t = useTranslations('home.websiteSecurity');
  return (
    <>
      <section className="security-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i className="flaticon-bug"></i>
                <h3>{t('malwareTitle')}</h3>
                <p>{t('malwareDesc')}</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i className="flaticon-content"></i>
                <h3>{t('cdnTitle')}</h3>
                <p>{t('cdnDesc')}</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i className="flaticon-support"></i>
                <h3>{t('supportTitle')}</h3>
                <p>{t('supportDesc')}</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>{t('managedTitle')}</h3>
                <p>{t('managedDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteSecurity;
