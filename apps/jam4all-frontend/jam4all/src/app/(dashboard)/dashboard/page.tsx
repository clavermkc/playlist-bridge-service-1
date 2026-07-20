"use client";

import Link from "next/link";
import { ListMusic, Cable, RefreshCw, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { StatCard } from "@/shared/ui/stat-card";
import { Button } from "@/shared/ui/button";
import { EmptyState } from "@/shared/ui/empty-state";
import { Skeleton } from "@/shared/ui/skeleton";
import { useAuthStore } from "@/shared/store/auth-store";
import { usePlaylists } from "@/features/playlist/hooks/use-playlists";
import { useConnectedPlatforms } from "@/features/platform/hooks/use-platforms";
import { ROUTES } from "@/shared/constants/routes";

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  const { data: playlists, isLoading: loadingPlaylists } = usePlaylists();
  const { data: platforms, isLoading: loadingPlatforms } = useConnectedPlatforms();

  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-gradient-to-br from-primary to-accent p-6 text-white">
        <p className="text-sm text-white/80">Bon retour</p>
        <h2 className="mt-1 text-2xl font-semibold">
          {user?.displayName ?? "Musicien"} 👋
        </h2>
        <p className="mt-2 max-w-md text-sm text-white/80">
          Connecte une nouvelle plateforme ou lance une conversion en un clic.
        </p>
        <Button className="mt-4 bg-white text-primary hover:bg-white/90" asChild>
          <Link href={ROUTES.convert}>
            Convertir une playlist
            <ArrowRight size={15} />
          </Link>
        </Button>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Plateformes connectées" value={platforms?.length ?? 0} icon={Cable} />
        <StatCard label="Playlists importées" value={playlists?.length ?? 0} icon={ListMusic} />
        <StatCard label="Conversions réussies" value={0} icon={TrendingUp} trend="Aucune conversion pour l'instant" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Plateformes connectées</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href={ROUTES.platforms}>Voir tout</Link>
            </Button>
          </CardHeader>
          <CardContent>
            {loadingPlatforms ? (
              <Skeleton className="h-24 w-full" />
            ) : platforms && platforms.length > 0 ? (
              <div className="flex flex-col gap-2">
                {platforms.map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm">
                    <span className="font-medium text-foreground">{p.platform}</span>
                    <span className="text-xs text-success">Connecté</span>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Cable}
                title="Aucune plateforme connectée"
                description="Connecte Spotify ou Apple Music pour commencer."
                action={
                  <Button size="sm" asChild>
                    <Link href={ROUTES.platforms}>Connecter une plateforme</Link>
                  </Button>
                }
              />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Playlists récentes</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href={ROUTES.playlists}>Voir tout</Link>
            </Button>
          </CardHeader>
          <CardContent>
            {loadingPlaylists ? (
              <Skeleton className="h-24 w-full" />
            ) : playlists && playlists.length > 0 ? (
              <div className="flex flex-col gap-2">
                {playlists.slice(0, 4).map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm">
                    <span className="font-medium text-foreground">{p.name}</span>
                    <span className="text-xs text-muted-foreground">{p.trackCount} titres</span>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon={ListMusic}
                title="Aucune playlist importée"
                description="Importe ta première playlist depuis une plateforme connectée."
                action={
                  <Button size="sm" asChild>
                    <Link href={ROUTES.playlists}>Importer une playlist</Link>
                  </Button>
                }
              />
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <Link href={ROUTES.platforms}><Cable size={15} />Connecter une plateforme</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={ROUTES.playlists}><ListMusic size={15} />Voir mes playlists</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={ROUTES.convert}><RefreshCw size={15} />Nouvelle conversion</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
