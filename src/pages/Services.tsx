import { Scissors, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    name: "Coupe Afro Homme",
    desc: "Mise en forme complète du cheveu afro avec finitions soignées. Notre expertise garantit une coupe qui respecte la texture naturelle de vos cheveux tout en sublimant votre style.",
  },
  {
    name: "Dégradé Américain",
    desc: "Fondu progressif ultra-précis réalisé avec des tondeuses professionnelles. Du skin fade au mid fade, chaque dégradé est une œuvre de précision.",
  },
  {
    name: "Dessins & Hair Design",
    desc: "Art capillaire sur mesure : lignes géométriques, motifs tribaux, logos, lettrage. Exprimez votre personnalité à travers des créations uniques gravées dans vos cheveux.",
  },
  {
    name: "Couleur",
    desc: "Coloration professionnelle adaptée aux cheveux afro. Des teintes naturelles aux couleurs audacieuses, sublimez votre coupe avec une couleur qui vous ressemble.",
  },
  {
    name: "Tresses avec ou sans mèches",
    desc: "Tresses collées, nattes, vanilles, cornrows — avec ou sans rajouts. Un travail minutieux pour des tresses qui tiennent et qui impressionnent.",
  },
  {
    name: "Dreadlocks",
    desc: "Création, entretien et reprise de dreadlocks. Technique professionnelle pour des locks propres, solides et bien formées dès le début.",
  },
  {
    name: "Coupe Enfant",
    desc: "Un moment spécial pour les plus jeunes ! Ambiance détendue, patience et résultat impeccable. Spécial rentrée scolaire avec des offres dédiées.",
  },
  {
    name: "Coupe Mariage Homme",
    desc: "Prestation premium pour le jour J. Dégradé impeccable, tracés nets, finitions parfaites. Soyez au top pour le plus beau jour de votre vie.",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Nos prestations</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Nos <span className="text-gold-gradient">Services</span>
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Chaque service est réalisé avec expertise et passion pour un résultat qui dépasse vos attentes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-card border border-border rounded-sm p-8 hover:border-primary/50 transition-colors group h-full">
                  <Scissors className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h2 className="font-display text-xl font-semibold mb-3">{s.name}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">Sans rendez-vous — Venez directement au salon</p>
              <a
                href="tel:0698306176"
                className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity shadow-gold"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
