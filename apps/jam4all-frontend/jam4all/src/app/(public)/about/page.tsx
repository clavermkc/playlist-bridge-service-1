import { Container } from "@/shared/ui/container";
import { SectionTitle } from "@/shared/ui/section-title";

export default function AboutPage() {
  return (
    <Container className="py-20">
      <SectionTitle
        eyebrow="À propos"
        title="Pourquoi Jam4All"
        description="Jam4All est né d'un constat simple : ta musique ne devrait jamais être enfermée dans une seule plateforme."
        align="left"
      />
      <div className="mt-10 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Jam4All connecte tes comptes de streaming (Spotify, Apple Music, et bientôt d&apos;autres)
          pour te permettre de convertir tes playlists d&apos;une plateforme à une autre, en gardant
          le contrôle total sur tes données.
        </p>
        <p>
          Cette première phase pose les fondations techniques d&apos;une vision plus large : une
          couche d&apos;abstraction indépendante des plateformes de streaming, qui ouvrira la voie à
          des expériences collaboratives inédites — comme le Jam en temps réel, prévu pour une
          prochaine phase.
        </p>
      </div>
    </Container>
  );
}
