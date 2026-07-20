import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Badge } from "@/shared/ui/badge";
import { ROUTES } from "@/shared/constants/routes";

export function Hero() {
  return (
    <section className="relative overflow-hidden noise-bg py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Badge variant="default" className="mb-6">
          Phase 1 — Playlist Converter
        </Badge>

        <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Move your music
          <br />
          <span className="text-gradient">across every platform.</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-muted-foreground">
          Convert playlists between Spotify, Apple Music and more in seconds.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button variant="accent" size="lg" asChild>
            <Link href={ROUTES.register}>
              Start converting
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#how-it-works">Learn more</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
