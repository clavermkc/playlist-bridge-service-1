import { apiClient } from "@/shared/services/api-client";
import type { GenericPlaylist, Platform } from "@/shared/types";

export const playlistService = {
  getAll: () => apiClient.get<GenericPlaylist[]>("/playlists").then((r) => r.data),

  getById: (id: string) =>
    apiClient.get<GenericPlaylist>(`/playlists/${id}`).then((r) => r.data),

  importFromPlatform: (platform: Platform, externalPlaylistId: string) =>
    apiClient
      .post<GenericPlaylist>("/playlists/import", { platform, externalPlaylistId })
      .then((r) => r.data),

  remove: (id: string) => apiClient.delete(`/playlists/${id}`),
};
