"use client";

import type React from "react";
import { Instagram, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function SocialLinks() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex space-x-4"
    >
      <SocialLink
        href="https://t.me/habeshops"
        icon={<Send size={20} />}
        label="Telegram"
        variants={item}
      />
      <SocialLink
        href="https://twitter.com/habeshops"
        icon={<Twitter size={20} />}
        label="Twitter"
        variants={item}
      />
      <SocialLink
        href="https://instagram.com/habeshops"
        icon={<Instagram size={20} />}
        label="Instagram"
        variants={item}
      />
    </motion.div>
  );
}

function SocialLink({
  href,
  icon,
  label,
  variants,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  variants: any;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div variants={variants}>
      <Link
        href={href}
        className={`w-12 h-12 flex items-center justify-center rounded-full ${
          isDark
            ? "bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md text-white border border-white/10 hover:border-purple-500/50"
            : "bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-md text-purple-700 border border-purple-300/50 hover:border-purple-500/50 shadow-md"
        } transition-all hover:scale-110 ${
          isDark
            ? "hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            : "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        } relative group`}
        aria-label={label}
      >
        <div
          className={`absolute inset-0 rounded-full ${
            isDark
              ? "bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20"
              : "bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10"
          } transition-opacity`}
        />
        {icon}
      </Link>
    </motion.div>
  );
}
