"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function HabeshopsLogo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  const letters = "Habeshops".split("");

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            className={`text-5xl md:text-7xl font-bold bg-clip-text text-transparent ${
              isDark
                ? "bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500"
                : "bg-gradient-to-r from-purple-700 via-amber-500 to-pink-700"
            } inline-block`}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
        className={`absolute -bottom-2 left-0 w-full h-1 ${
          isDark
            ? "bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500"
            : "bg-gradient-to-r from-purple-700 via-amber-500 to-pink-700"
        } rounded-full`}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0, 0.5, 0] }}
        transition={{
          delay: 1.8,
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
        className={`absolute -bottom-2 left-0 w-full h-1 ${
          isDark
            ? "bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500"
            : "bg-gradient-to-r from-purple-700 via-amber-500 to-pink-700"
        } rounded-full blur-md`}
      />

      {/* Ethiopian decorative elements */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1">
        <div
          className={`w-2 h-2 border ${
            isDark ? "border-amber-500/50" : "border-amber-600/70"
          } rotate-45`}
        ></div>
        <div
          className={`w-4 h-0.5 ${
            isDark ? "bg-amber-500/50" : "bg-amber-600/70"
          }`}
        ></div>
        <div
          className={`w-2 h-2 border ${
            isDark ? "border-amber-500/50" : "border-amber-600/70"
          } rotate-45`}
        ></div>
        <div
          className={`w-4 h-0.5 ${
            isDark ? "bg-amber-500/50" : "bg-amber-600/70"
          }`}
        ></div>
        <div
          className={`w-2 h-2 border ${
            isDark ? "border-amber-500/50" : "border-amber-600/70"
          } rotate-45`}
        ></div>
      </div>
    </div>
  );
}
