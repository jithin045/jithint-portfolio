"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
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
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section
      className="
        relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20
        bg-gray-50 text-gray-900
        dark:bg-[#0a0a0a] dark:text-white
        transition-colors duration-300
      "
    >
      {/* 🌌 Minimal Background - Clean and professional */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent dark:from-gray-900"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
      >
        {/* 🔹 LEFT COLUMN */}
        <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">

          {/* Badge */}
          <motion.span
            variants={fadeInUp}
            className="
              inline-block px-4 py-1.5 rounded-full
              border border-gray-200 dark:border-gray-800
              bg-white dark:bg-gray-900
              text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-[0.15em] shadow-sm
            "
          >
            Full Stack Developer
          </motion.span>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold mt-6 tracking-tight text-gray-900 dark:text-white"
          >
            Hi, I'm Jithin.
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 h-8"
          >
            <Typewriter
              options={{
                strings: [
                  "I build scalable web applications.",
                  "I design robust backend APIs.",
                  "I create seamless user experiences.",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.h2
            variants={fadeInUp}
            className="text-base md:text-lg mt-6 text-gray-800 dark:text-gray-200 font-medium"
          >
            I build scalable web applications with clean architecture and real-world problem solving.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="
              mt-4 text-gray-600 dark:text-gray-400
              max-w-md mx-auto lg:mx-0 text-base leading-relaxed
            "
          >
            Specialized in developing multi-user systems, role-based dashboards, and secure backend architectures using the MERN stack. I focus on writing maintainable code and designing systems that scale efficiently.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="
                px-8 py-3 rounded-lg
                bg-gray-900 dark:bg-white
                text-white dark:text-gray-900 font-semibold shadow-md
                hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center
              "
            >
              View Projects
            </a>

            <a
              href="/Jithin_t_Resume.pdf"
              download="Jithin_t_Resume.pdf" 
              className="
                px-8 py-3 rounded-lg
                border border-gray-300 dark:border-gray-700
                text-gray-800 dark:text-gray-200
                font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center
              "
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-6 text-gray-500 dark:text-gray-400">
            <a href="https://github.com/jithin045" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/jithin-thaliyil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:your-email@gmail.com" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
              <HiOutlineMail className="w-7 h-7" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>

        {/* 🔹 RIGHT COLUMN */}
        <motion.div
          variants={fadeInUp}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Clean, professional concentric rings */}
            <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-gray-800 scale-[1.05]" />
            <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 dark:border-gray-700 scale-[1.12] animate-[spin_40s_linear_infinite]" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800">
              <img
                src="/image.png"
                alt="Jithin Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ height: [12, 24, 12] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] bg-gray-400 dark:bg-gray-600 rounded-full"
        />
      </motion.div>
    </section>
  );
}