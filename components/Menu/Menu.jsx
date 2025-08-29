import React from 'react'
import Image from 'next/image'
import styles from './menu.module.css'

export default function Menu({ title, description, image, ctaLink, ctaText }) {
  return (
    <section className={styles.menu}>
        <h2 className={styles.h2}>{title}</h2>
        {description && <p className={styles.text}>{description}</p>}
        {image && (
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        )}
        {ctaLink && ctaText && (
          <a href={ctaLink} className={styles.ctaButton}>
            {ctaText}
          </a>
        )}
    </section>
  )
}
