"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCarousel } from "@/components/ui/feature-carousel";
import { services, type ServiceItem } from "@/data/services";

export function Services() {
  const [selected, setSelected] = useState<ServiceItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const carouselItems = services.map((service) => ({
    id: service.id,
    label: service.title,
    icon: service.icon,
    image: service.image,
    description: service.description,
  }));

  const handleSelect = (id: string) => {
    const match = services.find((item) => item.id === id);
    if (match) setSelected(match);
  };

  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section id="services" className="bg-muted/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Full-stack software for every layer of your operations"
          description="From core ERP infrastructure to the point of sale, we build the systems that keep your business running end to end."
        />
      </div>

      <div className="container-page mt-14">
        <ServiceCarousel items={carouselItems} onSelect={handleSelect} />
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
            >
              <div className="relative h-48 w-full shrink-0 sm:h-56">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close service details"
                  className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-ink/40 text-white backdrop-blur-sm transition-colors hover:bg-ink/60 cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-5 left-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-lg">
                    <selected.icon size={22} />
                  </div>
                  <h3
                    id="service-modal-title"
                    className="text-xl font-semibold text-white sm:text-2xl"
                  >
                    {selected.title}
                  </h3>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-body-text">
                      The Challenge
                    </h4>
                    <p className="mt-2 text-base leading-relaxed text-body-text">
                      {selected.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-body-text">
                      Our Solution
                    </h4>
                    <p className="mt-2 text-base leading-relaxed text-body-text">
                      {selected.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-body-text">
                      Key Features
                    </h4>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {selected.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-secondary-dark" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

          <div className="border-t border-border p-6 sm:p-8">
                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                >
                  Discuss This Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}