"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CTA: React.FC = () => {
  return (
    <>
      <div className="overview-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="overview-content-box">
                <Image
                  src="/img/home-7-8-9/overview/overview-1.jpg"
                  alt="image"
                  width={960}
                  height={570}
                />

                <div className="content">
                  <h3>Provide The Best Solution By Our Expert</h3>
                  <Link href="/contact" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="overview-content-box">
                <Image
                  src="/img/home-7-8-9/overview/overview-2.jpg"
                  alt="image"
                  width={960}
                  height={570}
                />

                <div className="content">
                  <h3>Our Recent Digital & Strategy Services</h3>
                  <Link href="/services" className="default-btn">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
