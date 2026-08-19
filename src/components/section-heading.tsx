type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <header className={`mb-10 md:mb-14 ${isCenter ? "text-center max-w-2xl mx-auto" : ""}`}>
      {eyebrow ? (
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary`}>
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
        {title}
      </h2>
      {description ? (
        <p className={`mt-3 text-base text-muted-foreground sm:text-lg ${isCenter ? "" : "max-w-2xl"}`}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
