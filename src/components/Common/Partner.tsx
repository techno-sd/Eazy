"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Partner: React.FC = () => {
  const t = useTranslations('home.partners');

  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          {/* Section Header */}
          <div className="partner-header" data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              background: 'linear-gradient(135deg, rgba(216, 6, 80, 0.1) 0%, rgba(255, 8, 102, 0.1) 100%)',
              borderRadius: '30px',
              color: '#d80650',
              fontWeight: 600,
              fontSize: '14px',
              marginBottom: '20px',
              border: '2px solid rgba(216, 6, 80, 0.2)'
            }}>
              <i className="bx bx-award" style={{ fontSize: '20px' }}></i>
              <span>{t('badge') || 'Trusted Partners'}</span>
            </div>
            <h3 className="partner-title" style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#1a1a1a',
              marginBottom: '15px',
              lineHeight: 1.3
            }}>
              {t('title') || 'Trusted by Leading Organizations'}
            </h3>
            <p className="partner-subtitle" style={{
              fontSize: '16px',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              {t('subtitle') || 'We proudly collaborate with industry leaders to deliver exceptional cybersecurity solutions'}
            </p>
          </div>

          {/* Glassmorphic Container */}
          <div className="partner-container" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                922: {
                  slidesPerView: 5,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="partner-wrap"
            >
            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/img/partners/partner1.png"
                  alt="Image"
                  width={114}
                  height={125}
                />

                <a className="partner-overly" href="#" target="_blank">
                  <Image
                    src="/img/partners/hover-partner1.png"
                    alt="Image"
                    width={114}
                    height={125}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/img/partners/partner2.png"
                  alt="Image"
                  width={114}
                  height={125}
                />
                <a className="partner-overly" href="#" target="_blank">
                  <Image
                    src="/img/partners/hover-partner2.png"
                    alt="Image"
                    width={114}
                    height={125}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/img/partners/partner3.png"
                  alt="Image"
                  width={114}
                  height={125}
                />
                <a className="partner-overly" href="#" target="_blank">
                  <Image
                    src="/img/partners/hover-partner3.png"
                    alt="Image"
                    width={114}
                    height={125}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/img/partners/partner4.png"
                  alt="Image"
                  width={114}
                  height={125}
                />
                <a className="partner-overly" href="#" target="_blank">
                  <Image
                    src="/img/partners/hover-partner4.png"
                    alt="Image"
                    width={114}
                    height={125}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/img/partners/partner5.png"
                  alt="Image"
                  width={114}
                  height={125}
                />
                <a className="partner-overly" href="#" target="_blank">
                  <Image
                    src="/img/partners/hover-partner5.png"
                    alt="Image"
                    width={114}
                    height={125}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/img/partners/partner3.png"
                  alt="Image"
                  width={114}
                  height={125}
                />
                <a className="partner-overly" href="#" target="_blank">
                  <Image
                    src="/img/partners/hover-partner3.png"
                    alt="Image"
                    width={114}
                    height={125}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          </div>

          {/* Stats Counter */}
          <div className="partner-stats" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bx bx-check-shield"></i>
              </div>
              <div className="stat-content">
                <h4>500+</h4>
                <p>{t('stat1') || 'Projects Secured'}</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bx bx-trophy"></i>
              </div>
              <div className="stat-content">
                <h4>15+</h4>
                <p>{t('stat2') || 'Years Experience'}</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bx bx-group"></i>
              </div>
              <div className="stat-content">
                <h4>200+</h4>
                <p>{t('stat3') || 'Happy Clients'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="partner-decoration">
          <div className="decoration-blob blob-1"></div>
          <div className="decoration-blob blob-2"></div>
        </div>
      </div>

      <style jsx>{`
        .partner-area {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
        }

        .partner-area :global(.partner-header) {
          text-align: center;
          margin-bottom: 60px;
        }

        .partner-area :global(.section-badge) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.1) 0%, rgba(255, 8, 102, 0.1) 100%);
          border-radius: 30px;
          color: #d80650;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 20px;
          border: 2px solid rgba(216, 6, 80, 0.2);
        }

        .section-badge i {
          font-size: 20px;
        }

        .partner-title {
          font-size: 36px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .partner-subtitle {
          font-size: 16px;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .partner-container {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          padding: 50px 40px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }

        .partner-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(216, 6, 80, 0.03) 0%, rgba(255, 8, 102, 0.03) 100%);
          pointer-events: none;
        }

        .partner-wrap {
          position: relative;
          z-index: 1;
        }

        :global(.partner-wrap .swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .partner-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transition: all 0.4s ease;
          filter: grayscale(100%);
          opacity: 0.6;
        }

        .partner-item:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }

        .partner-item img {
          max-width: 100%;
          height: auto;
          transition: all 0.4s ease;
        }

        .partner-overly {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
          padding: 20px;
        }

        .partner-item:hover .partner-overly {
          opacity: 1;
        }

        .partner-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          margin-top: 60px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px 35px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(216, 6, 80, 0.15);
          border-color: #d80650;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon i {
          font-size: 30px;
          color: white;
        }

        .stat-content h4 {
          font-size: 32px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 5px;
          line-height: 1;
        }

        .stat-content p {
          font-size: 14px;
          color: #666;
          margin: 0;
          font-weight: 500;
        }

        .partner-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .decoration-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          top: -200px;
          right: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #ff0866 0%, #d80650 100%);
          bottom: -150px;
          left: -100px;
          animation: float 15s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(30px, -30px) rotate(10deg);
          }
        }

        /* Responsive */
        @media (max-width: 991px) {
          .partner-title {
            font-size: 28px;
          }

          .partner-container {
            padding: 40px 30px;
          }

          .partner-stats {
            gap: 30px;
          }

          .stat-item {
            padding: 20px 25px;
          }

          .stat-icon {
            width: 50px;
            height: 50px;
          }

          .stat-icon i {
            font-size: 24px;
          }

          .stat-content h4 {
            font-size: 26px;
          }
        }

        @media (max-width: 767px) {
          .partner-header {
            margin-bottom: 40px;
          }

          .partner-title {
            font-size: 24px;
          }

          .partner-subtitle {
            font-size: 14px;
          }

          .partner-container {
            padding: 30px 20px;
          }

          .partner-stats {
            flex-direction: column;
            gap: 20px;
          }

          .stat-item {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Partner;
