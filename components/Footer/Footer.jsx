import React from 'react'
import Image from 'next/image';
import styles from './footer.module.css'

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          src="/logo2.png"
          alt="logo"
          width={100}
          height={100}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className={styles.links}>
        <a href="/mentions-legales" className={styles.link}>Mentions légales</a>
        <a href="/politique-confidentialite" className={styles.link}>Politique de confidentialité</a>
        <a href="/cgv" className={styles.link}>CGV</a>
      </div>

      <a className={styles.link2} href="https://code-v.fr" target="_blank" rel="noopener noreferrer">
        Réalisé par <span className={styles.codev}> Codev </span>
      </a>

      <p className={styles.txt}> © {currentYear}. Tous droits réservés. </p>
    </footer>
  )
}

