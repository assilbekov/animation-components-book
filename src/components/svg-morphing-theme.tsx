"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";

const raysVariants = {
  hidden: {
    strokeOpacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    strokeOpacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rayVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    // Start from center of the circle
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      // Customize timing for each property
      pathLength: { duration: 0.3, ease: "easeOut" },
      opacity: { duration: 0.2, ease: "easeOut" },
      scale: { duration: 0.3, ease: "easeOut" },
    },
  },
};

const shineVariant = {
  hidden: {
    opacity: 0,
    scale: 2,
    strokeDasharray: "20, 1000",
    strokeDashoffset: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: [0, 1, 0],
    strokeDashoffset: [0, -50, -100],
    filter: ["blur(2px)", "blur(2px)", "blur(0px)"],

    transition: {
      duration: 0.75,
    },
  },
};

// https://www.youtube.com/watch?v=0Ihn7vylPlA
export function SvgMorphingTheme() {
  const { theme, setTheme } = useTheme();

  const sunPath =
    "M49 68C59.4934 68 68 59.4934 68 49C68 38.5066 59.4934 30 49 30C38.5066 30 30 38.5066 30 49C30 59.4934 38.5066 68 49 68Z";
  const moonPath =
    "M49 68C59.4934 68 68 59.4934 68 49C50.38 56.6649 41.4282 48.6172 49 30C38.5066 30 30 38.5066 30 49C30 59.4934 38.5066 68 49 68Z";

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <motion.svg
          width="98"
          height="98"
          viewBox="0 0 98 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative"
        >
          <motion.path
            variants={shineVariant}
            d={moonPath}
            className="absolute top-0 left-0 stroke-blue-200"
            initial="hidden"
            animate={theme === "dark" ? "visible" : "hidden"}
          />
          <motion.g
            variants={raysVariants}
            initial="hidden"
            animate={theme === "light" ? "visible" : "hidden"}
            className="stroke-yellow-600 stroke-6"
          >
            <motion.path d="M49 1.5V11" variants={rayVariant} />
            <motion.path
              d="M82.5825 15.4175L75.885 22.115"
              variants={rayVariant}
            />
            <motion.path d="M87 49H96.5" variants={rayVariant} />
            <motion.path
              d="M75.885 75.885L82.5825 82.5825"
              variants={rayVariant}
            />
            <motion.path d="M49 87V96.5" variants={rayVariant} />
            <motion.path
              d="M22.115 75.885L15.4175 82.5825"
              variants={rayVariant}
            />
            <motion.path d="M1.5 49H11" variants={rayVariant} />
            <motion.path
              d="M15.4175 15.4175L22.115 22.115"
              variants={rayVariant}
            />
          </motion.g>

          <motion.path
            d={sunPath}
            initial={{ fillOpacity: 0, strokeOpacity: 0 }}
            animate={
              theme === "dark"
                ? {
                    fillOpacity: 0.35,
                    strokeOpacity: 1,
                    stroke: "var(--color-blue-400)",
                    fill: "var(--color-blue-400)",
                    rotate: 360,
                    scale: 2,
                    d: moonPath,
                  }
                : {
                    fillOpacity: 0.35,
                    strokeOpacity: 1,
                    rotate: 0,
                    stroke: "var(--color-yellow-600)",
                    fill: "var(--color-yellow-600)",
                    d: sunPath,
                  }
            }
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </motion.svg>
      </button>
    </div>
  );
}
