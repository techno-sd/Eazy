import "../../../styles/bootstrap.min.css";
import "../../../styles/animate.css";
import "../../../styles/boxicons.min.css";
import "../../../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../../../styles/style.css";
import "../../../styles/responsive.css";
// Global RTL Style
import "../../../styles/rtl.css";
// Accessibility Enhancements
import "../../../styles/accessibility.css";
// UI/UX Enhancements
import "../../../styles/enhancements.css";
// Dark Sections Styles
import "../../../styles/dark-sections.css";
// Industry Best Practices
import "../../../styles/industry-ux.css";
// Enhanced Layout & Cards
import "../../../styles/enhanced-layout.css";
// Premium Design System
import "../../../styles/premium-design.css";
// Modern Navigation Menu
import "../../../styles/modern-navbar.css";
// Cybersecurity Theme
import "../../../styles/cybersecurity-theme.css";
// Logo Enhancement
import "../../../styles/logo-enhancement.css";

import type { Metadata } from "next";
import { Rubik, Barlow_Condensed } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';

// For all body text font
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

// For all heading font
const barlow_condensed = Barlow_Condensed({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pisa - Cyber Security Services Company React Next Template",
  description: "Cyber Security Services Company React Next Template",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages({ locale });

  // Determine text direction based on locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={`${rubik.variable} ${barlow_condensed.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextIntlClientProvider messages={messages}>
          <div id="main-content">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
