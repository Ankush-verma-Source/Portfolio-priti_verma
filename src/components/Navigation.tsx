import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#exhibitions", label: "Exhibitions" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(var(--nav-bg), 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const getLinkStyles = () => {
    if (!hasScrolled) {
      // At top: Hover is always white
      return "text-foreground/90 hover:text-white";
    } else {
      // Scrolled: Dark theme standards
      return "text-muted-foreground hover:text-primary";
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${hasScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-subtle border-b border-border/50"
          : "bg-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-2xl text-foreground group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Priti{" "}
            <span className="italic text-primary transition-colors group-hover:text-accent font-semibold">
              V.
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className={`font-body text-sm transition-colors duration-300 relative group py-2 font-medium ${getLinkStyles()}`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${!hasScrolled ? "bg-white" : "bg-primary"
                        }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-30 md:hidden"
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <motion.nav
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-0 bottom-0 w-72 bg-background/95 backdrop-blur-xl shadow-elevated p-8 pt-24 border-l border-border"
        >
          <ul className="space-y-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="font-heading text-2xl text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Navigation;