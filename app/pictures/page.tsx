import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';

// 1. Métadonnées SEO corrigées pour Marseille et typées en TypeScript
export const metadata: Metadata = {
  title: 'Nos réalisations en images – Toiture Marseille',
  description: "Découvrez en images nos interventions de couverture, zinguerie, nettoyage et rénovation de toiture à Marseille et dans ses alentours.",
};

export default function PicturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-[12vh] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="text-center mb-12 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nos chantiers & interventions
          </h1>
          <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto pt-2">
            Un aperçu en images de la qualité de notre travail sur les toits de la région marseillaise.
          </p>
        </div>

        {/* 2. Ton composant Galerie de photos réutilisable */}
        <Gallery />   

      </div>
    </main>
  );
}