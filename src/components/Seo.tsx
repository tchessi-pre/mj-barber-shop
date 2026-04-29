import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://mjbarber-chezjunior.com";

const Seo = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname || "/";
    const canonicalPath = pathname === "/" ? "/" : pathname;
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    const seoByPath: Record<
      string,
      { title: string; description: string; canonical: string; ogTitle?: string; ogDescription?: string }
    > = {
      "/": {
        title: "MJ Barber Chez Junior | Salon Coiffure Afro Marseille",
        description:
          "MJ Barber Chez Junior, barbershop spécialisé afro à Marseille. Dégradé, tresses, dreadlocks, hair design. Sans rendez-vous. Note Google 4.4/5.",
        canonical: `${BASE_URL}/`,
      },
      "/barbier-afro-marseille": {
        title: "Barbier afro à Marseille (13001) | MJ Barber Chez Junior",
        description:
          "Barbier afro à Marseille (13001, Noailles). Dégradé américain, hair design, tresses et dreadlocks. Sans rendez-vous. MJ Barber Chez Junior.",
        canonical: `${BASE_URL}/barbier-afro-marseille`,
      },
      "/mentions-legales": {
        title: "Mentions légales | MJ Barber Chez Junior",
        description: "Mentions légales de MJ Barber Chez Junior (Marseille).",
        canonical: `${BASE_URL}/mentions-legales`,
      },
      "/cgv": {
        title: "CGV | MJ Barber Chez Junior",
        description: "Conditions générales de vente de MJ Barber Chez Junior (Marseille).",
        canonical: `${BASE_URL}/cgv`,
      },
    };

    const seo = seoByPath[pathname] ?? {
      title: "MJ Barber Chez Junior | Salon Coiffure Afro Marseille",
      description:
        "MJ Barber Chez Junior, barbershop spécialisé afro à Marseille. Dégradé, tresses, dreadlocks, hair design. Sans rendez-vous.",
      canonical: canonicalUrl,
    };

    document.title = seo.title;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute("content", content);
    };

    const setLink = (selector: string, href: string) => {
      const el = document.querySelector<HTMLLinkElement>(selector);
      if (el) el.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', seo.description);
    setLink('link[rel="canonical"]', seo.canonical);
    setMeta('meta[property="og:title"]', seo.ogTitle ?? seo.title);
    setMeta('meta[property="og:description"]', seo.ogDescription ?? seo.description);
    setMeta('meta[property="og:url"]', seo.canonical);
    setMeta('meta[property="twitter:title"]', seo.ogTitle ?? seo.title);
    setMeta('meta[property="twitter:description"]', seo.ogDescription ?? seo.description);
    setMeta('meta[property="twitter:url"]', seo.canonical);
  }, [location.pathname]);

  return null;
};

export default Seo;
