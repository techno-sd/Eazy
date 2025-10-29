"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const VisionMission: React.FC = () => {
  const t = useTranslations('about');

  return (
    <>
      <section className="approach-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span>{t('subtitle')}</span>
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/img/approach-img.jpg"
                  alt="About Eazy Cyber Agent"
                  width={660}
                  height={700}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <ul>
                  <li>
                    <i className="flaticon-cyber-security"></i>
                    <h3>{t('vision.title')}</h3>
                    <p>{t('vision.description')}</p>
                  </li>
                  <li>
                    <i className="flaticon-profile"></i>
                    <h3>{t('mission.title')}</h3>
                    <p>{t('mission.description')}</p>
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

export default VisionMission;
