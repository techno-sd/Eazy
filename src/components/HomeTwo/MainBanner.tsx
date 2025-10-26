"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="banner-area banner-area-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-text">
                    <span>
                      All Research up to Blockchain Interoperability is
                      completed
                    </span>
                    <h1>A Team of Professionals To Protect your Team</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil architecto laborum eaque! Deserunt maxime, minus
                      quas molestiae reiciendis esse natus nisi iure.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact" className="default-btn">
                        Booking Now
                      </Link>

                      <Link href="/about" className="default-btn active">
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-site-img">
                    <Image
                      src="/img/home-two/home2-banner-main.png"
                      alt="Image"
                      width={1920}
                      height={1080}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
