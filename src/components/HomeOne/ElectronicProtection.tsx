"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

const ElectronicProtection: React.FC = () => {
  const t = useTranslations('home.electronicProtection');
  const locale = useLocale();

  const openTabSection = (evt: React.MouseEvent<HTMLLIElement>, tabName: string) => {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element> = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }

    let tablinks: HTMLCollectionOf<Element> = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      (tablinks[i] as HTMLElement).className = (tablinks[i] as HTMLElement).className.replace("current", "");
    }

    let element = document.getElementById(tabName);
    if (element) {
      element.style.display = "block";
    }
    (evt.currentTarget as HTMLElement).className += " current";
  };

  return (
    <>
      <section className="electronic-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="electronic-content">
                <h2>
                  {t('title')}
                </h2>

                <div className="electronic-tab-wrap">
                  <div className="tab electronic-tab">
                    {/* Tabs Nav */}
                    <ul className="tabs">
                      <li
                        className="current"
                        onClick={(e) => openTabSection(e, "tab1")}
                      >
                        {t('intercomTab')}
                      </li>
                      <li onClick={(e) => openTabSection(e, "tab2")}>{t('cctvTab')}</li>
                      <li onClick={(e) => openTabSection(e, "tab3")}>{t('gdprTab')}</li>
                      <li onClick={(e) => openTabSection(e, "tab4")}>
                        {t('encryptionTab')}
                      </li>
                      <li onClick={(e) => openTabSection(e, "tab5")}>
                        {t('goalTab')}
                      </li>
                    </ul>

                    {/* Tab Content */}
                    <div className="tab_content">
                      <div id="tab1" className="tabs_item">
                        <p>
                          {t('intercomContent1')}
                        </p>

                        <p>
                          {t('intercomContent2')}
                        </p>

                        <Link href={`/${locale}/about`} className="default-btn">
                          {t('learnAbout')}
                        </Link>
                      </div>

                      <div id="tab2" className="tabs_item">
                        <p>
                          {t('cctvContent1')}
                        </p>

                        <p>
                          {t('cctvContent2')}
                        </p>

                        <Link href={`/${locale}/about`} className="default-btn">
                          {t('learnAbout')}
                        </Link>
                      </div>

                      <div id="tab3" className="tabs_item">
                        <p>
                          {t('gdprContent1')}
                        </p>

                        <p>
                          {t('gdprContent2')}
                        </p>

                        <Link href={`/${locale}/about`} className="default-btn">
                          {t('learnAbout')}
                        </Link>
                      </div>

                      <div id="tab4" className="tabs_item">
                        <p>
                          {t('encryptionContent1')}
                        </p>

                        <p>
                          {t('encryptionContent2')}
                        </p>

                        <Link href={`/${locale}/about`} className="default-btn">
                          {t('learnAbout')}
                        </Link>
                      </div>

                      <div id="tab5" className="tabs_item">
                        <p>
                          {t('goalContent1')}
                        </p>

                        <p>
                          {t('goalContent2')}
                        </p>

                        <Link href={`/${locale}/about`} className="default-btn">
                          {t('learnAbout')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="electronic-img">
                <Image
                  src="/img/electronic-img.png"
                  alt="Electronic protection system visualization"
                  width={570}
                  height={485}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectronicProtection;
