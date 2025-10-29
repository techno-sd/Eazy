"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const CybersecurityServices: React.FC = () => {
  const t = useTranslations('home.services.cybersecurity');

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
                <span className="sub-title">Professional Security</span>
                <h2>{t('title')}</h2>
                <p>
                  Comprehensive cybersecurity services to protect your organization from evolving threats and ensure compliance with NCA and ISO 27001 standards.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-cyber-security"></i>
                      <h3>Penetration Testing</h3>
                      <p>{t('service1')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-security"></i>
                      <h3>Risk Management</h3>
                      <p>{t('service2')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-security-camera"></i>
                      <h3>SOC Services</h3>
                      <p>{t('service3')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-profile"></i>
                      <h3>Security Training</h3>
                      <p>{t('service4')}</p>
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

export default CybersecurityServices;
