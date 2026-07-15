"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  icon?: LucideIcon;
}

interface WhoWeAreCarouselProps {
  photoSrc: string;
  photoAlt: string;
  slides: Slide[];
  autoplay?: boolean;
}

export function WhoWeAreCarousel({
  photoSrc,
  photoAlt,
  slides,
  autoplay = true,
}: WhoWeAreCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const length = slides.length;
  const active = slides[activeIndex];

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
    stopAutoplay();
  }, [length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
    stopAutoplay();
  }, [length]);

  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 6000);
    return () => stopAutoplay();
  }, [autoplay, length]);

  const Icon = active.icon;

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
      <div className="mx-auto w-full max-w-[160px] shrink-0 sm:mx-0 sm:max-w-[190px] md:max-w-[210px]">
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src={photoSrc}
            alt={photoAlt}
            width={360}
            height={440}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-2 text-center sm:text-left"
          >
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              {Icon ? (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-brand text-white">
                  <Icon size={14} />
                </span>
              ) : null}
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-dark sm:text-xs">
                {active.eyebrow}
              </span>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
              {active.title}
            </h3>

            <p className="text-xs leading-relaxed text-body-text sm:text-sm">
              {active.body.split(" ").map((word, i) => (
                <motion.span
                  key={`${active.id}-${i}`}
                  initial={{ filter: "blur(6px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.015 * i }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-1 flex items-center justify-center gap-3 sm:justify-start">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-primary/40 hover:text-primary-dark cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to ${slide.title}`}
                onClick={() => {
                  setActiveIndex(i);
                  stopAutoplay();
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  i === activeIndex ? "w-5 bg-primary-dark" : "w-1.5 bg-border"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-primary/40 hover:text-primary-dark cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}