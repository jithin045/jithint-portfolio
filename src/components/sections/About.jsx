"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiCpu, FiLayers, FiDatabase } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section
      id="about"
      className="
        relative py-24 lg:py-32
        bg-gray-50/50 text-gray-900
        dark:bg-[#0a0a0a]/50 dark:text-white
        transition-colors duration-300
      "
    >
      {/* Subtle top border for seamless blending with Hero */}
      <div className="absolute top-0 w-full max-w-6xl left-1/2 -translate-x-1/2 px-6 h-px bg-gray-200/50 dark:bg-gray-800/50" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Minimal & Punchy */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUp}
          className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-800/50 bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-[0.15em] shadow-sm">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 tracking-tight text-gray-900 dark:text-white">
            Less theory. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">More shipping.</span>
          </h2>
        </motion.div>

        {/* The Bento Box Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Experience (1 col) */}
          <motion.div 
            variants={fadeUp} 
            className="md:col-span-1 group relative p-8 rounded-3xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FiCpu className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">~2</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Years Exp.</p>
            <p className="text-sm text-gray-500 mt-2">Including professional roles & internships.</p>
          </motion.div>

          {/* Card 2: Core Stack (2 cols) */}
          <motion.div 
            variants={fadeUp} 
            className="md:col-span-2 group relative p-8 rounded-3xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div>
              <FiLayers className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">The MERN & Next.js Ecosystem</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-md">
                Specialized in building multi-user platforms, role-based dashboards, and scalable APIs from the ground up.
              </p>
            </div>
            {/* Tech Icons Row */}
            <div className="flex gap-4 mt-8 text-gray-400 dark:text-gray-500">
              <SiNextdotjs className="w-8 h-8 group-hover:text-black dark:group-hover:text-white transition-colors" />
              <SiReact className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
              <SiNodedotjs className="w-8 h-8 group-hover:text-green-500 transition-colors" />
              <SiMongodb className="w-8 h-8 group-hover:text-green-600 transition-colors" />
              <SiTailwindcss className="w-8 h-8 group-hover:text-cyan-400 transition-colors" />
            </div>
          </motion.div>

          {/* Card 3: AI Architecture (2 cols) */}
          <motion.div 
            variants={fadeUp} 
            className="md:col-span-2 group relative p-8 rounded-3xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FiDatabase className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Advanced AI Architecture</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-lg">
              Designing multi-tenant backend systems with intent-based routing between Private/Public LLMs, utilizing <strong className="text-gray-900 dark:text-gray-200">pgvector</strong> for precise context caching.
            </p>
          </motion.div>

          {/* Card 4: Location (1 col) */}
          <motion.div 
            variants={fadeUp} 
            className="md:col-span-1 group relative p-8 rounded-3xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm overflow-hidden flex flex-col justify-center items-center text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/50 to-transparent dark:from-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-4 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full mb-4 relative z-10">
              <FiMapPin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white relative z-10">Kerala, India</h3>
            <p className="text-sm text-gray-500 mt-1 relative z-10">Working Globally</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}