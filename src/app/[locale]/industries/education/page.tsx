import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Testimonials from "@/components/Common/Testimonials";
import Partner from "@/components/Common/Partner";

export default function EducationPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Education & Universities"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Education"
      />

      <section className="security-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Education Security</span>
            <h2>Education & Universities</h2>
            <p>Securing educational platforms and protecting academic data for schools and universities.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-artificial-intelligence"></i>
                <h3>E-Learning Platform Security</h3>
                <p>Comprehensive security for online learning platforms and virtual classrooms.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>Student Data Protection</h3>
                <p>Advanced protection for student records, grades, and personal information.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-security"></i>
                <h3>Research Data Security</h3>
                <p>Specialized security for academic research data and intellectual property.</p>
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
