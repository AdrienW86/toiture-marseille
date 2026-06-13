import type { Metadata } from 'next';
import Menu from '@/components/Menu';
import Banner from '@/components/Banner';

export const metadata: Metadata = {
  title: "Nettoyage de toiture à Marseille - Toiture Marseille",
  description: "Entretien et nettoyage professionnel de toitures à Marseille. Préservez la durée de vie de votre toit et l'esthétique de votre habitat avec Toiture Marseille.",
};

export default function NettoyagePage() {
  return (
    <main className="min-h-screen bg-white pb-16">
      
      {/* Bannière thématique */}
      <Banner src="/nettoyage-banner.png" />

      {/* Conteneur des blocs */}
      <div className="space-y-0">
        
        {/* Section Principale */}
        <Menu
          title="Nettoyage de toiture à Marseille"
          description="Confiez l’entretien de votre toiture à nos experts pour un toit propre, étanche et durable. Nous utilisons des techniques adaptées pour redonner éclat et protection à votre couverture."
          image="/nettoyage1.png"
          ctaLink="/contact"
          ctaText="Demander un devis gratuit"
        />

        {/* Pourquoi nettoyer */}
        <Menu
          title="Pourquoi nettoyer votre toiture ?"
          description="L'accumulation de mousses, lichens et pollution fragilise vos matériaux de couverture et altère l'étanchéité. Un entretien régulier est la meilleure solution pour prévenir les réparations coûteuses."
          image="/couverture4.png"
        />

        {/* Déroulement */}
        <Menu
          title="Méthodologie d'intervention"
          description="Nos couvreurs réalisent d'abord un diagnostic complet de l'état de votre toiture. Nous procédons ensuite au retrait sécurisé des débris, au nettoyage professionnel et à l'application de traitements de protection."
          image="/nettoyage2.png"
        />

        {/* Bénéfices */}
        <Menu
          title="Bénéfices pour votre toiture"
          description="Avec un nettoyage professionnel, votre toit retrouve sa fonction première de protection. Vous bénéficiez d'une étanchéité renforcée et d'un aspect esthétique préservé pour les années à venir."
          image="/nettoyage4.png"
        />

        {/* Appel à l'action */}
        <Menu
          title="Contactez nos experts"
          description="Besoin d'un nettoyage ou d'un traitement pour votre toiture ? Nos professionnels sont à votre disposition pour évaluer vos besoins et vous proposer un diagnostic gratuit."
          ctaLink="/contact"
          ctaText="Obtenir mon devis"
          image="/nettoyage5.png"
        />
        
      </div>
    </main>
  );
}