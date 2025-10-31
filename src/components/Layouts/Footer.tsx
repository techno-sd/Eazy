"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import FooterLanguageSwitcher from "../Common/FooterLanguageSwitcher";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <>
      <footer className="footer-area">
        <div className="footer-top pt-100 pb-70">
          <div className="container">
            <div className="row">
              {/* Company Info */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link href={`/${locale}/`}>
                      <Image
                        src="/img/logo.png"
                        alt="Eazy Cyber Agent"
                        width={120}
                        height={47}
                      />
                    </Link>
                  </div>
                  <p className="footer-desc">
                    Your trusted partner in building a secure and smart digital future aligned with Saudi Vision 2030.
                  </p>
                  <ul className="social-links">
                    <li>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title quick-links-title">Quick Links</h3>
                  <ul className="footer-links quick-links-list">
                    <li>
                      <Link href={`/${locale}/about`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('aboutUs')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/vision-2030`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('ourVision')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/why-choose-us`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('whyChooseUs')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/team`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('ourTeam')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/contact`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('contact')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title services-title">{tNav('services')}</h3>
                  <ul className="footer-links services-list">
                    <li>
                      <Link href={`/${locale}/services/ai`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('aiSolutions')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/services/cybersecurity`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('cybersecurity')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/services/big-data`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('bigDataAnalytics')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/services/cloud`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('cloudHosting')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/services/sme`}>
                        <i className="bx bx-chevron-right"></i>
                        {tNav('smeProgram')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">{t('contactUs')}</h3>
                  <ul className="footer-contact">
                    <li>
                      <div className="contact-icon">
                        <i className="bx bx-phone-call"></i>
                      </div>
                      <div className="contact-content">
                        <span>Phone</span>
                        <a href="tel:+966123456789">+966 12 345 6789</a>
                      </div>
                    </li>
                    <li>
                      <div className="contact-icon">
                        <i className="bx bx-envelope"></i>
                      </div>
                      <div className="contact-content">
                        <span>Email</span>
                        <a href="mailto:info@eazycyberagent.com">info@eazycyberagent.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="contact-icon">
                        <i className="bx bx-map"></i>
                      </div>
                      <div className="contact-content">
                        <span>Location</span>
                        <p>Riyadh, Saudi Arabia</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 text-center text-lg-start">
                <p className="copyright-text">
                  &copy; {currentYear} Eazy Cyber Agent. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-4 col-md-12 text-center">
                <FooterLanguageSwitcher />
              </div>
              <div className="col-lg-4 col-md-12 text-center text-lg-end">
                <ul className="footer-bottom-links">
                  <li>
                    <Link href={`/${locale}/terms-conditions`}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-area {
          background: linear-gradient(180deg, #0a1e3d 0%, #0C4BA2 100%);
          position: relative;
          overflow: hidden;
        }

        .footer-area::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 20%, rgba(31, 182, 232, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(31, 182, 232, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-top {
          position: relative;
          z-index: 1;
        }

        .footer-widget {
          margin-bottom: 30px;
        }

        .footer-logo {
          margin-bottom: 25px;
        }

        .footer-logo img {
          transition: transform 0.3s ease;
        }

        .footer-logo:hover img {
          transform: scale(1.05);
        }

        .footer-desc {
          color: white;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .social-links {
          display: flex;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .social-links li a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          font-size: 20px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-links li a:hover {
          background: linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(31, 182, 232, 0.4);
        }

        .footer-title {
          color: white;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 15px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #1FB6E8 0%, transparent 100%);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links li a {
          color: white;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .footer-links li a i {
          font-size: 18px;
          transition: transform 0.3s ease;
          color: white;
        }

        .footer-links li a:hover {
          color: #1FB6E8;
          padding-left: 5px;
        }

        .footer-links li a:hover i {
          transform: translateX(3px);
        }

        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact li {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .contact-icon {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          backdrop-filter: blur(10px);
        }

        .contact-icon i {
          font-size: 22px;
          color: #1FB6E8;
        }

        .contact-content {
          flex: 1;
        }

        .contact-content span {
          display: block;
          color: white;
          font-size: 13px;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-content a,
        .contact-content p {
          color: white;
          font-size: 15px;
          font-weight: 500;
          margin: 0;
          transition: color 0.3s ease;
        }

        .contact-content a:hover {
          color: #1FB6E8;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          padding: 25px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
        }

        .copyright-text {
          color: white;
          font-size: 14px;
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          justify-content: flex-end;
          gap: 25px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-bottom-links li a {
          color: white;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-bottom-links li a:hover {
          color: #1FB6E8;
        }

        /* Quick Links Special Styling */
        :global(.quick-links-title) {
          color: white !important;
        }

        :global(.quick-links-list li a) {
          color: white !important;
          font-weight: 500;
        }

        :global(.quick-links-list li a *) {
          color: white !important;
        }

        :global(.quick-links-list li a i) {
          color: white !important;
        }

        :global(.quick-links-list li a:hover) {
          color: #1FB6E8 !important;
        }

        :global(.quick-links-list li a:hover *) {
          color: #1FB6E8 !important;
        }

        :global(.quick-links-list li a:hover i) {
          color: #1FB6E8 !important;
        }

        /* Services Special Styling */
        :global(.services-title) {
          color: white !important;
        }

        :global(.services-list li a) {
          color: white !important;
          font-weight: 500;
        }

        :global(.services-list li a *) {
          color: white !important;
        }

        :global(.services-list li a i) {
          color: white !important;
        }

        :global(.services-list li a:hover) {
          color: #1FB6E8 !important;
        }

        :global(.services-list li a:hover *) {
          color: #1FB6E8 !important;
        }

        :global(.services-list li a:hover i) {
          color: #1FB6E8 !important;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .footer-title {
            font-size: 18px;
          }

          .social-links {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 767px) {
          .footer-bottom .col-lg-4 {
            margin-bottom: 15px;
          }

          .footer-bottom-links {
            justify-content: center;
            margin-top: 10px;
          }

          .copyright-text {
            text-align: center;
            margin-bottom: 15px;
          }
        }

        /* RTL Support */
        [dir="rtl"] .footer-title::after {
          left: auto;
          right: 0;
          background: linear-gradient(270deg, #1FB6E8 0%, transparent 100%);
        }

        [dir="rtl"] .footer-links li a:hover {
          padding-left: 0;
          padding-right: 5px;
        }

        [dir="rtl"] .footer-links li a:hover i {
          transform: translateX(-3px);
        }

        [dir="rtl"] .footer-bottom-links {
          justify-content: flex-start;
        }

        @media (max-width: 767px) {
          [dir="rtl"] .footer-bottom-links {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
