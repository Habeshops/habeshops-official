"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function BotAnimation() {
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
      const devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Bot parameters
    const botWidth = 120;
    const botHeight = 160;
    const centerX = canvas.width / 2 / (window.devicePixelRatio || 1);
    const centerY = canvas.height / 2 / (window.devicePixelRatio || 1);
    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Draw bot
      drawBot(
        ctx,
        centerX,
        centerY + Math.sin(time) * 10,
        botWidth,
        botHeight,
        time,
        isDark
      );

      // Draw particles
      drawParticles(ctx, centerX, centerY, time, isDark);

      // Draw data streams
      drawDataStreams(ctx, centerX, centerY, time, isDark);

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
      transition={{ duration: 1 }}
      className="w-full h-[300px] md:h-[400px] relative"
    >
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
            : "bg-gradient-to-r from-purple-200/30 to-pink-200/30"
        } rounded-2xl`}
      />
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}

function drawBot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  time: number,
  isDark: boolean
) {
  // Bot head
  ctx.save();
  const gradient = ctx.createLinearGradient(
    x - width / 2,
    y - height / 2,
    x + width / 2,
    y + height / 2
  );

  if (isDark) {
    gradient.addColorStop(0, "rgba(168, 85, 247, 0.8)");
    gradient.addColorStop(1, "rgba(236, 72, 153, 0.8)");
  } else {
    gradient.addColorStop(0, "rgba(147, 51, 234, 0.9)");
    gradient.addColorStop(1, "rgba(219, 39, 119, 0.9)");
  }

  // Bot body
  ctx.beginPath();
  ctx.roundRect(x - width / 3, y - height / 4, (width * 2) / 3, height / 2, 10);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = isDark
    ? "rgba(255, 255, 255, 0.5)"
    : "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Bot head
  ctx.beginPath();
  ctx.arc(x, y - height / 4, width / 4, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = isDark
    ? "rgba(255, 255, 255, 0.5)"
    : "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Bot eyes
  const eyeSize = width / 16;
  const eyeDistance = width / 8;

  // Left eye
  ctx.beginPath();
  ctx.arc(x - eyeDistance, y - height / 4, eyeSize, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.fill();

  // Right eye
  ctx.beginPath();
  ctx.arc(x + eyeDistance, y - height / 4, eyeSize, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.fill();

  // Bot antenna
  ctx.beginPath();
  ctx.moveTo(x, y - height / 4 - width / 4);
  ctx.lineTo(x, y - height / 4 - width / 4 - height / 8);
  ctx.strokeStyle = isDark
    ? "rgba(255, 255, 255, 0.7)"
    : "rgba(255, 255, 255, 0.9)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Antenna top
  ctx.beginPath();
  ctx.arc(
    x,
    y - height / 4 - width / 4 - height / 8,
    width / 20,
    0,
    Math.PI * 2
  );
  ctx.fillStyle = isDark
    ? "rgba(236, 72, 153, 0.8)"
    : "rgba(219, 39, 119, 0.9)";
  ctx.fill();

  // Bot arms
  const armWidth = width / 3;
  const armHeight = height / 10;
  const armY = y - height / 8;

  // Left arm
  ctx.beginPath();
  ctx.roundRect(
    x - width / 3 - armWidth,
    armY + Math.sin(time * 2) * 5,
    armWidth,
    armHeight,
    5
  );
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = isDark
    ? "rgba(255, 255, 255, 0.5)"
    : "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Right arm
  ctx.beginPath();
  ctx.roundRect(
    x + width / 3,
    armY + Math.sin(time * 2 + Math.PI) * 5,
    armWidth,
    armHeight,
    5
  );
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = isDark
    ? "rgba(255, 255, 255, 0.5)"
    : "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Bot legs
  const legWidth = width / 6;
  const legHeight = height / 3;
  const legY = y + height / 4;

  // Left leg
  ctx.beginPath();
  ctx.roundRect(x - width / 6 - legWidth / 2, legY, legWidth, legHeight, 5);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = isDark
    ? "rgba(255, 255, 255, 0.5)"
    : "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Right leg
  ctx.beginPath();
  ctx.roundRect(x + width / 6 - legWidth / 2, legY, legWidth, legHeight, 5);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = isDark
    ? "rgba(255, 255, 255, 0.5)"
    : "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 1;
  ctx.stroke();

  
  ctx.beginPath();
  ctx.roundRect(x - width / 5, y - height / 8, (width * 2) / 5, height / 6, 5);
  ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)";
  ctx.fill();
  ctx.strokeStyle = isDark
    ? "rgba(255, 255, 255, 0.3)"
    : "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 1;
  ctx.stroke();

  
  const barCount = 3;
  const barWidth = (width * 2) / 5 - 10;
  const barHeight = 4;
  const barSpacing = 8;

  for (let i = 0; i < barCount; i++) {
    const barLength = ((Math.sin(time * 3 + i) + 1) / 2) * barWidth;

    ctx.beginPath();
    ctx.roundRect(
      x - width / 5 + 5,
      y - height / 8 + 5 + i * barSpacing,
      barLength,
      barHeight,
      2
    );
    ctx.fillStyle =
      i === 0
        ? isDark
          ? "rgba(168, 85, 247, 0.8)"
          : "rgba(147, 51, 234, 0.9)"
        : i === 1
        ? isDark
          ? "rgba(236, 72, 153, 0.8)"
          : "rgba(219, 39, 119, 0.9)"
        : isDark
        ? "rgba(251, 191, 36, 0.8)"
        : "rgba(245, 158, 11, 0.9)";
    ctx.fill();
  }

  ctx.restore();
}

function drawParticles(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  time: number,
  isDark: boolean
) {
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const distance = 100 + Math.sin(time * 2 + i) * 20;
    const x = centerX + Math.cos(angle + time * 0.5) * distance;
    const y = centerY + Math.sin(angle + time * 0.5) * distance * 0.6;
    const size = 2 + Math.sin(time + i) * 1;

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);

    const hue = (i / particleCount) * 60 + 270; 
    ctx.fillStyle = isDark
      ? `hsla(${hue}, 100%, 70%, ${0.3 + Math.sin(time + i) * 0.2})`
      : `hsla(${hue}, 100%, 60%, ${0.4 + Math.sin(time + i) * 0.2})`;
    ctx.fill();
  }
}

function drawDataStreams(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  time: number,
  isDark: boolean
) {
  const streamCount = 8;

  for (let i = 0; i < streamCount; i++) {
    const angle = (i / streamCount) * Math.PI * 2;
    const startDistance = 60;
    const endDistance = 120 + Math.sin(time * 2) * 20;

    const startX = centerX + Math.cos(angle) * startDistance;
    const startY = centerY + Math.sin(angle) * startDistance * 0.6;

    const endX = centerX + Math.cos(angle) * endDistance;
    const endY = centerY + Math.sin(angle) * endDistance * 0.6;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);

    const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
    if (isDark) {
      gradient.addColorStop(0, "rgba(168, 85, 247, 0.8)");
      gradient.addColorStop(1, "rgba(236, 72, 153, 0)");
    } else {
      gradient.addColorStop(0, "rgba(147, 51, 234, 0.9)");
      gradient.addColorStop(1, "rgba(219, 39, 119, 0)");
    }

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    
    const particleCount = 2;
    for (let j = 0; j < particleCount; j++) {
      const t = j / particleCount + ((time * (1 + i * 0.1)) % 1);
      const x = startX + (endX - startX) * t;
      const y = startY + (endY - startY) * t;

      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? "rgba(236, 72, 153, 0.8)"
        : "rgba(219, 39, 119, 0.9)";
      ctx.fill();
    }
  }
}
