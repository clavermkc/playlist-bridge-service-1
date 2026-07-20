import { Link2, Download, RefreshCw, PartyPopper } from "lucide-react";
import { Container } from "@/shared/ui/container";
import { SectionTitle } from "@/shared/ui/section-title";

const steps = [
  { icon: Link2, title: "Connect", description: "Lie ton compte Spotify ou Apple Music en un clic." },
  { icon: Download, title: "Import", description: "Choisis la playlist que tu veux transférer." },
  { icon: RefreshCw, title: "Convert", description: "Jam4All retrouve chaque morceau sur la plateforme cible." },
  { icon: PartyPopper, title: "Enjoy", description: "Ta playlist est prête, là où tu veux l'écouter." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Workflow"
          title="Quatre étapes, zéro friction"
          description="De la connexion à l'écoute, tout se passe en quelques secondes."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-card">
                <step.icon size={22} className="text-white" />
              </div>
              <span className="mt-4 text-xs font-semibold text-primary">Étape {i + 1}</span>
              <h3 className="mt-1 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
