"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const HighPerformanceSolutions: React.FC = () => {
  const t = useTranslations('home.highPerformanceSolutions');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{t('title')}</h2>
            <p>
              {t('description')}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div
                className="single-solutions"
                style={{
                  backgroundImage: `url(/img/solution/solution-img1.jpg)`,
                }}
              >
                <div className="solutions-content">
                  <h3>{t('managedITTitle')}</h3>
                  <p>
                    {t('managedITDesc')}
                  </p>
                  <Link href={`/${locale}/services/details`} className="read-more">
                    {tCommon('readMore')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div
                    className="single-solutions"
                    style={{
                      backgroundImage: `url(/img/solution/solution-img2.jpg)`,
                    }}
                  >
                    <div className="solutions-content">
                      <h3>{t('complianceTitle')}</h3>
                      <p>
                        {t('complianceDesc')}
                      </p>
                      <Link href={`/${locale}/services/details`} className="read-more">
                        {tCommon('readMore')}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div
                    className="single-solutions"
                    style={{
                      backgroundImage: `url(/img/solution/solution-img3.jpg)`,
                    }}
                  >
                    <div className="solutions-content">
                      <h3>{t('cyberSecurityTitle')}</h3>
                      <p>
                        {t('cyberSecurityDesc')}
                      </p>
                      <Link href={`/${locale}/services/details`} className="read-more">
                        {tCommon('readMore')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div
                    className="single-solutions"
                    style={{
                      backgroundImage: `url(/img/solution/solution-img4.jpg)`,
                    }}
                  >
                    <div className="solutions-content">
                      <h3>{t('disasterPlanningTitle')}</h3>
                      <p>
                        {t('disasterPlanningDesc')}
                      </p>
                      <Link href={`/${locale}/services/details`} className="read-more">
                        {tCommon('readMore')}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div
                    className="single-solutions"
                    style={{
                      backgroundImage: `url(/img/solution/solution-img5.jpg)`,
                    }}
                  >
                    <div className="solutions-content">
                      <h3>{t('secureByDesignTitle')}</h3>
                      <p>
                        {t('secureByDesignDesc')}
                      </p>
                      <Link href={`/${locale}/services/details`} className="read-more">
                        {tCommon('readMore')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="single-solutions"
                style={{
                  backgroundImage: `url(/img/solution/solution-img6.jpg)`,
                }}
              >
                <div className="solutions-content">
                  <h3>{t('awarenessTrainingTitle')}</h3>
                  <p>
                    {t('awarenessTrainingDesc')}
                  </p>
                  <Link href={`/${locale}/services/details`} className="read-more">
                    {tCommon('readMore')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighPerformanceSolutions;
