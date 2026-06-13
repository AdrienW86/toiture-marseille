import type { Metadata } from 'next';
import About from "@/components/About";

// 1. Définition des métadonnées SEO en TypeScript
export const metadata: Metadata = {
  title: 'Notre savoir-faire – Toiture Marseille',
  description: "Découvrez notre expertise en travaux de couverture, isolation, zinguerie et entretien de toitures à Marseille et ses environs.",
};

export default function SavoirFairePage() {
  return (
    // On applique le fond clair global du site et un padding pour accueillir le composant About
    <main className="min-h-screen bg-slate-50 pt-[10vh] pb-16">
      <About />    
    </main>
  );
}