import React from 'react';
import Link from 'next/link';
import LogoWhite from '@/components/LogoWhite';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          
          {/* Bloc 1 : Logo & Description */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <Link href="/" className="transition-transform duration-200 hover:scale-105 inline-block">
              <LogoWhite width={180} height={180} className="w-[180px] h-[180px]" />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Votre artisan couvreur de confiance à Marseille. Intervention rapide pour couverture, isolation, zinguerie et nettoyage de toitures.
            </p>
          </div>

          {/* Bloc 2 : Liens Rapides / Services */}
          <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
            <h3 className="text-white font-black tracking-wider uppercase text-xs">Nos Prestations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/couverture" className="hover:text-om-light transition-colors">Couverture & Toiture</Link></li>
              <li><Link href="/zinguerie" className="hover:text-om-light transition-colors">Zinguerie sur mesure</Link></li>
              <li><Link href="/isolation" className="hover:text-om-light transition-colors">Isolation des combles</Link></li>
              <li><Link href="/nettoyage" className="hover:text-om-light transition-colors">Nettoyage & Démoussage</Link></li>
            </ul>
          </div>

          {/* Bloc 3 : Contact Direct */}
          <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
            <h3 className="text-white font-black tracking-wider uppercase text-xs">Contact d'urgence</h3>
            <p className="text-sm">Disponible sur Marseille et ses alentours.</p>
            <a 
              href="tel:+33608008683" 
              className="text-om-light hover:text-white text-lg font-black tracking-wide transition-colors"
            >
              06 08 00 86 83
            </a>
            <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">Devis et déplacement gratuits</p>
          </div>

        </div>

        {/* LIGNE DE SÉPARATION TECHNIQUE */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          {/* Copyright */}
          <p>© {currentYear} Toiture Marseille. Tous droits réservés.</p>
          
          {/* Liens légaux & Signature Codev */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-x-6">
              <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors underline underline-offset-4">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-slate-300 transition-colors underline underline-offset-4">
                Confidentialité
              </Link>
            </div>
            
            {/* Signature Codev */}
            <span className="text-slate-700 sm:border-l sm:border-slate-800 sm:pl-6">
              Réalisé par{' '}
              <a 
                href="https://code-v.fr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-slate-500 hover:text-om-light transition-colors underline underline-offset-4"
              >
                Codev
              </a>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}