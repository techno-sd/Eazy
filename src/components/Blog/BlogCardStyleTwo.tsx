  
"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";

const cardData = [
  {
    img: "/img/blog/blog1.jpg",
    title: "Secure Managed IT",
    tag: null,
    date: null,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer",
  },
  {
    img: "/img/blog/blog2.jpg",
    title: "Cloud Security",
    tag: null,
    date: null,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer",
  },
  {
    img: "/img/blog/blog3.jpg",
    title: "Secure Managed IT",
    tag: null,
    date: null,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer",
  },
  {
    img: "/img/blog/blog4.jpg",
    title: "DHS issues emergency directive to prevent hacking attack",
    tag: "Cyber Security",
    date: "Jun 20 2024",
    desc: null,
  },
  {
    img: "/img/blog/blog5.jpg",
    title: "Drughydrus add google drive to roughrobin torjan",
    tag: "Cyber Crime",
    date: "Jun 21 2024",
    desc: null,
  },
  {
    img: "/img/blog/blog6.jpg",
    title: "Security in a fragment world of workload",
    tag: "Hacking Protection",
    date: "Jun 22 2024",
    desc: null,
  },
];

const BlogCardStyleTwo: React.FC = () => {
  return (
    <div className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc blog-right-sidebar-area">
              <div className="row">
                {cardData.map((card, idx) => (
                  <div className="col-lg-6 col-sm-6" key={idx}>
                    <div className="card blog-card glass-effect hover-lift">
                      <div className="card-img-top image-zoom">
                        <Image
                          src={card.img}
                          alt="Blog Image"
                          width={570}
                          height={600}
                          className="rounded"
                        />
                        {card.tag && (
                          <span className="badge badge-primary position-absolute" style={{top:16,left:16}}>{card.tag}</span>
                        )}
                      </div>
                      <div className="card-body blog-content">
                        {card.date && (
                          <div className="date mb-2">
                            <i className="bx bx-calendar"></i> {card.date}
                          </div>
                        )}
                        <h3 className="mb-3">
                          <Link href="/blog/details" className="link-animated">
                            {card.title}
                          </Link>
                        </h3>
                        {card.desc && <p>{card.desc}</p>}
                        <Link href="/blog/details" className="read-more default-btn btn-sm mt-2">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Pagination */}
                <div className="col-lg-12">
                  <div className="page-navigation-area mt-4">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link href="#" className="page-link page-links">
                          <i className="bx bx-chevrons-left"></i>
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link href="#" className="page-link">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="#" className="page-link">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="#" className="page-link">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="#" className="page-link">
                          <i className="bx bx-chevrons-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            {/* Sidebar */}
            <div className="sidebar-pl-15">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardStyleTwo;
