import React from 'react'
import styles from './intro.module.css'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h2 className={styles.h2}>L'entreprise</h2>
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

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185896.0328960789!2d5.215832177960165!3d43.28022070191013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille!5e0!3m2!1sfr!2sfr!4v1756458411986!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation Toiture Marseille"
        ></iframe>
      </div>
    </section>
  )
}

