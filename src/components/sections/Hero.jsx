"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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
        bg-white text-black
        dark:bg-[#0a0a0a] dark:text-white
        transition-colors duration-300
      "
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="
            absolute top-[-10%] left-[-5%] w-[400px] h-[400px]
            bg-purple-500/10 dark:bg-purple-900/20
            rounded-full blur-[120px]
          "
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="
            absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px]
            bg-blue-500/10 dark:bg-blue-900/10
            rounded-full blur-[140px]
          "
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full"
      >
        {/* 🔹 LEFT */}
        <div className="text-center lg:text-left order-2 lg:order-1">

          {/* Badge */}
          <motion.span
            variants={fadeInUp}
            className="
              inline-block px-4 py-1 rounded-full
              border border-black/10 dark:border-white/10
              bg-black/5 dark:bg-white/5
              text-purple-500 text-xs font-bold uppercase tracking-[0.2em]
            "
          >
            Full Stack Developer
          </motion.span>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold mt-4 tracking-tight"
          >
            Jithin T
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeInUp}
            className="mt-3 text-xl text-purple-500"
          >
            <Typewriter
              options={{
                strings: [
                  "Building Multi-Tenant Systems",
                  "Designing Scalable Backend APIs",
                  "Solving Real-World Business Problems",
                ],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 20,
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.h2
            variants={fadeInUp}
            className="text-base md:text-lg mt-4 text-gray-700 dark:text-gray-300"
          >
            I build scalable web applications with clean architecture and
            real-world problem solving.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="
              mt-4 text-gray-600 dark:text-gray-400
              max-w-md mx-auto lg:mx-0 text-base leading-relaxed
            "
          >
            Specialized in developing multi-user systems, role-based dashboards,
            and secure backend architectures using the MERN stack. I focus on
            writing maintainable code and designing systems that scale efficiently.
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 h-px w-20 bg-gradient-to-r from-purple-500 to-transparent mx-auto lg:mx-0"
          />

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-3 rounded-lg
                bg-gradient-to-r from-purple-600 to-blue-500
                text-white font-semibold shadow-md
                hover:shadow-purple-500/30 transition-all text-center
              "
            >
              View Projects
            </motion.a>

            <motion.a
              href="/Jithin_t_Resume.pdf"
              download="Jithin_t_Resume.pdf" 
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              className="
                px-6 py-3 rounded-lg
                border border-black/20 dark:border-white/20
                text-black dark:text-white
                font-medium transition-all text-center
              "
            >
              Resume
            </motion.a>
          </motion.div>
        </div>

        {/* 🔹 RIGHT */}
        <motion.div
          variants={fadeInUp}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative group">
            {/* Soft inner glow behind the transparent image */}
            <div className="absolute inset-4 bg-purple-600/10 rounded-full blur-[60px]" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <img
                src="/image.png"
                alt="Jithin Avatar"
                className="
                  w-full h-full object-contain
                  rounded-full
                  /* Remove solid background and border for a floating effect */
                "
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">
          Scroll
        </span>
        <motion.div
          animate={{ height: [15, 30, 15] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-gradient-to-b from-purple-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}