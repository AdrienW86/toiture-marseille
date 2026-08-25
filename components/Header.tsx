'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo'; // On importe le nouveau composant SVG transparent

// Typage pour éviter les erreurs TypeScript avec window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction de suivi des conversions Google Ads au clic sur le bouton d'appel
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18366446985/yGpHCMjW0docEIn75rVE',
      });
    }
  };

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/pictures', label: 'Photos' },
    { href: '/couverture', label: 'Couverture' },
    { href: '/zinguerie', label: 'Zinguerie' },
    { href: '/isolation', label: 'Isolation' },
    { href: '/nettoyage', label: 'Nettoyage' },
    { href: '/savoir-faire', label: 'Qui sommes-nous ?' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-[10vh] flex items-center justify-between px-4 sm:px-6 lg:px-8 select-none">
      
      {/* LOGO INJECTÉ EN SVG DIRECT */}
      <Link href="/" className="flex items-center transition-transform duration-200 hover:scale-105">       
        <Logo width={130} height={130} className="w-[130px] h-[130px]" />        
      </Link>

      {/* MENU DESKTOP (Au survol : passage au bleu ciel) */}
      <nav className="hidden xl:block">
        <ul className="flex items-center gap-1.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] font-semibold text-slate-700 hover:text-sky-500 hover:bg-slate-50 px-3 py-2 rounded-xl transition-all duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* BOUTONS DROITE (Appel Bleu + Burger mobile) */}
      <div className="flex items-center gap-4">
        {/* Bouton d'appel d'urgence aux couleurs de l'OM */}
        <a 
          href="tel:+33608008683" 
          onClick={handlePhoneClick}
          className="bg-sky-400 hover:bg-sky-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-md shadow-sky-500/10 flex items-center gap-2 text-sm sm:text-base transition-all duration-150"
        >
          <span className="animate-pulse">📞</span> 
          <span className="hidden sm:inline">06 08 00 86 83</span>
          <span className="sm:hidden">Appeler</span>
        </a>

        {/* Bouton Hamburger Mobile */}
        <button
          onClick={toggleMenu}
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 p-2 gap-1.5 text-slate-700"
          aria-label="Menu de navigation"
          aria-expanded={isMenuOpen}
        >
          <span className={`h-0.5 w-6 bg-current transform transition duration-300 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-current transition duration-200 rounded-full ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-current transform transition duration-300 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      <div className={`absolute top-[10vh] left-0 w-full bg-white border-b border-slate-200 shadow-xl xl:hidden transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <ul className="py-4 px-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={toggleMenu}
                className="block text-base font-bold text-slate-800 hover:text-sky-500 hover:bg-slate-50 px-4 py-3 rounded-xl transition-all duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a 
              href="tel:+33608008683" 
              onClick={() => { handlePhoneClick(); toggleMenu(); }}
              className="block w-full text-center bg-sky-400 hover:bg-sky-500 text-slate-950 font-bold py-3 rounded-xl transition-all duration-150"
            >
              📞 06 08 00 86 83
            </a>
          </li>
        </ul>
      </div>

    </header>
  );
}