"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCarouselItem {
  id: string;
  label: string;
  icon: LucideIcon;
  image: string;
  description: string;
}

interface ServiceCarouselProps {
  items: ServiceCarouselItem[];
  onSelect?: (id: string) => void;
}

const AUTO_PLAY_INTERVAL = 3500;
const ITEM_HEIGHT = 60;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ServiceCarousel({ items, onSelect }: ServiceCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const length = items.length;
  const currentIndex = ((step % length) + length) % length;

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + length) % length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused || length <= 1) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused, length]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    let normalizedDiff = diff;
    if (diff > length / 2) normalizedDiff -= length;
    if (diff < -length / 2) normalizedDiff += length;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[2.5rem] border border-border lg:aspect-[16/9] lg:min-h-0 lg:flex-row">
        {/* Label rail */}
        <div className="relative z-30 flex w-full min-h-[280px] flex-col items-start justify-center overflow-hidden bg-gradient-brand px-8 py-10 md:px-14 lg:h-full lg:w-[38%] lg:py-0">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-14 bg-gradient-to-b from-primary-dark via-primary-dark/70 to-transparent lg:h-16" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-14 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-transparent lg:h-16" />

          <div className="relative z-20 flex h-full w-full items-center justify-start">
            {items.map((item, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrapped = wrap(-(length / 2), length / 2, distance);
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrapped * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrapped) * 0.25,
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    type="button"
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-3 rounded-full border px-5 py-3 text-left text-sm font-medium tracking-tight transition-all duration-500 md:px-6 md:py-3.5",
                      isActive
                        ? "border-white bg-white text-primary-dark"
                        : "border-white/25 bg-transparent text-white/70 hover:border-white/50 hover:text-white"
                    )}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className={isActive ? "text-primary-dark" : "text-white/50"}
                    />
                    <span className="whitespace-nowrap uppercase">{item.label}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Image stage */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden border-t border-border bg-muted px-6 py-12 md:px-10 md:py-16 lg:h-full lg:border-l lg:border-t-0">
          <div className="relative flex aspect-[4/5] w-full max-w-[380px] items-center justify-center">
            {items.map((item, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.button
                  type="button"
                  key={item.id}
                  onClick={() => isActive && onSelect?.(item.id)}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -90 : isNext ? 90 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                  className="absolute inset-0 origin-center cursor-pointer overflow-hidden rounded-[2rem] border-4 border-surface bg-surface text-left shadow-xl md:border-8"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.label}
                    className={cn(
                      "h-full w-full object-cover transition-all duration-700",
                      isActive ? "grayscale-0 blur-0" : "blur-[2px] grayscale brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-7 pt-24 md:p-9 md:pt-28"
                      >
                        <div className="mb-3 w-fit rounded-full border border-white/30 bg-surface px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink shadow-lg">
                          {index + 1} · {item.label}
                        </div>
                        <p className="text-lg font-medium leading-snug tracking-tight text-white drop-shadow-md md:text-xl">
                          {item.description}
                        </p>
                        <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/80">
                          View details →
                        </span>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCarousel;