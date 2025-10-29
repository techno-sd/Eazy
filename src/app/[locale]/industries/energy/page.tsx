import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Testimonials from "@/components/Common/Testimonials";
import Partner from "@/components/Common/Partner";

export default function EnergyPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Energy & Telecommunications"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Energy"
      />

      <section className="security-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Critical Infrastructure</span>
            <h2>Energy & Telecommunications</h2>
            <p>Securing critical infrastructure and communications networks with advanced OT security solutions.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-security"></i>
                <h3>OT Security</h3>
                <p>Operational Technology security for industrial control systems and energy infrastructure.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-cyber-security"></i>
                <h3>Network Infrastructure Protection</h3>
                <p>Comprehensive security for telecommunications networks and critical communication systems.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-security">
                <i className="flaticon-security-camera"></i>
                <h3>SCADA Systems Security</h3>
                <p>Specialized security solutions for SCADA and industrial automation systems.</p>
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
