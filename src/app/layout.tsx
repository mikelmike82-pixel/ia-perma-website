import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://iaperma.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IA Perma | Engineering Digital Systems That Power Business Growth",
    template: "%s | IA Perma",
  },
  description:
    "IA Perma builds custom ERP, POS, inventory, distribution, and management software that automates operations and scales with your business.",
  keywords: [
    "custom ERP development",
    "business process automation",
    "POS systems",
    "inventory management software",
    "warehouse management system",
    "distributor management software",
    "school management system",
    "ISP management software",
    "CRM systems",
    "IA Perma",
  ],
  authors: [{ name: "IA Perma" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "IA Perma | Engineering Digital Systems That Power Business Growth",
    description:
      "Custom ERP, automation, and management software engineered for growing businesses.",
    siteName: "IA Perma",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "IA Perma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Perma | Engineering Digital Systems That Power Business Growth",
    description:
      "Custom ERP, automation, and management software engineered for growing businesses.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "IA Perma",
      url: "https://iaperma.com",
      logo: "https://iaperma.com/images/logo.png",
      description:
        "IA Perma builds custom ERP, POS, inventory, and management software that automates operations for growing businesses.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92-371-8071116",
        email: "iaperma63@gmail.com",
        contactType: "customer service",
      },
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "IA Perma",
      url: "https://iaperma.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://iaperma.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  }}
/>
      </body>
    </html>
  );
}
