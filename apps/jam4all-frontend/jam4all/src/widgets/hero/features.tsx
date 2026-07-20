import { ShieldCheck, Zap, History, Repeat, Users } from "lucide-react";
import { Container } from "@/shared/ui/container";
import { SectionTitle } from "@/shared/ui/section-title";
import { Card } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";

const features = [
  { icon: ShieldCheck, title: "OAuth Secure", description: "Connexion sécurisée à chaque plateforme, aucun mot de passe stocké." },
  { icon: Zap, title: "Fast Conversion", description: "Conversion de playlists en quelques secondes, même pour de longues listes." },
  { icon: History, title: "Playlist History", description: "Retrouve l'historique complet de toutes tes conversions passées." },
  { icon: Repeat, title: "Cross Platform", description: "Spotify, Apple Music, et bientôt Deezer, YouTube Music, Amazon Music." },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-muted/30 py-24">
      <Container>
        <SectionTitle
          eyebrow="Fonctionnalités"
          title="Pensé pour durer"
          description="Une infrastructure solide, prête à accueillir la suite du produit."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <feature.icon size={18} className="text-primary" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </Card>
          ))}

          <Card className="relative overflow-hidden p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10">
              <Users size={18} className="text-accent" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <h3 className="text-[15px] font-semibold text-foreground">Collaborative Jam</h3>
              <Badge variant="soon">Coming soon</Badge>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Crée des sessions musicales collaboratives en temps réel, avec vote et queue dynamique — même entre utilisateurs Spotify et Apple Music.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
