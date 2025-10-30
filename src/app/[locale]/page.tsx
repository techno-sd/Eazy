import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeOne/MainBanner";
import AboutSectionClean from "@/components/HomeOne/AboutSectionClean";
import ServicesSection from "@/components/HomeOne/ServicesSection";
import IndustriesGrid from "@/components/Industries/IndustriesGrid";
import Vision2030Content from "@/components/Vision2030/Vision2030Content";
import WhyChooseUsAbout from "@/components/About/WhyChooseUsAbout";
import ContactSection from "@/components/HomeOne/ContactSection";
import Testimonials from "@/components/Common/Testimonials";
import LatesNews from "@/components/Common/LatesNews";
import Footer from "@/components/Layouts/Footer";
import AnimatedBackground from "@/components/Common/AnimatedBackground";
import FloatingCTA from "@/components/Common/FloatingCTA";
import Preloader from "@/components/Common/Preloader";
import ScrollToTop from "@/components/Common/ScrollToTop";
import TrustBadges from "@/components/Common/TrustBadges";

export default function Home() {
  return (
    <>
      {/* Premium Preloader */}
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
      <TrustBadges />

      {/* About Section */}
      <AboutSectionClean />

      {/* Services Section */}
      <ServicesSection />

      {/* Industries Section */}
      <IndustriesGrid />

      {/* Vision 2030 Section */}
      <Vision2030Content />

      {/* Why Choose Us Section */}
      <WhyChooseUsAbout />

      {/* Contact Section */}
      <ContactSection />

      {/* Testimonials - What Our Clients Say (ماذا يقول عملاؤنا عنا) */}
      <Testimonials />

      {/* Latest News from Blog (آخر الأخبار من المدونة) */}
      <LatesNews />

      <Footer />
    </>
  );
}
