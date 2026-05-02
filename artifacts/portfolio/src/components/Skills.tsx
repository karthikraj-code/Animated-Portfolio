import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  SiJavascript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiSupabase, SiGooglecloud,
  SiDocker, SiGithub, SiFigma, SiCloudinary
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { skillsData, exploringTags, type SkillTab } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  SiJavascript: <SiJavascript size={20} style={{ color: "#f7df1e" }} />,
  SiPython: <SiPython size={20} style={{ color: "#3572A5" }} />,
  SiReact: <SiReact size={20} style={{ color: "#61dafb" }} />,
  SiNextdotjs: <SiNextdotjs size={20} />,
  SiTailwindcss: <SiTailwindcss size={20} style={{ color: "#06b6d4" }} />,
  SiHtml5: <SiHtml5 size={20} style={{ color: "#e34f26" }} />,
  SiFramer: <SiFramer size={20} style={{ color: "#b388ff" }} />,
  SiNodedotjs: <SiNodedotjs size={20} style={{ color: "#339933" }} />,
  SiExpress: <SiExpress size={20} />,
  SiMongodb: <SiMongodb size={20} style={{ color: "#47a248" }} />,
  SiSupabase: <SiSupabase size={20} style={{ color: "#3ecf8e" }} />,
  SiGooglecloud: <SiGooglecloud size={20} style={{ color: "#4285f4" }} />,
  SiAmazonwebservices: <FaAws size={20} style={{ color: "#ff9900" }} />,
  SiCloudinary: <SiCloudinary size={20} style={{ color: "#3448c5" }} />,
  SiDocker: <SiDocker size={20} style={{ color: "#2496ed" }} />,
  SiGithub: <SiGithub size={20} />,
  SiFigma: <SiFigma size={20} style={{ color: "#f24e1e" }} />,
};

function ProgressBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="h-1.5 rounded-full overflow-hidden bg-border">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, #58a6ff, #a78bfa)" }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

const tabs: SkillTab[] = ["Languages", "Frontend", "Backend & DB", "Cloud & Tools"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTab>("Frontend");

  return (
    <section id="skills" className="py-28 relative bg-card/30">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 20% 60%, rgba(167,139,250,0.04) 0%, transparent 70%)" }} />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono mb-3 text-primary" style={{ fontFamily: "'Fira Code', monospace" }}>const skills =</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {"{ "}
            <span style={{ background: "linear-gradient(135deg, #58a6ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Skills
            </span>
            {" }"}
          </h2>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="relative flex p-1 rounded-xl bg-card border border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 z-10 cursor-pointer"
                style={{ color: activeTab === tab ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))" }}
                data-testid={`button-tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="skillTabBg"
                    className="absolute inset-0 rounded-lg bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skillsData[activeTab].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(88,166,255,0.1)" }}
                className="p-5 rounded-2xl border border-border bg-card transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {iconMap[skill.icon] ?? <span className="text-xl">{skill.icon}</span>}
                    </div>
                    <span className="font-semibold text-sm text-foreground">{skill.name}</span>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      color: skill.proficiency === "Proficient" ? "#58a6ff" : skill.proficiency === "Familiar" ? "#a78bfa" : "#ffa657",
                      backgroundColor: skill.proficiency === "Proficient" ? "rgba(88,166,255,0.1)" : skill.proficiency === "Familiar" ? "rgba(167,139,250,0.1)" : "rgba(255,166,87,0.1)",
                    }}
                  >
                    {skill.proficiency}
                  </span>
                </div>
                <ProgressBar level={skill.level} />
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm mb-4 text-muted-foreground">Also exploring</p>
          <div className="flex flex-wrap justify-center gap-3">
            {exploringTags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full text-sm border text-accent" style={{ borderColor: "rgba(167,139,250,0.3)", backgroundColor: "rgba(167,139,250,0.06)" }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
