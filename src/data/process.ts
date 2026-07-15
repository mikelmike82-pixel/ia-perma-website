import {
  Search,
  LineChart,
  Blocks,
  Code2,
  Gauge,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "We study your operations, goals, and pain points to define the real problem worth solving.",
  },
  {
    icon: LineChart,
    step: "02",
    title: "Analyze",
    description:
      "Workflows, data, and requirements are mapped into a clear, actionable technical brief.",
  },
  {
    icon: Blocks,
    step: "03",
    title: "Architect",
    description:
      "We design a scalable system architecture built to handle growth from day one.",
  },
  {
    icon: Code2,
    step: "04",
    title: "Develop",
    description:
      "Our engineers build clean, tested software aligned to the architecture and your timeline.",
  },
  {
    icon: Gauge,
    step: "05",
    title: "Optimize",
    description:
      "We refine performance, security, and usability before the system goes live.",
  },
  {
    icon: Rocket,
    step: "06",
    title: "Scale",
    description:
      "Ongoing support and iteration keep your system growing in step with your business.",
  },
];
