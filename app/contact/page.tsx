import type { Metadata } from 'next';
import GoogleMap from '@/components/Map';
import Form from '@/components/Form';

// 1. Définition des métadonnées SEO en TypeScript
export const metadata: Metadata = {
  title: 'Contact – Toiture Marseille',
  description: "Contactez Toiture Marseille pour tous vos travaux de couverture, isolation et zinguerie à Marseille. Demandez un devis gratuit et personnalisé.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 pt-[12vh] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nous contacter
          </h1>
          <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto pt-2">
            Une urgence fuite ou un projet de rénovation ? Nos équipes vous répondent avec le sourire.
          </p>
        </div>

        {/* 2. Affichage de la carte de zone d'intervention (Marseille et alentours) */}
        <GoogleMap />

        {/* 3. Section dédiée au formulaire de contact */}
        {/* L'arrière-plan légèrement grisé détache proprement le formulaire de la carte */}
        <div className="mt-12 bg-slate-100/60 py-6 sm:py-10 rounded-2xl border border-slate-200/40">
          <Form />
        </div>

      </div>
    </main>
  );
}