"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="new-main-banner-area">
        <Swiper
          autoHeight={true}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="new-main-home-slides"
        >
          <SwiperSlide>
            <div className="new-main-banner-slides-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <div className="new-main-banner-content">
                      <span>
                        All Research Up to Blockchain Interoperability is
                        Completed!
                      </span>
                      <h1>Protect Your data In A More Effective Way</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        adipiscing eleifend dictum potenti mattis viverra eget
                        quam lacus enim porttitor bibendum elit dui nisl. aenean
                        turpis ut pretium et dictum dolor quis consect etur
                        feugiat odio luctus a nibh sed sit fames ac at tincidunt
                        quam vita.
                      </p>

                      <ul className="banner-btn">
                        <li>
                          <Link href="/contact" className="default-btn">
                            Request Free Access
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="default-btn color-two"
                          >
                            Get Started Now
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="new-main-banner-image"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="new-main-banner-slides-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <div className="new-main-banner-content">
                      <span>
                        All Research Up to Blockchain Interoperability is
                        Completed!
                      </span>
                      <h1>
                        We Help To Protect Modern Information From Hackers
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        adipiscing eleifend dictum potenti mattis viverra eget
                        quam lacus enim porttitor bibendum elit dui nisl. aenean
                        turpis ut pretium et dictum dolor quis consect etur
                        feugiat odio luctus a nibh sed sit fames ac at tincidunt
                        quam vita.
                      </p>

                      <ul className="banner-btn">
                        <li>
                          <Link href="/contact" className="default-btn">
                            Request Free Access
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="default-btn color-two"
                          >
                            Get Started Now
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="new-main-banner-image image-two"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="new-main-banner-shape">
          <Image
            src="/img/home-7-8-9/banner/shape.png"
            alt="image"
            width={740}
            height={425}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
