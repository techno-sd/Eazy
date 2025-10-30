"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

const LatesNews: React.FC = () => {
  const t = useTranslations('home.latestNews');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const blogPosts = [
    {
      image: '/img/blog/blog1.jpg',
      category: t('post1Category') || 'Cybersecurity',
      date: t('post1Date') || 'Dec 15, 2024',
      title: t('post1Title'),
      excerpt: t('post1Excerpt'),
      author: t('post1Author') || 'Admin',
      readTime: t('post1ReadTime') || '5 min read',
      categoryColor: '#667eea'
    },
    {
      image: '/img/blog/blog2.jpg',
      category: t('post2Category') || 'Cloud Security',
      date: t('post2Date') || 'Dec 12, 2024',
      title: t('post2Title'),
      excerpt: t('post2Excerpt'),
      author: t('post2Author') || 'Admin',
      readTime: t('post2ReadTime') || '4 min read',
      categoryColor: '#f093fb'
    },
    {
      image: '/img/blog/blog3.jpg',
      category: t('post3Category') || 'AI Technology',
      date: t('post3Date') || 'Dec 10, 2024',
      title: t('post3Title'),
      excerpt: t('post3Excerpt'),
      author: t('post3Author') || 'Admin',
      readTime: t('post3ReadTime') || '6 min read',
      categoryColor: '#4facfe'
    }
  ];

  return (
    <>
      <section className="blog-area ptb-100 bg-f9fafb">
        <div className="container">
          {/* Section Header */}
          <div className="section-title" data-aos="fade-up">
            <span className="sub-title">
              <i className="bx bx-news"></i>
              {t('subtitle') || 'Our Blog'}
            </span>
            <h2>{t('title')}</h2>
            <p className="mx-auto" style={{ maxWidth: '700px' }}>
              {t('description')}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="row g-4 justify-content-center">
            {blogPosts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                <article className="blog-card">
                  {/* Image Section */}
                  <div className="blog-image-wrapper">
                    <Link href={`/${locale}/blog/details`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={570}
                        height={400}
                        className="blog-image"
                      />
                    </Link>

                    {/* Category Badge */}
                    <div className="category-badge" style={{ background: post.categoryColor }}>
                      <i className="bx bx-category"></i>
                      {post.category}
                    </div>

                    {/* Overlay Gradient */}
                    <div className="image-overlay"></div>
                  </div>

                  {/* Content Section */}
                  <div className="blog-content">
                    {/* Meta Info */}
                    <div className="blog-meta">
                      <span className="meta-item">
                        <i className="bx bx-calendar"></i>
                        {post.date}
                      </span>
                      <span className="meta-item">
                        <i className="bx bx-time-five"></i>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="blog-title">
                      <Link href={`/${locale}/blog/details`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="blog-excerpt">{post.excerpt}</p>

                    {/* Footer */}
                    <div className="blog-footer">
                      <div className="author-info">
                        <div className="author-avatar">
                          <i className="bx bx-user-circle"></i>
                        </div>
                        <span>{post.author}</span>
                      </div>

                      <Link href={`/${locale}/blog/details`} className="read-more-btn">
                        {tCommon('readMore') || 'Read More'}
                        <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="card-corner"></div>
                </article>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="row mt-5" data-aos="fade-up" data-aos-delay="400">
            <div className="col-12 text-center">
              <Link href={`/${locale}/blog`} className="view-all-btn">
                <i className="bx bx-library"></i>
                {t('viewAllPosts') || 'View All Blog Posts'}
                <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="blog-decoration">
          <div className="deco-shape deco-shape-1"></div>
          <div className="deco-shape deco-shape-2"></div>
        </div>
      </section>

      <style jsx>{`
        .blog-area {
          position: relative;
          overflow: hidden;
        }

        .bg-f9fafb {
          background-color: #f9fafb;
        }

        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .blog-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 280px;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.1);
        }

        .category-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 8px 18px;
          border-radius: 25px;
          color: white;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 2;
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .category-badge i {
          font-size: 16px;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }

        .blog-content {
          padding: 30px 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #999;
        }

        .meta-item i {
          font-size: 16px;
          color: #d80650;
        }

        .blog-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .blog-title a {
          color: #1a1a1a;
          text-decoration: none;
          transition: color 0.3s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-card:hover .blog-title a {
          color: #d80650;
        }

        .blog-excerpt {
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          margin-bottom: 25px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 2px solid #f0f0f0;
          margin-top: auto;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #666;
          font-size: 14px;
          font-weight: 500;
        }

        .author-avatar {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .author-avatar i {
          font-size: 20px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d80650;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          gap: 12px;
          color: #ff0866;
        }

        .read-more-btn i {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .read-more-btn:hover i {
          transform: translateX(5px);
        }

        .card-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 60px 60px 0;
          border-color: transparent #d80650 transparent transparent;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover .card-corner {
          opacity: 0.1;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 45px;
          background: linear-gradient(135deg, #d80650 0%, #ff0866 100%);
          color: white;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(216, 6, 80, 0.3);
          position: relative;
          overflow: hidden;
        }

        .view-all-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
        }

        .view-all-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(216, 6, 80, 0.4);
          gap: 16px;
        }

        .view-all-btn:hover::before {
          left: 100%;
        }

        .view-all-btn i:first-child {
          font-size: 22px;
        }

        .view-all-btn i:last-child {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .view-all-btn:hover i:last-child {
          transform: translateX(5px);
        }

        .blog-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
        }

        .deco-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(216, 6, 80, 0.05) 0%, transparent 70%);
        }

        .deco-shape-1 {
          width: 400px;
          height: 400px;
          top: -150px;
          right: -150px;
          animation: float 20s ease-in-out infinite;
        }

        .deco-shape-2 {
          width: 350px;
          height: 350px;
          bottom: -100px;
          left: -100px;
          animation: float 15s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @media (max-width: 991px) {
          .blog-card {
            margin-bottom: 30px;
          }

          .blog-image-wrapper {
            height: 250px;
          }

          .blog-content {
            padding: 25px 20px;
          }

          .blog-title {
            font-size: 18px;
          }

          .view-all-btn {
            padding: 16px 35px;
            font-size: 15px;
          }
        }

        @media (max-width: 767px) {
          .blog-image-wrapper {
            height: 220px;
          }

          .blog-footer {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }

          .view-all-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default LatesNews;
