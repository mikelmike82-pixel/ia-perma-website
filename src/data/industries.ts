import {
  ShoppingBag,
  Fuel,
  Truck,
  Warehouse,
  GraduationCap,
  Wifi,
  Building2,
  Wrench,
  Factory,
  Package,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  icon: LucideIcon;
  title: string;
}

export const industries: Industry[] = [
  { icon: ShoppingBag, title: "Retail" },
  { icon: Fuel, title: "Fuel Stations" },
  { icon: Truck, title: "Distribution" },
  { icon: Warehouse, title: "Warehousing" },
  { icon: GraduationCap, title: "Education" },
  { icon: Wifi, title: "ISP" },
  { icon: Building2, title: "SMEs" },
  { icon: Wrench, title: "Service" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Package, title: "Packaging" },
];
