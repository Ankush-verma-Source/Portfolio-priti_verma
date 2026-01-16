import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Lightbox from "./Lightbox";

// Import Artworks
import paintingDivine from "@/assets/painting-divine.jpg";
import miniatureLady from "@/assets/miniature-lady.png";
import miniatureRoyal from "@/assets/miniature-royal.png";
import paintingDancer from "@/assets/painting-dancer.jpg";
import miniatureElephant from "@/assets/miniature-elephant.jpg";
import miniatureRamDarbar from "@/assets/miniature-ram-darbar.png";
import miniatureKalaaKunj from "@/assets/miniature-kalaa-kunj.jpg";


type Category = "all" | "paintings" | "miniatures" | "sketches" | "illustrations" | "experimental";

interface Artwork {
  id: number;
  title: string;
  category: Category;
  medium: string;
  year: string;
  image: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Divine Melody",
    category: "paintings",
    medium: "Acrylic on Canvas",
    year: "2024",
    image: paintingDivine,
    description: "A vibrant portrayal of the divine connect through music, featuring intricate patterns and bold colors.",
  },
  {
    id: 2,
    title: "Lady with Bird",
    category: "miniatures",
    medium: "Watercolor on Paper",
    year: "2024",
    image: miniatureLady,
    description: "A delicate miniature capturing a moment of serenity.",
  },
  {
    id: 3,
    title: "Royal Portrait",
    category: "miniatures",
    medium: "Gouache on Paper",
    year: "2024",
    image: miniatureRoyal,
    description: "A traditional style royal portrait featuring fine detailing and symbolic elements.",
  },
  {
    id: 4,
    title: "Classical Dance",
    category: "paintings",
    medium: "Oil on Canvas",
    year: "2023",
    image: paintingDancer,
    description: "Capturing the grace and fluidity of classical dance forms.",
  },
  {
    id: 5,
    title: "Royal Procession",
    category: "miniatures",
    medium: "Mixed Media",
    year: "2023",
    image: miniatureElephant,
    description: "An elaborate scene of a royal procession, rich in cultural heritage and detail.",
  },
  {
    id: 6,
    title: "The Divine Court",
    category: "miniatures",
    medium: "Gouache on Paper",
    year: "2023",
    image: miniatureRamDarbar,
    description: "A classical miniature composition depicting the Ram Darbar within a lush green forest setting.",
  },
    {
    id: 7,
    title: "Celestial Flight",
    category: "miniatures",
    medium: "Gouache on Paper",
    year: "2025",
    image: miniatureKalaaKunj,
    description: "Selected for the prestigious 'Kalaa Kunj Exhibition'. An exquisite portrayal of divine romance, uniquely compositioned on a celestial parrot.",
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Works" },
  { key: "paintings", label: "Paintings" },
  { key: "miniatures", label: "Miniatures" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((art) => art.category === activeCategory);

  const handlePrevious = () => {
    if (!selectedArtwork) return;
    const currentIndex = filteredArtworks.findIndex((a) => a.id === selectedArtwork.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredArtworks.length - 1;
    setSelectedArtwork(filteredArtworks[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedArtwork) return;
    const currentIndex = filteredArtworks.findIndex((a) => a.id === selectedArtwork.id);
    const nextIndex = currentIndex < filteredArtworks.length - 1 ? currentIndex + 1 : 0;
    setSelectedArtwork(filteredArtworks[nextIndex]);
  };

  return (
    <section id="gallery" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] font-body text-primary border border-primary/30 rounded-full bg-primary/5 mb-6"
          >
            Portfolio
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Selected <span className="italic text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            A curated collection of paintings, sketches, and experimental pieces
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 text-sm font-body rounded-full transition-all duration-300 ${activeCategory === cat.key
                ? "bg-primary text-primary-foreground shadow-artwork"
                : "bg-card/80 backdrop-blur-sm text-muted-foreground border border-border hover:border-primary/50 hover:text-primary"
                }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((artwork, index) => (
              <motion.article
                key={artwork.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedArtwork(artwork)}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg shadow-subtle hover:shadow-elevated transition-shadow duration-500 bg-card"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent flex flex-col justify-end p-6"
                  >
                    <motion.span
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-primary-foreground/80 text-xs font-body uppercase tracking-wider"
                    >
                      {artwork.medium} · {artwork.year}
                    </motion.span>
                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="text-primary-foreground font-heading text-2xl mt-2"
                    >
                      {artwork.title}
                    </motion.h3>
                  </motion.div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-300 rounded-tr-lg" />
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
};

export default Gallery;