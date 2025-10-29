"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Vision2030Content: React.FC = () => {
  const t = useTranslations('vision2030');

  return (
    <>
      <section className="complete-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 pl-0">
              <div
                className="complete-img"
                style={{
                  backgroundImage: `url(/img/complete-img.jpg)`,
                }}
              ></div>
            </div>
            <div className="col-lg-6">
              <div className="complete-content">
                <span className="sub-title">{t('subtitle')}</span>
                <h2>{t('title')}</h2>
                <p>{t('description')}</p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-cyber-security"></i>
                      <h3>{t('focus1.title')}</h3>
                      <p>{t('focus1.description')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-security"></i>
                      <h3>{t('focus2.title')}</h3>
                      <p>{t('focus2.description')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-rocket"></i>
                      <h3>{t('focus3.title')}</h3>
                      <p>{t('focus3.description')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-training"></i>
                      <h3>{t('focus4.title')}</h3>
                      <p>{t('focus4.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="complete-shape">
          <Image
            src="/img/complete-shape.png"
            alt="Decorative shape element"
            width={423}
            height={611}
          />
        </div>
      </section>
    </>
  );
};

export default Vision2030Content;
