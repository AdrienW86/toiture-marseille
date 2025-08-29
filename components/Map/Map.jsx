'use client';

import React from 'react';
import styles from './map.module.css';

export default function GoogleMap() {
  const address = {
    name: "Toiture Marseille",
    phone: "06 08 00 86 83",
    fullAddress: "Marseille et alentours",
  };

  return (
    <div className={styles.mapWrapper}>
       <div className={styles.addressDetails}>
        <h2 className={styles.name}>{address.name}</h2>
        <p className={styles.span}>
          <strong 
          >Zone d'intervention :</strong> {address.fullAddress}
        </p>
        <p className={styles.span}>
          <strong>Téléphone :</strong> {address.phone}
        </p>
      </div>
      <div className={styles.mapContainer}>
       <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46915.49122963929!2d5.215832177960165!3d43.28022070191013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille!5e0!3m2!1sfr!2sfr!4v1756458411986!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>     
    </div>
  );
}