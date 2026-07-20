"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Cable,
  ListMusic,
  RefreshCw,
  History,
  User,
  Settings,
  Users,
  Music2,
} from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/utils/cn";

const navItems = [
  { label: "Dashboard", href: ROUTES.dashboard, icon: LayoutDashboard },
  { label: "Platforms", href: ROUTES.platforms, icon: Cable },
  { label: "Playlists", href: ROUTES.playlists, icon: ListMusic },
  { label: "Convert", href: ROUTES.convert, icon: RefreshCw },
  { label: "History", href: ROUTES.history, icon: History },
];

const bottomItems = [
  { label: "Profile", href: ROUTES.profile, icon: User },
  { label: "Settings", href: ROUTES.settings, icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-surface md:flex">
      <div className="flex h-16 items-center gap-2 border-b border-border px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
          <Music2 size={16} className="text-white" />
        </div>
        <span className="text-[15px] font-semibold tracking-tight text-foreground">Jam4All</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon size={17} />
              {item.label}
            </Link>
          );
        })}

        <div className="mt-1 flex cursor-not-allowed items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground/50">
          <Users size={17} />
          Jam
          <Badge variant="soon" className="ml-auto">Soon</Badge>
        </div>
      </nav>

      <div className="flex flex-col gap-1 border-t border-border p-3">
        {bottomItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
