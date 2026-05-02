export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const typingTexts = [
  "Full Stack Developer",
  "UI Animation Enthusiast",
  "GDG KARE Lead Organizer",
  "AI-Powered App Builder",
  "Final Year AIML Student",
];

export const socialLinks = {
  github: "https://github.com/karthikraj-code",
  linkedin: "https://linkedin.com/in/karthik-raju-arajyula-55285b28a/",
  email: "aradhulakarthik@gmail.com",
};

export const stats = [
  { value: 9.18, suffix: "", label: "CGPA", decimals: 2 },
  { value: 1300, suffix: "+", label: "Community Members", decimals: 0 },
  { value: 3, suffix: "", label: "Major Projects", decimals: 0 },
];

export const aboutTags = [
  "Problem Solver",
  "Team Leader",
  "Fast Learner",
  "Detail Oriented",
  "Open Source Contributor",
];

export const infoItems = [
  { icon: "🎓", text: "Kalasalingam Academy of Research and Education" },
  { icon: "📍", text: "Andhra Pradesh, India" },
  { icon: "📧", text: "aradhulakarthik@gmail.com" },
  { icon: "📱", text: "+91 6302559912" },
];

export type SkillTab = "Languages" | "Frontend" | "Backend & DB" | "Cloud & Tools";

