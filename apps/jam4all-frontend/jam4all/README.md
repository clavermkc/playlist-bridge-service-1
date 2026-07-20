# Jam4All — Frontend (Phase 1 : Playlist Converter)

Frontend Next.js 15 / TypeScript / Tailwind / Shadcn-style, architecture **Feature-Sliced Design**.
Le backend (Spring Boot : auth JWT, OAuth2, PlatformAccount, GenericPlaylist, chiffrement des tokens) est géré séparément et n'est pas inclus ici.

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Le réseau du sandbox où ce projet a été généré ne permet pas d'exécuter `npm install`.
**Ce projet n'a donc pas été buildé/testé automatiquement** — installe les dépendances en local pour valider.

## Structure (Feature-Sliced Design)

```
src/
├── app/                    # Next.js App Router
│   ├── (public)/           # Landing, login, register, about, privacy, terms
│   └── (dashboard)/        # Dashboard, platforms, playlists, convert, history, profile, settings
├── widgets/                 # Navbar, Sidebar, Footer, Hero, Dashboard header, Mobile nav
├── features/                 # auth, playlist, platform, conversion, profile, history
│   └── [feature]/
│       ├── components/
│       ├── hooks/            # React Query hooks
│       └── services/          # Appels API (axios)
├── shared/
│   ├── ui/                   # Design system (Button, Card, Badge, Input...)
│   ├── store/                 # Zustand (auth-store, ui-store)
│   ├── services/               # api-client.ts (axios + interceptors JWT)
│   ├── types/                   # Types du domaine
│   ├── constants/                 # Routes, métadonnées plateformes
│   └── providers/                  # QueryProvider, ToastProvider
└── middleware.ts             # Guard de routes
```

## Contrat avec le backend Spring Boot

Le frontend attend les endpoints suivants (voir `src/features/*/services/`) :

```
POST   /auth/login
POST   /auth/register
POST   /auth/refresh
GET    /auth/me
GET    /platforms
GET    /platforms/connect/{platform}   (redirection OAuth2, gérée backend)
DELETE /platforms/{platform}
GET    /playlists
GET    /playlists/{id}
POST   /playlists/import
DELETE /playlists/{id}
POST   /convert
GET    /convert/{id}
GET    /history
GET    /profile
PATCH  /profile
```

## Auth & sécurité

- `accessToken` : en mémoire Zustand uniquement (jamais persisté).
- `refreshToken` : persisté via `zustand/persist` (localStorage).
- Les tokens OAuth Spotify/Apple Music ne transitent **jamais** côté frontend — gérés et chiffrés côté Spring Boot.
- `middleware.ts` s'appuie sur un cookie `jam4all_session` (httpOnly, posé par le backend au login) pour le guard de routes côté edge. À adapter selon le mécanisme de session choisi côté Spring Boot.

## Phase 2 (Jam) — non développée, mais prévue

- Entrée "Jam" déjà visible dans la sidebar avec badge "Coming soon".
- `shared/types/index.ts` et la structure `features/` sont prêts à accueillir `features/jam/` sans refactorisation majeure (store Zustand dédié, hook `useJamWebSocket`, composants `JamQueue`, `NowPlaying`, `VoteButton`).
