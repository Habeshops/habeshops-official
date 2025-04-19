"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";
import { useTheme } from "next-themes";

export function EmailSubscription() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You'll be notified when we launch.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-lg font-medium ${
          isDark ? "text-zinc-300" : "text-zinc-700"
        } mb-3`}
      >
        Get notified when we launch
      </motion.h3>
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 relative"
      >
        {/* Ethiopian pattern border */}
        <div
          className={`absolute -inset-0.5 rounded-md ${
            isDark
              ? "bg-gradient-to-r from-amber-500/20 via-transparent to-purple-500/20"
              : "bg-gradient-to-r from-amber-600/20 via-transparent to-purple-600/20"
          } opacity-0 group-focus-within:opacity-100 -z-10 blur-sm transition-opacity`}
        ></div>

        <div className="relative flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              isDark
                ? "bg-black/50 border-white/10 focus:border-purple-500 focus:ring-purple-500"
                : "bg-white/70 border-purple-300/50 focus:border-purple-500 focus:ring-purple-500"
            } h-12 pl-4 pr-4 ${
              isDark ? "text-white" : "text-gray-800"
            } placeholder:${isDark ? "text-zinc-500" : "text-zinc-400"}`}
            required
          />
          <div
            className={`absolute inset-0 rounded-md ${
              isDark
                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                : "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
            } opacity-0 group-focus-within:opacity-100 -z-10 blur-xl transition-opacity`}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`h-12 ${
            isDark
              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
              : "bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-600 hover:to-pink-600"
          } text-white border-0 transition-all duration-300 hover:scale-105 ${
            isDark
              ? "hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              : "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          } relative overflow-hidden group`}
        >
          {/* Ethiopian pattern overlay on button */}
          <div className="absolute inset-0 bg-[url('/ethiopian-pattern.png')] bg-repeat opacity-0 group-hover:opacity-10 transition-opacity"></div>

          {isSubmitting ? (
            "Submitting..."
          ) : (
            <span className="flex items-center gap-2">
              Notify Me <Send size={16} />
            </span>
          )}
        </Button>
      </motion.form>
    </div>
  );
}
