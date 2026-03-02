import { Star } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const reviews = [
  { name: "Amadou K.", text: "Le meilleur barbier afro de Marseille ! Dégradé toujours impeccable, Junior est un vrai pro. Je ne vais nulle part ailleurs.", rating: 5 },
  { name: "Ibrahim D.", text: "Junior est un artiste. Hair design incroyable, je recommande à 100%. Tout le monde me complimente à chaque fois.", rating: 5 },
  { name: "Fatou M.", text: "Tresses magnifiques, travail soigné et ambiance au top. Les filles du quartier ne jurent que par ce salon.", rating: 5 },
  { name: "Moussa T.", text: "J'amène mon fils ici depuis 3 ans. Toujours patient avec les enfants et le résultat est top. Merci Junior !", rating: 5 },
  { name: "Kévin L.", text: "Dégradé américain parfait à chaque visite. Le rapport qualité-prix est imbattable à Marseille.", rating: 4 },
  { name: "Ousmane B.", text: "Mes dreadlocks n'ont jamais été aussi propres et bien entretenues. Un vrai spécialiste.", rating: 5 },
  { name: "Rachid M.", text: "Coupe mariage impeccable. Tous mes invités m'ont complimenté. Merci pour ce moment !", rating: 5 },
  { name: "David N.", text: "Sans rendez-vous et pourtant un service premium. L'attente vaut largement le coup.", rating: 4 },
  { name: "Thierry A.", text: "Ambiance familiale, musique au top et surtout un résultat toujours au-dessus de mes attentes.", rating: 5 },
];

const Avis = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Témoignages</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Avis <span className="text-gold-gradient">Clients</span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-primary text-primary" : "fill-primary/50 text-primary/50"}`} />
                  ))}
                </div>
                <span className="text-lg font-semibold">4,4/5</span>
              </div>
              <p className="text-muted-foreground">124 avis sur Google</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((r, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-card border border-border rounded-sm p-6 hover:border-primary/30 transition-colors h-full">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < r.rating ? "fill-primary text-primary" : "text-muted"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-secondary-foreground mb-4 italic leading-relaxed">"{r.text}"</p>
                  <p className="text-sm font-semibold text-primary">{r.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Avis;
