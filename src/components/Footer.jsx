import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black py-12 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-fuchsia-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]" />
          <div>
            <div className="bg-gradient-to-br from-white via-cyan-100 to-fuchsia-100 bg-clip-text text-lg font-semibold text-transparent">[Company Name]</div>
            <div className="text-xs text-white/60">© 2025 • All rights reserved</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-cyan-400/40 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
