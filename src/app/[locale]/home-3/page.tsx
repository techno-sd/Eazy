import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import MainBanner from "@/components/HomeThree/MainBanner";
import Features from "@/components/HomeThree/Features";
import WebsiteSecurity from "@/components/HomeThree/WebsiteSecurity";
import DigitalWorkflow from "@/components/HomeThree/DigitalWorkflow";
import HighPerformanceSolutions from "@/components/HomeThree/HighPerformanceSolutions";
import ExpertTeam from "@/components/Common/ExpertTeam";
import ProtectYourWebsite from "@/components/Common/ProtectYourWebsite";
import FaqStyleOne from "@/components/Common/FaqStyleOne";
import WhyChooseUsStyleOne from "@/components/Common/WhyChooseUsStyleOne";
import CyberSecurityOperation from "@/components/HomeThree/CyberSecurityOperation";
import LatesNewStyleTwo from "@/components/Common/LatesNewStyleTwo";
import Footer from "@/components/Layouts/Footer";

export default function Home3() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <Features />

      <WebsiteSecurity />

      <DigitalWorkflow />

      <HighPerformanceSolutions />

      <ExpertTeam />

      <ProtectYourWebsite />

      <FaqStyleOne />

      <WhyChooseUsStyleOne />

      <CyberSecurityOperation />

      <LatesNewStyleTwo />
      
      <Footer />
    </>
  );
}
