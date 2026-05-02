import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 md:py-10 px-4 sm:px-6 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-center sm:text-left">
          <p className="text-xs md:text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="font-semibold text-primary">Karthik Raju</span>{" "}
            · 2025
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-2.5 md:p-3 rounded-full border border-border text-primary cursor-pointer hover:border-primary/50 transition-colors"
          data-testid="button-back-to-top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
