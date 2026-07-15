"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";
import {
  HoverSlider,
  HoverSliderImageWrap,
  TextStaggerHover,
  clipPathVariants,
  useHoverSliderContext,
} from "@/components/ui/animated-slideshow";

const stepImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
];

function StepPanel({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const { activeSlide } = useHoverSliderContext();
  const Icon = step.icon;
  const image = stepImages[index % stepImages.length];

  return (
    <motion.div
      variants={clipPathVariants}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      animate={activeSlide === index ? "visible" : "hidden"}
      className="relative flex flex-col items-center justify-center gap-4 overflow-hidden text-center"
    >
      <Image
        src={image}
        alt={step.title}
        fill
        className="object-cover"
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/50 to-ink/20" />

      <div className="relative z-10 flex flex-col items-center gap-4 p-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
          <Icon size={28} />
        </div>
        <span className="text-sm font-semibold tracking-widest text-white/70">
          {step.step}
        </span>
        <p className="max-w-sm text-base leading-relaxed text-white">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-ink py-24 text-white sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="How We Work"
          title="A disciplined process, from first call to launch"
          description="Six stages keep every project predictable, transparent, and on track."
          align="center"
          tone="dark"
        />

        <HoverSlider className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col divide-y divide-white/10">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-center gap-6 py-5">
                <span className="text-sm font-semibold tracking-widest text-white/30">
                  {step.step}
                </span>
                <TextStaggerHover
                  index={index}
                  text={step.title}
                  className="cursor-pointer text-2xl font-semibold uppercase tracking-tight sm:text-3xl"
                />
              </div>
            ))}
          </div>

          <HoverSliderImageWrap className="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {processSteps.map((step, index) => (
              <StepPanel key={step.step} step={step} index={index} />
            ))}
          </HoverSliderImageWrap>
        </HoverSlider>
      </div>
    </section>
  );
}