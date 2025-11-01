import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/home/MainBanner";
import ScrollToTop from "@/components/Common/ScrollToTop";
import ScrollProgress from "@/components/Common/ScrollProgress";
import SkipToMain from "@/components/Common/SkipToMain";

// Lazy load components below the fold
const AnimatedBackground = dynamic(() => import("@/components/Common/AnimatedBackground"), { ssr: false });
const FloatingCTA = dynamic(() => import("@/components/Common/FloatingCTA"), { ssr: false });
const TrustBadges = dynamic(() => import("@/components/Common/TrustBadges"));
const AboutSectionClean = dynamic(() => import("@/components/home/AboutSectionClean"));
const Vision2030Content = dynamic(() => import("@/components/Vision2030/Vision2030Content"));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));
const IndustriesGrid = dynamic(() => import("@/components/Industries/IndustriesGrid"));
const WhyChooseUsAbout = dynamic(() => import("@/components/About/WhyChooseUsAbout"));
const ContactSection = dynamic(() => import("@/components/home/ContactSection"));
const Testimonials = dynamic(() => import("@/components/Common/Testimonials"));
const LatesNews = dynamic(() => import("@/components/Common/LatesNews"));
const Footer = dynamic(() => import("@/components/Layouts/Footer"));

export default function Home() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Skip to Main Content (Accessibility) */}
      <SkipToMain />

      {/* Animated Particle Background */}
      <AnimatedBackground />

      {/* Floating Engagement Elements */}
      <FloatingCTA />

      {/* Smooth Scroll to Top */}
      <ScrollToTop />

      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <MainBanner />

        {/* Trust Signals */}
        <Suspense fallback={<div />}>
          <TrustBadges />
        </Suspense>

        {/* About Section */}
        <div id="about">
          <Suspense fallback={<div />}>
            <AboutSectionClean />
          </Suspense>
        </div>

        {/* Vision 2030 Section */}
        <div id="vision">
          <Suspense fallback={<div />}>
            <Vision2030Content />
          </Suspense>
        </div>

        {/* Services Section */}
        <div id="services">
          <Suspense fallback={<div />}>
            <ServicesSection />
          </Suspense>
        </div>

        {/* Industries Section */}
        <div id="industries">
          <Suspense fallback={<div />}>
            <IndustriesGrid />
          </Suspense>
        </div>

        {/* Why Choose Us Section */}
        <Suspense fallback={<div />}>
          <WhyChooseUsAbout />
        </Suspense>

        {/* Contact Section */}
        <div id="contact">
          <Suspense fallback={<div />}>
            <ContactSection />
          </Suspense>
        </div>

        {/* Latest News from Blog (آخر الأخبار من المدونة) */}
        <Suspense fallback={<div />}>
          <LatesNews />
        </Suspense>
      </main>

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  );
}
