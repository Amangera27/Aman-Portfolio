"use client";

import React, { useEffect, useRef } from "react";

interface CircularOrbitParticlesProps {
  particleCount?: number;
  radius?: number;
  speed?: number;
  particleSize?: number;
  color?: string;
  glowIntensity?: number;
}

interface Particle {
  angle: number;
  speed: number;
  size: number;
  opacity: number;
  distance: number;
}

const CircularOrbitParticles: React.FC<CircularOrbitParticlesProps> = ({
  particleCount = 30,
  radius = 200,
  speed = 0.5,
  particleSize = 3,
  color = "#00fffc",
  glowIntensity = 10,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      angle: (i / particleCount) * Math.PI * 2,
      speed: speed * (0.8 + Math.random() * 0.4),
      size: particleSize * (0.7 + Math.random() * 0.6),
      opacity: 0.5 + Math.random() * 0.5,
      distance: radius * (0.85 + Math.random() * 0.3),
    }));

    // Animation loop
    const animate = () => {
      if (!context || !canvas) return;

      timeRef.current += 0.016; // ~60fps

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw particles
      particlesRef.current.forEach((particle) => {
        // Update angle for circular motion
        particle.angle += particle.speed * 0.01;

        // Calculate position
        const x = centerX + Math.cos(particle.angle) * particle.distance;
        const y = centerY + Math.sin(particle.angle) * particle.distance;

        // Draw glow
        const gradient = context.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          particle.size * glowIntensity
        );
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.5, `${color}80`);
        gradient.addColorStop(1, "transparent");

        context.fillStyle = gradient;
        context.globalAlpha = particle.opacity;
        context.beginPath();
        context.arc(x, y, particle.size * glowIntensity, 0, Math.PI * 2);
        context.fill();

        // Draw particle core
        context.fillStyle = color;
        context.globalAlpha = particle.opacity * 1.5;
        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, radius, speed, particleSize, color, glowIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default CircularOrbitParticles;
