"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="latest-news-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2>Latest News From Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing
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
              992: {
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
            className="latest-news-slides"
          >
            <SwiperSlide>
              <div className="latest-news-card">
                <div className="news-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/home-7-8-9/latest-news/news-1.jpg"
                      alt="image"
                      width={1080}
                      height={750}
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <h3>
                    <Link href="/blog/details">
                      Being The Best-selling Smartphone In This Year
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet delectir consecte adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-news-card">
                <div className="news-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/home-7-8-9/latest-news/news-2.jpg"
                      alt="image"
                      width={1080}
                      height={750}
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <h3>
                    <Link href="/blog/details">
                      Security In A Fragment World Of Workload
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet delectir consecte adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-news-card">
                <div className="news-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/home-7-8-9/latest-news/news-3.jpg"
                      alt="image"
                      width={1080}
                      height={750}
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <h3>
                    <Link href="/blog/details">
                      Dhs Issues Emergency Directive To Prevent Hacking Attack
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet delectir consecte adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-news-card">
                <div className="news-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/home-7-8-9/latest-news/news-4.jpg"
                      alt="image"
                      width={1080}
                      height={750}
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <h3>
                    <Link href="/blog/details">
                      Drughydrus Add Google Drive To Roughrobin Torjan
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet delectir consecte adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-news-card">
                <div className="news-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/home-7-8-9/latest-news/news-1.jpg"
                      alt="image"
                      width={1080}
                      height={750}
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <h3>
                    <Link href="/blog/details">
                      Being The Best-selling Smartphone In This Year
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet delectir consecte adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-news-card">
                <div className="news-image">
                  <Link href="/blog/details">
                    <Image
                      src="/img/home-7-8-9/latest-news/news-2.jpg"
                      alt="image"
                      width={1080}
                      height={750}
                    />
                  </Link>
                </div>
                <div className="news-content">
                  <h3>
                    <Link href="/blog/details">
                      Security In A Fragment World Of Workload
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet delectir consecte adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
