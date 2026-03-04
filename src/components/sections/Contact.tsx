import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const hours = [
  { day: "Lundi", time: "09:00 – 20:00" },
  { day: "Mardi", time: "09:00 – 20:00" },
  { day: "Mercredi", time: "09:00 – 20:00" },
  { day: "Jeudi", time: "09:00 – 20:00" },
  { day: "Vendredi", time: "09:00 – 20:00" },
  { day: "Samedi", time: "08:00 – 21:00" },
  { day: "Dimanche", time: "10:00 – 20:00" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-20 relative">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              Nous trouver
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Contact & <span className="text-gold-gradient">Horaires</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Venez sans rendez-vous, on vous accueille tous les jours jusqu'à 20h.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <ScrollReveal direction="left">
              <div className="bg-card border border-border rounded-sm p-6">
                <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" /> Téléphone
                </h2>
                <a href="tel:0698306176" className="text-2xl font-bold text-gold-gradient hover:opacity-80 transition-opacity">
                  06 98 30 61 76
                </a>
                <div className="mt-4">
                  <a
                    href="tel:0698306176"
                    className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-6 py-3 rounded-sm text-sm font-bold tracking-wider uppercase w-full hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler maintenant
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-card border border-border rounded-sm p-6">
                <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Adresse
                </h2>
                <p className="text-secondary-foreground mb-4">
                  17 Rue Jean-Pierre-Moustier<br />13001 Marseille
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=17+Rue+Jean-Pierre-Moustier+13001+Marseille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-sm text-sm font-bold tracking-wider uppercase w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Voir l'itinéraire
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-card border border-border rounded-sm p-6">
                <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Horaires
                </h2>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="text-secondary-foreground font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal direction="right">
            <div className="rounded-sm overflow-hidden border border-border h-[500px] lg:h-full lg:min-h-[600px]">
              <iframe
                title="MJ Barber Chez Junior - Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8!2d5.3837!3d43.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0c6e1b8f7a7%3A0x0!2s17%20Rue%20Jean-Pierre-Moustier%2C%2013001%20Marseille!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
