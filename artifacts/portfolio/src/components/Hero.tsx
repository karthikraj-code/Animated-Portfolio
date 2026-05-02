import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ParticleCanvas from "./ParticleCanvas";
import { typingTexts, socialLinks, codeSnippet } from "@/lib/data";

const floatingBadges = [
  { label: "React.js ⚛", style: { top: "-16px", right: "8px" } },
  { label: "Next.js ▲", style: { top: "-16px", left: "8px" } },
  { label: "Node.js", style: { bottom: "-16px", right: "16px" } },
  { label: "Framer Motion ✦", style: { bottom: "-16px", left: "8px" } },
];

function CodeBlock() {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx.current < codeSnippet.length) {
        setDisplayed(codeSnippet.slice(0, idx.current + 1));
        idx.current++;
      } else {
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  const renderLine = (line: string, i: number) => {
    const colored = line
      .replace(/(import|from|export|default|const|function|return|interface)\b/g, '<span style="color:#ff7b72">$1</span>')
      .replace(/(".*?")/g, '<span style="color:#a5d6ff">$1</span>')
      .replace(/('.*?')/g, '<span style="color:#a5d6ff">$1</span>')
      .replace(/\b(string|number|boolean|Developer)\b/g, '<span style="color:#ffa657">$1</span>')
      .replace(/(motion\.\w+|motion)/g, '<span style="color:#79c0ff">$1</span>');
    return (
      <div key={i} className="flex">
        <span className="select-none mr-3 text-right w-6 shrink-0 text-muted-foreground/40">{i + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: colored || "&nbsp;" }} />
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="relative rounded-xl overflow-hidden border border-border bg-card"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
        <span className="ml-3 text-xs text-muted-foreground" style={{ fontFamily: "'Fira Code', monospace" }}>portfolio.tsx</span>
      </div>
      <div
        className="p-3 text-xs leading-6 overflow-auto max-h-64 md:max-h-80 text-foreground"
        style={{ fontFamily: "'Fira Code', monospace", fontSize: "11px" }}
      >
        {displayed.split("\n").map((line, i) => renderLine(line, i))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-primary"
        >▋</motion.span>
      </div>

      {/* Floating badges — only on md+ to avoid overflow */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className="hidden lg:block absolute px-2.5 py-1 rounded-lg border border-border bg-card/95 text-xs font-medium whitespace-nowrap text-muted-foreground"
          style={{ ...badge.style, fontFamily: "'Fira Code', monospace", backdropFilter: "blur(8px)" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        >
          {badge.label}
        </motion.div>
      ))}
    </motion.div>
  );
}

function TypingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = typingTexts[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentIndex]);

  return (
    <div className="flex items-center h-8 gap-1 min-w-0">
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-primary truncate">{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-5 sm:h-6 rounded bg-primary shrink-0"
      />
    </div>
  );
}

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background" style={{ paddingTop: "72px" }}>
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-5 md:space-y-6">
          <motion.p variants={item} className="text-sm font-mono text-muted-foreground" style={{ fontFamily: "'Fira Code', monospace" }}>
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            style={{
              background: "linear-gradient(135deg, #58a6ff 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Karthik Raju
          </motion.h1>

          <motion.div variants={item}><TypingText /></motion.div>

          <motion.p variants={item} className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg text-muted-foreground">
            I build fast, beautiful, and intelligent web experiences that live at the intersection of design and engineering.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <motion.button
              onClick={scrollToWork}
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(88,166,255,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border border-primary text-primary"
              style={{ backgroundColor: "rgba(88,166,255,0.07)" }}
              data-testid="button-view-work"
            >
              View My Work
            </motion.button>
            <motion.a
              href="#"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border border-border text-foreground"
              style={{ backgroundColor: "rgba(128,128,128,0.05)" }}
              data-testid="link-download-resume"
            >
              <Download size={14} />
              Resume
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer"
                  data-testid="link-github"
                >
                  <SiGithub size={18} />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer"
                  data-testid="link-linkedin"
                >
                  <FaLinkedin size={18} />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href={`mailto:${socialLinks.email}`}
                  whileHover={{ scale: 1.15 }}
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer"
                  data-testid="link-email"
                >
                  <Mail size={18} />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>

            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: "#22c55e" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs text-muted-foreground">Open to opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Code block: shown on tablet+ only, too large for small phones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hidden sm:block relative lg:mt-0 mt-4"
        >
          <CodeBlock />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        data-testid="button-scroll-down"
      >
        <ChevronDown size={26} className="text-primary opacity-70" />
      </motion.div>
    </section>
  );
}
