import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Testimonials from "@/components/Common/Testimonials";
import Partner from "@/components/Common/Partner";

export default function GovernmentPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Government Sector"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Government"
      />

      <section className="security-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Digital Government</span>
            <h2>Government Sector Solutions</h2>
            <p>Supporting digital government transformation with advanced security solutions aligned with Saudi Vision 2030.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-cyber-security"></i>
                <h3>Digital Government Transformation</h3>
                <p>Comprehensive cybersecurity solutions to support your digital government initiatives and e-government services.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-security"></i>
                <h3>Critical Infrastructure Protection</h3>
                <p>Advanced protection for national critical infrastructure with 24/7 monitoring and incident response.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>NCA Compliance Solutions</h3>
                <p>Full compliance with National Cybersecurity Authority standards and regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Partner />
      <Footer />
    </>
  );
}
