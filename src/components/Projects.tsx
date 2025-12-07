"use client";

import React from "react";
import { motion } from "framer-motion";
import GlowingCards, { GlowingCard } from "./ul/GlowingCards";

const Projects = () => {
  const projects = [
    {
      title: "AI Code Generator Agent",
      description:
        "An intelligent AI-powered agent that generates Next.js code automatically. Features include component generation, API route creation, and full-stack application scaffolding with best practices.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
      glowColor: "#a855f7",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      icon: "🤖",
      link: "https://ai-dev-agent-six.vercel.app/",
    },
    {
      title: "Horoscopix Website",
      description:
        "A modern astrology and horoscope platform providing daily predictions, zodiac compatibility, birth chart analysis, and personalized astrological insights.",
      technologies: ["Next.js", "React", "Astrology API", "MongoDB"],
      glowColor: "#3b82f6",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: "⭐",
      link: "https://github.com/Amangera27",
    },
    {
      title: "Delivery Website",
      description:
        "Full-featured food and package delivery platform with real-time tracking, order management, payment integration, and driver assignment system.",
      technologies: ["Next.js", "Node.js", "Stripe", "Google Maps API"],
      glowColor: "#f97316",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: "🚚",
      link: "https://github.com/Amangera27",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number], // cubic-bezier equivalent of easeInOut
      },
    },
  };

  return (
    <div
      id="projects"
      className="max-w-7xl mx-auto paddingAll px-4 overflow-hidden"
    >
      {/* Section Header with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
            ✨ Featured Work
          </span>
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
          My Projects
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Crafting digital experiences that blend creativity with cutting-edge
          technology
        </p>
      </motion.div>

      {/* Projects Grid with GlowingCards Effect */}
      <GlowingCards
        enableGlow={false}
        glowRadius={20}
        glowOpacity={0.8}
        gap="2rem"
        responsive={true}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="perspective-1000"
            >
              <GlowingCard
                glowColor={project.glowColor}
                className="relative overflow-hidden bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 group h-full"
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className={`absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-30`}
                  />
                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 1,
                    }}
                    className={`absolute bottom-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-20`}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Header with Animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl shadow-2xl`}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Project Title */}
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-white/10 to-white/5 text-white/90 border border-white/20 hover:border-white/40 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all group/btn`}
                  >
                    <span>View Project</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>
      </GlowingCards>
    </div>
  );
};

export default Projects;
