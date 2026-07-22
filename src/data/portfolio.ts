import {
  Receipt,
  Fuel,
  Gauge,
  Truck,
  School,
  Wifi,
  PackageOpen,
  PackageCheck,
  RefreshCw,
  QrCode,
  MessageSquareText,
  type LucideIcon,
} from "lucide-react";

export interface PortfolioItem {
  id: string;
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "inventory-billing",
    icon: Receipt,
    title: "Inventory & Billing Management",
    category: "Retail",
    description:
      "Unified stock and billing platform giving retailers real-time inventory accuracy and faster checkout.",
    challenge:
      "Retail counters were tracking stock and sales separately, causing mismatched inventory counts and slow, error-prone billing at checkout.",
    solution:
      "IA Perma built a single platform that ties every sale directly to stock levels, so inventory updates the moment a bill is generated — no manual reconciliation required.",
    features: [
      "Real-time stock deduction on every sale",
      "Barcode-based fast checkout",
      "Low-stock and reorder alerts",
      "Multi-outlet inventory visibility",
    ],
  },
  {
    id: "fuel-pos",
    icon: Fuel,
    title: "Fuel Station POS",
    category: "Fuel & Energy",
    description:
      "End-to-end point-of-sale system for fuel outlets covering sales, shifts, and reconciliation.",
    challenge:
      "Fuel outlets needed accurate shift-wise sales reconciliation across multiple attendants and payment types without relying on manual registers.",
    solution:
      "We engineered a POS built specifically for fuel retail — tracking every transaction by shift, attendant, and fuel grade, with automatic end-of-shift reconciliation reports.",
    features: [
      "Shift-wise sales and cash reconciliation",
      "Multi-fuel-grade pricing and reporting",
      "Attendant-level transaction tracking",
      "Daily sales summary dashboards",
    ],
  },
  {
    id: "parco-pump",
    icon: Gauge,
    title: "Parco Pump Management",
    category: "Fuel & Energy",
    description:
      "Pump-level monitoring and reporting system built for accuracy across multi-pump fuel operations.",
    challenge:
      "Operators running multiple pumps across a station needed pump-level accuracy to catch discrepancies between dispensed volume and recorded sales.",
    solution:
      "IA Perma delivered a pump management layer that logs readings per nozzle and cross-checks them against sales records, flagging variances automatically.",
    features: [
      "Per-pump, per-nozzle reading logs",
      "Automated variance detection",
      "Daily and monthly pump performance reports",
      "Integration with station POS data",
    ],
  },
  {
    id: "distributor-management",
    icon: Truck,
    title: "Distributor Management",
    category: "Distribution",
    description:
      "Order, dealer, and territory management system built for large-scale distribution networks.",
    challenge:
      "A growing distribution network struggled to manage dealer orders, territory assignments, and fulfillment status across scattered spreadsheets and phone calls.",
    solution:
      "We built a centralized platform where every dealer, order, and territory is tracked in one place, giving distribution managers a live view of the entire network.",
    features: [
      "Dealer and territory management",
      "Order tracking from placement to delivery",
      "Sales rep performance visibility",
      "Centralized dealer ledger and credit tracking",
    ],
  },
  {
    id: "school-management",
    icon: School,
    title: "School Management",
    category: "Education",
    description:
      "Complete campus operations platform for admissions, fees, attendance, and academic records.",
    challenge:
      "Administrative staff were managing admissions, fee collection, and attendance through disconnected registers, making reporting slow and error-prone.",
    solution:
      "IA Perma delivered one campus platform connecting admissions, billing, attendance, and academic records — turning routine administration into a few clicks.",
    features: [
      "Admissions and enrollment tracking",
      "Automated fee invoicing and receipts",
      "Daily attendance and academic records",
      "Parent-ready report generation",
    ],
  },
  {
    id: "isp-management",
    icon: Wifi,
    title: "ISP Management",
    category: "Internet Services",
    description:
      "Subscriber, billing, and network plan management platform for internet service providers.",
    challenge:
      "The provider needed to manage subscriber billing cycles, bandwidth plans, and support requests without juggling multiple disconnected tools.",
    solution:
      "We built a subscriber management platform that ties billing, plan changes, and support tickets to each customer record in one dashboard.",
    features: [
      "Subscriber billing and invoicing cycles",
      "Bandwidth plan management",
      "Support ticket tracking per subscriber",
      "Usage and revenue reporting",
    ],
  },
  {
    id: "inbound-packaging",
    icon: PackageOpen,
    title: "Inbound Packaging Management",
    category: "Packaging",
    description:
      "Structured intake tracking for incoming packaging materials and quality checks.",
    challenge:
      "Incoming packaging materials were logged manually, making it difficult to catch quality issues or supplier delays before they reached production.",
    solution:
      "IA Perma built a structured intake system that logs every incoming batch with quality checkpoints, giving teams visibility before materials reach the line.",
    features: [
      "Batch-level intake logging",
      "Quality checkpoint tracking",
      "Supplier performance history",
      "Automated intake discrepancy alerts",
    ],
  },
  {
    id: "outbound-packaging",
    icon: PackageCheck,
    title: "Outbound Packaging Management",
    category: "Packaging",
    description:
      "Dispatch-ready packaging workflows with tracking from line to delivery.",
    challenge:
      "Dispatch teams needed a reliable way to confirm packaged goods were ready, correctly labeled, and tracked all the way to delivery.",
    solution:
      "We built an outbound workflow that confirms packaging completion, generates dispatch labels, and tracks shipments through to final delivery.",
    features: [
      "Dispatch readiness checklists",
      "Automated labeling and documentation",
      "Shipment tracking to delivery",
      "Outbound volume reporting",
    ],
  },
{
    id: "in-process-packaging",
    icon: RefreshCw,
    title: "In-Process Packaging Management",
    category: "Packaging",
    description:
      "Live visibility into packaging operations as materials move through production stages.",
    challenge:
      "Production managers lacked real-time visibility into where materials were within the packaging process, making bottlenecks hard to spot.",
    solution:
      "IA Perma implemented live stage tracking so managers can see exactly where every batch sits in the packaging process, as it happens.",
    features: [
      "Live stage-by-stage batch tracking",
      "Bottleneck and delay flagging",
      "Production stage reporting",
      "Cross-stage handoff logging",
    ],
  },
  {
    id: "nestle-qr",
    icon: QrCode,
    title: "QR Serialization System — Nestlé",
    category: "Traceability",
    description:
      "Unique-identity serialization system generating and tracking a distinct QR code for every bottle produced.",
    challenge:
      "Nestlé needed a way to give every individual bottle a unique, trackable identity at production scale, without slowing down the line.",
    solution:
      "IA Perma built a high-throughput serialization system that generates, assigns, and validates a unique QR code per unit, integrated directly into the production and packaging workflow.",
    features: [
      "Unique QR code per unit at scale",
      "Real-time production line integration",
      "Duplicate and tamper detection",
      "Full batch traceability reporting",
    ],
  },
  {
    id: "ia-perma-communication",
    icon: MessageSquareText,
    title: "IA Perma Communication",
    category: "Internal Tools",
    description:
      "A live team workgroup communication application built in-house to power our own day-to-day collaboration.",
    challenge:
      "Our own team needed a fast, reliable communication tool shaped exactly around how we work, without the bloat of generic off-the-shelf apps.",
    solution:
      "IA Perma designed and built its own live communication platform from scratch — the same caliber of software we deliver to clients, running our own team every day.",
    features: [
      "Real-time messaging and workgroups",
      "Built and used in-house daily",
      "Custom-fit to our own workflow",
      "Live, production-grade application",
    ],
  },
];