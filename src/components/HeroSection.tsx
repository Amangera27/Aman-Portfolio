"use client";

import { MoveRight } from "lucide-react";
import { BorderBeam } from "./ul/BorderBeam";
import PlasmaGlobe from "./ul/PlasmaGlobe";
import CircularOrbitParticles from "./ul/CircularOrbitParticles";
import TextRotator from "./ul/TextRotator";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className=" max-w-7xl  mx-auto paddingAll mt-12 md:mt-0 ">
      <div className="flex items-center justify-between w-full flex-wrap p-4 md:p-0">
        {/* Left Side - Slide in from Left */}
        <motion.div
          className="text-white flex flex-col items-start space-y-5 md:w-1/2 w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-[fit-content]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="border rounded-xl  border-white/20 font-bold  p-2 text-2xl">
              Welcome to my Portfolio
            </p>
            <BorderBeam className="absolute inset-0 pointer-events-none" />
          </motion.div>

          <motion.h1
            className="text-5xl font-bold uppercase flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>hello My name is Aman</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              <TextRotator
                texts={["Designer", "Artist", "Frontend Developer"]}
                typingSpeed={120}
                deletingSpeed={80}
                pauseDuration={2000}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Hi, I'm Aman Gera — a developer who loves turning ideas into
            beautiful, functional websites. I'm passionate about clean design,
            smooth user experiences, and bringing creativity into every project
            I build. Learning is my constant motto, and with every new
            challenge, I push myself to grow, improve, and create something
            better than before. Whether it's crafting modern UI, exploring new
            technologies, or solving real-world problems through code — I'm
            always excited to build, learn, and innovate.
          </motion.p>

          <motion.a
            href="#contact"
            className="group flex items-center gap-2  py-3   transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <MoveRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </motion.a>
        </motion.div>

        {/* Right Side - Slide in from Right */}
        <motion.div
          className="flex items-center justify-center overflow-visible md:w-1/2 w-full relative "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Circular Orbit Particles */}
            <div className="absolute inset-0 w-full h-full">
              <CircularOrbitParticles
                particleCount={40}
                radius={180}
                speed={0.6}
                particleSize={2.5}
                color="#00fffc"
                glowIntensity={8}
              />
            </div>

            {/* Image */}
            <motion.img
              className="relative z-10"
              src="/Aman.png"
              alt=""
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Plasma Globe Background */}
            <div className="absolute top-0 left-30 -z-1 ">
              <PlasmaGlobe />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
