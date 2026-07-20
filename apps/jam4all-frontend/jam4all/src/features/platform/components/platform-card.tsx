"use client";

import { Music2, Check } from "lucide-react";
import { Card } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import type { PlatformMeta } from "@/shared/constants/platforms";

interface PlatformCardProps {
  platform: PlatformMeta;
  connected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function PlatformCard({ platform, connected, onConnect, onDisconnect }: PlatformCardProps) {
  return (
    <Card className="flex flex-col p-6">
      <div className="flex items-start justify-between">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-md"
          style={{ backgroundColor: `${platform.color}1A` }}
        >
          <Music2 size={20} style={{ color: platform.color }} />
        </div>
        {!platform.available && <Badge variant="soon">Coming soon</Badge>}
        {platform.available && connected && (
          <Badge variant="success">
            <Check size={11} /> Connected
          </Badge>
        )}
      </div>

      <h3 className="mt-4 text-[15px] font-semibold text-foreground">{platform.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {platform.description}
      </p>

      <Button
        className="mt-5"
        variant={connected ? "outline" : "default"}
        disabled={!platform.available}
        onClick={connected ? onDisconnect : onConnect}
      >
        {!platform.available ? "Bientôt disponible" : connected ? "Déconnecter" : "Connect"}
      </Button>
    </Card>
  );
}
