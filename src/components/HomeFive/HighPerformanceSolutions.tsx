"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HighPerformanceSolutions: React.FC = () => {
  return (
    <>
      <section className="performance-area bg-none pb-70">
        <div className="container">
          <div className="section-title">
            <h2>High-Performance Solutions</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quam neque quibusdam corrupti aspernatur corporis alias
              nisi dolorum expedita veritatis voluptates minima.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-website"></i>
                <h3>Confidential Information</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor sit amet, dolor consectetur
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>

                <Image
                  src="/img/shape/shape4.png"
                  alt="Image"
                  width={86}
                  height={113}
                />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>Mobile Security</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor sit amet, dolor consectetur
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>

                <Image
                  src="/img/shape/shape4.png"
                  alt="Image"
                  width={86}
                  height={113}
                />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-content"></i>
                <h3>Website Protection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor sit amet, dolor consectetur
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>

                <Image
                  src="/img/shape/shape4.png"
                  alt="Image"
                  width={86}
                  height={113}
                />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-cyber"></i>
                <h3>Hacking Protection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor sit amet, dolor consectetur
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>

                <Image
                  src="/img/shape/shape4.png"
                  alt="Image"
                  width={86}
                  height={113}
                />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>Mobile Security</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor sit amet, dolor consectetur
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>

                <Image
                  src="/img/shape/shape4.png"
                  alt="Image"
                  width={86}
                  height={113}
                />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>Mobile Security</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor sit amet, dolor consectetur
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>

                <Image
                  src="/img/shape/shape4.png"
                  alt="Image"
                  width={86}
                  height={113}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighPerformanceSolutions;
