import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    "bg-gradient-brand text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5",
  secondary:
    "bg-ink text-white hover:bg-ink/90 hover:-translate-y-0.5",
  outline:
    "border border-border bg-surface text-ink hover:border-primary hover:text-primary-dark hover:-translate-y-0.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold cursor-pointer transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
