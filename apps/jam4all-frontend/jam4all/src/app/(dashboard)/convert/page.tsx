"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, RefreshCw, ListMusic } from "lucide-react";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Skeleton } from "@/shared/ui/skeleton";
import { Loader } from "@/shared/ui/loader";
import { usePlaylists } from "@/features/playlist/hooks/use-playlists";
import { useConvertPlaylist } from "@/features/conversion/hooks/use-conversion";
import { PLATFORMS, getPlatformMeta } from "@/shared/constants/platforms";
import type { Platform, ConversionResult } from "@/shared/types";
import { cn } from "@/shared/utils/cn";

type ConversionState =
  | { status: "idle" }
  | { status: "converting" }
  | { status: "success"; result: ConversionResult }
  | { status: "error"; message: string };

export default function ConvertPage() {
  return (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <ConvertPageContent />
    </Suspense>
  );
}

function ConvertPageContent() {
  const searchParams = useSearchParams();
  const preselectedId = searchParams.get("playlistId");

  const { data: playlists, isLoading } = usePlaylists();
  const convertMutation = useConvertPlaylist();

  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(preselectedId);
  const [targetPlatform, setTargetPlatform] = useState<Platform | null>(null);
  const [state, setState] = useState<ConversionState>({ status: "idle" });

  const selectedPlaylist = playlists?.find((p) => p.id === selectedPlaylistId);
  const availableTargets = PLATFORMS.filter(
    (p) => p.available && p.id !== selectedPlaylist?.platform
  );

  const handleConvert = () => {
    if (!selectedPlaylistId || !targetPlatform) return;
    setState({ status: "converting" });
    convertMutation.mutate(
      { playlistId: selectedPlaylistId, targetPlatform },
      {
        onSuccess: (result) => setState({ status: "success", result }),
        onError: () => setState({ status: "error", message: "La conversion a échoué. Réessaie." }),
      }
    );
  };

  if (state.status === "success") {
    const { result } = state;
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 size={28} className="text-success" />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Conversion terminée</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {result.sourcePlaylist.name} → {getPlatformMeta(result.targetPlatform).name}
        </p>

        <div className="mt-6 grid w-full grid-cols-3 gap-3">
          <Card className="p-4">
            <p className="text-2xl font-semibold text-success">{result.convertedTracks}</p>
            <p className="mt-1 text-xs text-muted-foreground">Convertis</p>
          </Card>
          <Card className="p-4">
            <p className="text-2xl font-semibold text-warning">{result.skippedTracks}</p>
            <p className="mt-1 text-xs text-muted-foreground">Ignorés</p>
          </Card>
          <Card className="p-4">
            <p className="text-2xl font-semibold text-danger">{result.notFoundTracks}</p>
            <p className="mt-1 text-xs text-muted-foreground">Introuvables</p>
          </Card>
        </div>

        <Button
          className="mt-8"
          variant="outline"
          onClick={() => {
            setState({ status: "idle" });
            setSelectedPlaylistId(null);
            setTargetPlatform(null);
          }}
        >
          Nouvelle conversion
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Convertir une playlist</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Choisis une playlist source puis une plateforme de destination.
        </p>
      </div>

      <Card className="p-5">
        <p className="mb-3 text-sm font-medium text-foreground">1. Playlist source</p>
        {isLoading ? (
          <Skeleton className="h-12 w-full" />
        ) : playlists && playlists.length > 0 ? (
          <div className="flex flex-col gap-2">
            {playlists.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlaylistId(p.id)}
                className={cn(
                  "flex items-center justify-between rounded-md border px-3 py-2.5 text-left text-sm transition-colors",
                  selectedPlaylistId === p.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted"
                )}
              >
                <span className="flex items-center gap-2 font-medium text-foreground">
                  <ListMusic size={15} className="text-muted-foreground" />
                  {p.name}
                </span>
                <span className="text-xs text-muted-foreground">{p.trackCount} titres</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Aucune playlist disponible. Importe-en une d&apos;abord.</p>
        )}
      </Card>

      {selectedPlaylist && (
        <Card className="p-5">
          <p className="mb-3 text-sm font-medium text-foreground">2. Plateforme cible</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {availableTargets.map((p) => (
              <button
                key={p.id}
                onClick={() => setTargetPlatform(p.id)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-md border px-3 py-3 text-sm transition-colors",
                  targetPlatform === p.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted"
                )}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                <span className="font-medium text-foreground">{p.name}</span>
              </button>
            ))}
          </div>
        </Card>
      )}

      {state.status === "error" && (
        <div className="flex items-center gap-2 rounded-md bg-danger/10 px-4 py-3 text-sm text-danger">
          <AlertCircle size={16} />
          {state.message}
        </div>
      )}

      <Button
        size="lg"
        variant="accent"
        disabled={!selectedPlaylistId || !targetPlatform || state.status === "converting"}
        onClick={handleConvert}
      >
        {state.status === "converting" ? (
          <>
            <Loader size={16} className="text-white" />
            Conversion en cours...
          </>
        ) : (
          <>
            <RefreshCw size={16} />
            Lancer la conversion
          </>
        )}
      </Button>
    </div>
  );
}
