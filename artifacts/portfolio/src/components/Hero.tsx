import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ParticleCanvas from "./ParticleCanvas";
import { typingTexts, socialLinks, codeSnippet } from "@/lib/data";

const floatingBadges = [
  { label: "React.js ⚛", style: { top: "-18px", right: "12px" } },
  { label: "Next.js ▲", style: { top: "-18px", left: "12px" } },
  { label: "Node.js", style: { bottom: "-18px", right: "24px" } },
  { label: "Framer Motion ✦", style: { bottom: "-18px", left: "12px" } },
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
      .replace(/(motion\.\w+|motion)/g, '<span style="color:#79c0ff">$1</span>')
      .replace(/([{}[\]])/g, '<span style="color:#e6edf3">$1</span>');
    return (
      <div key={i} className="flex">
        <span className="select-none mr-4 text-right w-7 shrink-0" style={{ color: "#3d444d" }}>{i + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: colored || "&nbsp;" }} />
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="relative rounded-xl overflow-hidden border"
      style={{ backgroundColor: "#0d1117", borderColor: "#21262d" }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "#21262d", backgroundColor: "#161b22" }}>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
        <span className="ml-3 text-xs" style={{ color: "#8b949e", fontFamily: "'Fira Code', monospace" }}>portfolio.tsx</span>
      </div>
      <div
        className="p-4 text-xs leading-6 overflow-auto max-h-80"
        style={{ fontFamily: "'Fira Code', monospace", color: "#e6edf3", fontSize: "11px" }}
      >
        {displayed.split("\n").map((line, i) => renderLine(line, i))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ color: "#58a6ff" }}
        >▋</motion.span>
      </div>

      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className="absolute px-3 py-1.5 rounded-lg border text-xs font-medium whitespace-nowrap"
          style={{
            ...badge.style,
            backgroundColor: "rgba(13,17,23,0.95)",
            borderColor: "#21262d",
            color: "#8b949e",
            fontFamily: "'Fira Code', monospace",
            backdropFilter: "blur(8px)",
          }}
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
    <div className="flex items-center h-8 gap-1">
      <span className="text-xl md:text-2xl font-semibold" style={{ color: "#58a6ff" }}>
        {displayed}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-6 rounded"
        style={{ backgroundColor: "#58a6ff" }}
      />
    </div>
  );
}

export default function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.p variants={item} className="text-base font-mono" style={{ color: "#8b949e", fontFamily: "'Fira Code', monospace" }}>
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-black leading-tight glitch-text"
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

          <motion.div variants={item}>
            <TypingText />
          </motion.div>

          <motion.p
            variants={item}
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: "#8b949e" }}
          >
            I build fast, beautiful, and intelligent web experiences that live at the intersection of design and engineering.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.button
              onClick={scrollToWork}
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(88,166,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-200"
              style={{
                border: "1px solid #58a6ff",
                color: "#58a6ff",
                backgroundColor: "rgba(88,166,255,0.06)",
              }}
              data-testid="button-view-work"
            >
              View My Work
            </motion.button>
            <motion.a
              href="#"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-200"
              style={{ border: "1px solid #21262d", color: "#e6edf3", backgroundColor: "rgba(255,255,255,0.03)" }}
              data-testid="link-download-resume"
            >
              <Download size={15} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, color: "#58a6ff" }}
                  className="p-2.5 rounded-lg border transition-all duration-200 cursor-pointer"
                  style={{ borderColor: "#21262d", color: "#8b949e" }}
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
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, color: "#58a6ff" }}
                  className="p-2.5 rounded-lg border transition-all duration-200 cursor-pointer"
                  style={{ borderColor: "#21262d", color: "#8b949e" }}
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
                  whileHover={{ scale: 1.15, color: "#58a6ff" }}
                  className="p-2.5 rounded-lg border transition-all duration-200 cursor-pointer"
                  style={{ borderColor: "#21262d", color: "#8b949e" }}
                  data-testid="link-email"
                >
                  <Mail size={18} />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>

            <div className="flex items-center gap-2 ml-2">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#22c55e" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs" style={{ color: "#8b949e" }}>Open to opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative mt-8 lg:mt-0"
        >
          <CodeBlock />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        data-testid="button-scroll-down"
      >
        <ChevronDown size={28} style={{ color: "#58a6ff", opacity: 0.7 }} />
      </motion.div>
    </section>
  );
}
