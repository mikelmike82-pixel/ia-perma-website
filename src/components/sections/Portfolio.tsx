"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProjectDetailModal } from "@/components/sections/ProjectDetailModal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

const row1 = portfolioItems.slice(0, 5);
const row2 = portfolioItems.slice(5);

function ProjectCard({
  item,
  onSelect,
}: {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group flex w-[300px] shrink-0 flex-col gap-4 rounded-2xl border border-border bg-surface p-7 text-left transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 cursor-pointer sm:w-[340px]"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary-dark transition-colors duration-200 group-hover:bg-gradient-brand group-hover:text-white">
          <Icon size={22} />
        </div>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-body-text">
          {item.category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
      <p className="text-sm leading-relaxed text-body-text">{item.description}</p>
      <span className="mt-auto text-sm font-semibold text-primary-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        View details →
      </span>
    </button>
  );
}

export function Portfolio() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Work"
          title="Systems we've engineered for real operations"
          description="A sample of the platforms IA Perma has designed and deployed across industries. Click any project for details."
        />
      </div>

      <div className="mt-14 flex flex-col gap-6">
        {prefersReducedMotion ? (
          <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <ProjectCard key={item.id} item={item} onSelect={setSelected} />
            ))}
          </div>
        ) : (
          <>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
              <InfiniteSlider gap={24} duration={38} durationOnHover={90} className="w-full">
                {row1.map((item) => (
                  <ProjectCard key={item.id} item={item} onSelect={setSelected} />
                ))}
              </InfiniteSlider>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
              <InfiniteSlider
                gap={24}
                duration={34}
                durationOnHover={90}
                reverse
                className="w-full"
              >
                {row2.map((item) => (
                  <ProjectCard key={item.id} item={item} onSelect={setSelected} />
                ))}
              </InfiniteSlider>
            </div>
          </>
        )}
      </div>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
