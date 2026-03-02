import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AvatarBadge from "@/components/AvatarBadge";
import avatarImage from "@/assets/avatar.png";
import heroImage from "@/assets/hero-barber.jpg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Accueil", path: "#accueil" },
  { label: "Services", path: "#services" },
  { label: "Galerie", path: "#galerie" },
  { label: "Avis", path: "#avis" },
  { label: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#accueil");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is near top/middle
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection("#" + entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const id = item.path.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Handle hash scroll on location change (for external navigation)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(location.hash);
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/" + path);
      return;
    }

    setActiveSection(path);
    const id = path.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL hash without scrolling
      window.history.pushState(null, "", path);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden",
        scrolled
          ? "shadow-md border-b border-white/10"
          : ""
      )}
    >
      {/* Background Image with Overlay - Similar to Hero */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black backdrop-blur-md" />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-3 font-display text-xl md:text-2xl font-bold tracking-wide group/logo"
          onClick={(e) => handleNavClick(e, "#accueil")}
        >
          <AvatarBadge
            imageSrc={avatarImage}
            showBadge={false}
            className="w-10 h-10 md:w-12 md:h-12"
            imageClassName="w-10 h-10 md:w-12 md:h-12 border-2"
          />
          <div className="flex flex-col">
            <span className="text-white group-hover/logo:brightness-110 transition-all leading-none">MJ BARBER</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary font-script text-sm md:text-base -mt-1 opacity-90 transform -rotate-2 text-center">Chez Junior</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors hover:text-primary",
                activeSection === item.path ? "text-primary font-bold" : "text-white"
              )}
            >
              {item.label}
              {activeSection === item.path && (
                <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-primary rounded-full transform -translate-x-1/2 animate-in fade-in zoom-in duration-300 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              )}
            </a>
          ))}
          <Button
            asChild
            variant="default"
            className="ml-4 bg-gold-gradient text-primary-foreground hover:opacity-90 transition-opacity shadow-gold rounded-full font-semibold tracking-wide"
          >
            <a href="tel:0698306176" className="gap-2">
              <Phone className="w-4 h-4" />
              Appeler
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden text-foreground"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left font-display text-xl font-bold flex items-center gap-3">
                <AvatarBadge 
                  imageSrc={avatarImage} 
                  showBadge={false} 
                  className="w-16 h-16"
                  imageClassName="w-16 h-16 border-2 invert"
                />
                <div className="flex flex-col">
                  <span className="leading-none">MJ Barber</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary font-script text-sm -mt-1 opacity-90 -rotate-2">Chez Junior</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-lg font-medium tracking-wider uppercase py-2 transition-colors",
                    activeSection === item.path ? "text-primary" : "text-muted-foreground hover:text-primary"
                  )}
                  onClick={(e) => handleNavClick(e, item.path)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-gold-gradient text-primary-foreground shadow-gold rounded-full font-semibold tracking-wide w-full"
              >
                <a href="tel:0698306176" className="gap-2 justify-center">
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
