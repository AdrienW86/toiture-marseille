'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSended, setIsSended] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
 
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    if (!isLoading) {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        setIsLoading(false);

        if (!response.ok) {
          setErrorMessage("Le formulaire n'a pas pu être envoyé. Veuillez réessayer ou nous contacter par téléphone.");
        } else {
          reset();
          setIsSended(true);
        }
      } catch (error) {
        setIsLoading(false);
        setErrorMessage("Une erreur réseau est survenue. Vérifiez votre connexion.");
      }
    }
  };

  return (
    <section className="max-w-xl mx-auto bg-white p-6 sm:p-10 border border-slate-200/60 shadow-sm my-12">
      
      {/* MESSAGE DE CONFIRMATION */}
      {isSended && (
        <div className="border border-emerald-100 bg-emerald-50/50 text-slate-800 p-6 text-center space-y-3 animate-fade-in">
          <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <p className="font-bold text-base sm:text-lg uppercase tracking-wide text-slate-900">
            Demande enregistrée
          </p>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Notre équipe d'artisans couvreurs étudie votre projet et vous recontacte sous 48 heures maximum.
          </p>
        </div>
      )}

      {/* FORMULAIRE */}
      {!isSended && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">           
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
              Demande de devis gratuit
            </h3>    
            <p className="text-xs font-bold uppercase tracking-widest text-om-light">
              Réponse rapide sous 48h
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 text-xs font-semibold text-red-600 bg-red-50 border border-red-100">
              {errorMessage}
            </div>
          )}

          <div className="space-y-4">
            {/* Champ Nom */}
            <div className="space-y-1">
              <input 
                className={`w-full px-4 py-3 rounded-none bg-slate-50 border text-slate-900 text-sm transition-all duration-150 outline-none focus:bg-white focus:ring-2 ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-om-light focus:ring-om-light/20'}`}
                placeholder="Nom et Prénom" 
                {...register('name', { required: true })} 
              />
              {errors.name && <span className="text-xs font-bold text-red-500 block pl-1">Veuillez renseigner votre nom.</span>}          
            </div>

            {/* Champ Email */}
            <div className="space-y-1">
              <input 
                type="email"
                className={`w-full px-4 py-3 rounded-none bg-slate-50 border text-slate-900 text-sm transition-all duration-150 outline-none focus:bg-white focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-om-light focus:ring-om-light/20'}`}
                placeholder="Adresse email de contact" 
                {...register('email', { required: true })} 
              />
              {errors.email && <span className="text-xs font-bold text-red-500 block pl-1">Une adresse email valide est requise.</span>}          
            </div>

            {/* Champ Sujet */}
            <div className="space-y-1">
              <input 
                className={`w-full px-4 py-3 rounded-none bg-slate-50 border text-slate-900 text-sm transition-all duration-150 outline-none focus:bg-white focus:ring-2 ${errors.subject ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-om-light focus:ring-om-light/20'}`}
                placeholder="Nature des travaux (ex: Rénovation toiture)" 
                {...register('subject', { required: true })} 
              />
              {errors.subject && <span className="text-xs font-bold text-red-500 block pl-1">Veuillez préciser l'objet.</span>}           
            </div>

            {/* Champ Message */}
            <div className="space-y-1">
              <textarea 
                rows={4}
                className={`w-full px-4 py-3 rounded-none bg-slate-50 border text-slate-900 text-sm transition-all duration-150 outline-none focus:bg-white focus:ring-2 resize-none ${errors.message ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-om-light focus:ring-om-light/20'}`}
                placeholder="Décrivez votre projet (état actuel, fuites, etc...)"  
                {...register('message', { required: true })} 
              />
              {errors.message && <span className="text-xs font-bold text-red-500 block pl-1">Le message est requis.</span>}     
            </div>
          </div>

          {/* Bouton de soumission */}
          <div>
            <button 
              className={`w-full bg-om-light hover:bg-om-dark text-white font-black uppercase tracking-widest text-xs py-4 px-6 transition-all duration-150 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi...
                </>
              ) : "Envoyer ma demande"}
            </button>
          </div>     
        </form>
      )}
    </section>
  );
}