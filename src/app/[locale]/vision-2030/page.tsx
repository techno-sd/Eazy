import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Vision2030Content from "@/components/Vision2030/Vision2030Content";
import Testimonials from "@/components/Common/Testimonials";

export default function Vision2030Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Our Vision"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Vision 2030"
      />

      <Vision2030Content />

      <Testimonials />

      <Footer />
    </>
  );
}
