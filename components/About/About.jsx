import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Qui sommes-nous ? </h1>
            <p className={styles.p}>
                Toiture Marseille, c’est avant tout une équipe de couvreurs professionnels dédiée à la réalisation de toitures solides et durables. 
                Basée à Marseille et intervenant dans toute la région, notre entreprise repose sur des valeurs fortes : réactivité, professionnalisme et qualité.
            </p>

        <h2 className={styles.h2}> Une entreprise à taille humaine, proche de ses clients </h2>
            <p className={styles.p}>
                Chez Toiture Marseille, chaque projet est personnalisé. Nous plaçons l'écoute et le conseil au cœur de notre démarche, 
                pour proposer des solutions adaptées à vos besoins : rénovation, réparation, entretien, isolation ou zinguerie. 
                Particuliers et professionnels, nous intervenons rapidement et avec soin.
            </p>

        <h2 className={styles.h2}> Des couvreurs qualifiés et expérimentés </h2>
            <p className={styles.p}>
                Notre équipe est composée de couvreurs expérimentés, formés aux techniques les plus récentes pour tous types de toitures 
                (tuiles, ardoises, zinc, etc.). Nous utilisons des matériaux de qualité pour assurer la durabilité, l’étanchéité et l’esthétique de votre toiture.
            </p>

        <h2 className={styles.h2}> Une exigence de qualité à chaque étape </h2>
            <p className={styles.p}>
                Du premier contact à la fin des travaux, nous veillons à respecter les délais, à réaliser chaque intervention avec soin et à garantir votre satisfaction. 
                Chaque chantier fait l’objet d’un suivi rigoureux et de recommandations pour l’entretien futur de votre toiture.
            </p>

        <p className={styles.p}>
            Toiture Marseille, votre partenaire de confiance pour des toitures solides, étanches et esthétiques dans toute la région marseillaise.
        </p>
    </section>
  )
}

