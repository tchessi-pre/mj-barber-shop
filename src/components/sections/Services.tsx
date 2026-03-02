import { Scissors, Phone, Palette, PenTool, Zap, Layers, Link as LinkIcon, Smile, Crown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Coupe Afro Homme",
    desc: "Mise en forme complète du cheveu afro avec finitions soignées. Notre expertise garantit une coupe qui respecte la texture naturelle de vos cheveux tout en sublimant votre style.",
    icon: Scissors,
  },
  {
    name: "Dégradé Américain",
    desc: "Fondu progressif ultra-précis réalisé avec des tondeuses professionnelles. Du skin fade au mid fade, chaque dégradé est une œuvre de précision.",
    icon: Zap,
  },
  {
    name: "Dessins & Hair Design",
    desc: "Art capillaire sur mesure : lignes géométriques, motifs tribaux, logos, lettrage. Exprimez votre personnalité à travers des créations uniques gravées dans vos cheveux.",
    icon: PenTool,
  },
  {
    name: "Couleur",
    desc: "Coloration professionnelle adaptée aux cheveux afro. Des teintes naturelles aux couleurs audacieuses, sublimez votre coupe avec une couleur qui vous ressemble.",
    icon: Palette,
  },
  {
    name: "Tresses",
    desc: "Tresses collées, nattes, vanilles, cornrows — avec ou sans rajouts. Un travail minutieux pour des tresses qui tiennent et qui impressionnent.",
    icon: Layers,
  },
  {
    name: "Dreadlocks",
    desc: "Création, entretien et reprise de dreadlocks. Technique professionnelle pour des locks propres, solides et bien formées dès le début.",
    icon: LinkIcon,
  },
  {
    name: "Coupe Enfant",
    desc: "Un moment spécial pour les plus jeunes ! Ambiance détendue, patience et résultat impeccable. Spécial rentrée scolaire avec des offres dédiées.",
    icon: Smile,
  },
  {
    name: "Coupe Mariage Homme",
    desc: "Prestation premium pour le jour J. Dégradé impeccable, tracés nets, finitions parfaites. Soyez au top pour le plus beau jour de votre vie.",
    icon: Crown,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-gradient opacity-5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-20 relative">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              Nos prestations
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              L'Excellence <span className="text-gold-light relative inline-block">
                Capillaire
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services, conçue pour sublimer votre style avec précision et créativité.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.05} direction="up">
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-md hover:bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-background to-muted border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-gold-dark transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-display text-2xl group-hover:text-primary transition-colors duration-300">{s.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground/90 group-hover:text-muted-foreground transition-colors duration-300">
                    {s.desc}
                  </CardDescription>
                </CardContent>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="relative mt-24 p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent overflow-hidden shadow-2xl max-w-4xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

            <div className="relative rounded-[23px] bg-gold-gradient backdrop-blur-xl p-8 md:p-14 overflow-hidden border border-white/20">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.1] mix-blend-overlay" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 text-center">
                <h3 className="font-display text-3xl md:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">
                  Prêt à transformer <span className="text-white relative inline-block drop-shadow-md">
                    votre look ?
                    <svg className="absolute w-full h-2 -bottom-1 left-0 text-white opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </h3>
                <p className="text-zinc-800 mb-10 text-lg max-w-xl mx-auto leading-relaxed font-medium">
                  <span className="text-zinc-900 font-bold bg-white/20 px-2 py-0.5 rounded border border-white/20">Sans rendez-vous</span> — Venez directement au salon pour une expérience unique et un résultat à la hauteur de vos attentes.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-105 transition-all shadow-xl rounded-full font-bold tracking-wide text-lg h-16 px-10 relative overflow-hidden group/btn border border-zinc-700"
                >
                  <a href="tel:0698306176" className="gap-3 flex items-center">
                    <span className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />
                    <Phone className="w-6 h-6 animate-bounce text-gold-light" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
