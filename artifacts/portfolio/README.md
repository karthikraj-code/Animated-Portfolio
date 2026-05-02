# Portfolio App

The main frontend application for the animated portfolio website. Built with React, Vite, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies (from root)
pnpm install

# Start development server
cd artifacts/portfolio
pnpm dev
```

Visit `http://localhost:4173` to view the site.

## 📁 Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Experience timeline
│   ├── Projects.tsx    # Projects grid
│   ├── Contact.tsx     # Contact section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer
│   ├── ParticleCanvas.tsx  # Animated particles
│   ├── CustomCursor.tsx    # Custom cursor
│   ├── LoadingScreen.tsx   # Loading animation
│   └── ui/             # Shadcn/UI components
├── pages/              # Page components
│   ├── Home.tsx       # Home page
│   └── not-found.tsx  # 404 page
├── hooks/              # Custom React hooks
├── lib/
│   ├── data.ts        # Content and configuration
│   └── utils.ts       # Utility functions
├── App.tsx            # Root component
└── main.tsx          # Entry point
```

## 🎨 Customizing Content

Edit `src/lib/data.ts` to customize:

```typescript
// Navigation links
export const navLinks = [...]

// Typing animation text
export const typingTexts = [...]

// Social media links
export const socialLinks = {...}

// Skills data
export const skillsData = {...}

// Projects data
export const projectsData = [...]

// Experience data
export const experienceData = [...]
```

## 🔧 Environment Variables

Create `.env.local`:

```bash
PORT=4173
BASE_PATH=/
```

## 📦 Scripts

```bash
pnpm dev        # Start dev server
pnpm build      # Build for production
pnpm serve      # Preview production build
pnpm typecheck  # TypeScript type checking
```

## 🎨 Styling

- **Tailwind CSS** - Utility classes
- **Shadcn/UI** - Pre-built components
- **Custom CSS** - Animations and effects

Tailwind config is in `tailwind.config.js` and `components.json` defines component paths.

## 🚀 Deployment

### Vercel
```bash
vercel
```

### Netlify
1. Build: `pnpm run build`
2. Publish: `dist/public`

### Docker
```bash
docker build -t portfolio .
docker run -p 4173:4173 portfolio
```

## 📝 Adding Sections

To add a new section:

1. Create component in `src/components/NewSection.tsx`
2. Import in `src/pages/Home.tsx`
3. Add to the page
4. Add navigation link to `data.ts`

Example:

```tsx
// src/components/NewSection.tsx
import { motion } from "framer-motion";

export default function NewSection() {
  return (
    <section id="new-section" className="py-16 md:py-28 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Your content */}
      </motion.div>
    </section>
  );
}
```

## 🎯 Performance

- Code splitting with Vite
- Image optimization
- Lazy loading components
- Minimal bundle size
- Fast page load times

## 🐛 Common Issues

**Port already in use:**
```bash
PORT=4174 pnpm dev
```

**Build fails:**
```bash
pnpm install --force
pnpm run build
```

**Module not found:**
```bash
pnpm install
```

## 📄 License

MIT
