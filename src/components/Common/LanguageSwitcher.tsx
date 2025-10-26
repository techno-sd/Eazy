"use client";

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';

const LanguageSwitcher: React.FC = () => {
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
    <div className="language-switcher">
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value as Locale)}
        className="language-select"
        style={{
          padding: '8px 12px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          backgroundColor: 'white',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
