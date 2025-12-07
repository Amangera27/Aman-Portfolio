"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextRotatorProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TextRotator: React.FC<TextRotatorProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayedText === currentText) {
      // Finished typing, pause before deleting
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayedText === "") {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Delete one character
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          // Type one character
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    isPaused,
    currentIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <div className={`inline-block ${className}`}>
      <span className="inline-block">
        {displayedText}
        <motion.span
          className="inline-block ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          |
        </motion.span>
      </span>
    </div>
  );
};

export default TextRotator;
