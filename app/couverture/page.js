import React from 'react'
import Menu from '@/components/Menu/Menu'
import Banner from '@/components/Banner/Banner'

export const metadata = {
  title: "Travaux de couverture - Toiture Marseille",
  description: "Rénovation, réparation et entretien de toitures avec Toiture Marseille, pour des toits solides et durables à Marseille.",
}

export default function page() {
  return (
    <>
      <Banner src='/couverture-banner.png' />

      {/* Hero */}
      <Menu
        title="Travaux de couverture à Marseille"
        description="Confiez la rénovation, la réparation ou l’entretien de votre toiture à nos couvreurs experts, pour une toiture solide et durable."
        image="/couverture1.png"
        ctaLink="/contact"
        ctaText="Demander un devis gratuit"
      />

      {/* Pourquoi rénover sa toiture */}
      <Menu
        title="Pourquoi rénover ou entretenir votre toiture ?"
        description="Une toiture bien entretenue assure l’étanchéité, protège votre maison des intempéries et prévient les réparations coûteuses. La rénovation permet également de valoriser votre bien immobilier."
        image="/couverture3.png"
      />

      {/* Déroulement de l'intervention */}
      <Menu
        title="Déroulement de l'intervention"
        description="Nos couvreurs inspectent votre toit, identifient les zones à réparer ou à remplacer, et effectuent les travaux avec précision : remplacement de tuiles, étanchéité, isolation et pose de nouvelles couvertures si nécessaire."
        image="/couverture2.png"
      />

      {/* Bénéfices pour le client */}
      <Menu
        title="Bénéfices pour votre toiture"
        description="Avec nos prestations, vous bénéficiez d’une toiture durable, étanche et esthétiquement soignée, tout en réduisant les risques de fuites ou de détérioration à long terme."
        image="/couverture4.png"
      />

      {/* Appel à l'action */}
      <Menu
        title="Contactez nos experts en couverture"
        description="Nos professionnels sont à votre disposition pour évaluer votre projet et vous proposer un devis gratuit et personnalisé."
        ctaLink="/contact"
        ctaText="Obtenir mon devis"
        image="/couverture5.png"
      />
    </>
  )
}
