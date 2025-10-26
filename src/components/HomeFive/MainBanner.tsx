"use client";
  
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="hero-slider-area">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="hero-slider-wrap"
        >
          <SwiperSlide>
            <div 
              className="slider-item"
              style={{
                backgroundImage: `url(/img/slider-img/slider-img1.jpg)`
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="slider-text one">
                          <h1>Cyber Security & IT Management</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil architecto laborum eaque! Deserunt
                            maxime, minus quas molestiae reiciendis esse natus
                            nisi iure.
                          </p>

                          <div className="slider-btn">
                            <Link href="/contact" className="default-btn">
                              Contact Us
                            </Link>
                            <Link href="/about" className="default-btn active">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="video-btn-animat one">
                          <div
                            onClick={() => setToggler(!toggler)}
                            className="video-btn"
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div 
              className="slider-item"
              style={{
                backgroundImage: `url(/img/slider-img/slider-img2.jpg)`
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="slider-text two">
                          <h1>Cyber Security Is Not Optional</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil architecto laborum eaque! Deserunt
                            maxime, minus quas molestiae reiciendis esse natus
                            nisi iure.
                          </p>

                          <div className="slider-btn">
                            <Link href="/contact" className="default-btn">
                              Contact Us
                            </Link>
                            <Link href="/about" className="default-btn active">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="video-btn-animat two">
                          <div
                            onClick={() => setToggler(!toggler)}
                            className="video-btn"
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainBanner;
