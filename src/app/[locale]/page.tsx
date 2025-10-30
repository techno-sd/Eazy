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

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <MainBanner />

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
