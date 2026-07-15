import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const galleryImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
];

export function Gallery() {
  return (
    <section id="gallery" className="overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Inside The Build"
          title="Systems engineered, dashboards designed, teams delivering"
          description="A closer look at the platforms and people behind IA Perma's work."
        />
      </div>
      <div className="container-page mt-14">
        <ParallaxScroll images={galleryImages} />
      </div>
    </section>
  );
}