"use client";

import { usePathname } from "next/navigation";
import { DashboardHeader } from "@/widgets/dashboard/dashboard-header";
import { ROUTES } from "@/shared/constants/routes";

const titles: Record<string, string> = {
  [ROUTES.dashboard]: "Dashboard",
  [ROUTES.platforms]: "Platforms",
  [ROUTES.playlists]: "Playlists",
  [ROUTES.convert]: "Convert",
  [ROUTES.history]: "History",
  [ROUTES.profile]: "Profile",
  [ROUTES.settings]: "Settings",
};

export function DashboardHeaderResolver() {
  const pathname = usePathname();
  const title = titles[pathname] ?? "Jam4All";
  return <DashboardHeader title={title} />;
}
