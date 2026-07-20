export type Platform = "SPOTIFY" | "APPLE_MUSIC" | "DEEZER" | "YOUTUBE_MUSIC" | "AMAZON_MUSIC";

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface PlatformAccount {
  id: string;
  platform: Platform;
  platformUserId: string;
  connected: boolean;
  connectedAt?: string;
}

export interface GenericTrack {
  id: string;
  isrc?: string;
  title: string;
  artist: string;
  album?: string;
  durationMs: number;
  artworkUrl?: string;
  matched: boolean;
}

export interface GenericPlaylist {
  id: string;
  name: string;
  description?: string;
  coverUrl?: string;
  platform: Platform;
  trackCount: number;
  importedAt: string;
  tracks?: GenericTrack[];
}

export type ConversionStatus = "PENDING" | "IN_PROGRESS" | "SUCCESS" | "PARTIAL" | "FAILED";

export interface ConversionResult {
  id: string;
  sourcePlaylist: GenericPlaylist;
  sourcePlatform: Platform;
  targetPlatform: Platform;
  status: ConversionStatus;
  totalTracks: number;
  convertedTracks: number;
  skippedTracks: number;
  notFoundTracks: number;
  createdAt: string;
}

export interface ApiError {
  status: number;
  message: string;
  code?: string;
}
