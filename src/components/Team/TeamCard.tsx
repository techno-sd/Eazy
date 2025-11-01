"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const TeamCard: React.FC = () => {
  const t = useTranslations('team');
  return (
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
            <div className="team-card glass-effect hover-lift">
              <div className="team-img image-zoom">
                <Image
                  src="/img/team/ceo.jpeg"
                  alt="Eng. Mazin Al Motairy - CEO"
                  width={355}
                  height={455}
                  priority
                  className="rounded"
                />
                <ul className="social-links">
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
              <div className="team-content text-center">
                <h3 className="team-name mb-2">{t('ceo.name') || 'Eng. Mazin Al Motairy'}</h3>
                <span className="team-position">{t('ceo.position') || 'CEO of Eazy Cyber Agent'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
