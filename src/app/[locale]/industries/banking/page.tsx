import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import IndustryContent from "@/components/Industries/IndustryContent";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function BankingPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageBanner
        pageTitle="Banking & Financial Services"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Banking"
      />
      <IndustryContent
        industryKey="banking"
        icon="flaticon-security"
        image="/img/industries/banking.jpg"
        gradient="linear-gradient(135deg, #1FB6E8 0%, #0C4BA2 100%)"
      />
      <Footer />
    </>
  );
}
