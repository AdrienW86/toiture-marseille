import styles from '@/app/legalPages.module.css';

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Toiture Marseille',
}

export default function PolitiqueConfidentialite() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Politique de confidentialité</h1>

      <h2 className={styles.subtitle}>Collecte des données personnelles</h2>
      <p className={styles.text}>Nous collectons des informations personnelles via :</p>
      <ul className={styles.list}>
        <li>Formulaires de contact : nom, prénom, email, téléphone</li>
        <li>Inscription à la newsletter : email</li>
      </ul>

      <h2 className={styles.subtitle}>Utilisation des données</h2>
      <p className={styles.text}>
        Les informations collectées sont utilisées exclusivement pour :
      </p>
      <ul className={styles.list}>
        <li>Répondre aux demandes des utilisateurs</li>
        <li>Envoyer des newsletters si consentement donné</li>
      </ul>

      <h2 className={styles.subtitle}>Durée de conservation</h2>
      <p className={styles.text}>
        Les données sont conservées pendant 2 ans à compter du dernier contact.
      </p>

      <h2 className={styles.subtitle}>Droits des utilisateurs</h2>
      <p className={styles.text}>
        Conformément à la loi RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression :
      </p>
      <ul className={styles.list}>
        <li>Par email : <a href="mailto:toiture.marseille13@gmail.com" className={styles.link}>toiture.marseille13@gmail.com</a></li>
        <li>Par courrier : 88 chemin des charettes, 66000 Perpignan, France</li>
      </ul>

      <h2 className={styles.subtitle}>Cookies</h2>
      <p className={styles.text}>
        Nous utilisons des cookies essentiels, de performance et de publicité ciblée. Vous pouvez gérer votre consentement via l'outil prévu sur le site. Pour plus d'informations : <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className={styles.link}>CNIL – Cookies</a>.
      </p>
    </main>
  )
}
