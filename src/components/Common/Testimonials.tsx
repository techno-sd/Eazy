"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Testimonials: React.FC = () => {
  const t = useTranslations('home.testimonials');

  return (
    <>
      <section className="client-area ptb-100">
        <div className="container">
          <div className="section-title white-title">
            <h2>{t('title')}</h2>
            <p>
              {t('description')}
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
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="client-wrap"
          >
            <SwiperSlide>
              <div className="single-client">
                <i className="quotes bx bxs-quote-alt-left"></i>
                <p>
                  {t('client1Review')}
                </p>

                <ul>
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

                <div className="client-img">
                  <Image
                    src="/img/client-img/client1.jpg"
                    alt={`${t('client1Name')} - ${t('client1Position')}`}
                    width={70}
                    height={70}
                  />
                  <h3>{t('client1Name')}</h3>
                  <span>{t('client1Position')}</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-client">
                <i className="quotes bx bxs-quote-alt-left"></i>
                <p>
                  {t('client2Review')}
                </p>

                <ul>
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

                <div className="client-img">
                  <Image
                    src="/img/client-img/client2.jpg"
                    alt={`${t('client2Name')} - ${t('client2Position')}`}
                    width={70}
                    height={70}
                  />
                  <h3>{t('client2Name')}</h3>
                  <span>{t('client2Position')}</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-client">
                <i className="quotes bx bxs-quote-alt-left"></i>
                <p>
                  {t('client3Review')}
                </p>

                <ul>
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

                <div className="client-img">
                  <Image
                    src="/img/client-img/client3.jpg"
                    alt={`${t('client3Name')} - ${t('client3Position')}`}
                    width={70}
                    height={70}
                  />
                  <h3>{t('client3Name')}</h3>
                  <span>{t('client3Position')}</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-client">
                <i className="quotes bx bxs-quote-alt-left"></i>
                <p>
                  {t('client4Review')}
                </p>

                <ul>
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

                <div className="client-img">
                  <Image
                    src="/img/client-img/client4.jpg"
                    alt={`${t('client4Name')} - ${t('client4Position')}`}
                    width={70}
                    height={70}
                  />
                  <h3>{t('client4Name')}</h3>
                  <span>{t('client4Position')}</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
