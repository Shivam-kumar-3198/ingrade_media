import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({ eyebrow, title, description, align = "left", className, as = "h2" }: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <span className="text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</span>
      ) : null}
      <Heading className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl">{title}</Heading>
      {description ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
