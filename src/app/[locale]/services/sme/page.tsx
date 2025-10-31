
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
        pageTitle="SME-EAZY Program"
        homePageUrl="/"
        homePageText="Home"
        activePageText="SME-EAZY Program"
      />
      <ServiceContent
        translationKey="smeEazy"
        icon="flaticon-rocket"
        image="/img/home-six/services/software.png"
        gradient="linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)"
        badge="Premium Program"
      />
      <Footer />
    </>
  );
}
