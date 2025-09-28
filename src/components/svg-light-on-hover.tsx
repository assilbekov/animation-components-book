"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CirclePoundSterlingIcon } from "lucide-react";

type Cursor = {
  x: number;
  y: number;
};

// https://www.youtube.com/watch?v=KKQQn_lDuVQ
export function SvgLightOnHover() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<Cursor>({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardsRef.current) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursor({ x, y });
    }
  };

  return (
    <div
      className="w-[44rem] h-[26rem] bg-neutral-800 rounded-lg border border-neutral-600 flex flex-row p-8 absolute justify-between stroke-[0.1] hover:stroke-[0.2]"
      ref={cardsRef}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col w-2/5 justify-between">
        <div className="flex flex-col gap-5">
          <CirclePoundSterlingIcon className="size-14 rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner" />
          <h1 className="text-neutral-200 tracking-wide text-2xl">Database</h1>
          <p className="tracking-wide text-neutral-500 -mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="flex flex-col text-neutral-200 tracking-wide">
          <span className="flex flex-row gap-2">
            <CheckIcon className="w-5" />
            <p>100% Serverless</p>
          </span>
          <span className="flex flex-row gap-2">
            <CheckIcon className="w-5" />
            <p>Built-in Auth with RLS</p>
          </span>
          <span className="flex flex-row gap-2">
            <CheckIcon className="w-5" />
            <p>Easy to extend</p>
          </span>
        </div>
      </div>
      <div className="w-3/5 flex flex-col place-items-center">
        <HoveringIcon
          cursor={cursor}
          cardsRef={cardsRef}
          mouseOnCard={mouseOnCard}
        />
      </div>
    </div>
  );
}

type HoveringIconProps = {
  cursor: Cursor;
  cardsRef: React.RefObject<HTMLDivElement | null>;
  mouseOnCard: boolean;
};

function HoveringIcon({ cursor, cardsRef, mouseOnCard }: HoveringIconProps) {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (cardsRef.current && cursor.x !== null && cursor.y !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / rect.width) * 100 - 24;
      const cyPercentage = (cursor.y / rect.height) * 100;
      setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor, cardsRef]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-96 duration-200 transition-all"
    >
      <defs>
        <radialGradient
          id="emeraldGradient"
          gradientUnits="userSpaceOnUse"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
          r="35%"
        >
          {mouseOnCard && <stop stopColor="#10b981" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        className="fill-neutral-950/50"
        stroke="url(#emeraldGradient)"
        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        className="fill-neutral-800/50"
        stroke="url(#emeraldGradient)"
        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
      />
    </svg>
  );
}
