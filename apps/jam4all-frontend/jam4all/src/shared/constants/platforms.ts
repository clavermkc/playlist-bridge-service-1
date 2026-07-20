import type { Platform } from "@/shared/types";

export interface PlatformMeta {
  id: Platform;
  name: string;
  color: string;
  available: boolean;
  description: string;
}

export const PLATFORMS: PlatformMeta[] = [
  {
    id: "SPOTIFY",
    name: "Spotify",
    color: "#1DB954",
    available: true,
    description: "Connecte ton compte Spotify pour importer et exporter tes playlists.",
  },
  {
    id: "APPLE_MUSIC",
    name: "Apple Music",
    color: "#FA243C",
    available: true,
    description: "Connecte ton compte Apple Music pour importer et exporter tes playlists.",
  },
  {
    id: "DEEZER",
    name: "Deezer",
    color: "#A238FF",
    available: false,
    description: "Bientôt disponible.",
  },
  {
    id: "YOUTUBE_MUSIC",
    name: "YouTube Music",
    color: "#FF0000",
    available: false,
    description: "Bientôt disponible.",
  },
  {
    id: "AMAZON_MUSIC",
    name: "Amazon Music",
    color: "#00A8E1",
    available: false,
    description: "Bientôt disponible.",
  },
];

export const getPlatformMeta = (platform: Platform): PlatformMeta =>
  PLATFORMS.find((p) => p.id === platform) ?? PLATFORMS[0];
