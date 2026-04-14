"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h2 className="text-sm uppercase tracking-[0.3em] text-purple-500/70 font-semibold">
              Contact
            </h2>

            <p className="text-3xl md:text-5xl font-light tracking-tight text-white">
              Let's{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Connect.
              </span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed"
          >
            Ready to build something scalable? Whether you have a project in mind 
            or just want to chat about the MERN stack, my inbox is always open.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center pt-6">
            <motion.a
              href="mailto:your-email@gmail.com"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-medium text-white transition-all duration-300 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.07] hover:border-purple-500/50 overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative flex items-center gap-3 text-base tracking-tight">
                Start a Conversation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.span>
              </span>
            </motion.a>

            {/* Social Links */}
            <div className="mt-12 flex gap-8 text-[10px] font-mono tracking-[0.2em] text-gray-500">
              {["LINKEDIN", "GITHUB", "TWITTER"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                >
                  {social}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}