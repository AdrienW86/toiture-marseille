import type { Metadata } from 'next';

// 1. Métadonnées SEO en TypeScript
export const metadata: Metadata = {
  title: 'Mentions légales | Toiture Marseille',
  description: 'Mentions légales du site Toiture Marseille - Informations sur l’éditeur, l’hébergeur et les conditions d’utilisation.',
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-slate-50 pt-[12vh] pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="mb-12 border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Mentions légales
          </h1>
          <div className="w-16 h-1 bg-sky-400 rounded-full"></div>
        </div>

        {/* CONTENU DES MENTIONS LÉGALES */}
        <div className="space-y-8 text-justify">
          
          {/* Section : Éditeur du site */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Éditeur du site
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              <strong className="text-slate-800">Nom :</strong> HOSPICE MICHEL <br/>
              <strong className="text-slate-800">Forme juridique :</strong> Auto-entrepreneur<br/>
              <strong className="text-slate-800">Dénomination commerciale :</strong> Toiture Marseille<br/>
              <strong className="text-slate-800">Adresse :</strong> 88 chemin des charettes, 66000 Perpignan, France<br/>
              <strong className="text-slate-800">Téléphone :</strong> +33 7 57 51 64 14<br/>
              <strong className="text-slate-800">Email :</strong>{' '}
              <a href="mailto:toiture.marseille13@gmail.com" className="text-sky-600 hover:text-sky-700 font-medium underline underline-offset-4 transition-colors">
                toiture.marseille13@gmail.com
              </a><br/>
              <strong className="text-slate-800">Directeur de publication :</strong> Michel Hospice<br/>
              <strong className="text-slate-800">SIREN :</strong> 483160420<br/>
              <strong className="text-slate-800">SIRET :</strong> 48316042000012<br/>
              <strong className="text-slate-800">TVA Intracom :</strong> FR87483160420
            </p>
          </div>

          {/* Section : Hébergeur */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Hébergeur
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              <strong className="text-slate-800">Nom :</strong> Vercel Inc.<br/>
              <strong className="text-slate-800">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br/>
              <strong className="text-slate-800">Site web :</strong>{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-medium underline underline-offset-4 transition-colors">
                https://vercel.com
              </a>
            </p>
          </div>

          {/* Section : Conditions d'utilisation */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Conditions d'utilisation
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Le site Toiture Marseille est accessible à l'URL :{' '}
              <a href="https://toiture-marseille.fr" className="text-slate-700 font-medium hover:text-sky-600 transition-colors">
                https://toiture-marseille.fr
              </a>.<br/>
              Son utilisation est régie par les présentes conditions. En utilisant le site, vous acceptez ces conditions. Elles peuvent être modifiées à tout moment sans préavis.
            </p>
          </div>

          {/* Section : Limitation de responsabilité */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Limitation de responsabilité
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Les informations présentes sur ce site sont fournies de bonne foi, mais peuvent contenir des inexactitudes ou omissions. L'entreprise Toiture Marseille ne saurait être tenue responsable de toute utilisation ou interprétation erronée.
            </p>
          </div>

          {/* Section : Litiges */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Litiges
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Les présentes conditions sont régies par la loi française et tout litige relève des tribunaux français. La langue de référence pour tout contentieux est le français.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}