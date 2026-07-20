import Link from "next/link";
import Image from "next/image";
import { ListMusic, RefreshCw, Trash2 } from "lucide-react";
import { Card } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { getPlatformMeta } from "@/shared/constants/platforms";
import { ROUTES } from "@/shared/constants/routes";
import type { GenericPlaylist } from "@/shared/types";

interface PlaylistCardProps {
  playlist: GenericPlaylist;
  onDelete?: (id: string) => void;
}

export function PlaylistCard({ playlist, onDelete }: PlaylistCardProps) {
  const platform = getPlatformMeta(playlist.platform);

  return (
    <Card className="overflow-hidden p-0">
      <div className="relative flex h-36 items-center justify-center bg-muted">
        {playlist.coverUrl ? (
          <Image src={playlist.coverUrl} alt={playlist.name} fill className="object-cover" />
        ) : (
          <ListMusic size={28} className="text-muted-foreground" />
        )}
        <Badge
          className="absolute left-3 top-3"
          style={{ backgroundColor: `${platform.color}1A`, color: platform.color }}
        >
          {platform.name}
        </Badge>
      </div>

      <div className="p-4">
        <h3 className="truncate text-[15px] font-semibold text-foreground">{playlist.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {playlist.trackCount} morceaux · importée le {new Date(playlist.importedAt).toLocaleDateString("fr-FR")}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link href={ROUTES.playlistDetails(playlist.id)}>Voir</Link>
          </Button>
          <Button variant="default" size="sm" className="flex-1" asChild>
            <Link href={`${ROUTES.convert}?playlistId=${playlist.id}`}>
              <RefreshCw size={14} />
              Convertir
            </Link>
          </Button>
          {onDelete && (
            <Button variant="ghost" size="icon" onClick={() => onDelete(playlist.id)}>
              <Trash2 size={15} className="text-danger" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
