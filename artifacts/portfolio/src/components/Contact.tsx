import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, Mail, Phone, MapPin, Circle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const contactItems = [
  { icon: Mail, label: "aradhulakarthik@gmail.com", href: "mailto:aradhulakarthik@gmail.com" },
  { icon: Phone, label: "+91 6302559912", href: "tel:+916302559912" },
  { icon: MapPin, label: "Andhra Pradesh, India", href: null },
  { icon: Circle, label: "Open to Work", href: null, isStatus: true },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ backgroundColor: "#0a0a0f" }}>
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(88,166,255,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono mb-3" style={{ color: "#58a6ff", fontFamily: "'Fira Code', monospace" }}>
            reach_out()
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#e6edf3" }}>
            Let's Build Something Together
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#8b949e" }}>
            I'm currently open to full-time roles, internships, freelance projects, and exciting collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border"
                  style={{ backgroundColor: "#0d1117", borderColor: "#21262d" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(88,166,255,0.1)" }}
                  >
                    {item.isStatus ? (
                      <motion.div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#22c55e" }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    ) : (
                      <Icon size={16} style={{ color: "#58a6ff" }} />
                    )}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-sm hover:opacity-80 transition-opacity" style={{ color: item.isStatus ? "#22c55e" : "#e6edf3" }}>
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: item.isStatus ? "#22c55e" : "#e6edf3" }}>{item.label}</span>
                  )}
                </motion.div>
              );
            })}

            <div className="flex gap-4 pt-4">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border font-medium text-sm cursor-pointer"
                style={{ borderColor: "#21262d", color: "#e6edf3", backgroundColor: "#0d1117" }}
                data-testid="link-contact-github"
              >
                <SiGithub size={18} />
                GitHub
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border font-medium text-sm cursor-pointer"
                style={{ borderColor: "#21262d", color: "#e6edf3", backgroundColor: "#0d1117" }}
                data-testid="link-contact-linkedin"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: "#0d1117", borderColor: "#21262d" }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle size={48} style={{ color: "#22c55e" }} />
                  </motion.div>
                  <p className="text-xl font-bold" style={{ color: "#e6edf3" }}>Message Sent!</p>
                  <p className="text-sm text-center" style={{ color: "#8b949e" }}>Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel style={{ color: "#8b949e" }}>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="border rounded-xl"
                                style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "#21262d", color: "#e6edf3" }}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel style={{ color: "#8b949e" }}>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                type="email"
                                {...field}
                                className="border rounded-xl"
                                style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "#21262d", color: "#e6edf3" }}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: "#8b949e" }}>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                              className="border rounded-xl"
                              style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "#21262d", color: "#e6edf3" }}
                              data-testid="input-subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: "#8b949e" }}>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or opportunity..."
                              rows={5}
                              {...field}
                              className="border rounded-xl resize-none"
                              style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "#21262d", color: "#e6edf3" }}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      whileHover={!form.formState.isSubmitting ? { scale: 1.02, boxShadow: "0 0 24px rgba(88,166,255,0.3)" } : {}}
                      whileTap={!form.formState.isSubmitting ? { scale: 0.98 } : {}}
                      className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 disabled:opacity-70"
                      style={{ backgroundColor: "#58a6ff", color: "#000" }}
                      data-testid="button-send-message"
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
