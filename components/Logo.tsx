import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 65, height = 65 }: LogoProps) {
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
        
        {/* Deuxième épaisseur du toit (Bleu Foncé Ardoise) */}
        <path d="M 160 285 L 250 200 L 340 285" fill="none" stroke="#0f172a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Cheminée stylisée */}
        <path d="M 310 180 L 310 220" fill="none" stroke="#38bdf8" strokeWidth="16" strokeLinecap="round"/>
        
        {/* Symbole de protection / Vague d'étanchéité */}
        <path d="M 200 245 Q 250 220 300 245" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round"/>
      </g>

      {/* TEXTE REMONTÉ (Anciennement y=340, 390, 430) */}
      
      {/* "TOITURE" -> Rapproché du bas du toit */}
      <text x="250" y="315" fontFamily="Segoe UI, Helvetica, Arial, sans-serif" fontWeight="800" fontSize="36" fill="#0f172a" textAnchor="middle" letterSpacing="2">
        TOITURE
      </text>
      
      {/* "MARSEILLE" -> Suit le mouvement juste en dessous */}
      <text x="250" y="365" fontFamily="Segoe UI, Helvetica, Arial, sans-serif" fontWeight="900" fontSize="42" fill="#38bdf8" textAnchor="middle" letterSpacing="4">
        MARSEILLE
      </text>
      
     
    </svg>
  );
}