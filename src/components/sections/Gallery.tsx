import ScrollReveal from "@/components/ScrollReveal";
import galleryFade from "@/assets/gallery-fade.jpg";
import galleryDesign from "@/assets/gallery-design.jpg";
import galleryDreads from "@/assets/gallery-dreads.jpg";
import galleryBraids from "@/assets/gallery-braids.jpg";
import galleryKids from "@/assets/gallery-kids.jpg";
import galleryColor from "@/assets/gallery-color.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import heroBarber from "@/assets/hero-barber.jpg";

const images = [
  { src: galleryFade, alt: "Dégradé américain", label: "Dégradé" },
  { src: galleryDesign, alt: "Hair design artistique", label: "Hair Design" },
  { src: galleryDreads, alt: "Dreadlocks", label: "Dreadlocks" },
  { src: galleryBraids, alt: "Tresses africaines", label: "Tresses" },
  { src: galleryKids, alt: "Coupe enfant", label: "Enfant" },
  { src: galleryColor, alt: "Coloration afro", label: "Couleur" },
  { src: galleryWedding, alt: "Coupe mariage homme", label: "Mariage" },
  { src: heroBarber, alt: "Barbier en action", label: "En action" },
];

const Galerie = () => {
  return (
    <section id="galerie" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
            <div className="text-center mb-20 relative">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                Notre Galerie
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Nos <span className="text-gold-gradient">Réalisations</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                 Chaque coupe est une œuvre d'art — découvrez notre savoir-faire.
              </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.label} delay={i * 0.08}>
              <div
                className={`group relative overflow-hidden rounded-sm ${i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
                  } aspect-square`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-display text-lg font-semibold tracking-wide">
                    {img.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galerie;
