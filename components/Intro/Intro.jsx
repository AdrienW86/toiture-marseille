import React from 'react'
import styles from './intro.module.css'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h2 className={styles.h2}> L'entreprise </h2>
        <p className={styles.p}> 
          Bienvenue chez Toiture Marseille, votre spécialiste 
          de la couverture dans toute la région marseillaise.
          Depuis plusieurs années, notre entreprise met son savoir-faire
          au service des particuliers et des professionnels pour tous travaux de toiture : rénovation, réparation, entretien, isolation et pose de couvertures neuves.
          Implantés à Marseille, nous intervenons rapidement dans l’ensemble 
          des environs pour vous offrir des prestations de qualité, réalisées 
          par des couvreurs expérimentés et passionnés par leur métier. 
          Notre priorité : assurer la solidité, l’étanchéité et la longévité 
          de votre toit, tout en vous garantissant un accompagnement personnalisé 
          du devis jusqu’à la fin du chantier.
          Avec Toiture Marseille, vous bénéficiez d’une entreprise de confiance, 
          alliant réactivité, professionnalisme et respect des délais.
        </p>
    </section>
  )
}
