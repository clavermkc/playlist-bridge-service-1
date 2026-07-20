"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Cable, ListMusic, RefreshCw, History } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { cn } from "@/shared/utils/cn";

const items = [
  { label: "Home", href: ROUTES.dashboard, icon: LayoutDashboard },
  { label: "Platforms", href: ROUTES.platforms, icon: Cable },
  { label: "Playlists", href: ROUTES.playlists, icon: ListMusic },
  { label: "Convert", href: ROUTES.convert, icon: RefreshCw },
  { label: "History", href: ROUTES.history, icon: History },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-surface/95 backdrop-blur-md md:hidden">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium",
              active ? "text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
