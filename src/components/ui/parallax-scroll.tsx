"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ParallaxScrollProps {
  images: string[];
  className?: string;
}

export function ParallaxScroll({ images, className }: ParallaxScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const translateYSecond = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const translateYThird = useTransform(scrollYProgress, [0, 1], [70, -70]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const columns = [
    { items: firstPart, y: translateYFirst, offsetClass: "" },
    { items: secondPart, y: translateYSecond, offsetClass: "mt-8 sm:mt-12" },
    { items: thirdPart, y: translateYThird, offsetClass: "hidden lg:flex" },
  ];

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {columns.map((col, colIdx) => (
          <div
            key={colIdx}
            className={cn(
              "flex flex-col gap-4 sm:gap-6",
              colIdx === 2 ? "hidden lg:flex" : "flex",
              col.offsetClass && colIdx !== 2 ? col.offsetClass : ""
            )}
          >
            {col.items.map((src, idx) => (
              <motion.div
                key={idx}
                style={prefersReducedMotion ? undefined : { y: col.y }}
                className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm"
              >
                <Image
                  src={src}
                  alt=""
                  width={500}
                  height={500}
                  className="h-44 w-full object-cover sm:h-56 lg:h-64"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}