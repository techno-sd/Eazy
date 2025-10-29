"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const AISolutions: React.FC = () => {
  const t = useTranslations('home.services.aiSolutions');

  return (
    <>
      <section className="approach-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span>Artificial Intelligence</span>
            <h2>{t('title')}</h2>
            <p>
              Leverage cutting-edge artificial intelligence to transform your business operations and enhance cybersecurity capabilities aligned with Saudi Vision 2030.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/img/cybersecurity-img.jpg"
                  alt="AI Solutions"
                  width={660}
                  height={700}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <ul>
                  <li>
                    <i className="flaticon-artificial-intelligence"></i>
                    <h3>Intelligent Chatbots</h3>
                    <p>{t('service1')}</p>
                  </li>
                  <li>
                    <i className="flaticon-analytics"></i>
                    <h3>Predictive Analytics</h3>
                    <p>{t('service2')}</p>
                  </li>
                  <li>
                    <i className="flaticon-cyber-security"></i>
                    <h3>AI-Powered Security</h3>
                    <p>{t('service3')}</p>
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

export default AISolutions;
