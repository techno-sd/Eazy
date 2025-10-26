"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const Features: React.FC = () => {
  const t = useTranslations('home.features');

  return (
    <>
      <div className="container pt-100">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <h3>
                <i className="bx bx-check-shield"></i> {t('securityTitle')}
              </h3>
              <p>
                {t('securityDesc')}
              </p>
              <span className="bx bx-check-shield"></span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-features">
              <h3>
                <i className="bx bx-lock"></i> {t('privacyTitle')}
              </h3>
              <p>
                {t('privacyDesc')}
              </p>
              <span className="bx bx-lock"></span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
            <div className="single-features mb-0">
              <h3>
                <i className="bx bx-certification"></i> {t('industryCertifiedTitle')}
              </h3>
              <p>
                {t('industryCertifiedDesc')}
              </p>
              <span className="bx bx-certification"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
