import Layout from "@/components/Layout";

const MentionsLegales = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Informations légales
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Mentions <span className="text-gold-gradient">légales</span>
              </h1>
            </div>

            <div className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-8">
              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">Éditeur du site</h2>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
                  <p className="text-secondary-foreground font-medium">M.J BARBER CHEZ JUNIOR</p>
                  <p>Forme juridique : SAS (société par actions simplifiée)</p>
                  <p>Capital social : 1 000,00 €</p>
                  <p>SIREN : 833 581 689</p>
                  <p>SIRET (siège) : 833 581 689 00019</p>
                  <p>TVA intracommunautaire : FR10833581689</p>
                  <p>RCS : 833 581 689 R.C.S. Marseille</p>
                  <p>Adresse : 17 Rue Jean-Pierre-Moustier, 13001 Marseille</p>
                  <p>Téléphone : 06 98 30 61 76</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">Activité</h2>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
                  <p>Activité principale déclarée : vente de cosmétiques, tresses afro.</p>
                  <p>Code APE / NAF : 47.75Z — Commerce de détail de parfumerie et de produits de beauté en magasin spécialisé.</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">Hébergement</h2>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
                  <p className="text-secondary-foreground font-medium">Vercel Inc.</p>
                  <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-80 transition-opacity"
                  >
                    https://vercel.com
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">Propriété intellectuelle</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  L’ensemble des contenus présents sur ce site (textes, visuels, logo, éléments graphiques) est protégé par le droit
                  d’auteur. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est
                  interdite.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-xl font-semibold">Données personnelles</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pour toute demande relative à vos données personnelles, vous pouvez contacter le salon au 06 98 30 61 76.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
