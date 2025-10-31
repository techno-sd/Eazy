"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  blurDataURL?: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    const imageElement = document.getElementById(`progressive-${src}`);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <>
      <div
        id={`progressive-${src}`}
        className={`progressive-image-wrapper ${className}`}
      >
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              className="image-placeholder"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="placeholder-shimmer"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {(isInView || priority) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="progressive-image"
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={className}
              priority={priority}
              placeholder="blur"
              blurDataURL={blurDataURL}
              onLoadingComplete={() => setIsLoaded(true)}
              quality={90}
            />
          </motion.div>
        )}

        {/* Loading Spinner */}
        <AnimatePresence>
          {!isLoaded && isInView && (
            <motion.div
              className="loading-spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="spinner"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .progressive-image-wrapper {
          position: relative;
          overflow: hidden;
          background: #f0f0f0;
          width: 100%;
          height: 100%;
        }

        .image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
          z-index: 2;
        }

        .placeholder-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .progressive-image {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 3;
        }

        .progressive-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .loading-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(12, 75, 162, 0.1);
          border-top-color: #0C4BA2;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .progressive-image-wrapper {
            background: #2a2a2a;
          }

          .image-placeholder {
            background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
          }
        }
      `}</style>
    </>
  );
};

export default ProgressiveImage;
