import { Blocks, TrendingUp, ShieldCheck, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const advantages = [
  {
    icon: Blocks,
    title: "Custom-Built Solutions",
    description:
      "No rigid templates. Every system is engineered around your exact workflows, not the other way around.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "Architecture designed to handle growth in users, data, and locations without a rebuild.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Role-based access, data protection, and audit-ready systems built in from day one.",
  },
  {
    icon: Briefcase,
    title: "Business-Focused Engineering",
    description:
      "We build for outcomes — fewer errors, faster operations, and measurable ROI, not just code.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why IA Perma"
          title="Engineering advantages that compound over time"
          description="A system that fits today and holds up tomorrow — that's the standard we build to."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-body-text">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
