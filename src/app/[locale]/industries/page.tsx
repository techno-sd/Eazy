import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import IndustriesGrid from "@/components/Industries/IndustriesGrid";
import IndustriesHighlight from "@/components/Industries/IndustriesHighlight";
import Testimonials from "@/components/Common/Testimonials";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Industries We Serve"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Industries"
      />
      <IndustriesGrid />
      <IndustriesHighlight />
      <Testimonials />
      <Partner />
      <Footer />
    </>
  );
}
