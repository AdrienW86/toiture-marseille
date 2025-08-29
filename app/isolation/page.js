import React from 'react'
import Menu from '@/components/Menu/Menu'
import Banner from '@/components/Banner/Banner'

export const metadata = {
  title: "Isolation de toiture - Toiture Marseille",
  description: "Améliorez le confort thermique de votre habitation grâce à nos prestations professionnelles d'isolation de toiture à Marseille.",
}

export default function page() {
  return (
   <>
    <Banner src = '/isolation-banner.png' />
    <Menu
        title="Isolation de toiture à Marseille"
        description="Réduisez vos factures d'énergie et améliorez le confort de votre maison grâce à nos solutions d’isolation thermique sur mesure."
        image="/isolation1.png"
        ctaLink="/contact"
        ctaText="Demander un devis gratuit"
      />

      {/* Pourquoi isoler */}
      <Menu
        title="Pourquoi isoler votre toiture ?"
        description="Une toiture mal isolée peut représenter jusqu'à 30% de pertes de chaleur. Nos solutions permettent de conserver la chaleur en hiver et la fraîcheur en été, tout en réduisant vos coûts énergétiques."
        image="/isolation2.png"
      />

      {/* Déroulement de l'intervention */}
      <Menu
        title="Déroulement de l'intervention"
        description="Nos experts commencent par inspecter votre toiture pour identifier les zones de déperdition thermique. Ensuite, nous posons des matériaux performants (laine minérale, laine de bois ou panneaux isolants) pour garantir une isolation optimale, sans pont thermique."
       image="/isolation3.png"
      />

      {/* Bénéfices pour le client */}
      <Menu
        title="Bénéfices pour votre habitation"
        description="Avec notre intervention, vous profitez d'un confort thermique optimal été comme hiver, d'une réduction significative des factures d’énergie et d'une valorisation de votre bien immobilier."
        image="/isolation4.png"
      />

      {/* Appel à l'action */}
      <Menu
        title="Contactez nos experts"
        description="Nos couvreurs qualifiés sont à votre disposition pour évaluer votre projet et vous proposer un devis gratuit et personnalisé."
        ctaLink="/contact"
        ctaText="Obtenir mon devis"
        image="/isolation5.png"
      />
   </>
  )
}
