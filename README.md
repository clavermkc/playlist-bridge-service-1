# Jam4All — Frontend (Phase 1: Playlist Converter)

Frontend auf Basis von Next.js 15 / TypeScript / Tailwind / Shadcn-Style mit **Feature-Sliced Design**-Architektur.
Das Backend (Spring Boot: JWT-Auth, OAuth2, PlatformAccount, GenericPlaylist, Token-Verschlüsselung) wird separat betrieben und ist in diesem Repository nicht enthalten.

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev

Das Netzwerk der Sandbox, in der dieses Projekt generiert wurde, erlaubt die Ausführung von npm install nicht.
*Daher wurde dieses Projekt nicht automatisch gebaut/getestet* — bitte installiere die Abhängigkeiten lokal, um es zu validieren.


## Struktur (Feature-Sliced Design)

src/
├── app/                    # Next.js App Router
│   ├── (public)/           # Landing, Login, Registrierung, Über uns, Datenschutz, AGB
│   └── (dashboard)/        # Dashboard, Plattformen, Playlists, Konvertierung, Verlauf, Profil, Einstellungen
├── widgets/                 # Navbar, Sidebar, Footer, Hero, Dashboard-Header, Mobile-Navigation
├── features/                 # Auth, Playlist, Plattform, Konvertierung, Profil, Verlauf
│   └── [feature]/
│       ├── components/
│       ├── hooks/            # React Query Hooks
│       └── services/          # API-Aufrufe (axios)
├── shared/
│   ├── ui/                   # Design-System (Button, Card, Badge, Input...)
│   ├── store/                 # Zustand (auth-store, ui-store)
│   ├── services/               # api-client.ts (axios + JWT-Interceptor)
│   ├── types/                   # Domänentypen
│   ├── constants/                 # Routen, Plattform-Metadaten
│   └── providers/                  # QueryProvider, ToastProvider
└── middleware.ts             # Routen-Guard (Absicherung)

## Vertrag mit dem Spring-Boot-Backend
Das Frontend erwartet die folgenden Endpunkte (siehe src/features/*/services/):


POST   /auth/login
POST   /auth/register
POST   /auth/refresh
GET    /auth/me
GET    /platforms
GET    /platforms/connect/{platform}   (OAuth2-Weiterleitung, backend-seitig)
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

## Authentifizierung & Sicherheit
- ```accessToken```: Wird ausschließlich im Arbeitsspeicher von Zustand gehalten (niemals persistent gespeichert).

- ```refreshToken```: Wird über zustand/persist (localStorage) persistent gehalten.

- Die OAuth-Tokens für Spotify/Apple Music durchlaufen niemals das Frontend — sie werden ausschließlich im Spring-Boot-Backend verwaltet und verschlüsselt.

- ```middleware.ts``` nutzt ein jam4all_session-Cookie (httpOnly, vom Backend bei Login gesetzt) für den Routen-Guard auf Edge-Ebene. Dies muss an den tatsächlich gewählten Session-Mechanismus des Spring-Boot-Backends angepasst werden.

# Phase 2 (Jam) — nicht entwickelt, aber vorgesehen

- Der "Jam"-Eintrag ist bereits in der Seitenleiste sichtbar, versehen mit dem Badge "Demnächst verfügbar" (Coming soon).

- shared/types/index.ts und die features/-Struktur sind darauf vorbereitet, features/jam/ ohne größere Refaktorierungen aufzunehmen (dedizierter Zustand per Zustand-Store, Hook useJamWebSocket, Komponenten JamQueue, NowPlaying, VoteButton).
