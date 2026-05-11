"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500/70 mb-2 font-bold">
           // Projects
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected <span className="text-purple-600 dark:text-purple-500">Work</span>
          </h3>

          <p className="text-gray-600 dark:text-gray-500 mt-3 max-w-md mx-auto text-sm">
            Real-world MERN applications focused on scalability, performance, and clean architecture.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/5 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-sm dark:shadow-none"
            >

              {/* 🔥 Image Container */}
              <div className="relative h-44 overflow-hidden bg-gray-200 dark:bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-500/80 text-white rounded-full hover:bg-purple-500 transition"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* 🔥 Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-gray-500 dark:text-gray-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visible Links for accessibility/mobile */}
                <div className="flex gap-4 pt-3 border-t border-gray-100 dark:border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition font-medium"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium"
                    >
                      <FiExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}