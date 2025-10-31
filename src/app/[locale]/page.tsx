import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeOne/MainBanner";
import Preloader from "@/components/Common/Preloader";
import ScrollToTop from "@/components/Common/ScrollToTop";
import SkeletonLoader from "@/components/Common/SkeletonLoader";

// Lazy load components below the fold
const AnimatedBackground = dynamic(() => import("@/components/Common/AnimatedBackground"), { ssr: false });
const FloatingCTA = dynamic(() => import("@/components/Common/FloatingCTA"), { ssr: false });
const TrustBadges = dynamic(() => import("@/components/Common/TrustBadges"));
const AboutSectionClean = dynamic(() => import("@/components/HomeOne/AboutSectionClean"));
const Vision2030Content = dynamic(() => import("@/components/Vision2030/Vision2030Content"));
const ServicesSection = dynamic(() => import("@/components/HomeOne/ServicesSection"));
const IndustriesGrid = dynamic(() => import("@/components/Industries/IndustriesGrid"));
const WhyChooseUsAbout = dynamic(() => import("@/components/About/WhyChooseUsAbout"));
const ContactSection = dynamic(() => import("@/components/HomeOne/ContactSection"));
const Testimonials = dynamic(() => import("@/components/Common/Testimonials"));
const LatesNews = dynamic(() => import("@/components/Common/LatesNews"));
const Footer = dynamic(() => import("@/components/Layouts/Footer"));

export default function Home() {
  return (
    <>
      {/* High-Performance Preloader */}
      <Preloader />

      {/* Animated Particle Background */}
      <AnimatedBackground />

      {/* Floating Engagement Elements */}
      <FloatingCTA />

      {/* Smooth Scroll to Top */}
      <ScrollToTop />

      <Navbar />

      {/* Hero Section */}
      <MainBanner />

      {/* Trust Signals */}
      <Suspense fallback={<div style={{ padding: '40px 0' }}><SkeletonLoader type="card" count={1} /></div>}>
        <TrustBadges />
      </Suspense>

      {/* About Section */}
      <div id="about">
        <Suspense fallback={<div style={{ padding: '80px 0' }}><SkeletonLoader type="card" count={1} /></div>}>
          <AboutSectionClean />
        </Suspense>
      </div>

      {/* Vision 2030 Section */}
      <div id="vision">
        <Suspense fallback={<div style={{ padding: '80px 0' }}><SkeletonLoader type="card" count={1} /></div>}>
          <Vision2030Content />
        </Suspense>
      </div>

      {/* Services Section */}
      <div id="services">
        <Suspense fallback={<div style={{ padding: '80px 0' }}><SkeletonLoader type="service-card" count={3} /></div>}>
          <ServicesSection />
        </Suspense>
      </div>

      {/* Industries Section */}
      <div id="industries">
        <Suspense fallback={<div style={{ padding: '80px 0' }}><SkeletonLoader type="card" count={6} /></div>}>
          <IndustriesGrid />
        </Suspense>
      </div>

      {/* Why Choose Us Section */}
      <Suspense fallback={<div style={{ padding: '80px 0' }}><SkeletonLoader type="card" count={1} /></div>}>
        <WhyChooseUsAbout />
      </Suspense>

      {/* Contact Section */}
      <div id="contact">
        <Suspense fallback={<div style={{ padding: '80px 0' }}><SkeletonLoader type="card" count={1} /></div>}>
          <ContactSection />
        </Suspense>
      </div>

      {/* Testimonials - What Our Clients Say (ماذا يقول عملاؤنا عنا) */}
      <div id="testimonials">
        <Suspense fallback={<div style={{ padding: '80px 0' }}><SkeletonLoader type="card" count={3} /></div>}>
          <Testimonials />
        </Suspense>
      </div>

      {/* Latest News from Blog (آخر الأخبار من المدونة) */}
      <Suspense fallback={<div style={{ padding: '80px 0' }}><SkeletonLoader type="card" count={3} /></div>}>
        <LatesNews />
      </Suspense>

      <Suspense fallback={<div style={{ padding: '40px 0', background: '#1a1a1a', minHeight: '300px' }}></div>}>
        <Footer />
      </Suspense>
    </>
  );
}