export const skillsData: Record<SkillTab, { name: string; icon: string; level: number; proficiency: string }[]> = {
  "Languages": [
    { name: "JavaScript", icon: "SiJavascript", level: 90, proficiency: "Proficient" },
    { name: "Python", icon: "SiPython", level: 88, proficiency: "Proficient" },
  ],
  "Frontend": [
    { name: "React.js", icon: "SiReact", level: 92, proficiency: "Proficient" },
    { name: "Next.js", icon: "SiNextdotjs", level: 90, proficiency: "Proficient" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", level: 95, proficiency: "Proficient" },
    { name: "HTML/CSS", icon: "SiHtml5", level: 95, proficiency: "Proficient" },
    { name: "Framer Motion", icon: "SiFramer", level: 85, proficiency: "Proficient" },
    { name: "Anime.js", icon: "⚡", level: 80, proficiency: "Proficient" },
    { name: "shadcn/ui", icon: "🎨", level: 88, proficiency: "Proficient" },
  ],
  "Backend & DB": [
    { name: "Node.js", icon: "SiNodedotjs", level: 88, proficiency: "Proficient" },
    { name: "Express.js", icon: "SiExpress", level: 85, proficiency: "Proficient" },
    { name: "MongoDB", icon: "SiMongodb", level: 82, proficiency: "Proficient" },
    { name: "Supabase", icon: "SiSupabase", level: 80, proficiency: "Proficient" },
    { name: "REST APIs", icon: "🔌", level: 90, proficiency: "Proficient" },
  ],
  "Cloud & Tools": [
    { name: "GCP", icon: "SiGooglecloud", level: 50, proficiency: "Familiar" },
    { name: "AWS S3", icon: "SiAmazonwebservices", level: 45, proficiency: "Familiar" },
    { name: "Cloudinary", icon: "SiCloudinary", level: 78, proficiency: "Proficient" },
    { name: "Docker", icon: "SiDocker", level: 45, proficiency: "Familiar" },
    { name: "Git & GitHub", icon: "SiGithub", level: 92, proficiency: "Proficient" },
    { name: "Figma", icon: "SiFigma", level: 80, proficiency: "Proficient" },
  ],
};

export const exploringTags = ["Kubernetes", "GraphQL", "System Design", "LLM APIs", "DSA & CP"];

export const experienceData = [
  {
    title: "Lead Organizer",
    company: "Google Developers Group (GDG) KARE",
    period: "Aug 2025 – Present",
    location: "Andhra Pradesh",
    badge: "Google",
    badgeColor: "blue",
    initial: "G",
    bullets: [
      "Selected by Google through a competitive process",
      "Leading a chapter of 1,300+ active members",
      "Managing 13 core team members",
      "Organizing tech events, workshops & collaborating with industry experts",
      "Mentoring students and overseeing software product development",
    ],
  },
  {
    title: "Web Developer",
    company: "Google Developers Group (GDG) KARE",
    period: "Feb 2025 – Present",
    location: "Andhra Pradesh",
    badge: "GDG",
    badgeColor: "green",
    initial: "G",
    bullets: [
      "Led workshops and mentorship programs impacting 500+ students",
      "Built a feedback-driven web application for event evaluations",
      "Helped identify high-demand topics improving student engagement",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Zidio Development",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    badge: "Internship",
    badgeColor: "violet",
    initial: "Z",
    bullets: [
      "Built data visualization platform for Excel file analysis",
      "Implemented 2D/3D interactive charts using Three.js, Plotly, Chart.js",
      "Integrated AI chatbot to recommend best-fit graphs for non-technical users",
    ],
  },
  {
    title: "B.Tech CSE (AIML)",
    company: "Kalasalingam Academy of Research and Education",
    period: "Aug 2023 – Present",
    location: "Andhra Pradesh",
    badge: "Education",
    badgeColor: "amber",
    initial: "K",
    bullets: [
      "CGPA: 9.18 / 10",
      "Specialization in Artificial Intelligence & Machine Learning",
    ],
  },
];

export const projectsData = [
  {
    title: "AI Powered Mock Interview",
    tags: ["AI/ML", "Full Stack"],
    gradient: "from-blue-500/20 via-violet-500/20 to-purple-600/20",
    gradientBorder: "from-[#58a6ff] to-[#a78bfa]",
    description:
      "A placement preparation platform simulating real recruitment workflows — aptitude tests, technical & HR interview rounds, AI-powered video analyzer for vocal and visual delivery evaluation, and a resume analyzer with actionable improvement insights.",
    stack: ["Next.js", "Node.js", "AI/LLM", "Video Analysis API", "Resume Parser"],
    github: "#",
    demo: "https://placement-prep-mock.vercel.app/",
    featured: true,
  },
  {
    title: "TechNav",
    tags: ["AI/ML", "Full Stack"],
    gradient: "from-teal-500/20 via-cyan-500/20 to-blue-500/20",
    gradientBorder: "from-teal-400 to-[#58a6ff]",
    description:
      "An AI-powered personalised learning platform that analyses user knowledge to generate structured roadmaps with curated resources, concept-based quizzes, and a progress analytics dashboard — built using RAG architecture.",
    stack: ["Next.js", "React.js", "Node.js", "Supabase", "RAG", "PostgreSQL"],
    github: "#",
    demo: "https://tech-navigation.vercel.app/",
    featured: false,
  },
  {
    title: "HackArena",
    tags: ["Full Stack", "Tools"],
    gradient: "from-violet-500/20 via-purple-500/20 to-pink-500/20",
    gradientBorder: "from-[#a78bfa] to-pink-400",
    description:
      "A hackathon management platform with role-based panels for Participants, Organizers, and Judges. Features team formation via invite links, round-wise submissions, quiz evaluation, rubric-based judging, and controlled leaderboard release.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "TailwindCSS", "Auth"],
    github: "#",
    demo: "https://gdg-ai-olympics-euphoria.vercel.app/",
    featured: false,
  },
];

export const achievementsData = [
  {
    icon: "🏆",
    title: "GDG Lead Organizer",
    description: "Selected by Google, leading 1,300+ developers",
  },
  {
    icon: "🎓",
    title: "CGPA 9.18",
    description: "Top academic performer in CSE (AIML)",
  },
  {
    icon: "👥",
    title: "500+ Students Mentored",
    description: "Through GDG workshops and events",
  },
  {
    icon: "🤝",
    title: "13-Member Core Team",
    description: "Managed and coordinated GDG core operations",
  },
  {
    icon: "💻",
    title: "3 AI-Powered Projects",
    description: "Built and deployed at scale",
  },
  {
    icon: "🌐",
    title: "Google Developer",
    description: "Official Google Developers Group leader",
  },
];

export const codeSnippet = `import { motion } from 'framer-motion';

interface Developer {
  name: string;
  role: string;
  passion: string[];
}

const KarthikRaju: Developer = {
  name: "Karthik Raju",
  role: "Full Stack Developer",
  passion: [
    "React & Next.js",
    "UI Animations",
    "AI/ML Integration",
  ],
};

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>{KarthikRaju.name}</h1>
    </motion.div>
  );
}`;
