import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Instagram, Linkedin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const socials = [
    { icon: Mail, href: "mailto:pritiv19112003@gmail.com", label: "Email", username: "pritiv19112003@gmail.com" },
    { icon: Instagram, href: "https://www.instagram.com/priti_verma9558/?hl=en", label: "Instagram", username: "@priti_verma9558" },
    // { icon: Linkedin, href: "#", label: "LinkedIn", username: "Aria Velasquez" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <motion.div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
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
            Get in Touch
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Let's Create <span className="italic text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto text-lg">
            Interested in commissioning a piece or discussing a collaboration?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex justify-center mt-12">
          {/* Form commented out... */}
          {/* <motion.form ... /> */}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-2xl flex flex-col items-center text-center space-y-10"
          >
            <div>
              <h3 className="font-heading text-2xl text-foreground mb-4">
                Open for Opportunities
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed max-w-lg mx-auto">
                Whether you're a gallery, collector, or fellow artist,
                I'm always excited to explore new collaborations and
                creative ventures.
              </p>
            </div>

            <div className="space-y-6 w-full max-w-md">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-body">
                Connect With Me
              </p>
              <div className="space-y-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group text-left"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-body">{social.label}</p>
                      <p className="text-sm text-foreground font-body font-medium">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;