'use client';

import Link from "next/link";
import Image from "next/image";

// 1. Définition de l'interface pour typer proprement les données de la carte
interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Card({ title, description, image, link }: CardProps) {
  return (
    // L'utilisation de la classe 'group' sur le Link parent permet de piloter les animations des éléments enfants au survol
    <Link 
      href={link} 
      className="group flex flex-col bg-white border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 h-full"
    >
      {/* Zone image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Zone de texte de la carte */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Titre avec couleur OM au survol */}
          <h3 className="text-xl font-black uppercase text-slate-900 group-hover:text-om-light transition-colors duration-200">
            {title}
          </h3>
          {/* Texte de description */}
          <p className="mt-3 text-slate-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bouton d'action "En savoir plus" en bleu OM */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-om-light font-bold text-xs uppercase tracking-widest group-hover:text-om-dark">
          Découvrir 
          <svg 
            className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}