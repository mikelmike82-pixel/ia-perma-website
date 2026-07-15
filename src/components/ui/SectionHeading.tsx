interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  const eyebrowClasses =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white/80"
      : "border-border bg-muted text-primary-dark";

  const titleClasses = tone === "dark" ? "text-white" : "text-ink";
  const descriptionClasses = tone === "dark" ? "text-white/60" : "text-body-text";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span
          className={`inline-flex w-fit items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${eyebrowClasses}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${titleClasses}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed sm:text-lg ${descriptionClasses}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
