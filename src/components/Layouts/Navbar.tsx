"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopHeader from "./TopHeader";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import { useTranslations, useLocale } from 'next-intl';

const Navbar: React.FC = () => {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [menu, setMenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      let elementId = document.getElementById("navbar");
      if (scrollTop > 170) {
        elementId?.classList.add("is-sticky");
        setScrolled(true);
      } else {
        elementId?.classList.remove("is-sticky");
        setScrolled(false);
      }
      setScrollProgress(scrollPercent);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        {/* TopHeader */}
        <TopHeader />

        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            {/* Scroll Progress Bar */}
            <div className="scroll-progress-container">
              <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            <div className="main-nav">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link href="/" className="navbar-brand">
                    <Image
                      src="/img/logo.png"
                      alt="logo"
                      width={100}
                      height={39}
                      className="navbar-logo"
                    />
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      {menus.map((menuItem) => (
                        <MenuItem key={menuItem.label} {...menuItem} />
                      ))}
                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="get-quote">
                      <Link href={`/${locale}/contact`} className="default-btn btn-enhanced">
                        <span className="btn-text">{t('getQuote')}</span>
                        <span className="btn-icon">
                          <i className="bx bx-right-arrow-alt"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Scroll Progress Bar */
        .scroll-progress-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(12, 75, 162, 0.1);
          z-index: 1000;
        }

        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          transition: width 0.1s ease;
          box-shadow: 0 0 10px rgba(12, 75, 162, 0.5);
        }

        /* Enhanced Logo */
        :global(.navbar-logo) {
          transition: transform 0.3s ease;
        }

        :global(.navbar-brand:hover .navbar-logo) {
          transform: scale(1.05);
        }

        /* Enhanced Get Quote Button */
        :global(.btn-enhanced) {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          border: none;
          border-radius: 50px;
          box-shadow: 0 8px 20px rgba(12, 75, 162, 0.3);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        :global(.btn-enhanced::before) {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        :global(.btn-enhanced:hover::before) {
          left: 100%;
        }

        :global(.btn-enhanced:hover) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(12, 75, 162, 0.4);
          gap: 12px;
        }

        :global(.btn-text) {
          position: relative;
          z-index: 1;
          font-weight: 600;
          font-size: 15px;
        }

        :global(.btn-icon) {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        :global(.btn-icon i) {
          font-size: 18px;
          color: white;
        }

        :global(.btn-enhanced:hover .btn-icon) {
          transform: translateX(3px);
        }

        /* Navbar Enhanced Sticky Effect */
        :global(.navbar-area.is-sticky) {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 28px rgba(0, 0, 0, 0.08);
          animation: slideDown 0.4s ease;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Enhanced Menu Items Hover */
        :global(.navbar-nav .nav-item .nav-link) {
          position: relative;
          transition: all 0.3s ease;
        }

        :global(.navbar-nav .nav-item .nav-link::after) {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0C4BA2 0%, #1FB6E8 100%);
          transition: width 0.3s ease;
        }

        :global(.navbar-nav .nav-item .nav-link:hover::after),
        :global(.navbar-nav .nav-item .nav-link.active::after) {
          width: 80%;
        }

        /* Dropdown Menu Enhancement */
        :global(.navbar-nav .dropdown-menu) {
          border: none;
          border-radius: 15px;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.15);
          padding: 15px 0;
          margin-top: 15px;
          animation: dropdownSlide 0.3s ease;
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.navbar-nav .dropdown-menu .nav-link) {
          padding: 12px 25px;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }

        :global(.navbar-nav .dropdown-menu .nav-link:hover) {
          background: linear-gradient(90deg, rgba(12, 75, 162, 0.05) 0%, transparent 100%);
          border-left-color: #0C4BA2;
          padding-left: 30px;
        }

        /* Others Option Container - Fix Button Alignment */
        :global(.others-option) {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        :global(.get-quote) {
          display: flex;
          align-items: center;
        }

        /* Language Switcher Alignment */
        :global(.others-option > div:last-child) {
          display: flex;
          align-items: center;
        }

        /* Mobile Menu Enhancement */
        @media (max-width: 991px) {
          :global(.navbar-collapse) {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-top: 15px;
          }

          :global(.others-option) {
            flex-direction: column;
            width: 100%;
          }

          :global(.btn-enhanced) {
            width: 100%;
            justify-content: center;
            margin-top: 15px;
          }

          :global(.others-option > div:last-child) {
            width: 100%;
            justify-content: center;
            margin-top: 10px;
          }
        }

        /* Smooth Transitions */
        * {
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        /* RTL Support */
        [dir="rtl"] :global(.btn-enhanced:hover .btn-icon) {
          transform: translateX(-3px);
        }

        [dir="rtl"] :global(.navbar-nav .dropdown-menu .nav-link:hover) {
          border-left: none;
          border-right: 3px solid #0C4BA2;
          padding-left: 25px;
          padding-right: 30px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
