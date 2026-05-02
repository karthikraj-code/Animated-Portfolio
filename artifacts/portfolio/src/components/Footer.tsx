import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-10 px-6"
      style={{ borderTop: "1px solid #21262d", backgroundColor: "#0a0a0f" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm" style={{ color: "#8b949e" }}>
            Designed & Built by{" "}
            <span style={{ color: "#58a6ff" }} className="font-semibold">
              Karthik Raju
            </span>{" "}
            · 2025
          </p>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-xs transition-colors duration-200 cursor-pointer hover:opacity-100 opacity-60"
              style={{ color: "#e6edf3" }}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full border cursor-pointer"
          style={{ borderColor: "#21262d", color: "#58a6ff" }}
          data-testid="button-back-to-top"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
