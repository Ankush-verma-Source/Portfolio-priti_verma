import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Exhibitions", href: "#exhibitions" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-neutral-950 text-zinc-400 pt-24 pb-12 overflow-hidden">
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Abstract background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-heading text-3xl text-white">
              Priti <span className="italic text-primary">Verma</span>
            </h3>
            <p className="text-zinc-500 font-body text-sm leading-relaxed max-w-xs">
              Translating fleeting moments into timeless visual narratives through oil, watercolor, and mixed media.
            </p>
            <div className="flex items-center gap-2 text-primary/80 font-medium text-sm tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open for Commissions
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-heading text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-heading text-lg">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:pritiv19112003@gmail.com"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                pritiv19112003@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                Lucknow, India
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Instagram, href: "https://www.instagram.com/priti_verma9558/?hl=en", label: "Instagram" },
                // { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {currentYear} Priti Verma. All rights reserved.
          </p>

          {/* <div className="flex items-center gap-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div> */}

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-primary hover:text-white transition-colors uppercase tracking-wider font-medium"
          >
            Back to Top
            <span className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
              <ArrowUp className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;