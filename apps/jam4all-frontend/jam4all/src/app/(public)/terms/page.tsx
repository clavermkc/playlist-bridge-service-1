import { Container } from "@/shared/ui/container";
import { SectionTitle } from "@/shared/ui/section-title";

const sections = [
  {
    title: "Utilisation du service",
    body: "Jam4All est fourni tel quel. L'utilisateur est responsable du respect des conditions d'utilisation des plateformes tierces (Spotify, Apple Music) qu'il connecte.",
  },
  {
    title: "Limites de responsabilité",
    body: "Jam4All ne garantit pas une correspondance à 100% des morceaux lors d'une conversion. Certains titres peuvent être indisponibles sur la plateforme cible.",
  },
  {
    title: "Résiliation",
    body: "L'utilisateur peut supprimer son compte à tout moment, ce qui révoque immédiatement l'accès aux plateformes connectées.",
  },
];

export default function TermsPage() {
  return (
    <Container className="py-20">
      <SectionTitle eyebrow="Légal" title="Conditions d'utilisation" align="left" />
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
