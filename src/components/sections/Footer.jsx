"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/jithin045",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jithin-thaliyil",
    }
  ];

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5 py-12 px-6 relative overflow-hidden transition-colors duration-300">
      
      {/* 🌌 Glow */}
      {mounted && (
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-purple-500/5 dark:bg-purple-900/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      )}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        {/* 🔹 Left */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            
            {/* Status Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 dark:bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600 dark:bg-purple-500"></span>
            </span>

            <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-[0.25em]">
              Available for Hire
            </span>
          </div>

          <p className="text-gray-500 dark:text-gray-600 text-[11px] font-medium">
            © {currentYear} Jithin T. All rights reserved.
          </p>
        </div>

        {/* 🔹 Center */}
        <div className="hidden md:block text-[10px] text-gray-400 dark:text-gray-600 font-mono tracking-widest uppercase">
          Kerala, India
        </div>

        {/* 🔹 Right (Socials) */}
        <div className="flex gap-8 text-[10px] font-bold tracking-widest text-gray-500">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}