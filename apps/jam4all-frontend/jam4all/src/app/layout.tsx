import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/shared/providers/query-provider";
import { ToastProvider } from "@/shared/providers/toast-provider";

export const metadata: Metadata = {
  title: "Jam4All — Move your music across every platform",
  description: "Convert playlists between Spotify, Apple Music and more in seconds.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <QueryProvider>
          {children}
          <ToastProvider />
        </QueryProvider>
      </body>
    </html>
  );
}
