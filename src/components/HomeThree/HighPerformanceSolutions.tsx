"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const HighPerformanceSolutions: React.FC = () => {
  return (
    <>
      <section className="performance-area ptb-100">
        <div className="container">
          <div className="section-title white-title">
            <h2>High-Performance Solutions</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quam neque quibusdam corrupti aspernatur corporis alias
              nisi dolorum expedita veritatis voluptates minima.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
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
            className="solution-slider"
          >
            <SwiperSlide>
              <div className="single-security">
                <i className="flaticon-website"></i>
                <h3>Confidential Information</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>Mobile Security</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-security">
                <i className="flaticon-content"></i>
                <h3>Website Protection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-security">
                <i className="flaticon-cyber"></i>
                <h3>Hacking Protection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-security">
                <i className="flaticon-profile"></i>
                <h3>Mobile Security</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <Link href="/services/details" className="read-more">
                  Read More
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HighPerformanceSolutions;
