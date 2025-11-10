import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: '2015', title: 'Founding Moment', desc: 'A bold vision to make AI practical and human-centric.' },
  { year: '2018', title: 'First AI Platform', desc: 'Launched our enterprise-grade AI orchestration platform.' },
  { year: '2021', title: 'Global Expansion', desc: 'Scaled solutions across industries and continents.' },
  { year: '2025', title: 'Anniversary Year', desc: 'Celebrating a decade of innovation with our community.' },
];

const AboutTimeline = () => {
  return (
    <section className="relative w-full bg-[#06060a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(59,130,246,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Our Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
        >
          From breakthrough research to meaningful impact, these moments shaped who we are.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold shadow-[0_0_18px_rgba(168,85,247,0.6)]">
                {m.year}
              </div>
              <h3 className="text-xl font-semibold">{m.title}</h3>
              <p className="mt-2 text-white/70">{m.desc}</p>
              <div className="mt-5 h-1 w-2/3 rounded-full bg-gradient-to-r from-cyan-400/60 via-purple-400/60 to-fuchsia-400/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
