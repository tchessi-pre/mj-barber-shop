import Layout from "@/components/Layout";

const CGV = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Conditions
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Conditions Générales de <span className="text-gold-gradient">Vente</span>
              </h1>
            </div>

            <div className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">1. Objet</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Les présentes conditions encadrent les prestations proposées par M.J BARBER CHEZ JUNIOR, 17 Rue Jean-Pierre-Moustier,
                  13001 Marseille.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">2. Prestations</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Le salon propose des prestations de coiffure/barbering et services associés. Les prestations sont réalisées selon les
                  besoins du client et la faisabilité technique.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">3. Prix</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Les prix sont affichés au salon et exprimés en euros. Le tarif facturé est celui applicable au jour de la prestation.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">4. Paiement</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Le règlement est dû à la fin de la prestation, selon les moyens de paiement acceptés au salon.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">5. Fonctionnement sans rendez-vous</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Le salon fonctionne sans rendez-vous. Le temps d’attente peut varier selon l’affluence et l’ordre d’arrivée.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">6. Réclamations</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Toute réclamation doit être adressée au salon dans les meilleurs délais afin de permettre un traitement rapide et adapté.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">7. Droit applicable</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CGV;
