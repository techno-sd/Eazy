
"use client";
  
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="banner-area-six">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1>Cyber Security Solutions Built on Customer Trust</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="banner-btn">
                  <Link href="/pricing" className="default-btn six">
                    <i className="bx bx-file"></i>
                    Get a Quote
                  </Link>

                  <Link href="/about" className="default-btn active">
                    <i className="bx bx-user"></i>
                    Discover More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-img">
                <Image
                  src="/img/home-six/banner/banner-img.png"
                  alt="Image"
                  width={1046}
                  height={915}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="banner-shape-1">
          <Image
            src="/img/home-six/banner/shape-1.png"
            alt="Image"
            width={1780}
            height={623}
          />
        </div>

        <div className="banner-shape-2">
          <Image
            src="/img/home-six/banner/shape-2.png"
            alt="Image"
            width={694}
            height={382}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
