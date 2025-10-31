
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
        pageTitle="Big Data & Analytics"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Big Data & Analytics"
      />
      <ServiceContent
        translationKey="bigData"
        icon="flaticon-big-data"
        image="/img/home-six/services/big-data.jpg"
        gradient="linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)"
      />
      <Footer />
    </>
  );
}
