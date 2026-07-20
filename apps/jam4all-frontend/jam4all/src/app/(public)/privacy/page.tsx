import { Container } from "@/shared/ui/container";
import { SectionTitle } from "@/shared/ui/section-title";

const sections = [
  {
    title: "Données collectées",
    body: "Nous collectons uniquement les informations nécessaires au fonctionnement du service : email, identifiants de compte, et métadonnées de playlists (titres, artistes, ISRC).",
  },
  {
    title: "Tokens de plateformes",
    body: "Les tokens OAuth Spotify et Apple Music sont chiffrés (AES-256) et stockés côté serveur. Ils ne transitent jamais en clair vers le frontend.",
  },
  {
    title: "Suppression des données",
    body: "Tu peux demander la suppression de ton compte et de toutes les données associées à tout moment depuis les paramètres.",
  },
];

export default function PrivacyPage() {
  return (
    <Container className="py-20">
      <SectionTitle eyebrow="Légal" title="Politique de confidentialité" align="left" />
      <div className="mt-10 max-w-2xl space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h3 className="text-[15px] font-semibold text-foreground">{s.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
