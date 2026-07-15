import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink text-white/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
<div className="relative h-16 w-52">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              fill
              className="object-contain object-left brightness-0 invert"
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            {siteConfig.tagline}. We design and build the software that runs
            your operations, so growth never outpaces your systems.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          {footerLinks.services.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.emailHref}
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
          <div className="mt-2 flex flex-col gap-2">
            {footerLinks.company.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} IA Perma. All rights reserved.</p>
          <p>Engineering Digital Systems That Power Business Growth</p>
        </div>
      </div>
    </footer>
  );
}
