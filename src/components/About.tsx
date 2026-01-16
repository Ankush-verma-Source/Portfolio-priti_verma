import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  const mediums = [
    "Oil on Canvas",
    "Watercolor",
    "Charcoal",
    "Ink",
    "Mixed Media",
    "Miniature",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            style={{ y, opacity, scale }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1000&fit=crop"
                alt="Artist at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>
            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-lg -z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-4 -left-4 w-24 h-24 border border-primary/30 rounded-full -z-10"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 text-xs uppercase tracking-[0.2em] font-body text-primary border border-primary/30 rounded-full bg-primary/5">
                About the Artist
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
            >
              A Journey Through
              <span className="italic text-primary block">Color & Form</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-muted-foreground font-body leading-relaxed text-lg"
            >
              <p>
                Born from a deep fascination with the interplay of light and shadow,
                my artistic journey began in the quiet studios of classical training
                and evolved into a contemporary exploration of human emotion.
              </p>
              <p>
                Currently in my 3rd year at <span className="text-primary/90 font-medium">Goel Institute of Higher Studies Mahavidyalaya</span>,
                I am pursuing my BFA/BVA, specializing in translating fleeting moments into timeless visual narratives.
                Each brushstroke is a deliberate conversation between tradition and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-6"
            >
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-body">
                Mediums & Techniques
              </p>
              <div className="flex flex-wrap gap-3">
                {mediums.map((medium, index) => (
                  <motion.span
                    key={medium}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2.5 text-sm font-body text-foreground border border-border bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default shadow-subtle"
                  >
                    {medium}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-8 border-t border-border"
            >
              <blockquote className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-primary/20 font-heading">"</span>
                <p className="font-heading text-xl italic text-muted-foreground pl-6">
                  Art is not what you see, but what you make others see.
                </p>
                <footer className="text-sm text-muted-foreground/70 mt-3 pl-6 font-body">
                  — Edgar Degas
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;