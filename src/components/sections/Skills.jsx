"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  RiLayout4Line, 
  RiServerLine, 
  RiDatabaseLine, 
  RiHammerLine 
} from "react-icons/ri";
import { 
  SiMongodb, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript, 
  SiDocker, 
  SiPostman, 
  SiFirebase,
  SiRedux,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiJavascript,
  SiGit
} from "react-icons/si";

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categories = [
    {
      title: "Frontend Architecture",
      icon: <RiLayout4Line size={22} />,
      span: "md:col-span-3",
      bg: "bg-blue-500/5",
      border: "border-blue-500/10",
      accent: "text-blue-600 dark:text-blue-400",
      skills: [
        { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", darkColor: "#FFFFFF" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      ],
    },
    {
      title: "Backend Engineering",
      icon: <RiServerLine size={22} />,
      span: "md:col-span-3",
      bg: "bg-purple-500/5",
      border: "border-purple-500/10",
      accent: "text-purple-600 dark:text-purple-400",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000", darkColor: "#FFFFFF" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      ],
    },
    {
      title: "Database Systems",
      icon: <RiDatabaseLine size={22} />,
      span: "md:col-span-2",
      bg: "bg-emerald-500/5",
      border: "border-emerald-500/10",
      accent: "text-emerald-600 dark:text-emerald-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <RiHammerLine size={22} />,
      span: "md:col-span-4",
      bg: "bg-gray-500/5",
      border: "border-gray-500/10",
      accent: "text-gray-600 dark:text-gray-400",
      skills: [
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Git", icon: <SiGit />, color: "#F05032" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
      
      {mounted && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-[160px]" />
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="mb-20 space-y-4">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-purple-600 dark:text-purple-400 font-bold">
            // Capabilities
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold tracking-tighter">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-500">Toolkit.</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            A specialized collection of technologies I use to build high-performance, scalable applications with a focus on clean architecture.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`
                ${cat.span} p-8 rounded-[2.5rem] border transition-all duration-500
                ${cat.bg} ${cat.border}
                dark:backdrop-blur-sm group relative overflow-hidden
              `}
            >
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/5 shadow-sm flex items-center justify-center border border-gray-100 dark:border-white/5 ${cat.accent} group-hover:scale-110 transition-transform duration-500`}>
                  {cat.icon}
                </div>
                <h4 className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em]">
                  {cat.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="
                      flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                      bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/5
                      text-[12px] font-mono text-gray-700 dark:text-gray-200
                      hover:border-purple-500/40 transition-all duration-300
                    "
                  >
                    <span 
                      style={{ color: mounted && document.documentElement.classList.contains('dark') ? (skill.darkColor || skill.color) : skill.color }} 
                      className="text-lg opacity-90"
                    >
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}