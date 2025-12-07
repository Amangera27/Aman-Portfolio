"use client";

import React from "react";
import { ElectroBorder } from "./ul/CardSkills";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "React",
      color: "#61DAFB",
      icon: "⚛️",
      description: "UI Library",
    },
    {
      name: "Next.js",
      color: "#ffffff",
      icon: "▲",
      description: "React Framework",
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      icon: "TS",
      description: "Type Safety",
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      icon: "🎨",
      description: "CSS Framework",
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      icon: "JS",
      description: "Programming Language",
    },
    {
      name: "Git",
      color: "#F05032",
      icon: "🔀",
      description: "Version Control",
    },
    {
      name: "HTML5",
      color: "#E34F26",
      icon: "🌐",
      description: "Markup Language",
    },
    {
      name: "CSS3",
      color: "#1572B6",
      icon: "💅",
      description: "Styling",
    },
    {
      name: "Figma",
      color: "#F24E1E",
      icon: "🎯",
      description: "UI/UX Design",
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number], // easeInOut
      },
    },
  };

  return (
    <div id="skills" className="max-w-7xl mx-auto paddingAll px-4">
      {/* Header with fade-in animation */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Skills
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Grid with staggered card animations */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ElectroBorder
              borderColor={skill.color}
              borderWidth={2}
              distortion={1.2}
              animationSpeed={0.8}
              radius="16px"
              glow={true}
              aura={true}
              effects={true}
              glowBlur={25}
              className="group hover:scale-105 transition-transform duration-300 cursor-pointer h-full"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 h-[180px] flex flex-col items-center justify-center gap-3 hover:bg-black/60 transition-colors">
                <div
                  className="text-6xl font-bold transition-transform group-hover:scale-110 duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-white/60">{skill.description}</p>
              </div>
            </ElectroBorder>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
