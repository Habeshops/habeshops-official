"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function EthiopianPatternDivider() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.8 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full flex items-center justify-center my-6 opacity-70"
    >
      <div
        className={`h-px ${
          isDark
            ? "bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            : "bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        } flex-grow`}
      />
      <div className="mx-4 flex">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 mx-0.5 rotate-45 ${
              isDark
                ? "border border-amber-400/50 relative before:absolute before:inset-0.5 before:rotate-45 before:border before:border-purple-500/50"
                : "border border-amber-600/70 relative before:absolute before:inset-0.5 before:rotate-45 before:border before:border-purple-600/70"
            }`}
          />
        ))}
      </div>
      <div
        className={`h-px ${
          isDark
            ? "bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            : "bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        } flex-grow`}
      />
    </motion.div>
  );
}

export function EthiopianCross() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute -z-10 w-40 h-40 md:w-60 md:h-60 opacity-10"
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full ${
          isDark ? "text-amber-400" : "text-amber-600"
        }`}
      >
        <path
          d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="animate-pulse-slow"
        />
        <path
          d="M50 15 L53 45 L85 50 L53 55 L50 85 L47 55 L15 50 L47 45 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M50 25 L51 45 L75 50 L51 55 L50 75 L49 55 L25 50 L49 45 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </svg>
    </motion.div>
  );
}

export function EthiopianPatternOverlay() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${
        isDark ? "opacity-[0.03]" : "opacity-[0.05]"
      } mix-blend-overlay z-0`}
    >
      <div className="absolute inset-0 bg-[url('/ethiopian-pattern.png')] bg-repeat opacity-30" />
    </div>
  );
}

export function EthiopianBorderPattern({
  className = "",
}: {
  className?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${
          isDark ? "border-amber-500/30" : "border-amber-600/40"
        } rounded-tl-md`}
      />
      <div
        className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${
          isDark ? "border-amber-500/30" : "border-amber-600/40"
        } rounded-tr-md`}
      />
      <div
        className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${
          isDark ? "border-amber-500/30" : "border-amber-600/40"
        } rounded-bl-md`}
      />
      <div
        className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${
          isDark ? "border-amber-500/30" : "border-amber-600/40"
        } rounded-br-md`}
      />

      <div
        className={`absolute top-4 left-4 w-2 h-2 border ${
          isDark ? "border-purple-500/40" : "border-purple-600/50"
        } rotate-45`}
      />
      <div
        className={`absolute top-4 right-4 w-2 h-2 border ${
          isDark ? "border-purple-500/40" : "border-purple-600/50"
        } rotate-45`}
      />
      <div
        className={`absolute bottom-4 left-4 w-2 h-2 border ${
          isDark ? "border-purple-500/40" : "border-purple-600/50"
        } rotate-45`}
      />
      <div
        className={`absolute bottom-4 right-4 w-2 h-2 border ${
          isDark ? "border-purple-500/40" : "border-purple-600/50"
        } rotate-45`}
      />
    </div>
  );
}
