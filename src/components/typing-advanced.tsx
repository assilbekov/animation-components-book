"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const firstText = "bun run dev";
const secondText = "sudo rm -rf /";

type Phase =
  | "typing1"
  | "pausing1"
  | "deleting"
  | "pausing2"
  | "typing2"
  | "done";

export const TypingAdvanced = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing1");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    switch (phase) {
      case "typing1":
        if (displayedText.length < firstText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(firstText.slice(0, displayedText.length + 1));
          }, 80 + Math.random() * 100);
        } else {
          // Pause after finishing typing firstText
          timeout = setTimeout(() => setPhase("pausing1"), 1000);
        }
        break;
      case "pausing1":
        timeout = setTimeout(() => setPhase("deleting"), 500);
        break;
      case "deleting":
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, -1));
          }, 30 + Math.random() * 20); // Faster deletion (30-50ms)
        } else {
          // Pause after deleting everything
          timeout = setTimeout(() => setPhase("pausing2"), 300);
        }
        break;
      case "pausing2":
        timeout = setTimeout(() => setPhase("typing2"), 200);
        break;
      case "typing2":
        if (displayedText.length < secondText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(secondText.slice(0, displayedText.length + 1));
          }, 80 + Math.random() * 100);
        } else {
          // Done typing
          setPhase("done");
        }
        break;
      case "done":
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase]);

  useEffect(() => {
    // Cursor blink effect
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  const isComplete = phase === "done";

  return (
    <div className="text-2xl font-mono">
      <span>{displayedText}</span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{
          opacity: isComplete ? 0 : showCursor ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        className="inline-block w-[2px] h-6 bg-current ml-0.5 align-middle"
      />
    </div>
  );
};
