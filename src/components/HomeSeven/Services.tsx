"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="complete-website-security-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Complete Website Security</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing
              eleifend dictum potenti mattis viverra eget quam lacus enim
              porttitor bibendum elit dui nisl.
            </p>
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              922: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="complete-website-security-slides"
          >
            <SwiperSlide>
              <div className="complete-website-security-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="complete-website-security-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="complete-website-security-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="complete-website-security-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="complete-website-security-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="complete-website-security-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="complete-website-security-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="complete-website-security-card">
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
            </SwiperSlide>
          </Swiper>
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
