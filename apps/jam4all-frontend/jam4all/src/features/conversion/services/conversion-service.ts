import { apiClient } from "@/shared/services/api-client";
import type { ConversionResult, Platform } from "@/shared/types";

export const conversionService = {
  convert: (playlistId: string, targetPlatform: Platform) =>
    apiClient
      .post<ConversionResult>("/convert", { playlistId, targetPlatform })
      .then((r) => r.data),

  getStatus: (conversionId: string) =>
    apiClient.get<ConversionResult>(`/convert/${conversionId}`).then((r) => r.data),
};
