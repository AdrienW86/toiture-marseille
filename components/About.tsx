import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* EN-TÊTE DE LA PAGE */}
      <section className="bg-slate-900 text-white py-20 md:py-24 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase">
            Qui sommes-nous ?
          </h1>
          <div className="w-20 h-1 bg-om-light mx-auto rounded-full"></div>
          <p className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto font-semibold leading-relaxed">
            Toiture Marseille : des artisans couvreurs de confiance dédiés à la protection et à la pérennité de votre habitat.
          </p>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Basée à Marseille, notre entreprise intervient dans toutes les Bouches-du-Rhône. Nous mettons notre expertise locale au service des particuliers et des professionnels exigeants.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="space-y-8 md:space-y-12">
          
          {/* Bloc 1 : Proximité & Réactivité */}
          <div className="bg-white p-6 sm:p-8 border border-slate-200/60 flex gap-6 items-start transition-all duration-200 hover:border-slate-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 text-om-light font-bold shrink-0 text-xl border border-slate-100">
              01
            </div>
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Proximité et réactivité sur Marseille et ses alentours
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                Parce qu'un problème de couverture nécessite une intervention rapide, notre équipe se déplace efficacement pour diagnostiquer vos fuites et dégâts. Chez Toiture Marseille, chaque client bénéficie d'un interlocuteur unique et de conseils personnalisés pour assurer l'étanchéité parfaite de son toit face aux spécificités du climat méditerranéen.
              </p>
            </div>
          </div>

          {/* Bloc 2 : Compétences Techniques */}
          <div className="bg-white p-6 sm:p-8 border border-slate-200/60 flex gap-6 items-start transition-all duration-200 hover:border-slate-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 text-om-light font-bold shrink-0 text-xl border border-slate-100">
              02
            </div>
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Un savoir-faire certifié pour tous types de couvertures
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                Nos artisans couvreurs-zingueurs maîtrisent les techniques traditionnelles et modernes. Qu’il s’agisse d'une réfection complète en tuiles canal, de travaux de zinguerie sur mesure pour vos gouttières, d'isolation thermique des combles ou d’un nettoyage par démoussage, nous sélectionnons des matériaux de premier choix pour garantir une longévité maximale.
              </p>
            </div>
          </div>

          {/* Bloc 3 : Sécurité & Garantie */}
          <div className="bg-white p-6 sm:p-8 border border-slate-200/60 flex gap-6 items-start transition-all duration-200 hover:border-slate-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 text-om-light font-bold shrink-0 text-xl border border-slate-100">
              03
            </div>
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Travaux sous Garantie Décennale et transparence tarifaire
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                La confiance se bâtit sur des preuves matérielles. L’ensemble de nos chantiers de rénovation de toiture est couvert par une **assurance garantie décennale**. Avant chaque intervention, nous réalisons une étude technique minutieuse suivie d'un devis transparent, détaillé et entièrement gratuit, sans aucune surprise à la clé.
              </p>
            </div>
          </div>

        </div>

        {/* CALL TO ACTION DYNAMIQUE ET COMMERCIAL */}
        <div className="mt-16 md:mt-20 text-center bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          {/* Ligne esthétique de rappel OM sur le côté */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-om-light"></div>
          
          <div className="relative space-y-6 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-black tracking-wide uppercase text-om-light">
              Un projet de toiture ou une urgence fuite ?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ne laissez pas une petite infiltration causer des dommages importants à votre charpente ou vos plafonds. Faites analyser votre toit par un professionnel local.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-om-light hover:bg-om-dark text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 transition-all duration-150 shadow-lg shadow-om-light/10"
              >
                Demander mon devis gratuit
              </Link>
              <a 
                href="tel:+33608008683" 
                className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 transition-all duration-150"
              >
                Appeler l'artisan
              </a>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}