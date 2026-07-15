import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section id="industries" className="bg-muted/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries Served"
          title="Trusted across sectors that run on operations"
          description="Wherever inventory, transactions, or service delivery drive the business, IA Perma builds the system behind it."
        />

        <div className="mt-14">
          <InfiniteMarquee gap={24} duration={35} durationOnHover={70} className="w-full">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="flex w-48 shrink-0 flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary-dark">
                    <Icon size={22} />
                  </div>
                  <span className="text-sm font-semibold text-ink">{industry.title}</span>
                </div>
              );
            })}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}