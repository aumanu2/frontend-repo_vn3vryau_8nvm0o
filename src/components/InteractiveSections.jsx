import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

// Helper to compute time left
const getTimeLeft = (targetDate) => {
  const diff = Math.max(0, targetDate.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
    <div className="text-3xl font-semibold tracking-tight text-cyan-200 drop-shadow-[0_0_15px_rgba(34,211,238,0.45)]">
      {String(value).padStart(2, '0')}
    </div>
    <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{label}</div>
  </div>
);

const RSVPForm = () => {
  const [form, setForm] = useState({ name: '', email: '', attending: 'Yes', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-6 text-center text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
        Thank you! Your RSVP has been received. We look forward to celebrating with you.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="group relative">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          required
          className="peer w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400/60 focus:bg-white/10"
          placeholder=" "
        />
        <label className="pointer-events-none absolute left-4 top-3 origin-left -translate-y-1/2 bg-transparent px-1 text-sm text-white/60 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-sm">
          Full Name
        </label>
      </div>
      <div className="group relative">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          required
          className="peer w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400/60 focus:bg-white/10"
          placeholder=" "
        />
        <label className="pointer-events-none absolute left-4 top-3 origin-left -translate-y-1/2 bg-transparent px-1 text-sm text-white/60 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-sm">
          Email Address
        </label>
      </div>
      <div className="group relative">
        <select
          name="attending"
          value={form.attending}
          onChange={onChange}
          className="peer w-full appearance-none rounded-xl border border-white/10 bg-white/5 p-4 pr-10 text-white outline-none transition focus:border-cyan-400/60 focus:bg-white/10"
        >
          <option className="bg-slate-900" value="Yes">Yes, I will attend</option>
          <option className="bg-slate-900" value="No">No, maybe next time</option>
          <option className="bg-slate-900" value="Virtual">Join virtually</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">▾</span>
      </div>
      <div className="group relative md:col-span-2">
        <textarea
          name="notes"
          rows={4}
          value={form.notes}
          onChange={onChange}
          className="peer w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-cyan-400/60 focus:bg-white/10"
          placeholder=" "
        />
        <label className="pointer-events-none absolute left-4 top-3 origin-left -translate-y-1/2 bg-transparent px-1 text-sm text-white/60 transition-all peer-placeholder-shown:top-6 peer-focus:top-3 peer-focus:-translate-y-1/2 peer-focus:text-sm">
          Notes (dietary, accessibility, etc.)
        </label>
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-colors hover:border-cyan-300/70 hover:bg-cyan-400/20">
          <span className="absolute inset-0 -z-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.35),transparent_60%)]" />
          Submit RSVP
        </button>
      </div>
    </form>
  );
};

const InteractiveSections = () => {
  // Set target date for 2025 anniversary (e.g., Dec 1, 2025 at 18:00 local)
  const target = useMemo(() => new Date('2025-12-01T18:00:00'), []);
  const [left, setLeft] = useState(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="relative w-full bg-[#07070c] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
        {/* Countdown */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Countdown to Celebration
          </motion.h2>
          <p className="mt-2 max-w-md text-white/70">Mark your calendar for an unforgettable evening. The future arrives in…</p>

          <div className="mt-6 grid grid-cols-4 gap-3">
            <Stat label="Days" value={left.days} />
            <Stat label="Hours" value={left.hours} />
            <Stat label="Minutes" value={left.minutes} />
            <Stat label="Seconds" value={left.seconds} />
          </div>
        </div>

        {/* RSVP */}
        <div id="rsvp">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            RSVP
          </motion.h2>
          <p className="mt-2 max-w-md text-white/70">Reserve your spot and let us know how you’d like to join the celebration.</p>
          <div className="mt-6">
            <RSVPForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSections;
