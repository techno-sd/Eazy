"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Testimonials: React.FC = () => {
  const t = useTranslations('home.testimonials');

  const testimonials = [
    {
      review: t('client1Review'),
      name: t('client1Name'),
      position: t('client1Position'),
      image: '/img/client-img/client1.jpg',
      rating: 5,
      company: t('client1Company') || 'Tech Solutions Inc.'
    },
    {
      review: t('client2Review'),
      name: t('client2Name'),
      position: t('client2Position'),
      image: '/img/client-img/client2.jpg',
      rating: 5,
      company: t('client2Company') || 'Digital Innovations Ltd.'
    },
    {
      review: t('client3Review'),
      name: t('client3Name'),
      position: t('client3Position'),
      image: '/img/client-img/client3.jpg',
      rating: 5,
      company: t('client3Company') || 'Cyber Security Corp.'
    },
    {
      review: t('client4Review'),
      name: t('client4Name'),
      position: t('client4Position'),
      image: '/img/client-img/client4.jpg',
      rating: 5,
      company: t('client4Company') || 'Enterprise Systems'
    },
    {
      review: t('client5Review') || 'Outstanding service and exceptional support throughout our digital transformation journey.',
      name: t('client5Name') || 'Ahmed Al-Rashid',
      position: t('client5Position') || 'CTO',
      image: '/img/client-img/client1.jpg',
      rating: 5,
      company: t('client5Company') || 'Smart Solutions'
    },
    {
      review: t('client6Review') || 'Their expertise in cybersecurity has been invaluable to our organization.',
      name: t('client6Name') || 'Fatima Al-Mazrouei',
      position: t('client6Position') || 'IT Director',
      image: '/img/client-img/client2.jpg',
      rating: 5,
      company: t('client6Company') || 'Global Enterprises'
    }
  ];

  return (
    <>
      <section className="testimonials-area ptb-100">
        <div className="container">
          {/* Section Header */}
          <div className="section-title white-title" data-aos="fade-up">
            <span className="sub-title">
              <i className="bx bx-chat"></i>
              {t('subtitle') || 'Client Testimonials'}
            </span>
            <h2 className="text-white">{t('title')}</h2>
            <p className="text-white-90 mx-auto" style={{ maxWidth: '700px' }}>
              {t('description')}
            </p>
          </div>

          {/* Statistics Bar */}
          <div className="testimonials-stats" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-0">
              <div className="col-lg-3 col-6">
                <div className="stat-box">
                  <div className="stat-icon">
                    <i className="bx bx-happy-heart-eyes"></i>
                  </div>
                  <h3><span className="counter">500</span>+</h3>
                  <p>{t('happyClients') || 'Happy Clients'}</p>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="stat-box">
                  <div className="stat-icon">
                    <i className="bx bx-star"></i>
                  </div>
                  <h3>4.9/5</h3>
                  <p>{t('averageRating') || 'Average Rating'}</p>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="stat-box">
                  <div className="stat-icon">
                    <i className="bx bx-trophy"></i>
                  </div>
                  <h3><span className="counter">98</span>%</h3>
                  <p>{t('satisfaction') || 'Satisfaction Rate'}</p>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="stat-box">
                  <div className="stat-icon">
                    <i className="bx bx-badge-check"></i>
                  </div>
                  <h3><span className="counter">150</span>+</h3>
                  <p>{t('completedProjects') || 'Projects Completed'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Slider */}
          <div className="testimonials-slider-wrapper" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
                dynamicBullets: true,
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
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    {/* Quote Icon */}
                    <div className="quote-icon">
                      <i className="bx bxs-quote-alt-left"></i>
                    </div>

                    {/* Rating Stars */}
                    <div className="rating-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="bx bxs-star"></i>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="review-text">{testimonial.review}</p>

                    {/* Client Info */}
                    <div className="client-info">
                      <div className="client-avatar">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={70}
                          height={70}
                          className="avatar-img"
                        />
                        <div className="verified-badge">
                          <i className="bx bx-check"></i>
                        </div>
                      </div>
                      <div className="client-details">
                        <h4>{testimonial.name}</h4>
                        <p className="position">{testimonial.position}</p>
                        <p className="company">
                          <i className="bx bx-building"></i>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="card-decoration card-decoration-1"></div>
                    <div className="card-decoration card-decoration-2"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges" data-aos="fade-up" data-aos-delay="300">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-auto">
                <div className="trust-badge">
                  <i className="bx bx-shield-alt-2"></i>
                  <span>{t('trustedBy') || 'Trusted by 500+ Companies'}</span>
                </div>
              </div>
              <div className="col-auto">
                <div className="trust-badge">
                  <i className="bx bx-trophy"></i>
                  <span>{t('awardWinning') || 'Award Winning Service'}</span>
                </div>
              </div>
              <div className="col-auto">
                <div className="trust-badge">
                  <i className="bx bx-support"></i>
                  <span>{t('support247') || '24/7 Support Available'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="testimonials-bg">
          <div className="bg-shape bg-shape-1"></div>
          <div className="bg-shape bg-shape-2"></div>
          <div className="bg-shape bg-shape-3"></div>
        </div>
      </section>

      <style jsx>{`
        .testimonials-area {
          position: relative;
          background-color: #010e19;
          overflow: hidden;
        }

        .testimonials-area::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(/img/client-img/client-section-bg.jpg);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.15;
          z-index: 0;
        }

        .text-white-90 {
          color: rgba(255, 255, 255, 0.9);
        }

        .white-title .sub-title {
          color: white;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .testimonials-stats {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 40px 20px;
          margin: 50px 0;
          border: 2px solid rgba(255, 255, 255, 0.15);
          position: relative;
          z-index: 1;
        }

        .stat-box {
          text-align: center;
          padding: 20px;
          position: relative;
          transition: transform 0.3s ease;
        }

        .stat-box:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 60%;
          background: rgba(255, 255, 255, 0.2);
        }

        .stat-box:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .stat-box:hover .stat-icon {
          background: white;
          transform: scale(1.1);
        }

        .stat-icon i {
          font-size: 28px;
          color: white;
          transition: color 0.3s ease;
        }

        .stat-box:hover .stat-icon i {
          color: #1e3c72;
        }

        .stat-box h3 {
          font-size: 36px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-box p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 500;
        }

        .testimonials-slider-wrapper {
          margin: 50px 0;
          position: relative;
          z-index: 1;
        }

        .testimonials-area > .container {
          position: relative;
          z-index: 1;
        }

        .testimonial-card {
          background: white;
          padding: 40px 35px;
          border-radius: 25px;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .quote-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover .quote-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .quote-icon i {
          font-size: 30px;
          color: white;
        }

        .rating-stars {
          display: flex;
          gap: 5px;
          margin-bottom: 20px;
        }

        .rating-stars i {
          color: #ffc107;
          font-size: 18px;
          animation: starPulse 2s ease-in-out infinite;
        }

        .rating-stars i:nth-child(1) { animation-delay: 0s; }
        .rating-stars i:nth-child(2) { animation-delay: 0.1s; }
        .rating-stars i:nth-child(3) { animation-delay: 0.2s; }
        .rating-stars i:nth-child(4) { animation-delay: 0.3s; }
        .rating-stars i:nth-child(5) { animation-delay: 0.4s; }

        @keyframes starPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .review-text {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-top: 25px;
          border-top: 2px solid #f0f0f0;
        }

        .client-avatar {
          position: relative;
          flex-shrink: 0;
        }

        .avatar-img {
          border-radius: 50%;
          border: 4px solid #f0f0f0;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover .avatar-img {
          transform: scale(1.05);
          border-color: #667eea;
        }

        .verified-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: #00c853;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
        }

        .verified-badge i {
          color: white;
          font-size: 12px;
        }

        .client-details h4 {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 5px;
        }

        .client-details .position {
          font-size: 14px;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .client-details .company {
          font-size: 13px;
          color: #999;
          display: flex;
          align-items: center;
          gap: 5px;
          margin: 0;
        }

        .client-details .company i {
          font-size: 16px;
        }

        .card-decoration {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          z-index: 0;
        }

        .card-decoration-1 {
          width: 200px;
          height: 200px;
          top: -100px;
          right: -100px;
        }

        .card-decoration-2 {
          width: 150px;
          height: 150px;
          bottom: -75px;
          left: -75px;
        }

        .trust-badges {
          margin-top: 50px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.15);
          position: relative;
          z-index: 1;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 25px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .trust-badge:hover {
          background: white;
          color: #1e3c72;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .trust-badge i {
          font-size: 24px;
        }

        .testimonials-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .bg-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
        }

        .bg-shape-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          left: -150px;
          animation: float1 25s ease-in-out infinite;
        }

        .bg-shape-2 {
          width: 400px;
          height: 400px;
          bottom: -150px;
          right: -100px;
          animation: float2 20s ease-in-out infinite;
        }

        .bg-shape-3 {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float3 30s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -50px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, -40px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        /* Swiper Customization */
        :global(.testimonials-swiper) {
          padding-bottom: 60px !important;
        }

        :global(.testimonials-swiper .swiper-pagination) {
          bottom: 10px !important;
        }

        :global(.testimonials-swiper .swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.testimonials-swiper .swiper-pagination-bullet-active) {
          background: white;
          width: 30px;
          border-radius: 6px;
        }

        @media (max-width: 991px) {
          .testimonials-stats {
            padding: 30px 15px;
          }

          .stat-box {
            padding: 15px 10px;
          }

          .stat-box:not(:last-child)::after {
            display: none;
          }

          .stat-box h3 {
            font-size: 28px;
          }

          .stat-icon {
            width: 50px;
            height: 50px;
          }

          .stat-icon i {
            font-size: 24px;
          }

          .testimonial-card {
            padding: 30px 25px;
          }
        }

        @media (max-width: 767px) {
          .stat-box:nth-child(1),
          .stat-box:nth-child(2) {
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            padding-bottom: 20px;
            margin-bottom: 20px;
          }

          .trust-badge {
            padding: 12px 20px;
            font-size: 14px;
            justify-content: center;
          }

          .trust-badge i {
            font-size: 20px;
          }

          .client-info {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Testimonials;
