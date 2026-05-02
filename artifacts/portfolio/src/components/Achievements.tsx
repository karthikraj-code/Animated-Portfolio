import { motion } from "framer-motion";
import { achievementsData } from "@/lib/data";

export default function Achievements() {
  const doubled = [...achievementsData, ...achievementsData];

  return (
    <section id="achievements" className="py-16 md:py-24 overflow-hidden relative bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(88,166,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-mono mb-3 text-primary" style={{ fontFamily: "'Fira Code', monospace" }}>
            /* Recognition */
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Milestones</h2>
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
        />

        {/* Marquee track */}
        <div className="flex overflow-hidden">
          <div
            className="flex gap-4 md:gap-5 pb-2"
            style={{
              animation: "marquee 28s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl p-5 md:p-6 border border-border bg-card"
                style={{ width: "260px" }}
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
