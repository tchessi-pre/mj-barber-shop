import { MapPin, Star, Scissors } from "lucide-react";
import heroImage from "@/assets/hero-barber2.png";
import avatarImage from "@/assets/avatar.webp";
import AvatarBadge from "@/components/AvatarBadge";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      <img
        src={heroImage}
        alt="Barbier en action chez MJ Barber"
        width={1920}
        height={1088}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto animate-fade-in text-center">

        {/* Avatar & Badge Group */}
        <div className="relative mb-8">
          {/* Barber Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -45 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -left-12 md:-left-20 top-1/2 -translate-y-1/2 text-white/80 z-10"
          >
            <Scissors className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 45 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -right-12 md:-right-20 top-1/2 -translate-y-1/2 text-white/80 z-10"
          >
            <Scissors className="w-8 h-8 md:w-12 md:h-12 transform scale-x-[-1]" />
          </motion.div>

          <AvatarBadge
            imageSrc={avatarImage}
            altText="Junior Barber Avatar"
            badgeText="Expert Barbier"
            className=""
          />
        </div>

        {/* Typography */}
        <div className="space-y-4 mb-8">
          {/* <h2 className="text-white/80 font-body text-sm md:text-base tracking-[0.4em] uppercase font-light">
            Marseille 1er Arrondissement
          </h2> */}
          <h1 className="flex flex-col items-center justify-center">
            <span className="text-white font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter drop-shadow-2xl leading-none">
              MJ BARBER
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary font-script text-4xl md:text-5xl lg:text-6xl -mt-2 md:-mt-4 drop-shadow-lg opacity-90 transform -rotate-2">
              Chez Junior
            </span>
          </h1>
        </div>

        <p className="text-zinc-300 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-medium">
          Lundi - Vendredi : 9h - 20h <br />
          Samedi : 8h - 21h  <br /> Dimanche : 10h - 20h
          <br />
          <span className="inline-block mt-2 px-4 py-1.5 bg-gold-light text-black rounded-md text-base font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)] transform hover:scale-105 transition-transform duration-300">Sans rendez-vous</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=17+Rue+Jean-Pierre-Moustier+13001+Marseille"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-black/40 backdrop-blur-md border border-white/20 text-white min-w-[240px] px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            Voir l'itinéraire
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-4 py-2 px-4 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/5 flex items-center gap-4 animate-fade-in delay-200">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-primary text-primary" : "fill-primary/50 text-primary/50"}`} />
            ))}
          </div>
          <div className="h-4 w-px bg-white/20" />
          <span className="text-zinc-300 text-sm font-medium"><strong className="text-white">4.4/5</strong> sur Google (124 avis)</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
