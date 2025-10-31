"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from 'next-intl';

interface MenuItemProps {
  label: string;
  link: string;
  icon?: string;
  submenu?: { label: string; link: string; icon?: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, icon, submenu }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('nav');

  // Helper to get translation key from label
  const getTranslationKey = (label: string): string => {
    const keyMap: Record<string, string> = {
      "Home": "home",
      "About": "about",
      "About Us": "aboutUs",
      "Why Choose Us": "whyChooseUs",
      "Industries": "industries",
      "All Industries": "allIndustries",
      "Government Sector": "governmentSector",
      "Banking & Financial": "bankingFinancial",
      "Energy & Telecom": "energyTelecom",
      "Healthcare": "healthcare",
      "Education": "education",
      "SME": "sme",
      "Vision 2030": "vision2030",
      "Our Vision": "ourVision",
      "Core Values": "coreValues",
      "Projects": "projects",
      "Pricing": "pricing",
      "Testimonials": "testimonials",
      "Team": "team",
      "Faq": "faq",
      "Sign In": "signIn",
      "Sign Up": "signUp",
      "Coming Soon": "comingSoon",
      "404 Error Page": "errorPage",
      "Terms & Conditions": "termsConditions",
      "Privacy Policy": "privacyPolicy",
      "Services": "services",
      "All Services": "allServices",
      "AI Solutions": "aiSolutions",
      "Cybersecurity": "cybersecurity",
      "Big Data & Analytics": "bigDataAnalytics",
      "Cloud & Hosting": "cloudHosting",
      "SME-EAZY Program": "smeProgram",
      "Case Studies": "caseStudies",
      "Our Team": "ourTeam",
      "Blog": "blog",
      "All Posts": "allPosts",
      "Company Updates": "companyUpdates",
      "AI & Digital": "aiDigital",
      "Blog Grid": "blogGrid",
      "Blog Left Sidebar": "blogLeftSidebar",
      "Blog Right Sidebar": "blogRightSidebar",
      "Blog Details": "blogDetails",
      "Contact": "contact"
    };
    return keyMap[label] || label;
  };

  // Create locale-aware link
  const localizedLink = link === '#' ? '#' : `/${locale}${link}`;
  const isActive = pathname == localizedLink;

  // Get translated label
  const translatedLabel = t(getTranslationKey(label));

  if (submenu) {
    return (
      <li className="nav-item" key={label}>
        <Link
          href={localizedLink}
          className="nav-link"
          onClick={(e) => e.preventDefault()}
        >
          {icon && <i className={`bx ${icon}`}></i>}
          {translatedLabel} <i className="bx bx-chevron-down"></i>
        </Link>

        <ul className="dropdown-menu">
          {submenu.map((subItem) => {
            const subLocalizedLink = subItem.link === '#' ? '#' : `/${locale}${subItem.link}`;
            const isSubActive = pathname == subLocalizedLink;
            const translatedSubLabel = t(getTranslationKey(subItem.label));

            return (
              <li className="nav-item" key={subItem.label}>
                <Link
                  href={subLocalizedLink}
                  className={`nav-link ${isSubActive ? "active" : ""}`}
                >
                  {(subItem as any).icon && <i className={`bx ${(subItem as any).icon}`}></i>}
                  {translatedSubLabel}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item" key={label}>
      <Link href={localizedLink} className={`nav-link ${isActive ? "active" : ""}`}>
        {icon && <i className={`bx ${icon}`}></i>}
        {translatedLabel}
      </Link>
    </li>
  );
};

export default MenuItem;
