"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonials-area bg-color-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title-six">
            <span>Testimonials</span>
            <h2>What Customers Say About Us</h2>
          </div>

          <div className="testimonials">
            <Swiper
              slidesPerView={1}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Navigation, Autoplay]}
              className="testimonials-slider"
            >
              <SwiperSlide>
                <div className="testimonials-item">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverramaecenas accumsan lacus vel facilisis.”
                  </p>

                  <div className="testimonials-view">
                    <Image
                      src="/img/home-six/testimonials/testimonials-1.jpg"
                      alt="Image"
                      width={70}
                      height={70}
                    />
                    <h3>Jason Doe</h3>
                    <span>Web Developer</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonials-item">
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverramaecenas accumsan lacus vel facilisis.”
                  </p>

                  <div className="testimonials-view">
                    <Image
                      src="/img/home-six/testimonials/testimonials-2.jpg"
                      alt="Image"
                      width={70}
                      height={70}
                    />
                    <h3>Alex Dew</h3>
                    <span>Web Designer</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <i className="quote bx bxs-quote-alt-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
