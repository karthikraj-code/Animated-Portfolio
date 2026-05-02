import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats, infoItems } from "@/lib/data";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

function CountUpStat({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
}) {
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
      } else setCount(start);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase font-medium">
        {label}
      </div>
    </div>
  );
}

const infoIcons = [GraduationCap, MapPin, Mail, Phone];

const traits = [
  { label: "Full-Stack", detail: "End-to-end product ownership" },
  { label: "Community", detail: "1,300+ member GDG KARE chapter" },
  { label: "AI / ML", detail: "B.Tech specialisation" },
  { label: "Leadership", detail: "Google-selected organiser" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative bg-background overflow-hidden">
      {/* subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 75% 45%, rgba(167,139,250,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 md:mb-16"
        >
          <p
            className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            01 — About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            The person behind
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #58a6ff, #a78bfa)" }}>
              the keyboard.
            </span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* Left — photo + stats */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Photo */}
            <motion.div variants={fadeUp} className="relative">
              <div
                className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #58a6ff 0%, #a78bfa 100%)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden bg-card">
                  <img
                    src="/profile.jpg"
                    alt="Karthik Raju"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* online badge */}
              <div className="absolute -bottom-3 -right-3 bg-card border border-border rounded-2xl px-3 py-1.5 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-foreground">Open to roles</span>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="w-full grid grid-cols-3 gap-4 pt-2"
            >
              <div className="col-span-3 border-t border-border" />
              {stats.map((stat, i) => (
                <CountUpStat key={i} {...stat} />
              ))}
              <div className="col-span-3 border-b border-border" />
            </motion.div>

            {/* Info list */}
            <motion.div variants={fadeUp} className="w-full space-y-3">
              {infoItems.map((item, i) => {
                const Icon = infoIcons[i];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(88,166,255,0.1)" }}>
                      <Icon size={13} className="text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground leading-snug">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — bio + traits */}
          <motion.div
            className="lg:col-span-3 space-y-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground font-medium"
            >
              I'm a final-year B.Tech CSE (AIML) student at{" "}
              <span className="text-primary">KARE</span> with a CGPA of{" "}
              <span className="text-primary font-bold">9.18</span> — building full-stack
              products that sit at the intersection of clean engineering and
              purposeful design.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base leading-relaxed text-muted-foreground"
            >
              From pixel-perfect animated interfaces to scalable backend systems, I
              care about every layer of the stack. My work spans production SaaS
              apps, real-time platforms, and AI-integrated tools — each one
              shipping with attention to performance, accessibility, and user
              experience.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base leading-relaxed text-muted-foreground"
            >
              Beyond the terminal, I lead the{" "}
              <span className="text-foreground font-semibold">GDG KARE</span> chapter
              — selected by Google through a competitive process — coordinating
              13 core team members and growing a developer community of{" "}
              <span className="text-foreground font-semibold">1,300+</span> across
              events, workshops, and hackathons.
            </motion.p>

            {/* Trait cards */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="group flex items-start gap-4 p-4 rounded-2xl border border-border bg-card/50 hover:border-primary/40 transition-colors duration-300"
                >
                  <div
                    className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "linear-gradient(135deg, #58a6ff, #a78bfa)", marginTop: "6px" }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary border transition-all duration-300 hover:bg-primary/10"
                style={{ borderColor: "rgba(88,166,255,0.35)" }}
              >
                Let's build something together
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
