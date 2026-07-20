"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { platformService } from "@/features/platform/services/platform-service";
import type { Platform } from "@/shared/types";

export function useConnectedPlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getConnected,
  });
}

export function useDisconnectPlatform() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (platform: Platform) => platformService.disconnect(platform),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["platforms"] }),
  });
}
