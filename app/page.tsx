"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountdownTimer } from "@/components/countdown-timer";
import { EmailSubscription } from "@/components/email-subscription";
import { Footer } from "@/components/footer";
import { HabeshopsLogo } from "@/components/habeshops-logo";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { BotAnimation } from "@/components/bot-animation";
import { ParticleField } from "@/components/particle-field";
import { GradientBackground } from "@/components/gradient-background";
import { EthiopianIntroducer } from "@/components/ethiopian-introducer";
import {
  EthiopianPatternDivider,
  EthiopianCross,
  EthiopianPatternOverlay,
  EthiopianBorderPattern,
} from "@/components/ethiopian-patterns";
import { useTheme } from "next-themes";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      } ${isDark ? "text-white" : "text-gray-800"}`}
    >
      
      <GradientBackground />


      <EthiopianPatternOverlay />


      <ParticleField />


      <div className="absolute top-6 right-6 z-40">
        <ThemeToggle />
      </div>


      <EthiopianIntroducer />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container px-4 py-8 mx-auto flex flex-col items-center justify-center z-10 relative"
          >
            <div className="w-full max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`backdrop-blur-xl ${
                  isDark
                    ? "bg-black/30 border-white/10"
                    : "bg-white/70 border-purple-200/50 shadow-xl"
                } rounded-3xl border p-8 md:p-12 ${
                  isDark
                    ? "shadow-[0_0_50px_rgba(192,132,252,0.15)]"
                    : "shadow-[0_0_50px_rgba(192,132,252,0.2)]"
                } relative overflow-hidden`}
              >
                
                <EthiopianBorderPattern className="absolute inset-0" />


                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <EthiopianCross />
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  className="flex justify-center mb-8"
                >
                  <HabeshopsLogo />
                </motion.div>

                <EthiopianPatternDivider />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className={`text-2xl md:text-3xl font-medium bg-clip-text text-transparent ${
                        isDark
                          ? "bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400"
                          : "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600"
                      } mb-6`}
                    >
                      Build. Customize. Monetize. Your Telegram Bot Shop.
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className={`${
                        isDark ? "text-zinc-300" : "text-zinc-700"
                      } mb-8 text-lg`}
                    >
                      Habeshops is launching soon — a platform that turns your
                      BotFather token into a fully functional shop bot. Empower
                      your small business, engage your community, and earn from
                      your creativity.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="mb-8"
                    >
                      <CountdownTimer
                        targetDate={
                          new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        }
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                      className="mb-8"
                    >
                      <EmailSubscription />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      className="flex justify-start mb-4"
                    >
                      <SocialLinks />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2, type: "spring" }}
                    className="flex justify-center items-center h-full"
                  >
                    <BotAnimation />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <Footer />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
