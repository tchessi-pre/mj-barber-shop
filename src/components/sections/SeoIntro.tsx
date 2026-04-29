import { Link } from "react-router-dom";

const SeoIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Marseille 1er • 13001
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Barbier afro à <span className="text-gold-gradient">Marseille</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Chez MJ Barber Chez Junior, on est spécialisé dans la coiffure afro homme et femme à Marseille (13001, secteur
              Noailles). Dégradé américain, hair design, tresses et dreadlocks : chaque coupe est réalisée avec précision,
              propreté et style, en respectant la texture naturelle des cheveux.
            </p>
            <p>
              Sans rendez-vous, tu viens quand tu veux : on t’accueille dans une ambiance conviviale, avec un service rapide et un
              résultat net. Notre objectif est simple : te faire ressortir du salon avec une coupe qui te met en valeur et qui
              tient dans le temps.
            </p>
            <p>
              Tu veux en savoir plus sur nos prestations et nos conseils ? Découvre la page dédiée{" "}
              <Link to="/barbier-afro-marseille" className="text-primary font-semibold hover:opacity-80 transition-opacity">
                barbier afro Marseille
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoIntro;
