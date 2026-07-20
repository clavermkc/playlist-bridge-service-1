import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { PLATFORMS } from "@/shared/constants/platforms";
import { cn } from "@/shared/utils/cn";

export function SupportedPlatforms() {
  return (
    <section className="border-y border-border bg-muted/40 py-14">
      <Container>
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Compatible platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className={cn(
                "flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm",
                !platform.available && "opacity-60"
              )}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: platform.color }}
              />
              <span className="font-medium text-foreground">{platform.name}</span>
              {!platform.available && (
                <Badge variant="soon" className="ml-1">Coming soon</Badge>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
