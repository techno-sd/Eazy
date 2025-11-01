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
// Global RTL Style - MUST load LAST to override all other styles
import "../../../styles/rtl.css";

import type { Metadata } from "next";
import { Rubik, Barlow_Condensed } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import PerformanceMonitor from "@/components/Common/PerformanceMonitor";

// For all body text font - optimized loading
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
  preload: true,
});

// For all heading font - optimized loading
const barlow_condensed = Barlow_Condensed({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eazycyber.sa'),
  title: {
    default: "Eazy Cyber Agent - Cyber Security Services Company",
    template: "%s | Eazy Cyber Agent"
  },
  description: "Leading Cyber Security and Digital Solutions Provider in Saudi Arabia. Specialized in AI, Big Data, Cloud Computing, and Cybersecurity Services aligned with Vision 2030.",
  keywords: ["cybersecurity", "cyber security saudi arabia", "digital solutions", "AI solutions", "big data", "cloud computing", "vision 2030", "eazy cyber agent", "SME security"],
  authors: [{ name: "Eazy Cyber Agent" }],
  creator: "Eazy Cyber Agent",
  publisher: "Eazy Cyber Agent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Eazy Cyber Agent - Cyber Security Services Company",
    description: "Leading Cyber Security and Digital Solutions Provider in Saudi Arabia",
    url: 'https://www.eazycyber.sa',
    siteName: 'Eazy Cyber Agent',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Eazy Cyber Agent Logo',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eazy Cyber Agent - Cyber Security Services',
    description: 'Leading Cyber Security and Digital Solutions Provider in Saudi Arabia',
    images: ['/img/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/img/favicon.png',
    shortcut: '/img/favicon.png',
    apple: '/img/logo.png',
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
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
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        {/* Preconnect to improve font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS - Prevent FOUC */
            * {
              box-sizing: border-box;
            }

            html {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            body {
              margin: 0;
              padding: 0;
              min-height: 100vh;
              background: #010c16;
              font-family: var(--font-rubik), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              overflow-x: hidden;
            }

            /* Critical CSS Preloader - Instant Display */
            #critical-preloader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #010c16;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 99999;
              opacity: 1;
              transition: opacity 0.3s ease-out;
            }

            body.react-loaded #critical-preloader {
              display: none;
            }

            .critical-spinner {
              width: 50px;
              height: 50px;
              border: 3px solid rgba(31, 182, 232, 0.2);
              border-top-color: #1FB6E8;
              border-radius: 50%;
              animation: spin 0.8s linear infinite;
            }

            @keyframes spin {
              to { transform: rotate(360deg); }
            }

            /* Hide content until loaded */
            #main-content {
              opacity: 0;
              transition: opacity 0.2s ease-in;
            }

            body.page-loaded #main-content {
              opacity: 1;
            }
          `
        }} />
      </head>
      <body className={`${rubik.variable} ${barlow_condensed.variable}`}>
        {/* Performance Monitoring */}
        <PerformanceMonitor />

        {/* Critical CSS Preloader - Shows instantly before React loads */}
        <div id="critical-preloader">
          <div className="critical-spinner"></div>
        </div>

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
