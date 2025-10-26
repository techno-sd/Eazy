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
      "Home Demo - 1": "homeDemo1",
      "Home Demo - 2": "homeDemo2",
      "Home Demo - 3": "homeDemo3",
      "Home Demo - 4": "homeDemo4",
      "Home Demo - 5": "homeDemo5",
      "Home Demo - 6": "homeDemo6",
      "Home Demo - 7": "homeDemo7",
      "Home Demo - 8": "homeDemo8",
      "Home Demo - 9": "homeDemo9",
      "About": "about",
      "Pages": "pages",
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
      "Services Style 1": "servicesStyle1",
      "Services Style 2": "servicesStyle2",
      "Services Style 3": "servicesStyle3",
      "Service Details": "serviceDetails",
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
