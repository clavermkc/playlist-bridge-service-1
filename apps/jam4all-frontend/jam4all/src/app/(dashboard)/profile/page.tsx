"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { StatCard } from "@/shared/ui/stat-card";
import { ListMusic, Cable, RefreshCw } from "lucide-react";
import { useAuthStore } from "@/shared/store/auth-store";
import { useConnectedPlatforms } from "@/features/platform/hooks/use-platforms";
import { usePlaylists } from "@/features/playlist/hooks/use-playlists";

interface ProfileFormValues {
  displayName: string;
  email: string;
}

export default function ProfilePage() {
  const user = useAuthStore((s) => s.user);
  const { data: platforms } = useConnectedPlatforms();
  const { data: playlists } = usePlaylists();

  const { register, handleSubmit } = useForm<ProfileFormValues>({
    defaultValues: { displayName: user?.displayName ?? "", email: user?.email ?? "" },
  });

  const onSubmit = () => toast.success("Profil mis à jour");

  const initials = user?.displayName
    ? user.displayName.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase()
    : "JA";

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Plateformes connectées" value={platforms?.length ?? 0} icon={Cable} />
        <StatCard label="Playlists importées" value={playlists?.length ?? 0} icon={ListMusic} />
        <StatCard label="Conversions" value={0} icon={RefreshCw} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations du profil</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user?.avatarUrl} />
              <AvatarFallback className="text-base">{initials}</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">Changer l&apos;avatar</Button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Nom</label>
              <Input {...register("displayName")} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <Input type="email" disabled {...register("email")} />
            </div>
            <Button type="submit" className="self-start">Enregistrer</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
