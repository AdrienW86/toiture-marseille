import React from 'react'
import Menu from '@/components/Menu/Menu'
import Banner from '@/components/Banner/Banner'

export const metadata = {
  title: "Nettoyage de toiture - Toiture Marseille",
  description: "Entretenez et nettoyez votre toiture avec Toiture Marseille pour prolonger sa durée de vie et préserver l’esthétique de votre maison à Marseille.",
}

export default function page() {
  return (
    <>
      <Banner src='/nettoyage-banner.png' />

      {/* Hero */}
      <Menu
        title="Nettoyage de toiture à Marseille"
        description="Confiez l’entretien et le nettoyage de votre toiture à nos experts pour un toit propre, étanche et durable."
        image="/nettoyage1.png"
        ctaLink="/contact"
        ctaText="Demander un devis gratuit"
      />

      {/* Pourquoi nettoyer sa toiture */}
      <Menu
        title="Pourquoi nettoyer votre toiture ?"
        description="Le nettoyage régulier prévient l’accumulation de mousse, lichen et débris, protège l’étanchéité de votre toit et améliore l’apparence générale de votre maison."
        image="/nettoyage2.png"
      />

      {/* Déroulement de l'intervention */}
      <Menu
        title="Déroulement de l'intervention"
        description="Nos couvreurs commencent par un diagnostic complet de votre toiture, puis retirent mousses et débris à l’aide de techniques professionnelles adaptées à votre type de couverture, tout en respectant les matériaux."
        image="/nettoyage3.png"
      />

      {/* Bénéfices pour le client */}
      <Menu
        title="Bénéfices pour votre toiture"
        description="Avec un nettoyage professionnel, votre toiture reste étanche, propre et esthétique. Vous réduisez les risques de détérioration et prolongez sa durée de vie."
        image="/nettoyage4.png"
      />

      {/* Appel à l'action */}
      <Menu
        title="Contactez nos experts pour le nettoyage de votre toiture"
        description="Nos professionnels sont à votre disposition pour évaluer votre toiture et vous proposer un devis gratuit et personnalisé."
        ctaLink="/contact"
        ctaText="Obtenir mon devis"
        image="/nettoyage5.png"
      />
    </>
  )
}
