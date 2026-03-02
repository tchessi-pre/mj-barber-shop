import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Galerie", path: "/galerie" },
  { label: "Avis", path: "/avis" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md border-b border-border"
          : "bg-background/70 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-gold-gradient">MJ Barber</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors hover:text-primary ${location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
                }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-gradient rounded-full" />
              )}
            </Link>
          ))}
          <a
            href="tel:0698306176"
            className="ml-4 inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-gold"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wider uppercase py-3 px-3 rounded-sm transition-colors ${location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:0698306176"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold tracking-wide shadow-gold"
            >
              <Phone className="w-4 h-4" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
