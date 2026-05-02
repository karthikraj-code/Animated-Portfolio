import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";

const badgeColors: Record<string, { bg: string; color: string }> = {
  blue:   { bg: "rgba(88,166,255,0.12)",  color: "#58a6ff" },
  green:  { bg: "rgba(34,197,94,0.12)",   color: "#22c55e" },
  violet: { bg: "rgba(167,139,250,0.12)", color: "#a78bfa" },
  amber:  { bg: "rgba(251,191,36,0.12)",  color: "#fbbf24" },
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-28 relative bg-background">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 50% at 50% 20%, rgba(88,166,255,0.04) 0%, transparent 70%)" }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-mono mb-3 text-primary" style={{ fontFamily: "'Fira Code', monospace" }}>git log --oneline</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">My Journey</h2>
        </motion.div>

        {/* ── Mobile / Tablet: single-column left-rail timeline ── */}
        <div className="relative md:hidden">
          <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, #58a6ff 10%, #a78bfa 90%, transparent)" }} />
          <div className="space-y-8 pl-14">
            {experienceData.map((exp, i) => {
              const badge = badgeColors[exp.badgeColor] ?? badgeColors.blue;
              return (
                <div key={i} className="relative">
                  <motion.div
                    className="absolute -left-9 w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 font-bold text-xs bg-background"
                    style={{ borderColor: badge.color, color: badge.color, boxShadow: `0 0 12px ${badge.color}40` }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  >
                    {exp.initial}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                    className="p-4 rounded-2xl border border-border bg-card"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: badge.bg, color: badge.color }}>
                        {exp.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm mb-0.5 text-foreground">{exp.title}</h3>
                    <p className="text-sm font-medium mb-1 text-primary">{exp.company}</p>
                    <p className="text-xs mb-3 text-muted-foreground">{exp.period} · {exp.location}</p>
                    <ul className="space-y-1">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-xs leading-relaxed text-muted-foreground flex gap-1.5">
                          <span className="text-primary mt-0.5 shrink-0">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Desktop: alternating two-column timeline ── */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, #58a6ff 10%, #a78bfa 90%, transparent)" }} />
          <div className="space-y-12">
            {experienceData.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const badge = badgeColors[exp.badgeColor] ?? badgeColors.blue;
              return (
                <div key={i} className="relative flex items-center justify-center">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 border-2 font-bold text-sm bg-background"
                    style={{ borderColor: badge.color, color: badge.color, boxShadow: `0 0 16px ${badge.color}40` }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    {exp.initial}
                  </motion.div>

                  <motion.div
                    className={`w-[calc(50%-3rem)] ${isLeft ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left"}`}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                  >
                    <div className="p-5 rounded-2xl border border-border bg-card">
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? "justify-end" : "justify-start"}`}>
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: badge.bg, color: badge.color }}>
                          {exp.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-base mb-0.5 text-foreground">{exp.title}</h3>
                      <p className="text-sm font-medium mb-1 text-primary">{exp.company}</p>
                      <p className="text-xs mb-4 text-muted-foreground">{exp.period} · {exp.location}</p>
                      <ul className={`space-y-1.5 ${isLeft ? "text-right" : "text-left"}`}>
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="text-xs leading-relaxed text-muted-foreground">
                            {isLeft ? `${b} →` : `→ ${b}`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
