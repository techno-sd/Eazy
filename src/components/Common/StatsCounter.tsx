"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useTranslations } from 'next-intl';

interface StatItemProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  title: string;
  icon: string;
}

const StatItem: React.FC<StatItemProps> = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  title,
  icon
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest).toLocaleString());
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stat-icon">
        <i className={icon}></i>
        <div className="icon-glow"></div>
      </div>
      <div className="stat-content">
        <h3 className="stat-number">
          {prefix}{displayValue}{suffix}
        </h3>
        <p className="stat-title">{title}</p>
      </div>
      <div className="stat-bg-pattern"></div>
    </motion.div>
  );
};

const StatsCounter: React.FC = () => {
  const t = useTranslations('home.stats');

  const stats = [
    {
      end: 500,
      suffix: "+",
      title: t('clients') || "عميل راضٍ",
      icon: "bx bx-user-check",
    },
    {
      end: 1200,
      suffix: "+",
      title: t('projects') || "مشروع مكتمل",
      icon: "bx bx-briefcase-alt-2",
    },
    {
      end: 15,
      suffix: "+",
      title: t('experience') || "سنوات خبرة",
      icon: "bx bx-calendar-star",
    },
    {
      end: 99,
      suffix: "%",
      title: t('satisfaction') || "رضا العملاء",
      icon: "bx bx-smile",
    },
  ];

  return (
    <>
      <section className="stats-counter-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="stats-bg-decoration">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
        </div>
      </section>

      <style jsx global>{`
        .stats-counter-section {
          position: relative;
          padding: 80px 0;
          background: linear-gradient(135deg, #0C4BA2 0%, #1FB6E8 100%);
          overflow: hidden;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .stat-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 35px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .stat-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          position: relative;
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 18px;
          transition: all 0.4s ease;
        }

        .stat-item:hover .stat-icon {
          background: rgba(255, 255, 255, 0.25);
          transform: rotate(10deg) scale(1.1);
        }

        .stat-icon i {
          font-size: 36px;
          color: #fff;
          position: relative;
          z-index: 2;
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .stat-item:hover .icon-glow {
          opacity: 1;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.3;
          }
        }

        .stat-content {
          flex: 1;
        }

        .stat-number {
          font-size: 42px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 8px 0;
          line-height: 1;
          font-family: var(--font-barlow-condensed), sans-serif;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .stat-title {
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          letter-spacing: 0.5px;
        }

        .stat-bg-pattern {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transition: all 0.6s ease;
        }

        .stat-item:hover .stat-bg-pattern {
          top: -30%;
          right: -10%;
          width: 200px;
          height: 200px;
        }

        /* Background Decorations */
        .stats-bg-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: float-circle 20s ease-in-out infinite;
        }

        .circle-1 {
          width: 400px;
          height: 400px;
          top: -200px;
          left: -100px;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 500px;
          height: 500px;
          bottom: -250px;
          right: -150px;
          animation-delay: 5s;
        }

        @keyframes float-circle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .stats-counter-section {
            padding: 60px 0;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .stat-item {
            padding: 25px;
          }

          .stat-icon {
            width: 60px;
            height: 60px;
          }

          .stat-icon i {
            font-size: 30px;
          }

          .stat-number {
            font-size: 36px;
          }

          .stat-title {
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-item {
            padding: 25px 20px;
          }

          .stat-icon {
            width: 55px;
            height: 55px;
          }

          .stat-icon i {
            font-size: 28px;
          }

          .stat-number {
            font-size: 32px;
          }

          .stat-title {
            font-size: 13px;
          }
        }

        /* RTL Support */
        [dir="rtl"] .stat-item {
          flex-direction: row-reverse;
        }

        [dir="rtl"] .stat-bg-pattern {
          right: auto;
          left: -20%;
        }

        [dir="rtl"] .stat-item:hover .stat-bg-pattern {
          left: -10%;
        }
      `}</style>
    </>
  );
};

export default StatsCounter;
