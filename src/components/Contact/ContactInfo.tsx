"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const ContactInfo: React.FC = () => {
  const t = useTranslations('contact');

  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">
            {/* Riyadh Office Info */}
            <div className="col-lg-6 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>{t('location.city') || 'Riyadh'}</h3>
                <p>{t('location.address') || 'Kingdom of Saudi Arabia'}</p>
                <a href="mailto:info@eazycyber.sa" className="contact-link">
                  <i className="bx bx-envelope"></i>
                  Email: info@eazycyber.sa
                </a>
                <a href="tel:+966506345773" className="contact-link" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>
                  <i className="bx bx-phone"></i>
                  +966 50 634 5773
                </a>
              </div>
            </div>

            {/* Riyadh Map */}
            <div className="col-lg-6 p-0">
              <div className="single-contact-map">
                {/* Riyadh, Saudi Arabia Coordinates: 24.7136, 46.6753 */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0984699553896!2d46.67530731500155!3d24.713599584128443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f030f7c0d9d4d%3A0x6e4d3f7e8f3c7f8a!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Riyadh Office Location"
                  aria-label="Map showing Riyadh office location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-info-area {
          background: #f8fafc;
        }

        .single-contact-info {
          padding: 80px 50px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: white;
          text-align: center;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .single-contact-info::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .single-contact-info i.bx-location-plus {
          font-size: 60px;
          margin-bottom: 25px;
          color: white;
          position: relative;
          z-index: 2;
        }

        .single-contact-info h3 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
          position: relative;
          z-index: 2;
        }

        .single-contact-info p {
          font-size: 16px;
          margin-bottom: 25px;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 2;
          line-height: 1.6;
        }

        .single-contact-info .contact-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: white;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
          padding: 10px 20px;
          border-radius: 8px;
        }

        .single-contact-info .contact-link:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(5px);
        }

        .single-contact-info .contact-link i {
          font-size: 20px;
        }

        .single-contact-map {
          position: relative;
          min-height: 400px;
          background: #e2e8f0;
        }

        .single-contact-map iframe {
          width: 100%;
          height: 400px;
          border: none;
          display: block;
        }

        /* RTL Support */
        [dir="rtl"] .single-contact-info .contact-link:hover {
          transform: translateX(-5px);
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .single-contact-info {
            padding: 60px 40px;
            min-height: 350px;
          }

          .single-contact-info i.bx-location-plus {
            font-size: 50px;
            margin-bottom: 20px;
          }

          .single-contact-info h3 {
            font-size: 28px;
          }

          .single-contact-map {
            min-height: 350px;
          }

          .single-contact-map iframe {
            height: 350px;
          }
        }

        @media (max-width: 767px) {
          .single-contact-info {
            padding: 50px 30px;
            min-height: 300px;
          }

          .single-contact-info i.bx-location-plus {
            font-size: 40px;
            margin-bottom: 15px;
          }

          .single-contact-info h3 {
            font-size: 24px;
          }

          .single-contact-info p {
            font-size: 15px;
          }

          .single-contact-info .contact-link {
            font-size: 15px;
          }

          .single-contact-map {
            min-height: 300px;
          }

          .single-contact-map iframe {
            height: 300px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactInfo;
