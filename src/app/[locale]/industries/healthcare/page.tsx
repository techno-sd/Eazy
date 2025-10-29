import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Testimonials from "@/components/Common/Testimonials";
import Partner from "@/components/Common/Partner";

export default function HealthcarePage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Healthcare Sector"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Healthcare"
      />

      <section className="security-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Healthcare Security</span>
            <h2>Healthcare Sector Solutions</h2>
            <p>Protecting patient data and ensuring medical system security with HIPAA-compliant solutions.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>Patient Data Protection</h3>
                <p>Advanced encryption and access controls to protect sensitive patient health information.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-security"></i>
                <h3>Medical Systems Security</h3>
                <p>Comprehensive security for hospital information systems and medical devices.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-cyber-security"></i>
                <h3>Healthcare Compliance</h3>
                <p>Full compliance with healthcare regulations and data protection standards.</p>
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
