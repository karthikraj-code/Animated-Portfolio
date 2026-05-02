import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Circle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/lib/data";

const contactItems = [
  { icon: Mail, label: "aradhulakarthik@gmail.com", href: "mailto:aradhulakarthik@gmail.com" },
  { icon: Phone, label: "+91 6302559912", href: "tel:+916302559912" },
  { icon: MapPin, label: "Andhra Pradesh, India", href: null },
  { icon: Circle, label: "Open to Work", href: null, isStatus: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 relative overflow-hidden bg-card/30">
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(88,166,255,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-sm font-mono mb-3 text-primary" style={{ fontFamily: "'Fira Code', monospace" }}>
            reach_out()
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            Let's Connect
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground">
            I'm currently open to full-time roles, internships, freelance projects, and exciting collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-3 md:space-y-4"
        >
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-3 md:p-4 rounded-2xl border border-border bg-card"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(88,166,255,0.1)" }}>
                  {item.isStatus ? (
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#22c55e" }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  ) : (
                    <Icon size={15} className="text-primary" />
                  )}
                </div>
                {item.href ? (
                  <a href={item.href} className="text-sm hover:opacity-80 transition-opacity break-all" style={{ color: item.isStatus ? "#22c55e" : undefined }}>
                    <span className={item.isStatus ? "" : "text-foreground"}>{item.label}</span>
                  </a>
                ) : (
                  <span className="text-sm" style={{ color: item.isStatus ? "#22c55e" : undefined }}>
                    <span className={item.isStatus ? "" : "text-foreground"}>{item.label}</span>
                  </span>
                )}
              </motion.div>
            );
          })}

          <div className="flex gap-3 pt-2 md:pt-4 justify-center sm:justify-start">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -3 }}
              className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl border border-border bg-card text-foreground font-medium text-sm cursor-pointer hover:border-primary/50 transition-colors"
              data-testid="link-contact-github"
            >
              <SiGithub size={17} />
              GitHub
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -3 }}
              className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl border border-border bg-card text-foreground font-medium text-sm cursor-pointer hover:border-primary/50 transition-colors"
              data-testid="link-contact-linkedin"
            >
              <FaLinkedin size={17} />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
