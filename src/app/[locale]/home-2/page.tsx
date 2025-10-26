import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeTwo/MainBanner";
import Partner from "@/components/Common/Partner";
import CyberSecurityOperation from "@/components/HomeTwo/CyberSecurityOperation";
import WebsiteSecurity from "@/components/HomeTwo/WebsiteSecurity";
import HighPerformanceSolutions from "@/components/HomeTwo/HighPerformanceSolutions";
import ElectronicProtection from "@/components/HomeTwo/ElectronicProtection";
import ProtectYourWebsite from "@/components/Common/ProtectYourWebsite";
import FunFacts from "@/components/Common/FunFacts";
import PricingPlan from "@/components/Pricing/PricingPlan";
import Testimonials from "@/components/Common/Testimonials";
import LatesNews from "@/components/Common/LatesNews";
import Footer from "@/components/Layouts/Footer";

export default function Home2() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Partner />

      <CyberSecurityOperation />

      <WebsiteSecurity />

      <HighPerformanceSolutions />

      <ElectronicProtection />

      <ProtectYourWebsite />

      <FunFacts />

      <PricingPlan />

      <Testimonials />

      <div className="pt-100">
        <LatesNews />
      </div>

      <Footer />
    </>
  );
}
