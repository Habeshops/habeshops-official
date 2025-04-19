"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="flex flex-col items-start">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-lg font-medium ${
          isDark ? "text-zinc-300" : "text-zinc-700"
        } mb-4`}
      >
        Launching In
      </motion.h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-4 gap-3 md:gap-4 text-center"
      >
        <TimeUnit value={timeLeft.days} label="Days" variants={item} />
        <TimeUnit value={timeLeft.hours} label="Hours" variants={item} />
        <TimeUnit value={timeLeft.minutes} label="Minutes" variants={item} />
        <TimeUnit value={timeLeft.seconds} label="Seconds" variants={item} />
      </motion.div>
    </div>
  );
}

function TimeUnit({
  value,
  label,
  variants,
}: {
  value: number;
  label: string;
  variants: any;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div variants={variants} className="flex flex-col items-center">
      <div
        className={`w-16 md:w-20 h-16 md:h-20 flex items-center justify-center ${
          isDark
            ? "bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md border border-white/10"
            : "bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-md border border-purple-300/50 shadow-md"
        } rounded-xl mb-1 relative overflow-hidden group`}
      >
        {/* Ethiopian pattern in corners */}
        <div
          className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${
            isDark ? "border-amber-500/30" : "border-amber-600/40"
          }`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-3 h-3 border-t border-r ${
            isDark ? "border-amber-500/30" : "border-amber-600/40"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l ${
            isDark ? "border-amber-500/30" : "border-amber-600/40"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${
            isDark ? "border-amber-500/30" : "border-amber-600/40"
          }`}
        ></div>

        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
              : "bg-gradient-to-br from-purple-300/10 to-pink-300/10"
          } opacity-0 group-hover:opacity-100 transition-opacity`}
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('/ethiopian-pattern.png')] bg-repeat opacity-5"></div>
        <span
          className={`text-2xl md:text-3xl font-bold ${
            isDark
              ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400"
              : "text-purple-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600"
          } transition-all duration-300`}
        >
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
        {label}
      </span>
    </motion.div>
  );
}
