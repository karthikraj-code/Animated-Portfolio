import { motion } from "framer-motion";
import { achievementsData } from "@/lib/data";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 overflow-hidden relative"
      style={{ backgroundColor: "#080810" }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className="text-sm font-mono mb-3"
            style={{ color: "#58a6ff", fontFamily: "'Fira Code', monospace" }}
          >
            /* Recognition */
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#e6edf3" }}>
            Milestones
          </h2>
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
            className="flex-shrink-0 snap-start rounded-2xl p-6 border cursor-default"
            style={{
              minWidth: "280px",
              backgroundColor: "#0d1117",
              borderColor: "#21262d",
              boxShadow: "0 0 0 1px #21262d",
            }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#e6edf3" }}>
              {item.title}
            </h3>
            <p className="text-sm" style={{ color: "#8b949e" }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
