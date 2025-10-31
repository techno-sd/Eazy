"use client";

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';

const FooterLanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    // Remove the current locale prefix from the path
    let pathWithoutLocale = pathname.replace(new RegExp(`^/(${locales.join('|')})`), '');
    // If the path is empty or just '/', go to the root of the new locale
    if (pathWithoutLocale === '' || pathWithoutLocale === '/') {
      router.push(`/${newLocale}`);
    } else {
      router.push(`/${newLocale}${pathWithoutLocale}`);
    }
  };

  return (
    <>
      <div className="footer-language-switcher">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
          aria-label="Switch to English"
        >
          <span className="lang-icon">EN</span>
          <span className="lang-text">English</span>
        </button>
        <div className="lang-divider"></div>
        <button
          onClick={() => handleLanguageChange('ar')}
          className={`lang-btn ${locale === 'ar' ? 'active' : ''}`}
          aria-label="Switch to Arabic"
        >
          <span className="lang-icon">AR</span>
          <span className="lang-text">العربية</span>
        </button>
      </div>

      <style jsx>{`
        .footer-language-switcher {
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 5px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: transparent;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
          font-size: 14px;
          font-weight: 500;
        }

        .lang-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .lang-btn.active {
          background: linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%);
          box-shadow: 0 5px 15px rgba(31, 182, 232, 0.4);
        }

        .lang-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .lang-btn.active .lang-icon {
          background: rgba(255, 255, 255, 0.3);
        }

        .lang-text {
          font-size: 14px;
          font-weight: 600;
        }

        .lang-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 767px) {
          .footer-language-switcher {
            width: 100%;
            justify-content: center;
          }

          .lang-text {
            display: none;
          }

          .lang-btn {
            padding: 10px 15px;
          }
        }
      `}</style>
    </>
  );
};

export default FooterLanguageSwitcher;
