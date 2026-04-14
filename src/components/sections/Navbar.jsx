"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ FIX: Define navItems
  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 px-6 py-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center px-6 py-2.5 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
          
          {/* LOGO */}
          <div className="group flex items-center cursor-pointer">
            <div className="relative w-9 h-9 border border-white/10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-purple-500/50">
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors" />
              <span className="text-white font-light text-sm tracking-tighter">J</span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 hover:text-white transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1.5 left-1/2 w-0 h-px bg-purple-500 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              className="px-5 py-2 border border-white/10 bg-white/5 text-white text-[9px] font-bold tracking-[0.2em] rounded-full hover:bg-white/10 hover:border-purple-500/40 transition-all uppercase"
            >
              Resume
            </motion.a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400"
                >
                  {item}
                </a>
              ))}
              <a href="/resume.pdf" className="text-white text-[10px] font-bold tracking-widest uppercase">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}