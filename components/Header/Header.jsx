"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/pictures', label: 'Photos' },
    { href: '/isolation', label: 'Isolation' },
    { href: '/zinguerie', label: 'Zinguerie' },
    { href: '/couverture', label: 'Couverture' },
    { href: '/demoussage', label: 'Nettoyage de toiture' },
    { href: '/savoir-faire', label: 'Qui sommes-nous ?' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <Link href="/"className={styles.logoWrapper} >       
        <Image
          src="/logo.png"
          alt="Logo de l'entreprise - protection contre les nuisibles"
          title="Accueil - Protection Nuisibles"
          width={80}
          height={80}
          priority
          className={styles.logo}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />        
      </Link>
      <a href="tel:+33757516414" className={styles.callButton}>
        📞 Appeler
      </a>
      <div className={styles.buttonBox}>
       <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`}
          onClick={handleMenuToggle}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation" 
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>
      <nav id="main-navigation" aria-label="Menu principal">
       
          {isMenuOpen && (
            <div
              className={styles.menu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul className={styles.ul}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className={styles.li}
                      href={link.href}
                      onClick={handleMenuToggle}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}       
      </nav>
    </header>
  );
}