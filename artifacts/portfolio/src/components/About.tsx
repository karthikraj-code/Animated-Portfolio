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
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-5 rounded-2xl border"
      style={{ backgroundColor: "rgba(13,17,23,0.8)", borderColor: "#21262d" }}
    >
      <span className="text-2xl font-black" style={{ color: "#58a6ff" }}>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </span>
      <span className="text-xs mt-1 text-center" style={{ color: "#8b949e" }}>{label}</span>
    </div>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-28 relative" style={{ backgroundColor: "#0a0a0f" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(88,166,255,0.04) 0%, transparent 70%)"
      }} />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={sectionVariants} className="relative">
            <div className="relative w-48 h-48 rounded-full flex items-center justify-center"
              style={{
                background: "conic-gradient(from 0deg, #58a6ff, #a78bfa, #58a6ff)",
                padding: "3px",
                animation: "spin 4s linear infinite",
              }}>
              <div className="w-full h-full rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#0d1117" }}>
                <span className="text-4xl font-black" style={{ color: "#58a6ff", fontFamily: "'Inter', sans-serif" }}>KR</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="grid grid-cols-3 gap-4 w-full">
            {stats.map((stat, i) => (
              <CountUpStat key={i} {...stat} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={sectionVariants}
            className="text-sm font-mono"
            style={{ color: "#58a6ff", fontFamily: "'Fira Code', monospace" }}
          >
            {"< About Me />"}
          </motion.p>

          <motion.h2
            variants={sectionVariants}
            className="text-3xl md:text-4xl font-bold leading-snug"
            style={{ color: "#e6edf3" }}
          >
            Passionate about building things that matter
          </motion.h2>

          <motion.p variants={sectionVariants} className="leading-relaxed" style={{ color: "#8b949e" }}>
            I'm a final year B.Tech CSE (AIML) student at KARE with a CGPA of 9.18. I specialize in building full-stack web applications with modern tools — from pixel-perfect animated frontends to scalable backend architectures.
          </motion.p>

          <motion.p variants={sectionVariants} className="leading-relaxed" style={{ color: "#8b949e" }}>
            Beyond code, I lead the GDG KARE chapter as Lead Organizer — selected by Google through a competitive process — where I oversee 13 core team members and coordinate a community of 1,300+ active developers.
          </motion.p>

          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {infoItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{ backgroundColor: "rgba(13,17,23,0.6)", borderColor: "#21262d" }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm" style={{ color: "#8b949e" }}>{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={sectionVariants} className="flex flex-wrap gap-2">
            {aboutTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{ borderColor: "rgba(88,166,255,0.3)", color: "#58a6ff", backgroundColor: "rgba(88,166,255,0.07)" }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
