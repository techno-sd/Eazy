"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CyberSecuritySatisticsGraph: React.FC = () => {
  return (
    <>
      <section className="grph-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="grph-img">
                <Image
                  src="/img/graph-img.png"
                  alt="Image"
                  width={658}
                  height={395}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="graph-content">
                <h2>Cyber security Satistics Graph</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsumv
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel.{" "}
                </p>

                <h3>15 Ways To protect Your Bussiness From A Cyber Attack</h3>

                <Link href="/about" className="default-btn">
                  Download
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CyberSecuritySatisticsGraph;
