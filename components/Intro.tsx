import React from 'react';

export default function Intro() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Colonne de gauche : Textes */}
        <div className="space-y-6">
          <div className="inline-block bg-om-light/10 border border-om-light/20 text-om-light font-black text-xs uppercase tracking-widest px-3 py-1">
            Artisan Couvreur Local
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            L'entreprise <span className="text-om-light">Toiture Marseille</span>
          </h2>
          
          <p className="text-slate-600 text-base leading-relaxed text-justify">
            Bienvenue chez Toiture Marseille, votre spécialiste de la couverture dans toute la région marseillaise. 
            Depuis plusieurs années, notre entreprise met son savoir-faire au service des particuliers et des professionnels 
            pour tous travaux de toiture : rénovation, réparation, entretien, isolation et pose de couvertures neuves.
          </p>
          
          <p className="text-slate-600 text-base leading-relaxed text-justify">
            Implantés à Marseille, nous intervenons rapidement dans l’ensemble des environs pour vous offrir des prestations 
            de qualité, réalisées par des couvreurs expérimentés et passionnés par leur métier. Notre priorité : assurer 
            la solidité, l’étanchéité et la longévité de votre toit, tout en vous garantissant un accompagnement personnalisé 
            du devis jusqu’à la fin du chantier.
          </p>
          
          <div className="pt-4 border-t border-slate-200/60 flex items-center gap-4 text-slate-900 font-bold text-sm uppercase tracking-wider">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Intervention rapide sur Marseille et 13
          </div>
        </div>

        {/* Colonne de droite : Carte */}
        <div className="w-full h-[350px] sm:h-[450px] border border-slate-200/60 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185896.0328960789!2d5.215832177960165!3d43.28022070191013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille!5e0!3m2!1sfr!2sfr!4v1756458411986!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Toiture Marseille"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

      </div>
    </section>
  );
}