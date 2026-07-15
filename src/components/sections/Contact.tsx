import { Phone, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/constants";

const contactActions = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: siteConfig.whatsappHref,
    external: true,
  },
  {
    icon: Phone,
    label: "Call",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    external: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-muted/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build the system your business needs"
          description="Tell us about your operations and we'll show you how IA Perma can automate them."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactActions.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                      <Icon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-wider text-body-text">
                        {action.label}
                      </span>
                      <span className="text-sm font-medium text-ink">{action.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
