"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`${
          isDark
            ? "bg-black/20 backdrop-blur-md border-white/10 hover:bg-white/10"
            : "bg-white/70 backdrop-blur-md border-purple-200/50 hover:bg-purple-100/50 shadow-md"
        } w-10 h-10 rounded-full`}
      >
        <Sun
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
            isDark ? "text-white" : "text-amber-600"
          } ${isDark ? "dark:-rotate-90 dark:scale-0" : ""}`}
        />
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
            isDark ? "text-white" : "text-purple-700"
          } ${isDark ? "dark:rotate-0 dark:scale-100" : ""}`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
