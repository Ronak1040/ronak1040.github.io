type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 md:mb-12">
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p> : null}
    </header>
  );
}
