import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const exhibitions = [
  {
    year: "2025",
    title: "Kalaa Kunj Art Exhibition",
    venue: "Kalaa Kunj Art Gallery, Lucknow",
    description: "Selected artwork display (Dec 9-15). Prestigious exhibition at Vivek Khand, Gomti Nagar.",
    type: "Featured",
  },
  // {
  //   year: "2024",
  //   title: "Emerging Voices",
  //   venue: "Metropolitan Gallery of Contemporary Art",
  //   description: "Group exhibition featuring young artists exploring identity and memory",
  //   type: "group",
  // },
  // {
  //   year: "2024",
  //   title: "Annual BFA Showcase",
  //   venue: "University Art Center",
  //   description: "Featured artist in the graduating class exhibition",
  //   type: "featured",
  // },
  // {
  //   year: "2023",
  //   title: "Light & Shadow",
  //   venue: "Downtown Art Collective",
  //   description: "Solo exhibition exploring chiaroscuro in modern contexts",
  //   type: "solo",
  // },
  // {
  //   year: "2023",
  //   title: "New Perspectives",
  //   venue: "Regional Arts Festival",
  //   description: "Selected participant in juried exhibition",
  //   type: "award",
  // },
  // {
  //   year: "2022",
  //   title: "First Impressions",
  //   venue: "Student Gallery",
  //   description: "Debut solo exhibition as an undergraduate artist",
  //   type: "solo",
  // },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "solo":
      return "bg-primary/10 text-primary border-primary/30";
    case "featured":
      return "bg-accent/10 text-accent border-accent/30";
    case "award":
      return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30";
    case "selected":
      return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const Exhibitions = () => {
  return (
    <section id="exhibitions" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] font-body text-primary border border-primary/30 rounded-full bg-primary/5 mb-6"
          >
            Experience
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Exhibitions & <span className="italic text-primary">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:-translate-x-1/2" />

          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative pl-20 md:pl-0 pb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className={`absolute w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/30 ${index % 2 === 0
                  ? "left-6 md:left-auto md:right-[-8px]"
                  : "left-6 md:left-[-8px]"
                  } top-2 md:top-1`}
              />

              {/* Content card */}
              <motion.div
                whileHover={{ y: -4 }}
                className={`bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-subtle hover:shadow-artwork transition-all duration-300 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
              >
                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className={`px-3 py-1 text-xs font-body uppercase tracking-wider rounded-full border ${getTypeStyles(exhibition.type)}`}>
                    {exhibition.type}
                  </span>
                  <span className="text-primary font-heading text-xl">{exhibition.year}</span>
                </div>

                <h3 className="font-heading text-xl text-foreground mb-2">
                  {exhibition.title}
                </h3>

                <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <MapPin className="w-4 h-4" />
                  <span className="font-body">{exhibition.venue}</span>
                </div>

                <p className="text-muted-foreground/80 font-body text-sm leading-relaxed">
                  {exhibition.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;