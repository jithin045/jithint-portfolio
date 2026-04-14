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
        delayChildren: 0.1,
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

  const techStack = [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Redux",
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* 🌌 Background Glow - Only visible when mounted to avoid hydration flash */}
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16">

          {/* 🔹 LEFT SIDE */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500/70 font-bold">
                About
              </h2>

              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                About <span className="text-purple-600 dark:text-purple-500">Me</span>
              </h3>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.03] backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-1 font-bold">
                  Focus
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Full-Stack MERN Apps
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.03] backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1 font-bold">
                  Location
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Kerala, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* 🔹 RIGHT SIDE */}
          <div className="space-y-8">

            {/* Description */}
            <div className="space-y-4">
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-900 dark:text-gray-200 leading-relaxed font-medium"
              >
                I build scalable and practical web applications using the MERN
                stack, focusing on real-world systems like dashboards,
                authentication flows, and payment integrations.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-xl"
              >
                My approach emphasizes clean architecture, maintainable code,
                and efficient backend design. I enjoy solving complex problems,
                optimizing APIs, and improving application performance.
              </motion.p>
            </div>

            {/* Tech Stack */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 border-t border-gray-100 dark:border-white/5"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-5 font-bold">
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="
                      px-3 py-1.5 rounded-md border 
                      border-gray-200 dark:border-white/5 
                      bg-white dark:bg-white/[0.03] 
                      text-[11px] font-mono text-gray-600 dark:text-gray-400 
                      hover:text-purple-600 dark:hover:text-white 
                      hover:border-purple-500/40 hover:bg-purple-50 dark:hover:bg-purple-500/10 
                      transition-all duration-300 cursor-default
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}