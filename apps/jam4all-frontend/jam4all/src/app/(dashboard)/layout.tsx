import { Sidebar } from "@/widgets/sidebar/sidebar";
import { MobileNav } from "@/widgets/mobile-nav/mobile-nav";
import { DashboardHeaderResolver } from "@/widgets/dashboard/dashboard-header-resolver";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeaderResolver />
        <main className="flex-1 p-6 pb-20 md:pb-6">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
