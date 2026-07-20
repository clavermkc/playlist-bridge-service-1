import type { LucideIcon } from "lucide-react";
import { Card } from "@/shared/ui/card";
import { cn } from "@/shared/utils/cn";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

function StatCard({ label, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
          <Icon size={18} className="text-primary" />
        </div>
      </div>
      {trend && (
        <p className={cn("mt-3 text-xs font-medium", trendUp ? "text-success" : "text-muted-foreground")}>
          {trend}
        </p>
      )}
    </Card>
  );
}

export { StatCard };
