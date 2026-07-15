"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  imageUrl: string;
}

interface ImageAccordionProps {
  items: AccordionItem[];
  defaultActiveIndex?: number;
}

function AccordionPanel({
  item,
  isActive,
  onActivate,
}: {
  item: AccordionItem;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={cn(
        "relative h-[280px] shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-in-out sm:h-[360px] md:h-[420px]",
        isActive
          ? "w-[220px] sm:w-[300px] md:w-[380px]"
          : "w-[34px] sm:w-[48px] md:w-[56px]"
      )}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/45" />

      <span
        className={cn(
          "absolute whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 ease-in-out sm:text-base",
          isActive
            ? "bottom-5 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-16 left-1/2 -translate-x-1/2 rotate-90 sm:bottom-20"
        )}
      >
        {item.title}
      </span>
    </div>
  );
}

export function ImageAccordion({ items, defaultActiveIndex = 0 }: ImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className="flex w-full flex-row items-center justify-start gap-2.5 overflow-x-auto py-2 sm:justify-center sm:gap-3.5">
      {items.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onActivate={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}