"use client";

import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const locale = useLocale();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70 jarallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget contact">
                <h3>{t('contactUs')}</h3>

                <ul className="contact-info">
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <span>{t('hotline')}</span>
                    <a href="tel:Phone:+892-569-756">{t('phone')}</a>
                  </li>

                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>{t('email')}</span>
                    <a href="mailto:hello@pisa.com">{t('emailAddress')}</a>
                  </li>

                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>{t('address')}</span>
                    {t('addressText')}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>{t('servicesLink')}</h3>

                <ul>
                  <li>
                    <Link href={`/${locale}/services/details`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('webSiteProtection')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/services/details`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('hostingServerGuard')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/services/details`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('webAdministrator')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/services/details`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('conductingTraining')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/services/details`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('grpsSmartProtection')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/services/details`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('securityApp')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>{t('supportHelp')}</h3>

                <ul>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('supportForum')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/faq`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('faqQuestions')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('supportHelp')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('supportForum')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('supportHelp')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('securityApp')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>{t('quickLinks')}</h3>

                <ul>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('securityApp')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('webSiteProtection')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('webSiteProtection')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('securityApp')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('webSiteProtection')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      <i className="bx bx-chevrons-right"></i>
                      {t('securityApp')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copy-right">
                <p>
                  {t('copyrightText')} &copy;{currentYear} {t('company')}. {t('allRightsReserved')}{" "}
                  <a href="https://envytheme.com/" target="blank">
                    EnvyTheme
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="condition-privacy">
                <ul>
                  <li>
                    <Link href={`/${locale}/terms-conditions`}>{t('termsService')}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/privacy-policy`}>{useTranslations('nav')('privacyPolicy')}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
