import { Hero } from "@/widgets/hero/hero";
import { SupportedPlatforms } from "@/widgets/hero/supported-platforms";
import { HowItWorks } from "@/widgets/hero/how-it-works";
import { Features } from "@/widgets/hero/features";
import { CTA } from "@/widgets/hero/cta";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SupportedPlatforms />
      <HowItWorks />
      <Features />
      <CTA />
    </>
  );
}
