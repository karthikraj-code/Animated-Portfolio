import { motion } from "framer-motion";
import { achievementsData } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 overflow-hidden relative bg-background">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(88,166,255,0.04) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6 mb-12">
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Milestones</h2>
        </motion.div>
      </div>

      <div className="flex overflow-x-auto gap-5 px-6 pb-4 scrollbar-hide snap-x snap-mandatory">
        {achievementsData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="flex-shrink-0 snap-start rounded-2xl p-6 border border-border bg-card cursor-default"
            style={{ minWidth: "280px" }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
