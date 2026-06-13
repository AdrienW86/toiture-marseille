import type { Metadata } from 'next';

// 1. Métadonnées SEO en TypeScript
export const metadata: Metadata = {
  title: 'Politique de confidentialité | Toiture Marseille',
  description: 'Politique de confidentialité du site Toiture Marseille - Protection de vos données personnelles et conformité RGPD.',
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-slate-50 pt-[12vh] pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="mb-12 border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Politique de confidentialité
          </h1>
          <div className="w-16 h-1 bg-sky-400 rounded-full"></div>
        </div>

        {/* CONTENU RGPD */}
        <div className="space-y-8 text-justify">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Collecte des données personnelles
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Nous collectons des informations personnelles uniquement lorsque vous utilisez notre formulaire de contact :
            </p>
            <ul className="list-disc list-inside pl-2 text-slate-600 space-y-1 text-sm sm:text-base">
              <li>Champs du formulaire : nom, prénom, e-mail, téléphone et détails de la demande.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Utilisation des données
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Les informations recueillies via le site sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside pl-2 text-slate-600 space-y-1 text-sm sm:text-base">
              <li>Traiter et répondre à vos demandes de devis ou d'interventions de couverture.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Durée de conservation
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Les données personnelles des utilisateurs sont conservées pendant une durée maximale de 2 ans à compter du dernier contact commercial ou de la fin des travaux.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Droits des utilisateurs
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données :
            </p>
            <ul className="list-none pl-0 text-slate-600 space-y-2 text-sm sm:text-base">
              <li>
                <strong className="text-slate-800">Par email :</strong>{' '}
                <a href="mailto:toiture.marseille13@gmail.com" className="text-sky-600 hover:text-sky-700 font-medium underline underline-offset-4 transition-colors">
                  toiture.marseille13@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-slate-800">Par courrier :</strong> 88 chemin des charettes, 66000 Perpignan, France
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Cookies
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Ce site n'utilise aucun cookie de tracking publicitaire ou analytique tiers. Seul votre confort de navigation est préservé. Pour en savoir plus sur la gestion des cookies sur vos navigateurs, vous pouvez consulter le site de la CNIL :{' '}
              <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-medium underline underline-offset-4 transition-colors">
                CNIL – Cookies
              </a>.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}