"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area pb-70">
        <div className="container">
          <div className="section-title-six">
            <span>Latest News</span>
            <h2>Our Latest Insights Are On Top</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-blog-post">
                <Link href="/blog/details">
                  <Image
                    src="/img/home-six/blog/blog-1.jpg"
                    alt="Image"
                    width={550}
                    height={500}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="bx bx-purchase-tag"></i>
                      Security
                    </li>
                    <li>
                      <i className="bx bx-time"></i>5 min read
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      DHS Issues Emergency Directive To Prevent Hacking Attack
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-blog-post">
                <Link href="/blog/details">
                  <Image
                    src="/img/home-six/blog/blog-2.jpg"
                    alt="Image"
                    width={550}
                    height={500}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="bx bx-purchase-tag"></i>
                      Hunter
                    </li>
                    <li>
                      <i className="bx bx-time"></i>5 min read
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Drughydrus Add Google Drive To Roughrobin Torjan
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-blog-post">
                <Link href="/blog/details">
                  <Image
                    src="/img/home-six/blog/blog-3.jpg"
                    alt="Image"
                    width={550}
                    height={500}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="bx bx-purchase-tag"></i>
                      Hacker
                    </li>
                    <li>
                      <i className="bx bx-time"></i>5 min read
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Security In A Fragment World Of Workload For Your Business
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
