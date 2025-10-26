"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="new-main-banner-area-with-black-color">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-main-banner-black-content">
                <h1>We Help To Protect Modern Information From Hackers</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing eleifend dictum potenti mattis viverra eget quam
                  lacus enim porttitor bibendum elit, dui nisl. aenean turpis ut
                  pretium et dictum dolor quis consect etur feugiat odio luctus
                  a nibh sed sit fames ac at tincidunt quam vita.
                </p>

                <ul className="banner-btn">
                  <li>
                    <Link href="/contact" className="default-btn">
                      Request Free Access
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="default-btn color-two">
                      Get Started Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="new-main-banner-black-image">
                <Image
                  src="/img/home-7-8-9/banner/black-banner.png"
                  alt="image"
                  width={872}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="new-main-banner-black-shape">
          <Image
            src="/img/home-7-8-9/banner/line-bg.png"
            alt="image"
            width={1920}
            height={988}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
