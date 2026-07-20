import Link from "next/link";
import { Music2 } from "lucide-react";
import { Container } from "@/shared/ui/container";
import { ROUTES } from "@/shared/constants/routes";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-primary to-accent">
            <Music2 size={12} className="text-white" />
          </div>
          <span className="text-sm font-medium text-foreground">Jam4All</span>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href={ROUTES.about} className="hover:text-foreground">À propos</Link>
          <Link href={ROUTES.privacy} className="hover:text-foreground">Confidentialité</Link>
          <Link href={ROUTES.terms} className="hover:text-foreground">Conditions</Link>
        </div>
      </Container>
    </footer>
  );
}
