"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const text = "console.log('Hello, World!')";

export const UserTypingBasic = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80 + Math.random() * 100); // Random delay between 80-180ms for realistic typing

      return () => clearTimeout(timeout);
    } else {
      // Stop blinking cursor after typing is done
      const timeout = setTimeout(() => setShowCursor(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Cursor blink effect
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Standard cursor blink rate

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-mono">
      <span>{displayedText}</span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{
          opacity: currentIndex >= text.length ? 0 : showCursor ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        className="inline-block w-[2px] h-6 bg-current ml-0.5 align-middle"
      />
    </div>
  );
};
