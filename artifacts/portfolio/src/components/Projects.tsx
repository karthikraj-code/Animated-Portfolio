import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/lib/data";

const filterTabs = ["All", "AI/ML", "Full Stack", "Tools"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projectsData.filter(
    (p) => activeFilter === "All" || p.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-16 md:py-28 relative bg-card/30">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 80% 80%, rgba(167,139,250,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-sm font-mono mb-3 text-primary" style={{ fontFamily: "'Fira Code', monospace" }}>
            // Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Things I've Built
          </h2>
        </motion.div>

        <div className="flex justify-center mb-8 md:mb-10">
          <div className="flex gap-2 flex-wrap justify-center px-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className="px-4 md:px-5 py-1.5 md:py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer"
                style={{
                  borderColor: activeFilter === tab ? "#58a6ff" : "hsl(var(--border))",
                  color: activeFilter === tab ? "#58a6ff" : "hsl(var(--muted-foreground))",
                  backgroundColor: activeFilter === tab ? "rgba(88,166,255,0.08)" : "transparent",
                }}
                data-testid={`button-filter-${tab.toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(88,166,255,0.12), 0 0 0 1px rgba(88,166,255,0.2)",
                }}
                className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-all duration-300"
              >
                <div className={`w-full ${project.featured ? "h-32 md:h-36" : "h-24 md:h-28"} bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(135deg, rgba(88,166,255,0.15) 0%, transparent 50%, rgba(167,139,250,0.15) 100%)" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full opacity-20" style={{ background: "linear-gradient(135deg, #58a6ff, #a78bfa)", filter: "blur(20px)" }} />
                  </div>
                  {project.featured && (
                    <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "rgba(88,166,255,0.2)", color: "#58a6ff", border: "1px solid rgba(88,166,255,0.3)" }}>
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full text-accent" style={{ backgroundColor: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4 text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4 md:mb-5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded border border-border bg-background text-muted-foreground" style={{ fontFamily: "'Fira Code', monospace" }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 md:gap-3 mt-auto">
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-lg text-sm font-medium cursor-pointer flex-1 justify-center text-primary"
                      style={{ backgroundColor: "rgba(88,166,255,0.1)", border: "1px solid rgba(88,166,255,0.2)" }}
                      data-testid={`link-demo-${i}`}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 md:p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                      data-testid={`link-github-${i}`}
                    >
                      <Github size={15} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10 md:mt-12"
        >
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(88,166,255,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl font-semibold border border-border text-foreground cursor-pointer hover:border-primary/50 transition-colors"
            data-testid="link-more-github"
          >
            <Github size={16} />
            More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
