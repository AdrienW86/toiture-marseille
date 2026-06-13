'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routeLabels: { [key: string]: string } = {
  'pictures': 'Réalisations photos',
  'couverture': 'Travaux de Couverture',
  'zinguerie': 'Zinguerie & Évacuation',
  'isolation': 'Isolation Thermique',
  'nettoyage': 'Nettoyage & Entretien',
  'savoir-faire': 'Qui sommes-nous ?',
  'contact': 'Demande de devis',
  'mentions-legales': 'Mentions Légales',
  'politique-de-confidentialite': 'Confidentialité'
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    return { href, label };
  });

  const domain = 'https://toiture-marseille.fr';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': domain,
      },
      ...breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 2,
        'name': crumb.label,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* STYLE CHIC ET PROFESSIONNEL */}
      <nav 
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-[12vh] pb-4 text-xs tracking-wider uppercase select-none text-slate-400" 
        aria-label="Fil d'Ariane"
      >
        <ol className="flex items-center space-x-3 border-b border-slate-200/60 pb-3">
          <li>
            <Link 
              href="/" 
              className="hover:text-sky-600 font-semibold transition-colors duration-150"
            >
              Accueil
            </Link>
          </li>
          
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <React.Fragment key={crumb.href}>
                <li className="text-slate-300 pointer-events-none text-[10px]">/</li>
                <li>
                  {isLast ? (
                    <span className="text-slate-600 font-medium cursor-default" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link 
                      href={crumb.href} 
                      className="hover:text-sky-600 font-semibold transition-colors duration-150"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}