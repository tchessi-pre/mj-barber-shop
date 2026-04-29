import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import SeoIntro from "@/components/sections/SeoIntro";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SeoIntro />
      <WhyUs />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
    </Layout>
  );
};

export default Index;
