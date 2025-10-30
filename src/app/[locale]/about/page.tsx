
import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import VisionMission from "@/components/About/VisionMission";
import CoreValues from "@/components/About/CoreValues";
import WhyChooseUsAbout from "@/components/About/WhyChooseUsAbout";
import Testimonials from "@/components/Common/Testimonials";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function Page() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <Navbar />
      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
      />
      <VisionMission />
      <CoreValues />
      <WhyChooseUsAbout />
      <Testimonials />
      <Partner />
      <Footer />
    </>
  );
}
