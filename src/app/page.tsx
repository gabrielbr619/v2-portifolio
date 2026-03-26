import { MeshBackground } from "@/components/MeshBackground";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <>
      <MeshBackground />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <BentoGrid />
      </main>
    </>
  );
}
