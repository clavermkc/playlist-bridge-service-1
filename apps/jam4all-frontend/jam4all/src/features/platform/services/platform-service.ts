import { apiClient } from "@/shared/services/api-client";
import type { Platform, PlatformAccount } from "@/shared/types";

export const platformService = {
  getConnected: () => apiClient.get<PlatformAccount[]>("/platforms").then((r) => r.data),

  // Le frontend ne gère jamais le code OAuth : il redirige vers le backend
  // qui orchestre le flow Spotify/Apple Music et revient sur /platforms?connected=true
  getConnectUrl: (platform: Platform) =>
    `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api"}/platforms/connect/${platform.toLowerCase()}`,

  disconnect: (platform: Platform) =>
    apiClient.delete(`/platforms/${platform.toLowerCase()}`),
};
