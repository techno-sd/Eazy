import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import IndustryContent from "@/components/Industries/IndustryContent";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function EducationPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageBanner
        pageTitle="Education & Universities"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Education"
      />
      <IndustryContent
        industryKey="education"
        icon="flaticon-artificial-intelligence"
        image="/img/industries/education.jpg"
        gradient="linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%)"
      />
      <Footer />
    </>
  );
}
