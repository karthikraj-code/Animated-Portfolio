import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats, aboutTags, infoItems } from "@/lib/data";

function CountUpStat({ value, suffix, label, decimals }: { value: number; suffix: string; label: string; decimals: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-3 md:p-5 rounded-2xl border border-border bg-card">
      <span className="text-xl md:text-2xl font-black text-primary">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </span>
      <span className="text-xs mt-1 text-center text-muted-foreground leading-tight">{label}</span>
    </div>
  );
}

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function About() {
  return (
    <section id="about" className="py-16 md:py-28 relative bg-background">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(88,166,255,0.04) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          className="flex flex-col items-center gap-6 md:gap-8"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="relative">
            <div
              className="relative w-36 h-36 md:w-48 md:h-48 rounded-full flex items-center justify-center"
              style={{ background: "conic-gradient(from 0deg, #58a6ff, #a78bfa, #58a6ff)", padding: "3px", animation: "spin 4s linear infinite" }}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center bg-card">
                <span className="text-3xl md:text-4xl font-black text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>KR</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-sm lg:max-w-none">
            {stats.map((stat, i) => <CountUpStat key={i} {...stat} />)}
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-5 md:space-y-6"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm font-mono text-primary" style={{ fontFamily: "'Fira Code', monospace" }}>
            {"< About Me />"}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-foreground">
            Passionate about building things that matter
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm md:text-base leading-relaxed text-muted-foreground">
            I'm a final year B.Tech CSE (AIML) student at KARE with a CGPA of 9.18. I specialize in building full-stack web applications with modern tools — from pixel-perfect animated frontends to scalable backend architectures.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Beyond code, I lead the GDG KARE chapter as Lead Organizer — selected by Google through a competitive process — where I oversee 13 core team members and coordinate a community of 1,300+ active developers.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {infoItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/60">
                <span className="text-base md:text-lg shrink-0">{item.icon}</span>
                <span className="text-xs md:text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {aboutTags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border text-primary" style={{ borderColor: "rgba(88,166,255,0.3)", backgroundColor: "rgba(88,166,255,0.07)" }}>
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
