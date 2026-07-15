import { Target, Eye } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Who We Are"
          title="Software built around how your business actually runs"
          description="IA Perma is a software engineering and business automation company. We design, build, and maintain custom systems — ERP, POS, inventory, and management platforms — that remove manual bottlenecks and give growing businesses full control over their operations."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Target size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">Our Mission</h3>
            <p className="mt-3 text-body-text leading-relaxed">
              To engineer reliable, custom-built software that automates
              business operations and removes the ceiling on how far a
              growing company can scale.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Eye size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink">Our Vision</h3>
            <p className="mt-3 text-body-text leading-relaxed">
              To be the engineering partner behind the systems that power
              businesses across retail, distribution, education, and
              services — built once, built right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
