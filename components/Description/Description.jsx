import React from 'react'
import Card from '@/components/Card/Card'
import styles from './description.module.css'

export default function Description() {

const services = [
  {
    title: "Rénovation de toiture",
    description: "Redonnez une seconde vie à votre toit grâce à nos experts en rénovation.",
    image: "/image2.png",
    link: "/couverture",
  },
  {
    title: "Isolation thermique",
    description: "Améliorez le confort de votre habitation avec une isolation performante.",
    image: "/image4.png",
    link: "/isolation",
  },
  {
    title: "Entretien & nettoyage",
    description: "Préservez l’étanchéité et la longévité de votre toit avec un entretien régulier.",
    image: "/image3.png",
    link: "/nettoyage",
  },
  {
    title: "Travaux de zinguerie",
    description: "Assurez l’évacuation optimale des eaux pluviales et la protection de votre toiture grâce à nos prestations de zinguerie.",
    image: "/image5.png", 
    link: "/zinguerie",
  },
]

  return (
    <section className={styles.description}>
      <h2 className={styles.h2}> Nos services </h2>
      <div className={styles.descriptionContainer}>
         {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </section>
  )
}
