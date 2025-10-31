
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
        pageTitle="Cloud Computing & Hosting"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cloud & Hosting"
      />
      <ServiceContent
        translationKey="cloudComputing"
        icon="flaticon-cloud-computing"
        image="/img/home-six/services/cloud-computing.jpg"
        gradient="linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)"
      />
      <Footer />
    </>
  );
}
