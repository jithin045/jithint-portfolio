"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-[#030712] text-neutral-100 flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Availability Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between border-b border-neutral-800 pb-6 mb-12 text-xs font-mono text-neutral-400 tracking-wider"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>

            <span className="text-emerald-400 font-medium">
              OPEN TO FULL-TIME OPPORTUNITIES
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-8 flex flex-col items-start"
          >

            {/* Name */}
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-white uppercase leading-none mb-6">
              Jithin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                T
              </span>
            </h1>

            {/* Role */}
            <div className="text-lg sm:text-2xl font-mono text-cyan-400 mb-8 border-l-2 border-cyan-500 pl-4 py-1">
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer.",
                    "React & Next.js Developer.",
                    "Node.js & API Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 25,
                }}
              />
            </div>

            {/* Recruiter-Friendly Summary */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              Full-Stack Developer experienced in building responsive web
              applications, REST APIs, authentication systems, and
              database-driven applications using React, Next.js, Node.js,
              Express.js, and MongoDB.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">

              <a
                href="#projects"
                className="group px-7 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs uppercase tracking-widest transition-all flex items-center gap-3"
              >
                <span>View Projects</span>

                <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="/Jithin_t_Resume.pdf"
                download="Jithin_t_Resume.pdf"
                className="px-7 py-4 bg-neutral-900/80 border border-neutral-700 text-neutral-200 font-semibold text-xs uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all text-center"
              >
                Download Resume
              </a>

            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-4 flex flex-col items-center lg:items-end"
          >

            {/* Profile Image */}
            <div className="relative group mb-8">

              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 to-indigo-500/40 blur-md rounded-full opacity-60 group-hover:opacity-80 transition duration-500" />

              <div className="relative w-60 h-60 sm:w-68 sm:h-68 rounded-full bg-neutral-900 border border-neutral-700 p-2 overflow-hidden">
                <div className="w-full h-full rounded-full bg-neutral-950 overflow-hidden">
                  <img
                    src="/image.png"
                    alt="Jithin T"
                    className="w-full h-full object-cover contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-neutral-400 font-mono text-xs uppercase tracking-widest">

              <a
                href="https://github.com/jithin045"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jithin-thaliyil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="mailto:jithint4977@gmail.com"
                className="hover:text-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <HiOutlineMail className="w-4 h-4" />
                Email
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}