import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Testimonials from "@/components/Common/Testimonials";

export default function BankingPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Banking & Financial Services"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Banking"
      />

      <section className="security-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Financial Security</span>
            <h2>Banking & Financial Services</h2>
            <p>Protecting financial data and ensuring compliance with banking security standards including SAMA regulations.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-security"></i>
                <h3>Financial Data Protection</h3>
                <p>Advanced encryption and security measures to protect sensitive financial data and customer information.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-cyber-security"></i>
                <h3>Transaction Security</h3>
                <p>Real-time transaction monitoring and fraud detection to ensure secure financial operations.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-password"></i>
                <h3>SAMA Compliance</h3>
                <p>Full compliance with Saudi Arabian Monetary Authority cybersecurity framework and regulations.</p>
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
