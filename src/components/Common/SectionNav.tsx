"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';

interface Section {
  id: string;
  label: string;
  icon: string;
}

const SectionNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('home');

  const sections: Section[] = [
    { id: "about", label: t('nav.about') || "About", icon: "bx bx-info-circle" },
    { id: "stats", label: t('nav.stats') || "Stats", icon: "bx bx-bar-chart-alt-2" },
    { id: "vision", label: t('nav.vision') || "Vision 2030", icon: "bx bx-bulb" },
    { id: "services", label: t('nav.services') || "Services", icon: "bx bx-cog" },
    { id: "industries", label: t('nav.industries') || "Industries", icon: "bx bx-briefcase" },
    { id: "testimonials", label: t('nav.testimonials') || "Testimonials", icon: "bx bx-star" },
    { id: "contact", label: t('nav.contact') || "Contact", icon: "bx bx-envelope" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="section-nav"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="section-nav-container">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  className="section-nav-item"
                  onClick={() => scrollToSection(section.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={section.label}
                >
                  <i className={section.icon}></i>
                  <span className="section-nav-label">{section.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .section-nav {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999;
          pointer-events: all;
        }

        .section-nav-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.15);
          border: 1px solid rgba(12, 75, 162, 0.1);
        }

        .section-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          white-space: nowrap;
          min-width: 48px;
        }

        .section-nav-item i {
          font-size: 20px;
          color: #64748b;
          transition: color 0.3s ease;
          z-index: 2;
          position: relative;
        }

        .section-nav-label {
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
          position: relative;
        }

        .section-nav-item:hover .section-nav-label {
          opacity: 1;
          max-width: 150px;
          margin-left: 0;
        }

        .section-nav-item:hover {
          background: rgba(12, 75, 162, 0.1);
        }

        .section-nav-item:hover i {
          color: #0C4BA2;
        }

        /* Tooltip effect */
        .section-nav-item::before {
          content: attr(title);
          position: absolute;
          right: calc(100% + 15px);
          padding: 8px 16px;
          background: rgba(26, 26, 26, 0.95);
          color: #fff;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 10;
        }

        .section-nav-item::after {
          content: '';
          position: absolute;
          right: calc(100% + 7px);
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 0 6px 8px;
          border-color: transparent transparent transparent rgba(26, 26, 26, 0.95);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .section-nav-item:hover::before,
        .section-nav-item:hover::after {
          opacity: 1;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .section-nav {
            right: 15px;
          }
        }

        @media (max-width: 991px) {
          .section-nav {
            display: none;
          }
        }

        /* RTL Support */
        [dir="rtl"] .section-nav {
          right: auto;
          left: 30px;
        }

        [dir="rtl"] .section-nav-item::before {
          right: auto;
          left: calc(100% + 15px);
        }

        [dir="rtl"] .section-nav-item::after {
          right: auto;
          left: calc(100% + 7px);
          border-width: 6px 8px 6px 0;
          border-color: transparent rgba(26, 26, 26, 0.95) transparent transparent;
        }

        @media (max-width: 1200px) {
          [dir="rtl"] .section-nav {
            left: 15px;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .section-nav-container {
            background: rgba(26, 26, 26, 0.95);
            border-color: rgba(255, 255, 255, 0.1);
          }

          .section-nav-item i,
          .section-nav-label {
            color: #94a3b8;
          }

          .section-nav-item:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          .section-nav-item:hover i {
            color: #1FB6E8;
          }
        }
      `}</style>
    </>
  );
};

export default SectionNav;
