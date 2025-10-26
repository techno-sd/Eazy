"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <>
      <div className="success-projects-area pt-100 pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="success-projects-section-content">
                <h3>See Our Numerous Success Project From Previous</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  adipiscing eleifend dictum potenti mattis viverra eget quam
                  lacus enim porttitor bibendum elit dui nisl.
                </p>
                <Link href="/projects" className="default-btn">
                  View All Project
                </Link>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
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
                className="success-projects-slides"
              >
                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-1.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Cyber Security</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-2.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Incident Responder</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-3.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Secure Managed IT</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-1.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Cyber Security</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-2.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Incident Responder</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-3.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Secure Managed IT</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-1.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Cyber Security</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-2.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Incident Responder</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-success-projects-card">
                    <div className="projects-image">
                      <Link href="/projects/details">
                        <Image
                          src="/img/home-7-8-9/projects/projects-3.jpg"
                          alt="image"
                          width={700}
                          height={700}
                        />
                      </Link>

                      <div className="icon">
                        <Link href="/projects/details">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href="/projects/details">Secure Managed IT</Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
