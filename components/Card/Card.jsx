"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./card.module.css"

export default function Card({ title, description, image, link }) {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
        <span className={styles.link}>En savoir plus →</span>
      </div>
    </Link>
  )
}

