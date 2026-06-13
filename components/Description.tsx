import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Description() {
  const services = [
    {
      title: "Rénovation de toiture",
      description: "Redonnez une seconde vie à votre toit grâce à nos experts en rénovation.",
      image: "/image2.png",
      link: "/couverture",
    },
    {
      title: "Isolation thermique",
      description: "Améliorez le confort de votre habitation avec une isolation performante.",
      image: "/image4.png",
      link: "/isolation",
    },
    {
      title: "Entretien & nettoyage",
      description: "Préservez l’étanchéité et la longévité de votre toit avec un entretien régulier.",
      image: "/image3.png",
      link: "/nettoyage",
    },
    {
      title: "Travaux de zinguerie",
      description: "Assurez l’évacuation optimale des eaux pluviales et la protection de votre toiture.",
      image: "/image5.png", 
      link: "/zinguerie",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre de la section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            Nos Prestations & <span className="text-om-light">Services</span>
          </h2>
          <div className="w-16 h-1 bg-om-light mx-auto mt-6"></div>
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
            Des interventions soignées et garanties pour assurer la protection et la durabilité de votre habitat à Marseille.
          </p>
        </div>

        {/* Grille responsive des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={index}
              className="group flex flex-col bg-white border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Contenu */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black uppercase text-slate-900 group-hover:text-om-light transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Lien d'action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-om-light font-bold text-xs uppercase tracking-widest group-hover:text-om-dark">
                  Découvrir
                  <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}