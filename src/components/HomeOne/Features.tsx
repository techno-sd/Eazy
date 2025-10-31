"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const Features: React.FC = () => {
  const t = useTranslations('home.features');

  return (
    <>
      <div className="container pt-100">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-6">
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

          <div className="col-lg-6 col-sm-6">
            <div className="single-features mb-0">
              <h3>
                <i className="bx bx-lock"></i> {t('privacyTitle')}
              </h3>
              <p>
                {t('privacyDesc')}
              </p>
              <span className="bx bx-lock"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
