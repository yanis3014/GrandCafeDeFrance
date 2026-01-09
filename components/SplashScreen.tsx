"use client";

import { motion } from "framer-motion";
import LogoSplash from "./ui/LogoSplash";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAFAFA]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={(definition) => {
        // Call onComplete after the logo animation finishes (3s total)
        if (definition === "exit") {
          onComplete();
        }
      }}
    >
      <motion.div
        className="w-64 md:w-80 lg:w-96"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onAnimationComplete={() => {
          // After logo wipe (3.5s) + pause (1.5s), trigger exit
          setTimeout(onComplete, 5000);
        }}
      >
        <LogoSplash />
      </motion.div>
    </motion.div>
  );
}
