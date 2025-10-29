"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const CloudComputing: React.FC = () => {
  const t = useTranslations('home.services.cloudComputing');

  return (
    <>
      <section className="approach-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span>Cloud Infrastructure</span>
            <h2>{t('title')}</h2>
            <p>
              Secure and compliant cloud solutions tailored to meet Saudi regulations, ensuring your data is protected and always accessible with enterprise-grade reliability.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="approach-content">
                <ul>
                  <li>
                    <i className="flaticon-cloud-computing"></i>
                    <h3>Secure Hosting</h3>
                    <p>{t('service1')}</p>
                  </li>
                  <li>
                    <i className="flaticon-support"></i>
                    <h3>Backup & Recovery</h3>
                    <p>{t('service2')}</p>
                  </li>
                  <li>
                    <i className="flaticon-security"></i>
                    <h3>Data Protection</h3>
                    <p>{t('service3')}</p>
                  </li>
                  <li>
                    <i className="flaticon-profile"></i>
                    <h3>Access Management</h3>
                    <p>{t('service4')}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/img/approach-img.jpg"
                  alt="Cloud Computing"
                  width={660}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudComputing;
