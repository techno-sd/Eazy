"use client";

import React from "react";
import { useTranslations } from 'next-intl';

const ContactSection: React.FC = () => {
  const t = useTranslations('home.contact');

  const contactInfo = [
    {
      icon: "bx bx-map",
      title: t('addressTitle') || 'Visit Us',
      info: t('address') || 'Riyadh, Saudi Arabia',
      delay: "100"
    },
    {
      icon: "bx bx-phone-call",
      title: t('phoneTitle') || 'Call Us',
      info: t('phone') || '+966 XX XXX XXXX',
      delay: "200"
    },
    {
      icon: "bx bx-envelope",
      title: t('emailTitle') || 'Email Us',
      info: t('email') || 'info@pisa.com',
      delay: "300"
    }
  ];

  return (
    <>
      <section className="contact-section ptb-100 bg-f9fafb">
        <div className="container">
          {/* Section Header */}
          <div className="section-title" data-aos="fade-up">
            <span className="sub-title">
              <i className="bx bx-conversation"></i>
              {t('subtitle')}
            </span>
            <h2>{t('title')}</h2>
            <p className="mx-auto" style={{ maxWidth: '700px' }}>
              {t('description')}
            </p>
          </div>

          <div className="row align-items-center g-5">
            {/* Contact Info Column */}
            <div className="col-lg-5">
              <div className="contact-info-wrapper">
                <div className="contact-info-header" data-aos="fade-right">
                  <h3>{t('infoTitle') || "Let's Start a Conversation"}</h3>
                  <p>{t('infoDescription') || 'Get in touch with our team for inquiries, support, or collaboration opportunities'}</p>
                </div>

                {/* Contact Info Cards */}
                <div className="contact-info-list">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="contact-info-item" data-aos="fade-right" data-aos-delay={item.delay}>
                      <div className="info-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="info-content">
                        <h4>{item.title}</h4>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="contact-social" data-aos="fade-right" data-aos-delay="400">
                  <h4>{t('followUs') || 'Follow Us'}</h4>
                  <div className="social-links">
                    <a href="#" aria-label="Facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" aria-label="Twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="col-lg-7">
              <div className="modern-contact-form" data-aos="fade-left">
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder={t('namePlaceholder')}
                          required
                        />
                        <label htmlFor="name">
                          <i className="bx bx-user"></i>
                          {t('namePlaceholder')}
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder={t('emailPlaceholder')}
                          required
                        />
                        <label htmlFor="email">
                          <i className="bx bx-envelope"></i>
                          {t('emailPlaceholder')}
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder={t('phonePlaceholder')}
                          required
                        />
                        <label htmlFor="phone">
                          <i className="bx bx-phone"></i>
                          {t('phonePlaceholder')}
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder={t('subjectPlaceholder')}
                          required
                        />
                        <label htmlFor="subject">
                          <i className="bx bx-message-square-detail"></i>
                          {t('subjectPlaceholder')}
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder={t('messagePlaceholder')}
                          style={{ height: '180px' }}
                          required
                        ></textarea>
                        <label htmlFor="message">
                          <i className="bx bx-edit"></i>
                          {t('messagePlaceholder')}
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="submit-btn">
                        <span>{t('submitButton')}</span>
                        <i className="bx bx-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="contact-decoration">
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          position: relative;
          overflow: hidden;
        }

        .bg-f9fafb {
          background-color: #f9fafb;
        }

        .contact-info-wrapper {
          position: relative;
          z-index: 1;
        }

        .contact-info-header {
          margin-bottom: 40px;
        }

        .contact-info-header h3 {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .contact-info-header p {
          font-size: 16px;
          color: #666;
          line-height: 1.7;
        }

        .contact-info-list {
          margin-bottom: 40px;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 25px;
          background: white;
          border-radius: 18px;
          margin-bottom: 20px;
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .contact-info-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.1);
          border-color: #0C4BA2;
        }

        .info-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .contact-info-item:hover .info-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .info-icon i {
          font-size: 28px;
          color: white;
        }

        .info-content h4 {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .info-content p {
          font-size: 15px;
          color: #666;
          margin: 0;
        }

        .contact-social h4 {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0C4BA2;
          font-size: 22px;
          transition: all 0.3s ease;
          border: 2px solid #e0e0e0;
        }

        .social-links a:hover {
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: white;
          transform: translateY(-5px);
          border-color: transparent;
          box-shadow: 0 10px 25px rgba(12, 75, 162, 0.3);
        }

        .modern-contact-form {
          background: white;
          padding: 50px;
          border-radius: 25px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .modern-contact-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
        }

        .form-floating {
          position: relative;
        }

        .form-floating .form-control {
          height: 60px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          padding: 20px 20px 20px 50px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #f9fafb;
        }

        .form-floating textarea.form-control {
          height: auto;
          padding-top: 20px;
        }

        .form-floating .form-control:focus {
          border-color: #0C4BA2;
          box-shadow: 0 0 0 4px rgba(12, 75, 162, 0.1);
          background: white;
        }

        .form-floating label {
          position: absolute;
          top: 50%;
          left: 50px;
          transform: translateY(-50%);
          font-size: 15px;
          color: #999;
          pointer-events: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .form-floating textarea ~ label {
          top: 30px;
          transform: none;
        }

        .form-floating label i {
          position: absolute;
          left: -30px;
          font-size: 20px;
        }

        .form-floating .form-control:focus ~ label,
        .form-floating .form-control:not(:placeholder-shown) ~ label {
          top: -10px;
          left: 15px;
          font-size: 12px;
          color: #0C4BA2;
          background: white;
          padding: 0 8px;
        }

        .form-floating textarea.form-control:focus ~ label,
        .form-floating textarea.form-control:not(:placeholder-shown) ~ label {
          top: -10px;
        }

        .submit-btn {
          width: 100%;
          padding: 18px 40px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(12, 75, 162, 0.3);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(12, 75, 162, 0.4);
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn i {
          font-size: 22px;
          transition: transform 0.3s ease;
        }

        .submit-btn:hover i {
          transform: translateX(5px);
        }

        .contact-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(12, 75, 162, 0.05) 0%, transparent 70%);
        }

        .decoration-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          right: -200px;
          animation: float 20s ease-in-out infinite;
        }

        .decoration-2 {
          width: 400px;
          height: 400px;
          bottom: -150px;
          left: -150px;
          animation: float 15s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @media (max-width: 991px) {
          .modern-contact-form {
            padding: 35px 25px;
            margin-top: 40px;
          }

          .contact-info-header h3 {
            font-size: 26px;
          }

          .contact-info-item {
            padding: 20px;
          }

          .info-icon {
            width: 50px;
            height: 50px;
          }

          .info-icon i {
            font-size: 24px;
          }
        }

        @media (max-width: 767px) {
          .modern-contact-form {
            padding: 30px 20px;
          }

          .contact-info-header h3 {
            font-size: 24px;
          }

          .submit-btn {
            padding: 16px 30px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactSection;
