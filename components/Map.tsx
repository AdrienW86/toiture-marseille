'use client';

import React from 'react';

interface CompanyAddress {
  name: string;
  phone: string;
  fullAddress: string;
}

export default function GoogleMap() {
  const address: CompanyAddress = {
    name: "Toiture Marseille",
    phone: "06 08 00 86 83",
    fullAddress: "Marseille et l'ensemble des Bouches-du-Rhône (13)",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* CONTENEUR PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6 sm:p-8 border border-slate-200/60 shadow-sm overflow-hidden">
        
        {/* BLOC INFORMATIONS */}
        <div className="md:col-span-1 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
              {address.name}
            </h2>
            <div className="w-16 h-1 bg-sky-400 rounded-full"></div>
          </div>
          
          <div className="space-y-5">
            {/* Zone d'intervention avec Icône Géolocalisation */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-slate-50 text-sky-500 border border-slate-100 shrink-0 select-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Zone d'intervention</h3>
                <p className="text-slate-800 text-sm sm:text-base font-medium">{address.fullAddress}</p>
              </div>
            </div>

            {/* Téléphone avec Icône Appel */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-slate-50 text-sky-500 border border-slate-100 shrink-0 select-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.145-.44.02-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Permanence Téléphonique</h3>
                <a 
                  href={`tel:${address.phone.replace(/\s/g, '')}`} 
                  className="text-sky-500 hover:text-sky-600 font-bold text-sm sm:text-base transition-colors duration-150 inline-block underline underline-offset-4"
                >
                  {address.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <p className="text-xs text-slate-500 leading-relaxed">
              * Nos déplacements, expertises de toiture et devis sont entièrement gratuits dans un rayon de 50km autour de Marseille.
            </p>
          </div>
        </div>

        {/* BLOC CARTE GOOGLE MAPS */}
        <div className="md:col-span-2 w-full h-[300px] sm:h-[400px] border border-slate-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46915.49122963929!2d5.215832177960165!3d43.28022070191013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille!5e0!3m2!1sfr!2sfr!4v1756458411986!5m2!1sfr!2sfr"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Zone d'intervention géolocalisée de ${address.name}`}
          />
        </div>

      </div>
    </div>
  );
}