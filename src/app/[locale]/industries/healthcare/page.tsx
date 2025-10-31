import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import IndustryContent from "@/components/Industries/IndustryContent";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function HealthcarePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageBanner
        pageTitle="Healthcare Sector"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Healthcare"
      />
      <IndustryContent
        industryKey="healthcare"
        icon="flaticon-profile"
        image="/img/industries/healthcare.jpg"
        gradient="linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)"
      />
      <Footer />
    </>
  );
}
