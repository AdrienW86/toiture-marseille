import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Toiture Marseille',
  description: 'Consultez les Conditions Générales de Vente (CGV) de l’entreprise Toiture Marseille pour les prestations de couverture, zinguerie et rénovation.',
};

export default function CGV() {
  return (
    <main className="min-h-screen bg-slate-50 pt-[12vh] pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="mb-12 border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Conditions générales de vente (CGV)
          </h1>
          <div className="w-16 h-1 bg-sky-400 rounded-full"></div>
        </div>

        {/* CONTENU DES CLAUSES */}
        <div className="space-y-8 text-justify">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Produits et services
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Toiture Marseille propose des prestations de couverture, rénovation, réparation et entretien de toitures, ainsi que des travaux de zinguerie et d’isolation thermique.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Tarifs et paiement
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Les prix sont indiqués en euros et hors taxes. Le paiement s’effectue selon les modalités précisées au moment de la commande (virement, carte bancaire ou espèces).
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Délais d'intervention
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Les délais d’intervention sont communiqués lors de la prise de contact et peuvent varier selon les disponibilités, la complexité des travaux et la zone géographique.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Annulation et remboursement
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Toute demande d’annulation doit être signalée par email ou téléphone. Les prestations déjà réalisées ne sont pas remboursables.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Garanties et responsabilités
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Toiture Marseille s’engage à fournir des prestations conformes aux normes en vigueur. L’entreprise ne pourra être tenue responsable en cas de dommages résultant d’une mauvaise utilisation des travaux ou d’un entretien insuffisant par le client.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}