"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { playlistService } from "@/features/playlist/services/playlist-service";

export function usePlaylists() {
  return useQuery({
    queryKey: ["playlists"],
    queryFn: playlistService.getAll,
  });
}

export function usePlaylist(id: string) {
  return useQuery({
    queryKey: ["playlists", id],
    queryFn: () => playlistService.getById(id),
    enabled: !!id,
  });
}

export function useDeletePlaylist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => playlistService.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["playlists"] }),
  });
}
