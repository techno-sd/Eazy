import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Testimonials from "@/components/Common/Testimonials";

export default function SMEPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Small & Medium Enterprises"
        homePageText="Home"
        homePageUrl="/"
        activePageText="SME"
      />

      <section className="security-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SME Solutions</span>
            <h2>Small & Medium Enterprises</h2>
            <p>Affordable and comprehensive security solutions tailored for growing businesses.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-price-tag"></i>
                <h3>Cost-Effective Security</h3>
                <p>Affordable cybersecurity solutions designed specifically for SME budgets and needs.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-security"></i>
                <h3>Business Continuity</h3>
                <p>Ensure your business operations continue smoothly with reliable security measures.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-support"></i>
                <h3>Compliance Support</h3>
                <p>Help meeting regulatory requirements and industry compliance standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
}
