"use client";

import { History as HistoryIcon, ArrowRight, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Skeleton } from "@/shared/ui/skeleton";
import { EmptyState } from "@/shared/ui/empty-state";
import { historyService } from "@/features/history/services/history-service";
import { getPlatformMeta } from "@/shared/constants/platforms";
import type { ConversionStatus } from "@/shared/types";

const statusConfig: Record<ConversionStatus, { label: string; icon: typeof CheckCircle2; variant: "success" | "warning" | "danger" }> = {
  SUCCESS: { label: "Réussie", icon: CheckCircle2, variant: "success" },
  PARTIAL: { label: "Partielle", icon: AlertTriangle, variant: "warning" },
  FAILED: { label: "Échouée", icon: XCircle, variant: "danger" },
  PENDING: { label: "En attente", icon: AlertTriangle, variant: "warning" },
  IN_PROGRESS: { label: "En cours", icon: AlertTriangle, variant: "warning" },
};

export default function HistoryPage() {
  const { data: history, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: historyService.getAll,
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Historique</h2>
        <p className="mt-1 text-sm text-muted-foreground">Toutes tes conversions passées.</p>
      </div>

      {isLoading ? (
        <Skeleton className="h-64 w-full" />
      ) : history && history.length > 0 ? (
        <Card className="overflow-hidden p-0">
          <div className="hidden grid-cols-[1fr_auto_1fr_auto_auto] gap-4 border-b border-border bg-muted/50 px-5 py-2.5 text-xs font-medium uppercase text-muted-foreground sm:grid">
            <span>Source</span>
            <span />
            <span>Cible</span>
            <span>Date</span>
            <span>Statut</span>
          </div>
          {history.map((item) => {
            const status = statusConfig[item.status];
            const source = getPlatformMeta(item.sourcePlatform);
            const target = getPlatformMeta(item.targetPlatform);
            return (
              <div
                key={item.id}
                className="flex flex-col gap-2 border-b border-border px-5 py-3.5 text-sm last:border-b-0 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_auto] sm:items-center sm:gap-4"
              >
                <span className="font-medium text-foreground">{source.name}</span>
                <ArrowRight size={14} className="hidden text-muted-foreground sm:block" />
                <span className="font-medium text-foreground">{target.name}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(item.createdAt).toLocaleDateString("fr-FR")}
                </span>
                <Badge variant={status.variant}>
                  <status.icon size={11} />
                  {status.label}
                </Badge>
              </div>
            );
          })}
        </Card>
      ) : (
        <EmptyState
          icon={HistoryIcon}
          title="Aucun historique"
          description="Tes conversions apparaîtront ici une fois lancées."
        />
      )}
    </div>
  );
}
