import React from 'react'
import Menu from '@/components/Menu/Menu'
import Banner from '@/components/Banner/Banner'

export const metadata = {
  title: "Zinguerie - Toiture Marseille",
  description: "Assurez l'étanchéité et la durabilité de votre toiture grâce à nos prestations professionnelles de zinguerie à Marseille.",
}

export default function page() {
  return (
    <>
      <Banner src='/zinguerie-banner.png' />

      {/* Hero */}
      <Menu
        title="Zinguerie à Marseille"
        description="Protégez votre toiture et vos bâtiments grâce à nos solutions de zinguerie sur mesure, alliant esthétique et performance."
        image="/zinguerie1.png"
        ctaLink="/contact"
        ctaText="Demander un devis gratuit"
      />

      {/* Pourquoi la zinguerie */}
      <Menu
        title="Pourquoi installer ou rénover votre zinguerie ?"
        description="La zinguerie assure l’étanchéité des toitures et protège votre bâtiment des infiltrations d’eau. Une installation de qualité prévient les dégâts et prolonge la durée de vie de votre toiture."
        image="/zinguerie2.png"
      />

      {/* Déroulement de l'intervention */}
      <Menu
        title="Déroulement de l'intervention"
        description="Nos couvreurs inspectent votre toiture, retirent les anciennes pièces si nécessaire et posent des éléments de zinguerie (gouttières, chéneaux, abergements) avec précision pour assurer une étanchéité parfaite."
        image="/zinguerie3.png"
      />

      {/* Bénéfices pour le client */}
      <Menu
        title="Bénéfices pour votre toiture"
        description="Une zinguerie bien réalisée garantit la protection contre les infiltrations, améliore l’esthétique de votre toiture et réduit les risques de réparations coûteuses sur le long terme."
        image="/zinguerie5.png"
      />

      {/* Appel à l'action */}
      <Menu
        title="Contactez nos experts en zinguerie"
        description="Nos professionnels sont à votre disposition pour évaluer votre projet et vous proposer un devis gratuit et personnalisé."
        ctaLink="/contact"
        ctaText="Obtenir mon devis"
        image="/zinguerie4.png"
      />
    </>
  )
}
