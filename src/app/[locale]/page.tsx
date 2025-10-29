import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeOne/MainBanner";
import Partner from "@/components/Common/Partner";
import VisionMission from "@/components/About/VisionMission";
import AISolutions from "@/components/HomeOne/AISolutions";
import CybersecurityServices from "@/components/HomeOne/CybersecurityServices";
import BigDataAnalytics from "@/components/HomeOne/BigDataAnalytics";
import CloudComputing from "@/components/HomeOne/CloudComputing";
import SMEEazyProgram from "@/components/HomeOne/SMEEazyProgram";
import WhyChooseUsAbout from "@/components/About/WhyChooseUsAbout";
import CoreValues from "@/components/About/CoreValues";
import IndustriesGrid from "@/components/Industries/IndustriesGrid";
import Vision2030Content from "@/components/Vision2030/Vision2030Content";
import Testimonials from "@/components/Common/Testimonials";
import LatesNews from "@/components/Common/LatesNews";
import Footer from "@/components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Partner />

      <VisionMission />

      <AISolutions />

      <CybersecurityServices />

      <BigDataAnalytics />

      <CloudComputing />

      <SMEEazyProgram />

      <WhyChooseUsAbout />

      <CoreValues />

      <IndustriesGrid />

      <Vision2030Content />

      <Testimonials />

      <LatesNews />

      <Footer />
    </>
  );
}
