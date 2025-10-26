"use client";
  
import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <>
      <div className="seku-features-area pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-seku-features-card bg-382549">
                <h3>
                  <Image
                    src="/img/home-7-8-9/features/features-1.png"
                    alt="image"
                    width={35}
                    height={40}
                  />{" "}
                  Security
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-seku-features-card bg-382549">
                <h3>
                  <Image
                    src="/img/home-7-8-9/features/features-2.png"
                    alt="image"
                    width={35}
                    height={40}
                  />{" "}
                  Privacy
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-seku-features-card bg-382549">
                <h3>
                  <Image
                    src="/img/home-7-8-9/features/features-3.png"
                    alt="image"
                    width={35}
                    height={40}
                  />{" "}
                  Industry Certified
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
