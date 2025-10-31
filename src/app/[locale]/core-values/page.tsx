
import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import CoreValues from "@/components/About/CoreValues";
import Footer from "@/components/Layouts/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function Page() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <Navbar />
      <PageBanner
        pageTitle="Core Values"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Core Values"
      />
      <CoreValues />
      <Footer />
    </>
  );
}
