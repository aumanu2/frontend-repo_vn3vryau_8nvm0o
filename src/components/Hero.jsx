import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleCTAClick = () => {
    const el = document.getElementById('rsvp');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays - pointer-events-none so they don't block Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400/80 shadow-[0_0_20px_2px_rgba(34,211,238,0.7)]" />
          AI ANNIVERSARY 2025
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-balance bg-gradient-to-br from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Celebrating Innovation: [Company Name] Anniversary 2025
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          A futuristic evening honoring milestones in AI, bold ideas, and the people shaping tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-10"
        >
          <button
            onClick={handleCTAClick}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-500/10 px-7 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-colors hover:border-cyan-300/70 hover:bg-cyan-400/20"
          >
            <span className="absolute inset-0 -z-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.35),transparent_60%)]" />
            Join the Celebration
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
