import { MeshBackground } from "@/components/MeshBackground";
import { BentoGrid } from "@/components/BentoGrid";
import { ConsoleEgg } from "@/components/ConsoleEgg";
import { KonamiEgg } from "@/components/KonamiEgg";
import { HireEgg } from "@/components/HireEgg";

export default function Home() {
  return (
    <>
      <MeshBackground />
      <ConsoleEgg />
      <KonamiEgg />
      <HireEgg />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <BentoGrid />
      </main>
    </>
  );
}
