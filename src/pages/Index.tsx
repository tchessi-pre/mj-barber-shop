import { Phone, MapPin, Star, Scissors, Clock, Users, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-barber.jpg";
import galleryFade from "@/assets/gallery-fade.jpg";
import galleryDesign from "@/assets/gallery-design.jpg";
import galleryDreads from "@/assets/gallery-dreads.jpg";

const services = [
  { name: "Coupe Afro Homme", desc: "Taille et mise en forme experte" },
  { name: "Dégradé Américain", desc: "Fondu précis et net" },
  { name: "Hair Design", desc: "Dessins artistiques sur mesure" },
  { name: "Tresses", desc: "Avec ou sans mèches" },
  { name: "Dreadlocks", desc: "Création et entretien" },
  { name: "Coupe Enfant", desc: "Spécial rentrée scolaire" },
];

const reviews = [
  { name: "Amadou K.", text: "Le meilleur barbier afro de Marseille ! Dégradé toujours impeccable.", rating: 5 },
  { name: "Ibrahim D.", text: "Junior est un artiste. Hair design incroyable, je recommande à 100%.", rating: 5 },
  { name: "Fatou M.", text: "Tresses magnifiques, travail soigné et ambiance au top.", rating: 5 },
];

const whyUs = [
  { icon: Award, title: "N°1 Afro à Marseille", desc: "Référence incontournable du style afro" },
  { icon: Zap, title: "Sans rendez-vous", desc: "Venez quand vous voulez, on s'occupe de vous" },
  { icon: Users, title: "Spécialiste Enfants", desc: "Un accueil chaleureux pour les plus jeunes" },
  { icon: Scissors, title: "Expérience & Précision", desc: "Des années de savoir-faire au service de votre style" },
];

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>MJ Barber Chez Junior — Salon Coiffure Afro Marseille</title>
      <meta name="description" content="MJ Barber Chez Junior, barbershop spécialisé afro à Marseille. Dégradé, tresses, dreadlocks, hair design. Sans rendez-vous. Note Google 4.4/5." />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Barbier en action chez MJ Barber" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">Barbershop Premium à Marseille</p>
          <h1 className="text-white font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            MJ Barber<br />
            <span className="text-gold-gradient">Chez Junior</span>
          </h1>
          <p className="text-white text-base md:text-lg mb-8 max-w-xl mx-auto">
            Spécialiste coiffure afro homme — Dégradé, tresses, dreadlocks, hair design. Sans rendez-vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0698306176"
              className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity shadow-gold"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=17+Rue+Jean-Pierre-Moustier+13001+Marseille"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Voir l'itinéraire
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-primary text-primary" : "fill-primary/50 text-primary/50"}`} />
              ))}
            </div>
            <span className="text-white">4,4/5 — 124 avis Google</span>
          </div>
        </div>
      </section>

      {/* Why Us */}
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

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Nos <span className="text-gold-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
              Des prestations premium pour tous les styles
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-sm p-6 hover:border-primary/50 transition-colors group h-full">
                  <Scissors className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-semibold mb-1">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Tous nos services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Notre <span className="text-gold-gradient">Galerie</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[galleryFade, galleryDesign, galleryDreads].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <div className="overflow-hidden rounded-sm aspect-square">
                  <img src={img} alt="Réalisation MJ Barber" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/galerie"
                className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Voir toute la galerie
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Avis <span className="text-gold-gradient">Clients</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.12}>
                <div className="bg-card border border-border rounded-sm p-6 h-full">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-secondary-foreground mb-4 italic">"{r.text}"</p>
                  <p className="text-sm font-semibold text-primary">{r.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/avis"
                className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Tous les avis
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-gold-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt pour un nouveau style ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Pas besoin de rendez-vous. Passez nous voir au 17 Rue Jean-Pierre-Moustier, Marseille.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0698306176"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                06 98 30 61 76
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=17+Rue+Jean-Pierre-Moustier+13001+Marseille"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-wider uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Voir l'itinéraire
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
