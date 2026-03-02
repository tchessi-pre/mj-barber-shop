import { Award, Zap, Users, Scissors } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const whyUs = [
  { icon: Award, title: "N°1 Afro à Marseille", desc: "Référence incontournable du style afro" },
  { icon: Zap, title: "Sans rendez-vous", desc: "Venez quand vous voulez, on s'occupe de vous" },
  { icon: Users, title: "Spécialiste Enfants", desc: "Un accueil chaleureux pour les plus jeunes" },
  { icon: Scissors, title: "Expérience & Précision", desc: "Des années de savoir-faire au service de votre style" },
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Pourquoi <span className="text-gold-gradient">nous choisir</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            L'excellence afro au cœur de Marseille
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-sm p-6 text-center hover:border-primary/50 transition-colors h-full">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
