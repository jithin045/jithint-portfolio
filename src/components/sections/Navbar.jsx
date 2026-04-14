"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Theme setup
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 px-6 py-6"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="
            flex justify-between items-center px-6 py-2.5
            bg-white/70 dark:bg-[#0a0a0a]/60
            backdrop-blur-xl
            border border-gray-200 dark:border-white/5
            rounded-full
            shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.8)]
          "
        >

          {/* LOGO */}
          <div className="group flex items-center cursor-pointer">
            <div className="relative w-9 h-9 border border-gray-300 dark:border-white/10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-purple-500/50">
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors" />
              <span className="text-black dark:text-white font-light text-sm tracking-tighter">
                J
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1.5 left-1/2 w-0 h-px bg-purple-500 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* 🔥 THEME TOGGLE BUTTON */}
            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* RESUME */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="
                px-5 py-2 border
                border-gray-300 dark:border-white/10
                bg-gray-100 dark:bg-white/5
                text-black dark:text-white
                text-[9px] font-bold tracking-[0.2em]
                rounded-full
                hover:bg-gray-200 dark:hover:bg-white/10
                hover:border-purple-500/40
                transition-all uppercase
              "
            >
              Resume
            </motion.a>
          </div>

          {/* MOBILE RIGHT */}
          <div className="flex items-center gap-2 md:hidden">

            {/* 🔥 THEME TOGGLE MOBILE */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
            <div
              className="
                bg-white/90 dark:bg-[#0a0a0a]/90
                backdrop-blur-2xl
                border border-gray-200 dark:border-white/5
                rounded-[2rem] p-8
                flex flex-col items-center gap-8
              "
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold uppercase tracking-[0.4em] text-gray-600 dark:text-gray-400"
                >
                  {item}
                </a>
              ))}

              <a
                href="/resume.pdf"
                className="text-black dark:text-white text-[10px] font-bold tracking-widest uppercase"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}