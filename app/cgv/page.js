import styles from '@/app/legalPages.module.css';

export const metadata = {
  title: 'Conditions générales de vente',
  description: 'CGV du site Toiture Marseille',
}

export default function CGV() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Conditions générales de vente (CGV)</h1>

      <h2 className={styles.subtitle}>Produits et services</h2>
      <p className={styles.text}>
        Toiture Marseille propose des prestations de couverture, rénovation, réparation et entretien de toitures, ainsi que des travaux de zinguerie et d’isolation thermique.
      </p>

      <h2 className={styles.subtitle}>Tarifs et paiement</h2>
      <p className={styles.text}>
        Les prix sont indiqués en euros et hors taxes. Le paiement s’effectue selon les modalités précisées au moment de la commande (virement, carte bancaire ou espèces).
      </p>

      <h2 className={styles.subtitle}>Délais d'intervention</h2>
      <p className={styles.text}>
        Les délais d’intervention sont communiqués lors de la prise de contact et peuvent varier selon les disponibilités, la complexité des travaux et la zone géographique.
      </p>

      <h2 className={styles.subtitle}>Annulation et remboursement</h2>
      <p className={styles.text}>
        Toute demande d’annulation doit être signalée par email ou téléphone. Les prestations déjà réalisées ne sont pas remboursables.
      </p>

      <h2 className={styles.subtitle}>Garanties et responsabilités</h2>
      <p className={styles.text}>
        Toiture Marseille s’engage à fournir des prestations conformes aux normes en vigueur. L’entreprise ne pourra être tenue responsable en cas de dommages résultant d’une mauvaise utilisation des travaux ou d’un entretien insuffisant par le client.
      </p>
    </main>
  )
}
