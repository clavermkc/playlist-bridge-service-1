import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/shared/ui/container";
import { Button } from "@/shared/ui/button";
import { ROUTES } from "@/shared/constants/routes";

export function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-accent px-8 py-16 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Prêt à libérer ta musique ?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-[15px] text-white/85">
            Crée ton compte Jam4All et convertis ta première playlist en moins d'une minute.
          </p>
          <Button size="lg" className="relative mt-8 bg-white text-primary hover:bg-white/90" asChild>
            <Link href={ROUTES.register}>
              Start converting
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
