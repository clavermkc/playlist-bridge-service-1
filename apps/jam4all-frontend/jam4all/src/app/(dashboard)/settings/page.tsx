"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { useUIStore } from "@/shared/store/ui-store";
import { useLogout } from "@/features/auth/hooks/use-auth";
import { Globe, Bell, LogOut } from "lucide-react";

export default function SettingsPage() {
  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);
  const logout = useLogout();

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Préférences</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col divide-y divide-border">
          <div className="flex items-center justify-between py-4 first:pt-0">
            <div className="flex items-center gap-3">
              <Globe size={17} className="text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Langue</p>
                <p className="text-xs text-muted-foreground">Français</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Changer</Button>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Bell size={17} className="text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Notifications</p>
                <p className="text-xs text-muted-foreground">Recevoir des emails sur tes conversions</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Gérer</Button>
          </div>

          <div className="flex items-center justify-between py-4 last:pb-0">
            <div>
              <p className="text-sm font-medium text-foreground">Thème</p>
              <p className="text-xs text-muted-foreground">Actuellement : {theme === "light" ? "Clair" : "Sombre"}</p>
            </div>
            <Button variant="outline" size="sm" onClick={toggleTheme}>Basculer</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compte</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" onClick={logout}>
            <LogOut size={15} />
            Déconnexion
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
