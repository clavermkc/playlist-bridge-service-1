import Image from "next/image";
import { Music2, Check, AlertTriangle } from "lucide-react";
import type { GenericTrack } from "@/shared/types";
import { cn } from "@/shared/utils/cn";

function formatDuration(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function TrackRow({ track, index }: { track: GenericTrack; index: number }) {
  return (
    <div className="flex items-center gap-3 border-b border-border px-4 py-2.5 text-sm last:border-b-0 hover:bg-muted/50">
      <span className="w-5 shrink-0 text-center text-xs text-muted-foreground">{index + 1}</span>

      <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted">
        {track.artworkUrl ? (
          <Image src={track.artworkUrl} alt={track.title} width={36} height={36} className="object-cover" />
        ) : (
          <Music2 size={14} className="text-muted-foreground" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-foreground">{track.title}</p>
        <p className="truncate text-xs text-muted-foreground">{track.artist}</p>
      </div>

      <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">
        {formatDuration(track.durationMs)}
      </span>

      <div
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
          track.matched ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
        )}
      >
        {track.matched ? <Check size={12} /> : <AlertTriangle size={12} />}
      </div>
    </div>
  );
}
