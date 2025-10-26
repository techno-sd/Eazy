"use client";

import React from "react";
import Image from "next/image";

const DigitalWorkflow: React.FC = () => {
  return (
    <>
      <section className="transform-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pr-0">
              <div className="transform-img">
                <Image
                  src="/img/transform-img.jpg"
                  alt="Image"
                  width={650}
                  height={510}
                />
              </div>
            </div>

            <div className="col-lg-6 pl-0">
              <div className="transform-content">
                <h2>
                  Transform Your Digital Workflow Be productive Reduce risk
                </h2>
                <p>
                  Lorem ipsum dolor sit elit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incidiunt labore et dolore magna aliqua.
                  Quis ipsum suspendisse Workflow Be productive consectetur
                  adipiscing elit, sed
                </p>

                <div className="skills">
                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Development</h3>
                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text">50</span>%
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "50%" }}
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Design</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text">75</span>%
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "75%" }}
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Marketing</h3>

                      <div className="skill-percentage">
                        <div className="count-box">
                          <span className="count-text">95</span>%
                        </div>
                      </div>
                    </div>

                    <div className="skill-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "95%" }}
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-1">
          <Image
            src="/img/shape/shape1.png"
            alt="Image"
            width={496}
            height={886}
          />
        </div>
        <div className="shape-2">
          <Image
            src="/img/shape/shape2.png"
            alt="Image"
            width={268}
            height={540}
          />
        </div>
      </section>
    </>
  );
};

export default DigitalWorkflow;
