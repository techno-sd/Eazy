"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="testimonials-wrap-area ptb-100">
        <div className="container">
          <div className="section-title white-title">
            <h2>What Client’s Say About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing
              eleifend dictum potenti mattis viverra eget quam lacus enim
              porttitor bibendum elit dui nisl.
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
              1200: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-wrap-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-card">
                <p>
                  Lorem ipsum dolor amet consectet adipiscing elit adipiscing
                  eleifend dicturi me pot nti mattis viverra.
                </p>
                <div className="client-info">
                  <h3>Patric Watler</h3>
                  <span>Manager</span>
                </div>
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <div className="quote-shape">
                  <Image
                    src="/img/home-7-8-9/testimonials/shape.png"
                    alt="image"
                    width={70}
                    height={46}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
                <p>
                  Lorem ipsum dolor amet consectet adipiscing elit adipiscing
                  eleifend dicturi me pot nti mattis viverra.
                </p>
                <div className="client-info">
                  <h3>Jane Anderson</h3>
                  <span>Developer</span>
                </div>
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <div className="quote-shape">
                  <Image
                    src="/img/home-7-8-9/testimonials/shape.png"
                    alt="image"
                    width={70}
                    height={46}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
                <p>
                  Lorem ipsum dolor amet consectet adipiscing elit adipiscing
                  eleifend dicturi me pot nti mattis viverra.
                </p>
                <div className="client-info">
                  <h3>Victor James</h3>
                  <span>Designer</span>
                </div>
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <div className="quote-shape">
                  <Image
                    src="/img/home-7-8-9/testimonials/shape.png"
                    alt="image"
                    width={70}
                    height={46}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
                <p>
                  Lorem ipsum dolor amet consectet adipiscing elit adipiscing
                  eleifend dicturi me pot nti mattis viverra.
                </p>
                <div className="client-info">
                  <h3>Patric Watler</h3>
                  <span>Manager</span>
                </div>
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <div className="quote-shape">
                  <Image
                    src="/img/home-7-8-9/testimonials/shape.png"
                    alt="image"
                    width={70}
                    height={46}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
                <p>
                  Lorem ipsum dolor amet consectet adipiscing elit adipiscing
                  eleifend dicturi me pot nti mattis viverra.
                </p>
                <div className="client-info">
                  <h3>Jane Anderson</h3>
                  <span>Developer</span>
                </div>
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <div className="quote-shape">
                  <Image
                    src="/img/home-7-8-9/testimonials/shape.png"
                    alt="image"
                    width={70}
                    height={46}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
                <p>
                  Lorem ipsum dolor amet consectet adipiscing elit adipiscing
                  eleifend dicturi me pot nti mattis viverra.
                </p>
                <div className="client-info">
                  <h3>Victor James</h3>
                  <span>designer</span>
                </div>
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <div className="quote-shape">
                  <Image
                    src="/img/home-7-8-9/testimonials/shape.png"
                    alt="image"
                    width={70}
                    height={46}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
                <p>
                  Lorem ipsum dolor amet consectet adipiscing elit adipiscing
                  eleifend dicturi me pot nti mattis viverra.
                </p>
                <div className="client-info">
                  <h3>Patric Watler</h3>
                  <span>Manager</span>
                </div>
                <ul className="rating">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>
                <div className="quote-shape">
                  <Image
                    src="/img/home-7-8-9/testimonials/shape.png"
                    alt="image"
                    width={70}
                    height={46}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
