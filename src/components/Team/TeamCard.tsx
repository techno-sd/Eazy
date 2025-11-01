"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const TeamCard: React.FC = () => {
  const t = useTranslations('team');

  return (
    <>
      <section className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>{t('title') || 'Our Expert Team'}</h2>
            <p>
              {t('description') || 'Meet our leadership team dedicated to providing exceptional cybersecurity solutions.'}
            </p>
          </div>

          <div className="row justify-content-center">
            {/* CEO - Eng. Mazin Al Motairy */}
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-team">
                <div className="image">
                  <Image
                    src="/img/team/ceo.jpeg"
                    alt="Eng. Mazin Al Motairy - CEO"
                    width={355}
                    height={455}
                    priority
                  />

                  <ul className="social">
                    <li>
                      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@eazycyber.sa" aria-label="Email">
                        <i className="bx bx-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>{t('ceo.name') || 'Eng. Mazin Al Motairy'}</h3>
                  <span>{t('ceo.position') || 'CEO of Eazy Cyber Agent'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .team-area {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title h2 {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .section-title p {
          font-size: 16px;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .single-team {
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 30px;
        }

        .single-team:hover {
          transform: translateY(-10px);
        }

        .single-team .image {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          margin-bottom: 25px;
          box-shadow: 0 15px 50px rgba(12, 75, 162, 0.15);
        }

        .single-team .image img {
          width: 100%;
          height: auto;
          transition: transform 0.5s ease;
          border-radius: 20px;
        }

        .single-team:hover .image img {
          transform: scale(1.1);
        }

        .single-team .social {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(100%);
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          gap: 10px;
          transition: all 0.4s ease;
          opacity: 0;
        }

        .single-team:hover .social {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }

        .single-team .social li {
          margin: 0;
        }

        .single-team .social li a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          color: #0C4BA2;
          font-size: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .single-team .social li a:hover {
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(12, 75, 162, 0.3);
        }

        .single-team .content {
          padding: 0 15px;
        }

        .single-team .content h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }

        .single-team:hover .content h3 {
          color: #0C4BA2;
        }

        .single-team .content span {
          font-size: 16px;
          color: #64748b;
          font-weight: 500;
          display: block;
        }

        /* RTL Support */
        [dir="rtl"] .single-team .social {
          left: 50%;
          right: auto;
        }

        @media (max-width: 991px) {
          .section-title h2 {
            font-size: 32px;
          }

          .single-team .content h3 {
            font-size: 20px;
          }
        }

        @media (max-width: 767px) {
          .section-title h2 {
            font-size: 28px;
          }

          .single-team .social {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
            position: relative;
            bottom: auto;
            left: auto;
            justify-content: center;
            margin-top: 15px;
          }

          .single-team:hover .social {
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default TeamCard;
