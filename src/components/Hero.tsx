import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Premium Original Background with Theme Adaptation */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Artistic Hero Background"
            className="w-full h-full object-cover transition-all duration-700 brightness-[0.7] contrast-[1.1] saturate-[0.9]"
          />
          {/* Elegant cinematic gradients */}
          <div className="absolute inset-0 transition-colors duration-700 bg-gradient-to-b from-background/40 via-background/20 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent/10" />
        </div>
      </motion.div>

      {/* Subtle Artistic Glows */}
      <motion.div
        className="absolute top-1/4 right-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 pb-32"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 text-xs uppercase tracking-[0.3em] font-body text-primary border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
            Fine Arts Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-medium text-foreground mb-6 tracking-tight"
        >
          <span className="block drop-shadow-lg">Priti</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block italic drop-shadow-lg text-primary"
          >
            Verma
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground/90 italic max-w-2xl mx-auto leading-relaxed"
        >
          "Where brush meets canvas, emotions find their eternal home"
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {["Paintings", "Miniatures", "Sketches", "Illustrations"].map((medium, index) => (
            <motion.span
              key={medium}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
              className="px-5 py-2.5 text-sm font-body rounded-full backdrop-blur-md cursor-default transition-colors border bg-black/30 border-white/10 text-white/90"
            >
              {medium}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body uppercase tracking-widest text-sm rounded-full shadow-artwork hover:shadow-elevated transition-all duration-300"
          >
            View Gallery
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - added style for opacity transform */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity: contentOpacity }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-body">Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;