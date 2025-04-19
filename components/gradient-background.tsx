"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Animation variables
    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.001;

      // Create gradient based on theme
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time * 0.5) * canvas.width * 0.3,
        canvas.height / 2 + Math.cos(time * 0.3) * canvas.height * 0.3,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );

      if (isDark) {
        // Dark mode gradient
        gradient.addColorStop(
          0,
          `hsla(${270 + Math.sin(time) * 30}, 70%, 10%, 1)`
        );
        gradient.addColorStop(
          0.5,
          `hsla(${310 + Math.cos(time * 0.5) * 20}, 70%, 5%, 1)`
        );
        gradient.addColorStop(
          1,
          `hsla(${200 + Math.sin(time * 0.2) * 20}, 90%, 5%, 1)`
        );
      } else {
        // Light mode gradient
        gradient.addColorStop(
          0,
          `hsla(${270 + Math.sin(time) * 30}, 70%, 97%, 1)`
        );
        gradient.addColorStop(
          0.5,
          `hsla(${310 + Math.cos(time * 0.5) * 20}, 70%, 95%, 1)`
        );
        gradient.addColorStop(
          1,
          `hsla(${200 + Math.sin(time * 0.2) * 20}, 90%, 98%, 1)`
        );
      }

      // Fill background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add noise texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 5 - 2.5;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }
      ctx.putImageData(imageData, 0, 0);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, [isDark]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 pointer-events-none z-[-1]"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
    </motion.div>
  );
}
