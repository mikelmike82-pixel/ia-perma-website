"use client";

import { LayoutGroup, motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { ScrollMorphHero } from "@/components/ui/scroll-morph-hero";
import { WhoWeAreCarousel } from "@/components/ui/who-we-are-carousel";

const heroImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&q=80",
];

export function Hero() {
  return (
<ScrollMorphHero
      images={heroImages}
      introTitle={
        <LayoutGroup>
          <motion.span className="inline-flex flex-wrap justify-center gap-x-2" layout>
            <motion.span layout transition={{ type: "spring", damping: 30, stiffness: 400 }}>
              Digital Systems That Power Business
            </motion.span>
            <TextRotate
              texts={["Growth", "Efficiency", "Scale", "Control"]}
              mainClassName="text-gradient-brand"
              staggerFrom="last"
              staggerDuration={0.015}
              rotationInterval={2200}
              transition={{ type: "spring", damping: 28, stiffness: 380 }}
            />
          </motion.span>
        </LayoutGroup>
      }
      introSubtitle="Scroll to explore"
      revealTitle="Who We Are"
      brandLabel={
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold tracking-tight text-ink lg:text-4xl">
            <span className="text-gradient-brand">IA</span> Perma
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
            Software Engineering
          </span>
        </div>
      }
    >
<div className="rounded-3xl border border-border bg-surface/95 p-5 backdrop-blur sm:p-7 md:p-8">
        <WhoWeAreCarousel
          photoSrc="/images/ceo.png"
          photoAlt="IA Perma leadership"
          slides={[
            {
              id: "intro",
              eyebrow: "About IA Perma",
              title: "IA Perma",
              body: "IA Perma is a software engineering and business automation company. We design, build, and maintain custom systems — ERP, POS, inventory, and management platforms — that remove manual bottlenecks and give growing businesses full control over their operations.",
            },
            {
              id: "mission",
              eyebrow: "Our Mission",
              title: "Our Mission",
              body: "To engineer reliable, custom-built software that automates business operations and removes the ceiling on how far a growing company can scale.",
              icon: Target,
            },
            {
              id: "vision",
              eyebrow: "Our Vision",
              title: "Our Vision",
              body: "To be the engineering partner behind the systems that power businesses across retail, distribution, education, and services — built once, built right.",
              icon: Eye,
            },
          ]}
        />
      </div>
    </ScrollMorphHero>
  );
}