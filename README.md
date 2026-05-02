# 🎨 Animated Portfolio - Karthik Raju

A modern, fully-animated personal portfolio website showcasing projects, skills, and experiences. Built with cutting-edge web technologies to deliver a visually stunning and performant user experience.

## ✨ Features

- **Fully Animated UI** - Smooth animations using Framer Motion and Anime.js
- **Responsive Design** - Perfect experience on mobile, tablet, and desktop
- **Interactive Components** - Engaging particles, typing effects, and smooth transitions
- **Dark Mode** - Built-in theme support with next-themes
- **Project Showcase** - Display live demos and GitHub links for projects
- **Skills Visualization** - Categorized skills with proficiency levels
- **Experience Timeline** - Detailed career and education journey
- **Contact Information** - Quick access to email, phone, and social links
- **Code Highlighting** - Styled code snippets in the hero section
- **TypeScript** - Full type safety across the application

## 🏗️ Project Structure

```
Animated-Portfolio/
├── artifacts/
│   ├── portfolio/              # Main frontend application
│   │   ├── src/
│   │   │   ├── components/     # React components
│   │   │   ├── pages/          # Page components
│   │   │   ├── lib/            # Utilities and data
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   └── App.tsx         # Root component
│   │   ├── public/             # Static assets
│   │   └── vite.config.ts      # Vite configuration
│   └── api-server/             # Express API server (optional)
├── lib/
│   ├── api-client-react/       # React API client
│   ├── api-spec/               # OpenAPI specification
│   ├── api-zod/                # Zod schemas
│   └── db/                     # Database configuration
└── README.md                   # This file
```

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library
- **Next.js / Vite** - Build tooling
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Advanced animations
- **Anime.js** - Animation library
- **Shadcn/UI** - Component library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend (Optional)
- **Node.js** - Runtime
- **Express.js** - Web framework
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database (via Supabase)

### Tools
- **pnpm** - Package manager
- **TypeScript** - Language
- **Git** - Version control

## 📦 Installation

### Prerequisites
- **Node.js** 20+ or higher
- **pnpm** 10+ ([install guide](https://pnpm.io/installation))

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/karthikraj-code/Animated-Portfolio.git
cd Animated-Portfolio
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set environment variables** (for portfolio frontend)
```bash
cd artifacts/portfolio
# No env variables needed for basic setup, but PORT and BASE_PATH are required for Vite
```

## 🎯 Running the Project

### Development Mode

**Start the portfolio frontend:**
```bash
cd artifacts/portfolio
pnpm dev
```
The app will be available at `http://localhost:4173` (or configured PORT)

**Environment variables needed:**
- `PORT` - Port to run the server on (default: 4173)
- `BASE_PATH` - Base path for the app (default: /)

### Production Build

**Build the portfolio:**
```bash
pnpm run build
```

**Build and preview:**
```bash
pnpm run build
pnpm run serve
```

## 📄 Configuration

### Portfolio Settings
Edit `artifacts/portfolio/src/lib/data.ts` to customize:
- Social links
- Skills and proficiency levels
- Experience timeline
- Projects showcase
- Contact information
- Personal statistics

### Environment Variables
Create `.env.local` in `artifacts/portfolio/`:
```bash
PORT=4173
BASE_PATH=/
```

## 🎨 Customization

### Update Personal Information
1. Edit `src/lib/data.ts` with your information
2. Add your profile photo to `public/profile.jpg`
3. Update `src/components/Hero.tsx` for custom content
4. Modify social links and contact details

### Add Your Resume
1. Place your resume PDF as `public/resume.pdf`
2. The download button will automatically link to it

### Sections
- **Hero** - Landing section with typing text and code preview
- **About** - Personal summary with stats and tags
- **Skills** - Categorized skills with proficiency bars
- **Experience** - Timeline of work and education
- **Projects** - Featured projects with live demos
- **Contact** - Contact information and social links

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
pnpm run build

# Deploy the dist folder
```

### Docker
```bash
docker build -t portfolio .
docker run -p 4173:4173 portfolio
```

## 📱 Windows-Specific Setup

On Windows, this project requires native binaries for Rollup and Tailwind CSS. These are automatically installed, but if you encounter issues:

```bash
pnpm install --force
```

The project includes optional dependencies for:
- `@rollup/rollup-win32-x64-msvc`
- `@tailwindcss/oxide-win32-x64-msvc`
- `lightningcss-win32-x64-msvc`

## 🔧 Available Scripts

```bash
# Development
pnpm dev                 # Start dev server
pnpm build              # Build for production
pnpm serve              # Preview production build
pnpm typecheck          # Type check with TypeScript

# Workspace
pnpm run build          # Build all packages
pnpm run typecheck      # Typecheck all packages
```

## 📚 Project Features

### Animations
- Particle background canvas in hero section
- Smooth section transitions with scroll triggers
- Floating badges and interactive elements
- Typing effect for role description
- Counter animations for statistics

### Components
- **Navbar** - Sticky navigation with smooth scroll
- **Hero** - Landing section with code preview
- **About** - Personal profile with circular image ring
- **Skills** - Tabbed skills showcase
- **Experience** - Timeline of roles and education
- **Projects** - Featured projects grid
- **Contact** - Social links and contact info
- **Footer** - © and additional links

## 🛠️ Troubleshooting

### Port Already in Use
```bash
# Change port in environment variables
PORT=4174 pnpm dev
```

### Missing Dependencies
```bash
# Reinstall dependencies
pnpm install --force
```

### Build Errors
```bash
# Clear cache and rebuild
pnpm install --force
pnpm run build
```

## 📄 License

This project is open source and available under the MIT License. See `LICENSE` file for details.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📞 Contact

- **Email**: aradhulakarthik@gmail.com
- **GitHub**: [@karthikraj-code](https://github.com/karthikraj-code)
- **LinkedIn**: [Karthik Raju](https://linkedin.com/in/karthik-raju-arajyula-55285b28a/)

---

**Built with ❤️ by Karthik Raju**
