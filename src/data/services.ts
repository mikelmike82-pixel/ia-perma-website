import {
  Boxes,
  Workflow,
  ShoppingCart,
  Package,
  Warehouse,
  Receipt,
  Truck,
  School,
  Wifi,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: "erp",
    icon: Boxes,
    title: "Custom ERP Development",
    description:
      "Tailored ERP platforms that unify operations, finance, and reporting into one connected system.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    challenge:
      "Growing businesses often run on a patchwork of spreadsheets and disconnected tools, causing data silos and manual reconciliation errors.",
    solution:
      "We design a single ERP platform tailored to your real processes, connecting finance, inventory, and operations in real time.",
    features: [
      "Real-time financial reporting",
      "Multi-location inventory sync",
      "Role-based access control",
      "Custom workflow automation",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Replace manual workflows with automated pipelines that cut errors and save hours every week.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=900&q=80",
    challenge:
      "Manual approvals, data entry, and repetitive processes slow teams down and introduce human error at scale.",
    solution:
      "We map your existing workflows and rebuild the repetitive parts as automated pipelines with clear audit trails.",
    features: [
      "Automated approval chains",
      "Scheduled reporting & alerts",
      "Third-party integrations",
      "Error-reduction safeguards",
    ],
  },
  {
    id: "pos",
    icon: ShoppingCart,
    title: "POS Systems",
    description:
      "Fast, reliable point-of-sale software built for retail counters, fuel stations, and service outlets.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    challenge:
      "Off-the-shelf POS systems rarely match a business's actual pricing rules, loyalty programs, or hardware setup.",
    solution:
      "We build POS software matched to your exact till workflows, payment methods, and reporting needs.",
    features: [
      "Custom pricing & discount rules",
      "Offline-capable transactions",
      "Multi-till, multi-location support",
      "Live sales dashboards",
    ],
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time stock visibility with low-stock alerts, batch tracking, and multi-location control.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
    challenge:
      "Disconnected stock records across locations lead to overselling, stockouts, and time lost on manual counts.",
    solution:
      "We build inventory systems with a single source of truth, synced in real time across every location and channel.",
    features: [
      "Real-time stock levels",
      "Low-stock alerts & reordering",
      "Batch & serial number tracking",
      "Multi-location transfer tracking",
    ],
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehouse Management",
    description:
      "Optimize storage, picking, and dispatch with a system built for high-volume warehouse floors.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
    challenge:
      "High-volume warehouses lose time and accuracy when picking, packing, and dispatch aren't coordinated by a real system.",
    solution:
      "We build warehouse software that organizes storage locations, picking routes, and dispatch scheduling end to end.",
    features: [
      "Bin & zone-based storage mapping",
      "Optimized picking routes",
      "Dispatch scheduling",
      "Inbound/outbound tracking",
    ],
  },
  {
    id: "billing",
    icon: Receipt,
    title: "Billing Software",
    description:
      "Accurate, automated invoicing and billing with tax handling and audit-ready records.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    challenge:
      "Manual invoicing is slow and error-prone, and inconsistent tax handling creates risk during audits.",
    solution:
      "We build billing systems that automate invoice generation, tax calculation, and recordkeeping for audit-readiness.",
    features: [
      "Automated invoice generation",
      "Built-in tax handling",
      "Recurring billing support",
      "Audit-ready record trails",
    ],
  },
  {
    id: "distributor",
    icon: Truck,
    title: "Distributor Management",
    description:
      "Manage dealers, orders, and territories from a single dashboard built for distribution networks.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    challenge:
      "Distribution networks with many dealers and territories are hard to track without a centralized system.",
    solution:
      "We build a single dashboard to manage dealers, orders, territories, and performance across your whole network.",
    features: [
      "Dealer & territory management",
      "Order tracking end to end",
      "Performance dashboards",
      "Credit & payment tracking",
    ],
  },
  {
    id: "school",
    icon: School,
    title: "School Management",
    description:
      "Admissions, fees, attendance, and academics managed in one streamlined campus platform.",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    challenge:
      "Schools juggling admissions, fees, attendance, and academics across separate tools lose time and consistency.",
    solution:
      "We build a unified campus platform that connects admissions, fee collection, attendance, and academic records.",
    features: [
      "Admissions & enrollment tracking",
      "Fee collection & reminders",
      "Attendance management",
      "Academic record keeping",
    ],
  },
  {
    id: "isp",
    icon: Wifi,
    title: "ISP Management",
    description:
      "Subscriber billing, bandwidth plans, and support tools built for internet service providers.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    challenge:
      "ISPs need to manage subscriber billing, bandwidth plans, and support requests together — most generic tools don't fit.",
    solution:
      "We build ISP management software purpose-built for subscriber billing, plan management, and support workflows.",
    features: [
      "Subscriber billing & plans",
      "Bandwidth plan management",
      "Support ticket tracking",
      "Usage & payment reporting",
    ],
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM Systems",
    description:
      "Track leads, customers, and support tickets to build stronger, longer-lasting relationships.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    challenge:
      "Customer data spread across spreadsheets, inboxes, and sticky notes makes follow-ups inconsistent and slow.",
    solution:
      "We build a CRM shaped around your sales and support process, keeping every customer touchpoint in one timeline.",
    features: [
      "Centralized customer records",
      "Lead & pipeline tracking",
      "Support ticket management",
      "Custom reporting views",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Turn raw operational data into clear dashboards that drive faster, smarter decisions.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    challenge:
      "Raw operational data spread across systems is hard to interpret quickly enough to guide real decisions.",
    solution:
      "We build reporting dashboards that turn your operational data into clear, actionable, real-time views.",
    features: [
      "Real-time dashboards",
      "Custom KPI tracking",
      "Exportable reports",
      "Cross-system data views",
    ],
  },
];