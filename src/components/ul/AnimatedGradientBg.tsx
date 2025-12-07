"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedGradientBg = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Large animated gradient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: ["-20%", "120%"],
          y: ["-20%", "120%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse",
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: ["120%", "-20%"],
          y: ["120%", "-20%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: "reverse",
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: ["50%", "50%"],
          y: ["-20%", "120%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />
    </div>
  );
};

export default AnimatedGradientBg;
