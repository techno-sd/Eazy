"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from 'next-intl';

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: { label: string; link: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('nav');

  // Helper to get translation key from label
  const getTranslationKey = (label: string): string => {
    const keyMap: Record<string, string> = {
      "Home": "home",
      "About": "about",
      "Why Choose Us": "whyChooseUs",
      "Industries": "industries",
      "Vision 2030": "vision2030",
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
      "Blog": "blog",
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
        {translatedLabel}
      </Link>
    </li>
  );
};

export default MenuItem;
