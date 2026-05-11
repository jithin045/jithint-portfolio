"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      {mounted && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-[-5%] w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-[-5%] w-[350px] h-[350px] bg-blue-500/5 dark:bg-blue-900/5 rounded-full blur-[120px]" />
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16 items-start">

          {/* 🔹 LEFT SIDE: Branding & Quick Stats */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6 lg:sticky lg:top-24"
          >
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 font-bold">
                // Discovery
              </h2>

              <h3 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
                About <span className="text-purple-600 dark:text-purple-500">Me</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.03] backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold mb-1">
                  Focus
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Full-Stack MERN
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.03] backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-1">
                  Location
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Kerala, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* 🔹 RIGHT SIDE: Narrative */}
          <div className="space-y-8">
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-900 dark:text-gray-100"
            >
              I bridge the gap between complex business requirements and high-performance digital solutions.
            </motion.p>

            <div className="space-y-6">
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl"
              >
                Specializing in the MERN stack, I build scalable web applications designed for real-world impact. From multi-tenant systems to secure payment integrations, I focus on creating production-ready software that is both reliable and maintainable.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl"
              >
                My approach prioritizes **clean architecture** and **efficient system design**. I thrive on solving backend challenges—optimizing APIs, implementing robust authentication flows, and ensuring systems scale seamlessly as user bases grow.
              </motion.p>
            </div>

            {/* Core Competencies (Instead of just Tech names) */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-white/5"
            >
              {[
                "System Architecture",
                "API Optimization",
                "Multi-Tenant SaaS",
                "Database Design",
                "Workflow Automation",
              ].map((competency) => (
                <span
                  key={competency}
                  className="
                    px-4 py-1.5 text-[11px] font-mono tracking-wider rounded-md
                    bg-gray-100 dark:bg-white/[0.03]
                    text-gray-700 dark:text-gray-400
                    border border-gray-200 dark:border-white/10
                  "
                >
                  {competency}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}