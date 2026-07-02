"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  RiLayout4Line, 
  RiServerLine, 
  RiDatabaseLine, 
  RiHammerLine,
  RiFlowChart
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
  SiGit,
  SiPostgresql,
  SiStrapi
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
      accent: "text-blue-500 dark:text-blue-400",
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
      accent: "text-green-500 dark:text-green-400",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000", darkColor: "#FFFFFF" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      ],
    },
    {
      title: "Database & AI Infra",
      icon: <RiDatabaseLine size={22} />,
      span: "md:col-span-3",
      accent: "text-purple-500 dark:text-purple-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "pgvector", icon: <SiPostgresql />, color: "#4169E1" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      ],
    },
    {
      title: "Integrations & DevOps",
      icon: <RiFlowChart size={22} />,
      span: "md:col-span-3",
      accent: "text-orange-500 dark:text-orange-400",
      skills: [
        { name: "Strapi", icon: <SiStrapi />, color: "#2E7EEA" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-gray-50/50 dark:bg-[#0a0a0a]/50 transition-colors duration-300 overflow-hidden">
      
      {/* Subtle top border for seamless blending */}
      <div className="absolute top-0 w-full max-w-6xl left-1/2 -translate-x-1/2 px-6 h-px bg-gray-200/50 dark:bg-gray-800/50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Header Section - Blended to match Hero & About */}
        <motion.div 
          variants={fadeInUp} 
          className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-800/50 bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-[0.15em] shadow-sm">
            Technical Toolkit
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 tracking-tight text-gray-900 dark:text-white">
            The infrastructure behind the logic.
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            A specialized collection of technologies I use to build high-performance, scalable applications with a focus on clean architecture.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -2 }} // Subtler hover effect
              className={`
                ${cat.span} p-8 rounded-3xl border transition-all duration-300
                bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl
                border-gray-200/50 dark:border-gray-800/50
                shadow-sm hover:shadow-md
                group relative overflow-hidden flex flex-col justify-between
              `}
            >
              {/* Subtle hover gradient matched to the category accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent.replace('text-', 'from-').replace('dark:text-', 'dark:from-')} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center border border-gray-100 dark:border-gray-700 ${cat.accent}`}>
                  {cat.icon}
                </div>
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  {cat.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="
                      flex items-center gap-2 px-3 py-2 rounded-lg
                      bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700
                      text-xs font-medium text-gray-700 dark:text-gray-300
                      hover:border-gray-300 dark:hover:border-gray-500 transition-colors
                    "
                  >
                    <span 
                      style={{ color: mounted && document.documentElement.classList.contains('dark') ? (skill.darkColor || skill.color) : skill.color }} 
                      className="text-base"
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