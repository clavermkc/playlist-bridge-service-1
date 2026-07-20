export const ROUTES = {
  home: "/",
  about: "/about",
  privacy: "/privacy",
  terms: "/terms",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  platforms: "/platforms",
  playlists: "/playlists",
  playlistDetails: (id: string) => `/playlists/${id}`,
  convert: "/convert",
  history: "/history",
  profile: "/profile",
  settings: "/settings",
  jam: "/jam", // Coming soon — Phase 2
} as const;

export const PUBLIC_ROUTES: string[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.privacy,
  ROUTES.terms,
  ROUTES.login,
  ROUTES.register,
];
