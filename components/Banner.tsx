'use client';

import Image from 'next/image';

// 1. Définition de l'interface pour typer l'image source passée au composant
interface BannerProps {
  src: string;
}

export default function Banner({ src }: BannerProps) {
  return (
    // Le container principal avec sa hauteur et sa marge par rapport au Header fixe
    <div className="relative w-full h-[60vh] mt-[calc(15vh+10px)] overflow-hidden bg-slate-900">
      
      {/* L'image de fond gérée par Next.js */}
      <Image
        src={src} 
        alt="Toiture Marseille"
        fill
        className="object-cover opacity-40 z-0"
        priority
      />

      {/* Le contenu centré avec la nouvelle couleur OM pour le mot "Marseille" */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 select-none">
        
        {/* Le H1 principal avec le span couleur bleu ciel azur OM */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
          Toiture <span className="text-om-light">Marseille</span>
        </h1>
        
        {/* Le texte secondaire */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-200 font-medium max-w-xl drop-shadow-sm">
          Votre spécialiste en toiture à Marseille
        </p> 

      </div>

      {/* Le macaron Garantie Décennale */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-slate-200/50 hidden sm:block">
        <Image
          src="/garantie2.png" 
          alt="garantie decennale"
          width={110}
          height={110}  
          className="object-contain"
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />  
      </div>
    </div>
  );
}