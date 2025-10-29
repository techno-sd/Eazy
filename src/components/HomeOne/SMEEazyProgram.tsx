"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const SMEEazyProgram: React.FC = () => {
  const t = useTranslations('home.services.smeEazy');

  return (
    <>
      <section className="complete-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="complete-content">
                <span className="sub-title">Vision 2030 Initiative</span>
                <h2>{t('title')}</h2>
                <p>{t('description')}</p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-cyber-security"></i>
                      <h3>Multi-Layered Protection</h3>
                      <p>{t('service1')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security">
                      <i className="flaticon-budget"></i>
                      <h3>Affordable Solutions</h3>
                      <p>{t('service2')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0 mb-rs-need">
                      <i className="flaticon-training"></i>
                      <h3>Security Training</h3>
                      <p>{t('service3')}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-security mb-0">
                      <i className="flaticon-data-analytics"></i>
                      <h3>Risk Analytics</h3>
                      <p>{t('service4')}</p>
                    </div>
                  </div>
                </div>

                <div className="vision-2030-badge" style={{
                  marginTop: '30px',
                  padding: '20px',
                  backgroundColor: '#fef4f8',
                  borderLeft: '4px solid #d80650',
                  borderRadius: '5px'
                }}>
                  <p style={{ margin: 0, fontStyle: 'italic', color: '#0e0129', fontSize: '15px' }}>
                    <i className="bx bx-info-circle" style={{ fontSize: '20px', marginRight: '10px', color: '#d80650', verticalAlign: 'middle' }}></i>
                    {t('note')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pr-0">
              <div
                className="complete-img"
                style={{
                  backgroundImage: `url(/img/cybersecurity-img-3.jpg)`,
                }}
              ></div>
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

export default SMEEazyProgram;
