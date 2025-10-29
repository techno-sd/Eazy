"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const IndustriesHighlight: React.FC = () => {
  const t = useTranslations('industries.highlight');

  return (
    <>
      <section className="approach-area ptb-100 bg-color">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/img/approach-img.jpg"
                  alt="Industries We Serve"
                  width={660}
                  height={700}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <span className="sub-title">{t('subtitle')}</span>
                <h2>{t('title')}</h2>
                <p>{t('description')}</p>

                <ul>
                  <li>
                    <i className="flaticon-cyber-security"></i>
                    <h3>{t('feature1.title')}</h3>
                    <p>{t('feature1.description')}</p>
                  </li>
                  <li>
                    <i className="flaticon-security"></i>
                    <h3>{t('feature2.title')}</h3>
                    <p>{t('feature2.description')}</p>
                  </li>
                  <li>
                    <i className="flaticon-support"></i>
                    <h3>{t('feature3.title')}</h3>
                    <p>{t('feature3.description')}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesHighlight;
