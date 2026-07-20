"use client";

import Link from "next/link";
import { Music2 } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { ROUTES } from "@/shared/constants/routes";

const links = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "À propos", href: ROUTES.about },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href={ROUTES.home} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
            <Music2 size={16} className="text-white" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">Jam4All</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.login}>Se connecter</Link>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <Link href={ROUTES.register}>Commencer</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
