"use client";

import { useMutation } from "@tanstack/react-query";
import { conversionService } from "@/features/conversion/services/conversion-service";
import type { Platform } from "@/shared/types";

export function useConvertPlaylist() {
  return useMutation({
    mutationFn: ({ playlistId, targetPlatform }: { playlistId: string; targetPlatform: Platform }) =>
      conversionService.convert(playlistId, targetPlatform),
  });
}
