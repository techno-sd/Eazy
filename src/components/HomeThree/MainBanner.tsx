"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div 
        className="banner-area banner-area-three"
        style={{
          backgroundImage: `url(/img/home-three/home3-banner.jpg)`
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-text">
                <span>
                  All Research up to Blockchain Interoperability is completed
                </span>
                <h1>Cyber Security Is Not Optional</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  architecto laborum eaque! Deserunt maxime, minus quas
                  molestiae reiciendis esse natus nisi iure.
                </p>

                <div className="banner-btn">
                  <Link href="#" className="default-btn">
                    Booking Now
                  </Link>
                  <Link href="/about" className="default-btn active">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="follow-us">
          <ul>
            <li>
              <span>Follow Us On Facebook</span>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Shape Images */}
        <div className="banner-shape-1">
          <Image
            src="/img/home-three/home3-shape1.png"
            alt="Image"
            width={1578}
            height={1056}
          />
        </div>
        <div className="banner-shape-2">
          <Image
            src="/img/home-three/home3-shape2.png"
            alt="Image"
            width={374}
            height={402}
          />
        </div>
        <div className="banner-shape-3">
          <Image
            src="/img/home-three/home3-shape3.png"
            alt="Image"
            width={529}
            height={483}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
