"use client";

import React from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  const elements = [
    { icon: "⚡", delay: 0, duration: 20, x: "10%", startY: "10%" },
    { icon: "✨", delay: 2, duration: 25, x: "80%", startY: "20%" },
    { icon: "🚀", delay: 4, duration: 22, x: "60%", startY: "70%" },
    { icon: "💎", delay: 1, duration: 24, x: "20%", startY: "80%" },
    { icon: "🎨", delay: 3, duration: 23, x: "90%", startY: "50%" },
    { icon: "⭐", delay: 5, duration: 21, x: "40%", startY: "30%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          initial={{
            x: element.x,
            y: element.startY,
          }}
          animate={{
            y: [element.startY, "-20%", element.startY],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            left: element.x,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Geometric shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30 + i * 5,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div
            className={`w-20 h-20 border-2 border-purple-500/20 ${
              i % 2 === 0 ? "rounded-full" : "rounded-lg rotate-45"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
