import { BrainCircuit, LineChart, Workflow, Layers, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageAccordion } from "@/components/ui/interactive-image-accordion";

const pillars = [
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description: "Embedding intelligent automation directly into everyday business systems.",
    image:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description: "Turning operational data into forward-looking insight, not just historical reports.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Reducing manual touchpoints across every process we engineer.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Layers,
    title: "Smart ERP",
    description: "ERP systems that adapt and recommend, not just record and store.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description: "Helping businesses move from manual operations to fully connected systems.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

const accordionItems = pillars.map((pillar, index) => ({
  id: `pillar-${index}`,
  title: pillar.title,
  imageUrl: pillar.image,
}));

export function FutureVision() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-brand-soft" />
      <div className="container-page">
        <SectionHeading
          eyebrow="What's Next"
          title="Building toward smarter, self-optimizing systems"
          description="IA Perma is investing ahead of the curve — the same platforms we build today are the foundation for the intelligent systems of tomorrow. Hover or tap a panel to explore."
        />

        <div className="mt-14">
          <ImageAccordion items={accordionItems} defaultActiveIndex={0} />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-ink">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-body-text">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}