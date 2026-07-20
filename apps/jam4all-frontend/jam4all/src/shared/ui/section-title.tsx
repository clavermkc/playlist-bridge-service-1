import { cn } from "@/shared/utils/cn";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

function SectionTitle({ eyebrow, title, description, align = "center", className }: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export { SectionTitle };
