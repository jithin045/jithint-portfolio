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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section 
      id="projects" 
      className="relative py-24 lg:py-32 bg-gray-50/50 dark:bg-[#0a0a0a]/50 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle top border for seamless blending with Skills section */}
      <div className="absolute top-0 w-full max-w-6xl left-1/2 -translate-x-1/2 px-6 h-px bg-gray-200/50 dark:bg-gray-800/50" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Blended precisely with Hero, About, and Skills */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeInUp}
          className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-800/50 bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-[0.15em] shadow-sm">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 tracking-tight text-gray-900 dark:text-white">
            Production-ready deployment.
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Real-world applications focused on architectural scalability, data efficiency, and clean UX.
          </p>
        </motion.div>

        {/* Grid - Standardized to lock matching height containers */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="
                group border rounded-3xl transition-all duration-300 overflow-hidden
                bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl
                border-gray-200/50 dark:border-gray-800/50
                shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700
                flex flex-col justify-between
              "
            >
              <div>
                {/* Image Container with crisp overlay */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100 dark:bg-gray-800 border-b border-gray-200/50 dark:border-gray-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Standard smooth backdrop fade on card hover */}
                  <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-300"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-300"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags matching Skills buttons architecture */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          text-[10px] px-2.5 py-1 font-medium rounded-md
                          bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700
                          text-gray-500 dark:text-gray-400
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Persistent Links Footer for clean, highly standard UX on mobile/scrolling */}
              <div className="mx-6 py-4 border-t border-gray-100 dark:border-gray-800/80 flex gap-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
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
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}