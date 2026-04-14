"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { portfolioData } from "../data/portfolio";

export default function Projects() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] text-white">

      {/* Container */}
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-purple-500/70 mb-2">
            Projects
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected <span className="text-purple-500">Work</span>
          </h3>

          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
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
              className="group bg-[#111] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300"
            >

              {/* 🔥 Image */}
              <div className="relative h-44 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-500/80 rounded-full hover:bg-purple-500 transition"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}

                </div>
              </div>

              {/* 🔥 Content */}
              <div className="p-5 space-y-3">

                {/* Title */}
                <h3 className="text-lg font-semibold group-hover:text-purple-400 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Links (Backup visibility) */}
                <div className="flex gap-4 pt-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition"
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
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-purple-400 transition"
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