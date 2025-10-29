"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

const LatesNews: React.FC = () => {
  const t = useTranslations('home.latestNews');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      <section className="blog-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{t('title')}</h2>
            <p>
              {t('description')}
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-blog">
                <Image
                  src="/img/blog/blog1.jpg"
                  alt={t('post1Title')}
                  width={570}
                  height={600}
                />

                <div className="blog-content">
                  <h3>
                    <Link href={`/${locale}/blog/details`}>{t('post1Title')}</Link>
                  </h3>
                  <p>
                    {t('post1Excerpt')}
                  </p>

                  <Link href={`/${locale}/blog/details`} className="read-more">
                    {tCommon('readMore')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-blog">
                <Image
                  src="/img/blog/blog2.jpg"
                  alt={t('post2Title')}
                  width={570}
                  height={600}
                />

                <div className="blog-content">
                  <h3>
                    <Link href={`/${locale}/blog/details`}>{t('post2Title')}</Link>
                  </h3>
                  <p>
                    {t('post2Excerpt')}
                  </p>

                  <Link href={`/${locale}/blog/details`} className="read-more">
                    {tCommon('readMore')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-blog">
                <Image
                  src="/img/blog/blog3.jpg"
                  alt={t('post3Title')}
                  width={570}
                  height={600}
                />

                <div className="blog-content">
                  <h3>
                    <Link href={`/${locale}/blog/details`}>{t('post3Title')}</Link>
                  </h3>
                  <p>
                    {t('post3Excerpt')}
                  </p>

                  <Link href={`/${locale}/blog/details`} className="read-more">
                    {tCommon('readMore')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatesNews;
