"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/jithin045", // 🔥 UPDATE
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/your-profile", // 🔥 UPDATE
    },
    {
      name: "Instagram",
      link: "https://instagram.com/your-profile", // optional
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 px-6 relative overflow-hidden">
      
      {/* 🌌 Glow */}
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-purple-900/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        {/* 🔹 Left */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            
            {/* Status Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>

            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.25em]">
              Available for Hire
            </span>
          </div>

          <p className="text-gray-600 text-[11px]">
            © {currentYear} Jithin T.
          </p>
        </div>

        {/* 🔹 Center (Optional but cleaner now) */}
        <div className="hidden md:block text-[10px] text-gray-600 font-mono tracking-widest">
          Kerala, India
        </div>

        {/* 🔹 Right (Socials) */}
        <div className="flex gap-6 text-xs text-gray-500">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}