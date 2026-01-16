import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  artwork: {
    id: number;
    title: string;
    medium: string;
    year: string;
    image: string;
    description: string;
  } | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const Lightbox = ({ artwork, onClose, onPrevious, onNext }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!artwork) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (artwork) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [artwork, onClose, onPrevious, onNext]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-neutral-950/95 backdrop-blur-md"
          >
            {/* Subtle vignette/radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-7xl w-full h-full max-h-[95vh] flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="flex-1 w-full h-full flex items-center justify-center pointer-events-auto min-h-0">
              {/* Glow behind image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                <motion.div
                  className="relative bg-neutral-900 border-[8px] border-white/5 shadow-2xl overflow-hidden rounded-sm"
                  layoutId={`artwork-${artwork.id}`}
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="max-h-[85vh] w-auto object-contain block mx-auto"
                  />
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-96 shrink-0 bg-neutral-900/50 backdrop-blur-md p-8 border-l border-white/10 h-auto md:h-auto rounded-xl pointer-events-auto"
            >
              <div className="space-y-6 text-left">
                <div>
                  <p className="text-primary font-body text-xs uppercase tracking-[0.2em] mb-3">
                    {artwork.year}
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight">
                    {artwork.title}
                  </h2>
                </div>

                <div className="w-12 h-px bg-white/20" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 uppercase tracking-wider">
                      {artwork.medium}
                    </span>
                  </div>
                  <p className="text-zinc-400 font-body leading-relaxed text-sm md:text-base">
                    {artwork.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 text-gallery-cream/70 hover:text-gallery-cream transition-colors p-2"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-gallery-cream/50 hover:text-gallery-cream transition-colors p-2"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-gallery-cream/50 hover:text-gallery-cream transition-colors p-2"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;