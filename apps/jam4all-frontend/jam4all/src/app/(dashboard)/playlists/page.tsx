"use client";

import { toast } from "sonner";
import { ListMusic } from "lucide-react";
import { SearchBar } from "@/shared/ui/search-bar";
import { Skeleton } from "@/shared/ui/skeleton";
import { EmptyState } from "@/shared/ui/empty-state";
import { Button } from "@/shared/ui/button";
import { PlaylistCard } from "@/features/playlist/components/playlist-card";
import { usePlaylists, useDeletePlaylist } from "@/features/playlist/hooks/use-playlists";
import { ROUTES } from "@/shared/constants/routes";
import { useState } from "react";
import Link from "next/link";

export default function PlaylistsPage() {
  const { data: playlists, isLoading } = usePlaylists();
  const deleteMutation = useDeletePlaylist();
  const [query, setQuery] = useState("");

  const filtered = playlists?.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id, {
      onSuccess: () => toast.success("Playlist supprimée"),
      onError: () => toast.error("Impossible de supprimer la playlist"),
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Playlists</h2>
          <p className="mt-1 text-sm text-muted-foreground">Toutes tes playlists importées.</p>
        </div>
        <SearchBar
          placeholder="Rechercher une playlist..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          containerClassName="sm:w-64"
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full" />
          ))}
        </div>
      ) : filtered && filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={ListMusic}
          title="Aucune playlist"
          description="Connecte une plateforme puis importe ta première playlist."
          action={
            <Button size="sm" asChild>
              <Link href={ROUTES.platforms}>Connecter une plateforme</Link>
            </Button>
          }
        />
      )}
    </div>
  );
}
