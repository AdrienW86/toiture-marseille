import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function LogoWhite({ className = '', width = 65, height = 65 }: LogoProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500" 
      width={width} 
      height={height} 
      className={className}
    >
      <g transform="translate(0, -20)">
        {/* Icône : Le Toit Moderne style OM (Bleu Ciel) */}
        <path d="M 130 260 L 250 150 L 370 260" fill="none" stroke="#38bdf8" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Deuxième épaisseur du toit (Inversé en Blanc Pur) */}
        <path d="M 160 285 L 250 200 L 340 285" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Cheminée stylisée */}
        <path d="M 310 180 L 310 220" fill="none" stroke="#38bdf8" strokeWidth="16" strokeLinecap="round"/>
        
        {/* Symbole de protection / Vague d'étanchéité (Inversé en Blanc) */}
        <path d="M 200 245 Q 250 220 300 245" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round"/>
      </g>

      {/* TEXTE REMONTÉ ET ADAPTÉ POUR FOND SOMBRE */}
      
      {/* "TOITURE" -> Blanc Pur */}
      <text x="250" y="315" fontFamily="Segoe UI, Helvetica, Arial, sans-serif" fontWeight="800" fontSize="36" fill="#ffffff" textAnchor="middle" letterSpacing="2">
        TOITURE
      </text>
      
      {/* "MARSEILLE" -> Bleu Ciel OM */}
      <text x="250" y="365" fontFamily="Segoe UI, Helvetica, Arial, sans-serif" fontWeight="900" fontSize="42" fill="#38bdf8" textAnchor="middle" letterSpacing="4">
        MARSEILLE
      </text>
      
      {/* Baseline -> Gris clair ultra lisible sur fond sombre */}
      <text x="250" y="405" fontFamily="Segoe UI, Helvetica, Arial, sans-serif" fontWeight="500" fontSize="14" fill="#94a3b8" textAnchor="middle" letterSpacing="6">
        ARTISAN COUVREUR
      </text>
    </svg>
  );
}