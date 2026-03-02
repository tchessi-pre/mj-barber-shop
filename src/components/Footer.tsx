import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold-gradient mb-4">MJ Barber</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chez Junior — Votre barbershop spécialisé afro à Marseille. Expertise, précision et style depuis des années.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Liens rapides</h4>
            <div className="flex flex-col gap-2">
              {["Accueil", "Services", "Galerie", "Avis", "Contact"].map((label) => (
                <Link
                  key={label}
                  to={label === "Accueil" ? "/" : `/${label.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:0698306176" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 06 98 30 61 76
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>17 Rue Jean-Pierre-Moustier,<br />13001 Marseille</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Ouvert tous les jours – Ferme à 20h00
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MJ Barber Chez Junior. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
