"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';


const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLocale: Locale) => {
    let pathWithoutLocale = pathname.replace(new RegExp(`^/(${locales.join('|')})`), '');
    if (pathWithoutLocale === '' || pathWithoutLocale === '/') {
      router.push(`/${newLocale}`);
    } else {
      router.push(`/${newLocale}${pathWithoutLocale}`);
    }
    setOpen(false);
  };

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setFocusIndex(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setFocusIndex(null);
      }
      if (open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault();
        setFocusIndex((prev) => {
          if (prev === null) return 0;
          if (e.key === 'ArrowDown') return (prev + 1) % 2;
          if (e.key === 'ArrowUp') return (prev - 1 + 2) % 2;
          return prev;
        });
      }
      if (open && e.key === 'Enter' && focusIndex !== null) {
        if (focusIndex === 0) handleLanguageChange('en');
        if (focusIndex === 1) handleLanguageChange('ar');
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleKey);
    } else {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open, focusIndex]);

  return (
    <div className="main-language-switcher-dropdown" ref={dropdownRef}>
      <button
        className="dropdown-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setOpen((v) => !v);
          setFocusIndex(null);
        }}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            setOpen(true);
            setFocusIndex(0);
          }
        }}
      >
        <span className="lang-flag" role="img" aria-label={locale === 'en' ? 'English' : 'Arabic'}>{locale === 'en' ? '🇬🇧' : '🇸🇦'}</span>
        <span className="chevron" aria-hidden="true">▼</span>
      </button>
      <ul className="dropdown-menu" role="listbox" style={{ display: open ? 'block' : 'none' }}>
        <li
          role="option"
          aria-selected={locale === 'en'}
          onClick={() => handleLanguageChange('en')}
          className={locale === 'en' ? 'selected' : ''}
          tabIndex={-1}
          style={focusIndex === 0 ? { background: 'rgba(31,182,232,0.10)' } : {}}
        >
          <span className="lang-flag" role="img" aria-label="English">🇬🇧</span> English
        </li>
        <li
          role="option"
          aria-selected={locale === 'ar'}
          onClick={() => handleLanguageChange('ar')}
          className={locale === 'ar' ? 'selected' : ''}
          tabIndex={-1}
          style={focusIndex === 1 ? { background: 'rgba(31,182,232,0.10)' } : {}}
        >
          <span className="lang-flag" role="img" aria-label="Arabic">🇸🇦</span> العربية
        </li>
      </ul>
      <style jsx>{`
        .chevron {
          margin-left: 8px;
          font-size: 12px;
          color: #0C4BA2;
          transition: transform 0.2s;
        }
        .dropdown-toggle[aria-expanded="true"] .chevron {
          transform: rotate(180deg);
        }
        .main-language-switcher-dropdown {
          position: relative;
          display: inline-block;
        }
        .dropdown-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 50px;
          padding: 8px 18px;
          font-size: 18px;
          color: #0C4BA2;
          cursor: pointer;
          transition: background 0.2s;
          box-shadow: 0 2px 12px rgba(31,182,232,0.08);
        }
        .dropdown-toggle:focus {
          outline: 2px solid #1FB6E8;
        }
        .dropdown-menu {
          position: absolute;
          left: 0;
          top: 110%;
          min-width: 140px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(31,182,232,0.10);
          margin: 0;
          padding: 8px 0;
          z-index: 100;
          list-style: none;
        }
        .dropdown-menu li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          font-size: 16px;
          color: #0C4BA2;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .dropdown-menu li.selected,
        .dropdown-menu li:hover {
          background: linear-gradient(90deg, #1FB6E8 0%, #0C4BA2 100%);
          color: #fff;
        }
        .lang-flag {
          font-size: 20px;
        }
        @media (max-width: 767px) {
          .dropdown-toggle {
            padding: 8px 12px;
          }
          .dropdown-menu {
            min-width: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
