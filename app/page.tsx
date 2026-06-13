import Banner from '@/components/Banner';
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import GoogleMap from '@/components/Map';
import Form from '@/components/Form';

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 antialiased">
      
      {/* 1. La grande bannière du haut (Hero Section) avec son image de fond */}
      <Banner src="/image1.png" />
      
      {/* 2. Section de présentation "L'entreprise" + Petite carte rapide */}
      <Intro />
      
      {/* 3. Grille des 4 prestations principales (Cartes interactives) */}
      <Description />      
      
      {/* 4. Zone d'intervention détaillée + Grande carte interactive Google Maps */}
      <GoogleMap />

      {/* 5. Formulaire de contact pour les demandes de devis de toiture */}
      <div className="bg-slate-100/50 py-8 border-t border-slate-200/40">
        <Form />
      </div>

    </main>
  );
}