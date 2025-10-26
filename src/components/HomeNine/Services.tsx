"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="complete-website-security-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2>You Get Complete Website Security From Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing
              eleifend dictum potenti mattis viverra eget quam lacus enim
              porttitor bibendum elit dui nisl.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="complete-website-security-card mb-25">
                <div className="icon">
                  <i className="flaticon-bug"></i>
                </div>
                <h3>
                  <Link href="/services/details">Malware Detection Removal</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit adiing
                  eleifend dictum pot nti.
                </p>
                <div className="security-shape">
                  <Image
                    src="/img/home-7-8-9/website-security/security-shape-2.png"
                    alt="image"
                    width={124}
                    height={132}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="complete-website-security-card mb-25">
                <div className="icon">
                  <i className="flaticon-content"></i>
                </div>
                <h3>
                  <Link href="/services/details">Content Delivery Network</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit adiing
                  eleifend dictum pot nti.
                </p>
                <div className="security-shape">
                  <Image
                    src="/img/home-7-8-9/website-security/security-shape-2.png"
                    alt="image"
                    width={124}
                    height={132}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="complete-website-security-card mb-25">
                <div className="icon">
                  <i className="flaticon-support"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    24/7 Cyber Security Support
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit adiing
                  eleifend dictum pot nti.
                </p>
                <div className="security-shape">
                  <Image
                    src="/img/home-7-8-9/website-security/security-shape-2.png"
                    alt="image"
                    width={124}
                    height={132}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="complete-website-security-card mb-25">
                <div className="icon">
                  <i className="flaticon-profile"></i>
                </div>
                <h3>
                  <Link href="/services/details">Managed Web Application</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit adiing
                  eleifend dictum pot nti.
                </p>
                <div className="security-shape">
                  <Image
                    src="/img/home-7-8-9/website-security/security-shape-2.png"
                    alt="image"
                    width={124}
                    height={132}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="website-security-shape">
          <Image
            src="/img/home-7-8-9/website-security/security-shape-1.png"
            alt="image"
            width={358}
            height={325}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
