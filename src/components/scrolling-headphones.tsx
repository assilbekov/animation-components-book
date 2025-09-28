"use client";

import { useCallback, useMemo, useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";

// https://www.youtube.com/watch?v=GDAZWW2mgYI
export function ScrollingHeadphones() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "start start"],
  });

  const images = useMemo(() => {
    if (typeof window === "undefined") return [];

    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i < 86; i++) {
      const image = new window.Image();
      image.src = `/headphones-images/${i + 1}.webp`;
      loadedImages.push(image);
    }

    return loadedImages;
  }, []);
  const currentIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [1, images.length]
  );

  const render = useCallback(
    (index: number) => {
      if (images[index - 1]) {
        ref.current?.getContext("2d")?.drawImage(images[index - 1], 0, 0);
      }
    },
    [images]
  );

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed(0)));
  });

  return (
    <div className="h-500 bg-black flex justify-center items-center">
      <canvas
        width={1000}
        height={1000}
        ref={ref}
        className="scale-45"
      ></canvas>
    </div>
  );
}
