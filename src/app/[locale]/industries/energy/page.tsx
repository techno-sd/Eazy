import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import IndustryContent from "@/components/Industries/IndustryContent";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function EnergyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageBanner
        pageTitle="Energy & Telecommunications"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Energy & Telecom"
      />
      <IndustryContent
        industryKey="energy"
        icon="flaticon-network"
        image="/img/industries/energy.jpg"
        gradient="linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)"
      />
      <Footer />
    </>
  );
}
