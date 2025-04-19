"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function EthiopianIntroducer() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const messages = [
    "ሰላም! I'm Mer, your guide to Habeshops.",
    "Habeshops lets you create and monetize Telegram bots easily.",
    "Join our waitlist to be the first to know when we launch!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end"
    >
      {/* Speech Bubble - Positioned above the avatar */}
      {!isMinimized && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative mb-3 max-w-xs"
        >
          <div
            className={`relative p-4 rounded-xl ${
              isDark
                ? "bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-md border border-white/10"
                : "bg-gradient-to-br from-purple-100/90 to-pink-100/90 backdrop-blur-md border border-purple-300/50 shadow-lg"
            }`}
          >
            {/* Ethiopian pattern border */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-6 h-6 border-t border-l ${
                  isDark ? "border-amber-500/30" : "border-amber-600/40"
                } rounded-tl-xl`}
              />
              <div
                className={`absolute top-0 right-0 w-6 h-6 border-t border-r ${
                  isDark ? "border-amber-500/30" : "border-amber-600/40"
                } rounded-tr-xl`}
              />
              <div
                className={`absolute bottom-0 left-0 w-6 h-6 border-b border-l ${
                  isDark ? "border-amber-500/30" : "border-amber-600/40"
                } rounded-bl-xl`}
              />
              <div
                className={`absolute bottom-0 right-0 w-6 h-6 border-b border-r ${
                  isDark ? "border-amber-500/30" : "border-amber-600/40"
                } rounded-br-xl`}
              />

              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent ${
                  isDark ? "via-amber-500/30" : "via-amber-600/40"
                } to-transparent`}
              />
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent ${
                  isDark ? "via-amber-500/30" : "via-amber-600/40"
                } to-transparent`}
              />
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-transparent ${
                  isDark ? "via-amber-500/30" : "via-amber-600/40"
                } to-transparent`}
              />
              <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-transparent ${
                  isDark ? "via-amber-500/30" : "via-amber-600/40"
                } to-transparent`}
              />
            </div>

            <div
              className={`absolute -bottom-2 right-10 w-4 h-4 ${
                isDark
                  ? "bg-gradient-to-br from-purple-900/80 to-pink-900/80 rotate-45 border-r border-b border-white/10"
                  : "bg-gradient-to-br from-purple-100/90 to-pink-100/90 rotate-45 border-r border-b border-purple-300/50"
              }`}
            />

            <button
              onClick={() => setIsMinimized(true)}
              className={`absolute top-2 right-2 w-5 h-5 rounded-full ${
                isDark
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-purple-500/10 hover:bg-purple-500/20"
              } flex items-center justify-center transition-colors`}
              aria-label="Minimize"
            >
              <span
                className={`w-2 h-0.5 ${
                  isDark ? "bg-white" : "bg-purple-700"
                } rounded-full`}
              ></span>
            </button>

            <div className="min-h-[60px] flex items-center justify-center">
              {messages.map((message, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: currentMessage === index ? 1 : 0,
                    y: currentMessage === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${
                    isDark ? "text-white" : "text-gray-800"
                  } text-center ${
                    currentMessage === index ? "block" : "hidden"
                  }`}
                >
                  {message}
                </motion.p>
              ))}
            </div>

            <div className="flex justify-center mt-2">
              {messages.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full mx-1 ${
                    currentMessage === index
                      ? isDark
                        ? "bg-amber-400"
                        : "bg-amber-600"
                      : isDark
                      ? "bg-white/30"
                      : "bg-gray-400/50"
                  }`}
                  animate={{
                    scale: currentMessage === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat:
                      currentMessage === index ? Number.POSITIVE_INFINITY : 0,
                    repeatDelay: 1,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Avatar - Clickable to toggle speech bubble */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMinimized(false)}
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden cursor-pointer"
      >
        {/* Ethiopian pattern border around avatar */}
        <div
          className={`absolute inset-0 rounded-full border-2 ${
            isDark ? "border-amber-500/50" : "border-amber-600/70"
          } z-10`}
        ></div>
        <div
          className={`absolute inset-1 rounded-full border ${
            isDark ? "border-purple-500/50" : "border-purple-600/70"
          } z-10`}
        ></div>

        {/* Decorative elements around avatar */}
        <div
          className={`absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 border ${
            isDark ? "border-amber-400/70" : "border-amber-600/70"
          } rotate-45 z-10`}
        ></div>
        <div
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 border ${
            isDark ? "border-amber-400/70" : "border-amber-600/70"
          } rotate-45 z-10`}
        ></div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 -left-1 w-3 h-3 border ${
            isDark ? "border-amber-400/70" : "border-amber-600/70"
          } rotate-45 z-10`}
        ></div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 -right-1 w-3 h-3 border ${
            isDark ? "border-amber-400/70" : "border-amber-600/70"
          } rotate-45 z-10`}
        ></div>

        <div
          className={`absolute inset-0 ${
            isDark
              ? "shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              : "shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          } rounded-full z-0`}
        ></div>
        <Image
          src="/ethiopian-avatar.png"
          alt="Mer - Ethiopian Introducer"
          fill
          className="object-cover"
          priority
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-b from-transparent to-purple-900/30"
              : "bg-gradient-to-b from-transparent to-purple-600/20"
          } mix-blend-overlay`}
        />

        {isMinimized && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute -top-1 -right-1 w-5 h-5 rounded-full ${
              isDark ? "bg-amber-500" : "bg-amber-600"
            } flex items-center justify-center text-xs font-bold border border-black z-20`}
          >
            !
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
