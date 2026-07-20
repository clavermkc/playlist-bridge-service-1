"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ListMusic, RefreshCw } from "lucide-react";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Skeleton } from "@/shared/ui/skeleton";
import { TrackRow } from "@/features/playlist/components/track-row";
import { usePlaylist } from "@/features/playlist/hooks/use-playlists";
import { getPlatformMeta } from "@/shared/constants/platforms";
import { ROUTES } from "@/shared/constants/routes";

export default function PlaylistDetailsPage({ params }: { params: Promise<{ playlistId: string }> }) {
  const { playlistId } = use(params);
  const { data: playlist, isLoading } = usePlaylist(playlistId);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!playlist) {
    return <p className="text-sm text-muted-foreground">Playlist introuvable.</p>;
  }

  const platform = getPlatformMeta(playlist.platform);

  return (
    <div className="flex flex-col gap-6">
      <Card className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted">
          {playlist.coverUrl ? (
            <Image src={playlist.coverUrl} alt={playlist.name} width={96} height={96} className="object-cover" />
          ) : (
            <ListMusic size={30} className="text-muted-foreground" />
          )}
        </div>
        <div className="flex-1">
          <Badge style={{ backgroundColor: `${platform.color}1A`, color: platform.color }}>
            {platform.name}
          </Badge>
          <h2 className="mt-2 text-xl font-semibold text-foreground">{playlist.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{playlist.trackCount} morceaux</p>
        </div>
        <Button asChild>
          <Link href={`${ROUTES.convert}?playlistId=${playlist.id}`}>
            <RefreshCw size={15} />
            Convert Playlist
          </Link>
        </Button>
      </Card>

      <Card className="overflow-hidden p-0">
        {playlist.tracks && playlist.tracks.length > 0 ? (
          playlist.tracks.map((track, i) => <TrackRow key={track.id} track={track} index={i} />)
        ) : (
          <p className="p-6 text-center text-sm text-muted-foreground">Aucun morceau à afficher.</p>
        )}
      </Card>
    </div>
  );
}
