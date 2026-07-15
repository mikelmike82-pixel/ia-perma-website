import Image from "next/image";

export function Founder() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="grid items-center gap-12 rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-16">
          <div className="mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src="/images/ceo.png"
                alt="IA Perma leadership"
                width={480}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-dark">
              About Us
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Engineering-led, business-driven
            </h2>
            <p className="text-base leading-relaxed text-body-text sm:text-lg">
              IA Perma was built on a simple principle: software should
              remove friction from a business, not add to it. Every system we
              deliver is shaped by hands-on engineering discipline and a
              close understanding of how operations, finance, and growth
              connect in the real world.
            </p>
            <p className="text-base leading-relaxed text-body-text sm:text-lg">
              That approach guides every engagement — from the first
              discovery call to the systems running your business years
              later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
