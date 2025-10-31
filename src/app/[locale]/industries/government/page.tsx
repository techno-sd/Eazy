
import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import IndustryContent from "@/components/Industries/IndustryContent";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function GovernmentPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageBanner
        pageTitle="Government Sector"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Government"
      />
      <IndustryContent
        industryKey="government"
        icon="flaticon-cyber-security"
        image="/img/industries/government.jpg"
        gradient="linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)"
      />
      <Footer />
    </>
  );
}
