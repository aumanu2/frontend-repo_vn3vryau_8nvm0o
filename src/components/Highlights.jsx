import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Award, Cpu, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'AI Showcase',
    desc: 'Witness cutting-edge models, immersive demos, and real-world AI wins.',
    gradient: 'from-cyan-500/30 via-sky-500/30 to-purple-500/30',
  },
  {
    icon: Award,
    title: 'Employee Awards',
    desc: 'Honoring the teams behind the breakthroughs and milestones.',
    gradient: 'from-amber-400/30 via-fuchsia-500/30 to-purple-500/30',
  },
  {
    icon: Cpu,
    title: 'Tech Demo',
    desc: 'Interactive experiences showcasing next-gen AI infrastructure.',
    gradient: 'from-emerald-400/30 via-cyan-400/30 to-sky-500/30',
  },
  {
    icon: Sparkles,
    title: 'Future Vision',
    desc: 'Our roadmap for responsible, impactful AI for the next decade.',
    gradient: 'from-purple-500/30 via-fuchsia-500/30 to-rose-500/30',
  },
];

const Highlights = () => {
  return (
    <section className="relative w-full bg-[#050508] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Event Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
        >
          Explore the experiences designed to inspire, celebrate, and connect.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute -inset-12 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
