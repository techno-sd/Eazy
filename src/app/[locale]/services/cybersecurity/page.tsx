
import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import ServiceContent from "@/components/Services/ServiceContent";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageBanner
        pageTitle="Cybersecurity Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cybersecurity"
      />
      <ServiceContent
        translationKey="cybersecurity"
        icon="flaticon-cyber-security"
        image="/img/home-six/services/services-2.png"
        gradient="linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)"
      />
      <Footer />
    </>
  );
}
