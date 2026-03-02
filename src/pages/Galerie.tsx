import Layout from "@/components/Layout";
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
    <Layout>
      {/* Hero Header */}
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <img
          src={galleryDesign}
          alt="Galerie MJ Barber"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Nos réalisations</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
            <span className="text-gold-gradient">Galerie</span>
          </h1>
          <p className="text-white/70 max-w-lg mx-auto text-sm md:text-base">
            Chaque coupe est une œuvre d'art — découvrez notre savoir-faire.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
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
    </Layout>
  );
};

export default Galerie;
