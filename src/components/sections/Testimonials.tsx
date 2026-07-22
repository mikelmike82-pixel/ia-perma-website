"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "IA Perma rebuilt our entire inventory workflow. What used to take our team hours of manual counting now happens in real time. It changed how we operate.",
    name: "Ahmed Raza",
    designation: "Operations Manager, Distribution",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "The POS system they built fit our exact pricing rules and multi-branch setup perfectly. Support has been fast every single time we've needed it.",
    name: "Sana Malik",
    designation: "Retail Chain Owner",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "Professional from day one. They understood our processes better than we could explain them, and the ERP they delivered just works.",
    name: "Bilal Hussain",
    designation: "Finance Director",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const length = testimonials.length;
  const active = useMemo(() => testimonials[activeIndex], [activeIndex]);

  const stop = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
    stop();
  }, [length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
    stop();
  }, [length]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => stop();
  }, [length]);

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client Voices"
          title="What businesses say after working with us"
          description="Real feedback from the teams running on systems we've built."
        />

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const isLeft =
                (activeIndex - 1 + length) % length === index;
              const isRight = (activeIndex + 1) % length === index;

              let style: React.CSSProperties = {
                zIndex: 1,
                opacity: 0,
                pointerEvents: "none",
              };
              if (isActive) {
                style = { zIndex: 3, opacity: 1, pointerEvents: "auto", transform: "translateX(0) scale(1)" };
              } else if (isLeft) {
                style = {
                  zIndex: 2,
                  opacity: 1,
                  pointerEvents: "auto",
                  transform: "translateX(-30px) translateY(-20px) scale(0.85) rotate(-6deg)",
                };
              } else if (isRight) {
                style = {
                  zIndex: 2,
                  opacity: 1,
                  pointerEvents: "auto",
                  transform: "translateX(30px) translateY(-20px) scale(0.85) rotate(6deg)",
                };
              }

              return (
                <div
                  key={testimonial.name}
                  className="absolute inset-0 overflow-hidden rounded-3xl border border-border shadow-xl transition-all duration-700 ease-out"
                  style={style}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-3"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-ink sm:text-xl">
                  “{active.quote}”
                </p>
                <div>
                  <p className="text-sm font-semibold text-ink">{active.name}</p>
                  <p className="text-xs text-body-text">{active.designation}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-primary/40 hover:text-primary-dark cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-primary/40 hover:text-primary-dark cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}