"use client";

import { motion } from "framer-motion";
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
  SiJavascript
} from "react-icons/si";

export default function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const skillsData = [
    {
      title: "Frontend Architecture",
      icon: <RiLayout4Line className="text-blue-400" size={22} />,
      skills: [
        { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      ],
    },
    {
      title: "Backend Engineering",
      icon: <RiServerLine className="text-green-400" size={22} />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      ],
    },
    {
      title: "Database Systems",
      icon: <RiDatabaseLine className="text-emerald-500" size={22} />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <RiHammerLine className="text-purple-400" size={22} />,
      skills: [
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Git", icon: <RiHammerLine />, color: "#F05032" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      
      {/* 🌌 Architectural Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[160px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-blue-500/60 font-bold">
              03 // Capabilities
            </h2>
            <p className="text-5xl md:text-6xl font-light tracking-tighter text-white">
              Technical <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Toolkit.</span>
            </p>
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-8 rounded-3xl border border-white/5 bg-[#111111]/50 backdrop-blur-sm hover:border-white/10 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all">
                  {category.icon}
                </div>
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                  {category.title}
                </h4>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-4 py-2 text-[11px] font-mono text-gray-300 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                  >
                    {/* Official Brand Color applied here */}
                    <span style={{ color: skill.color }} className="text-base opacity-90">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>

              {/* Background Index Number */}
              <span className="absolute top-6 right-8 text-5xl font-black text-white/[0.01] pointer-events-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}