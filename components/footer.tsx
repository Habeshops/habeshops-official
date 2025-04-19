"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`mt-8 text-center text-sm ${
        isDark ? "text-zinc-500" : "text-zinc-600"
      }`}
    >
      <p className="flex items-center justify-center gap-1">
        Made with{" "}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1.5,
          }}
          className={isDark ? "text-pink-500" : "text-pink-600"}
        >
          ❤️
        </motion.span>{" "}
        in Ethiopia
      </p>
      <p className="mt-1">
        &copy; {new Date().getFullYear()} Habeshops. All rights reserved.
      </p>
    </motion.footer>
  );
}
