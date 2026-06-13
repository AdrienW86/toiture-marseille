'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

export default function Gallery() {
  const images: GalleryImage[] = [
    { src: '/image1.png', alt: 'Chantier de couverture de toit à Marseille' },
    { src: '/image2.png', alt: 'Rénovation complète de toiture en tuiles' },
    { src: '/image3.png', alt: 'Nettoyage et démoussage de toit' },
    { src: '/image4.png', alt: 'Isolation thermique des combles et sous-toiture' },
    { src: '/image5.png', alt: 'Pose de fenêtres de toit Velux' },
    { src: '/nettoyage2.png', alt: 'Traitement hydrofuge de couverture' },
    { src: '/zinguerie1.png', alt: 'Pose de gouttière en zinc neuve' },
    { src: '/zinguerie3.png', alt: 'Travaux d étanchéité et zinguerie de cheminée' },
    { src: '/couverture4.png', alt: 'Réparation de fuite sur toit en ardoise' },
    { src: '/couverture1.png', alt: 'Artisan couvreur en plein travail de charpente' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
          Nos <span className="text-om-light">Réalisations</span>
        </h2>
        <div className="w-16 h-1 bg-om-light mx-auto mt-6"></div>
      </div>

      {/* GRILLE DE LA GALERIE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            onClick={() => openLightbox(image.src)}
            className="group relative h-64 w-full overflow-hidden border border-slate-200/60 shadow-sm cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Overlay bleu OM */}
            <div className="absolute inset-0 bg-om-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white text-om-light p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX INTERACTIVE */}
      {isOpen && currentImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white hover:text-om-light transition-colors duration-150 p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="relative max-w-5xl w-full h-[70vh] sm:h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={currentImage} 
              alt="Réalisation Toiture Marseille" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}