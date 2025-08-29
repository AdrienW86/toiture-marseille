'use client';

import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner(props) {
  return (
    <div className={styles.banner}>
      <Image
        src= {props.src} 
        alt="Toiture Marseille"
        fill
        style={{ objectFit: 'cover' }} 
        priority
      />
      <div className={styles.overlay}>
        <h1 className={styles.h1}>Toiture <span className={styles.span}> Marseille </span></h1>
        <p>Votre spécialiste en toiture à Marseille</p>   
      </div>
       <Image
        src="/garantie2.png" 
        alt="garantie decenale"
        width={150}
        height={150}  
        className={styles.garantie}
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />  
    </div>
  );
}