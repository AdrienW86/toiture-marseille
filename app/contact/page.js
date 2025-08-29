import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import styles from '../page.module.css'

export const metadata = {
  title: 'Contact – Toiture Marseille',
  description: "Contactez Toiture Marseille pour tous vos travaux de couverture, isolation et zinguerie à Marseille. Demandez un devis gratuit et personnalisé.",
}

export default function Contact() {
  return (
    <main className={styles.container}>
     <h2 className={styles.h2}>  Nous contacter </h2>    
      <Map />
      <Form />  
    </main>
  )
}
