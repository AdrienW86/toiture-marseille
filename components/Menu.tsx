'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface MenuProps {
  title: string;
  description?: string;
  image?: string;
  ctaLink?: string;
  ctaText?: string;
}

export default function Menu({ title, description, image, ctaLink, ctaText }: MenuProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white border-b border-slate-200/60 flex flex-col items-center text-center">
        
        {/* TITRE PRINCIPAL */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase mb-6">
          {title}
        </h2>
        
        {/* Ligne décorative OM */}
        <div className="w-16 h-1 bg-om-light mb-8"></div>
        
        {/* DESCRIPTION */}
        {description && (
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-10 text-justify sm:text-center">
            {description}
          </p>
        )}
        
        {/* IMAGE */}
        {image && (
          <div className="relative w-full h-[250px] sm:h-[400px] border border-slate-200/60 shadow-sm mb-10 select-none">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
            />
          </div>
        )}
        
        {/* BOUTON D'APPEL À L'ACTION */}
        {ctaLink && ctaText && (
          <Link 
            href={ctaLink} 
            className="inline-flex items-center justify-center bg-om-light hover:bg-om-dark text-white font-black uppercase tracking-widest px-8 py-4 shadow-md transition-all duration-150 text-sm sm:text-base"
          >
            {ctaText}
          </Link>
        )}

    </section>
  )
}