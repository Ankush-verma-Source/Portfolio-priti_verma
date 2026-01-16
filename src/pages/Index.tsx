import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Exhibitions from "@/components/Exhibitions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      {/* Subtle grain overlay */}
      <div className="grain-overlay" />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Gallery />
        <Exhibitions />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;