"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="partner-area bg-color-f9f9f9 ptb-100">
        <div className="container">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              922: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-slider-six"
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/home-six/partner/partner-1.png"
                    alt="Image"
                    width={240}
                    height={64}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/home-six/partner/partner-2.png"
                    alt="Image"
                    width={240}
                    height={64}
                  />
                </a>
              </div>
            </SwiperSlide>
 
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/home-six/partner/partner-4.png"
                    alt="Image"
                    width={240}
                    height={64}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/home-six/partner/partner-2.png"
                    alt="Image"
                    width={240}
                    height={64}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/home-six/partner/partner-2.png"
                    alt="Image"
                    width={240}
                    height={64}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
