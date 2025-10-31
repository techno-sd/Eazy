"use client";

import React from "react";

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'image' | 'avatar' | 'service-card';
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type = 'card',
  count = 1,
  className = ''
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'service-card':
        return (
          <div className={`skeleton-service-card ${className}`}>
            <div className="skeleton-row">
              <div className="skeleton-image-section">
                <div className="skeleton skeleton-image"></div>
                <div className="skeleton skeleton-icon-badge"></div>
              </div>
              <div className="skeleton-content-section">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
              </div>
            </div>
          </div>
        );

      case 'card':
        return (
          <div className={`skeleton-card ${className}`}>
            <div className="skeleton skeleton-image"></div>
            <div className="skeleton-card-content">
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text short"></div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className={`skeleton-text-block ${className}`}>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text short"></div>
          </div>
        );

      case 'image':
        return <div className={`skeleton skeleton-image ${className}`}></div>;

      case 'avatar':
        return <div className={`skeleton skeleton-avatar ${className}`}></div>;

      default:
        return <div className={`skeleton ${className}`}></div>;
    }
  };

  return (
    <>
      <div className="skeleton-wrapper">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="skeleton-item">
            {renderSkeleton()}
          </div>
        ))}
      </div>

      <style jsx global>{`
        /* Base Skeleton Styles */
        .skeleton {
          background: linear-gradient(
            90deg,
            #f0f0f0 0%,
            #e0e0e0 20%,
            #f0f0f0 40%,
            #f0f0f0 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
          border-radius: 8px;
        }

        @keyframes skeleton-loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .skeleton-wrapper {
          width: 100%;
        }

        .skeleton-item {
          margin-bottom: 20px;
        }

        /* Service Card Skeleton */
        .skeleton-service-card {
          background: white;
          border-radius: 24px;
          padding: 0;
          box-shadow: 0 10px 40px rgba(12, 75, 162, 0.08);
          overflow: hidden;
        }

        .skeleton-row {
          display: flex;
          align-items: center;
        }

        .skeleton-image-section {
          position: relative;
          width: 33.33%;
          padding: 30px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .skeleton-image-section .skeleton-image {
          width: 100%;
          height: 300px;
          border-radius: 16px;
        }

        .skeleton-icon-badge {
          position: absolute;
          bottom: 40px;
          left: 40px;
          width: 70px;
          height: 70px;
          border-radius: 18px;
        }

        .skeleton-content-section {
          flex: 1;
          padding: 40px;
        }

        .skeleton-title {
          width: 60%;
          height: 32px;
          margin-bottom: 25px;
          border-radius: 8px;
        }

        .skeleton-text {
          width: 100%;
          height: 16px;
          margin-bottom: 15px;
          border-radius: 6px;
        }

        .skeleton-text.short {
          width: 70%;
        }

        /* Card Skeleton */
        .skeleton-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .skeleton-card .skeleton-image {
          width: 100%;
          height: 200px;
          border-radius: 0;
        }

        .skeleton-card-content {
          padding: 25px;
        }

        .skeleton-card-content .skeleton-title {
          width: 70%;
          height: 24px;
          margin-bottom: 15px;
        }

        .skeleton-card-content .skeleton-text {
          width: 100%;
          height: 14px;
          margin-bottom: 10px;
        }

        .skeleton-card-content .skeleton-text.short {
          width: 50%;
        }

        /* Text Block Skeleton */
        .skeleton-text-block {
          padding: 20px 0;
        }

        .skeleton-text-block .skeleton-text {
          width: 100%;
          height: 16px;
          margin-bottom: 12px;
        }

        .skeleton-text-block .skeleton-text.short {
          width: 60%;
        }

        /* Avatar Skeleton */
        .skeleton-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .skeleton-row {
            flex-direction: column;
          }

          .skeleton-image-section {
            width: 100%;
          }

          .skeleton-image-section .skeleton-image {
            height: 250px;
          }

          .skeleton-content-section {
            padding: 30px;
          }
        }

        @media (max-width: 576px) {
          .skeleton-image-section {
            padding: 20px;
          }

          .skeleton-image-section .skeleton-image {
            height: 200px;
          }

          .skeleton-icon-badge {
            width: 60px;
            height: 60px;
            bottom: 30px;
            left: 30px;
          }

          .skeleton-content-section {
            padding: 25px 20px;
          }

          .skeleton-title {
            height: 24px;
            margin-bottom: 20px;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .skeleton {
            background: linear-gradient(
              90deg,
              #2a2a2a 0%,
              #1a1a1a 20%,
              #2a2a2a 40%,
              #2a2a2a 100%
            );
            background-size: 200% 100%;
          }

          .skeleton-service-card,
          .skeleton-card {
            background: #1a1a1a;
          }

          .skeleton-image-section {
            background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
          }
        }
      `}</style>
    </>
  );
};

export default SkeletonLoader;
