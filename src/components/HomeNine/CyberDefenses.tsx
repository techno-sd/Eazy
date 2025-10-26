"use client";
  
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import Image from "next/image";

const CyberDefenses: React.FC = () => {
  return (
    <>
      <div className="cyber-defenses-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Expert Support To Enhance Your Cyber Defenses</h2>
          </div>

          <div className="cyber-defenses-list-tabs">
            <Tabs>
              <TabList>
                <Tab>Banking</Tab>
                <Tab>Manufacturing</Tab>
                <Tab>Oil & Gas</Tab>
                <Tab>Insurance</Tab>
                <Tab>Health Care</Tab>
              </TabList>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-content">
                      <h3>Banking Security</h3>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Focus on The
                              Basics
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Educate Customers
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Be Proactive
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Tighten Internal
                              Controls
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>

                      <div className="cyber-btn">
                        <Link href="/contact" className="default-btn">
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-image">
                      <Image
                        src="/img/home-7-8-9/cyber-defenses/cyber-defenses-1.png"
                        alt="image"
                        width={815}
                        height={528}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-content">
                      <h3>Manufacturing</h3>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Focus on The
                              Basics
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Educate Customers
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Be Proactive
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Tighten Internal
                              Controls
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>

                      <div className="cyber-btn">
                        <Link href="/contact" className="default-btn">
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-image">
                      <Image
                        src="/img/home-7-8-9/cyber-defenses/cyber-defenses-2.jpg"
                        className="rounded-circle"
                        alt="image"
                        width={570}
                        height={585}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-content">
                      <h3>Oil & Gas</h3>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Focus on The
                              Basics
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Educate Customers
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Be Proactive
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Tighten Internal
                              Controls
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>

                      <div className="cyber-btn">
                        <Link href="/contact" className="default-btn">
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-image">
                      <Image
                        src="/img/home-7-8-9/cyber-defenses/cyber-defenses-3.jpg"
                        className="rounded-circle"
                        alt="image"
                        width={570}
                        height={585}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-content">
                      <h3>Insurance</h3>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Focus on The
                              Basics
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Educate Customers
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Be Proactive
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Tighten Internal
                              Controls
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>

                      <div className="cyber-btn">
                        <Link href="/contact" className="default-btn">
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-image">
                      <Image
                        src="/img/home-7-8-9/cyber-defenses/cyber-defenses-4.jpg"
                        className="rounded-circle"
                        alt="image"
                        width={570}
                        height={585}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-content">
                      <h3>Health Care</h3>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Focus on The
                              Basics
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Educate Customers
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul className="cyber-list">
                            <li>
                              <i className="bx bx-check"></i> Be Proactive
                            </li>
                            <li>
                              <i className="bx bx-check"></i> Tighten Internal
                              Controls
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consecte adipi scing elit
                        adipiscing eleifend dictum poteder mattis viverra lorem
                        ipsum dolor sit amet consecte adipisci ng elit
                        adipiscingdiper eleifend dictum potenti mattis viverra.
                      </p>

                      <div className="cyber-btn">
                        <Link href="/contact" className="default-btn">
                          Get Started Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="cyber-defenses-image">
                      <Image
                        src="/img/home-7-8-9/cyber-defenses/cyber-defenses-5.jpg"
                        className="rounded-circle"
                        alt="image"
                        width={570}
                        height={585}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>

        <div className="cyber-defenses-shape">
          <Image
            src="/img/home-7-8-9/cyber-defenses/cyber-defenses-shape.png"
            alt="image"
            width={380}
            height={452}
          />
        </div>
      </div>
    </>
  );
};

export default CyberDefenses;
