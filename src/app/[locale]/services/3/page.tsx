import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import AISolutions from "@/components/HomeOne/AISolutions";
import CybersecurityServices from "@/components/HomeOne/CybersecurityServices";
import BigDataAnalytics from "@/components/HomeOne/BigDataAnalytics";
import CloudComputing from "@/components/HomeOne/CloudComputing";
import SMEEazyProgram from "@/components/HomeOne/SMEEazyProgram";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Our Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <AISolutions />

      <CybersecurityServices />

      <BigDataAnalytics />

      <CloudComputing />

      <SMEEazyProgram />

      <Footer />
    </>
  );
}
