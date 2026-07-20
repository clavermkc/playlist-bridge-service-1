"use client";

import { toast } from "sonner";
import { PlatformCard } from "@/features/platform/components/platform-card";
import { Skeleton } from "@/shared/ui/skeleton";
import { PLATFORMS } from "@/shared/constants/platforms";
import { platformService } from "@/features/platform/services/platform-service";
import { useConnectedPlatforms, useDisconnectPlatform } from "@/features/platform/hooks/use-platforms";

export default function PlatformsPage() {
  const { data: connected, isLoading } = useConnectedPlatforms();
  const disconnectMutation = useDisconnectPlatform();

  const isConnected = (platformId: string) =>
    connected?.some((p) => p.platform === platformId && p.connected) ?? false;

  const handleConnect = (platformId: string) => {
    window.location.href = platformService.getConnectUrl(platformId as never);
  };

  const handleDisconnect = (platformId: string) => {
    disconnectMutation.mutate(platformId as never, {
      onSuccess: () => toast.success(`${platformId} déconnecté`),
      onError: () => toast.error("Impossible de déconnecter la plateforme"),
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Plateformes</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Connecte tes comptes de streaming pour importer et exporter tes playlists.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-52 w-full" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((platform) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              connected={isConnected(platform.id)}
              onConnect={() => handleConnect(platform.id)}
              onDisconnect={() => handleDisconnect(platform.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
