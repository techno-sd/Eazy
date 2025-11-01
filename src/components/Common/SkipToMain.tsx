"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

const SkipToMain: React.FC = () => {
  const t = useTranslations('accessibility');

  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      className="skip-to-main"
      onClick={handleSkip}
    >
      {t('skipToMain') || 'Skip to main content'}
    </a>
  );
};

export default SkipToMain;
