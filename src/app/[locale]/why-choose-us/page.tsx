
import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import WhyChooseUsAbout from "@/components/About/WhyChooseUsAbout";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function Page() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <Navbar />
      <PageBanner
        pageTitle="Why Choose Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Why Choose Us"
      />
      <WhyChooseUsAbout />
      <Footer />
    </>
  );
}
