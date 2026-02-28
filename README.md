# 16 Web Editorial Layouts

✨ A high-performance, developer-first React demonstration showcasing advanced editorial layout patterns, sophisticated component architectures, and a lightning-fast Vite-powered pipeline.

## 🚀 Live Demo
**[View Live on Vercel](https://16-web-editorial-layouts.vercel.app)**

## 📦 Deployment

### Render (One-Click Deploy)
This repository includes a `render.yaml` blueprint for automated deployment:
1. Visit [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect repository: `mk-knight23/16-web-editorial-layouts`
4. Render will auto-detect and apply the blueprint configuration

### Manual Deployment
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## Features
- 📄 Professional Multi-Page UI Foundation
- ⚛️ Sophisticated React 19 Component Architecture
- 📱 Responsive Multi-Resolution Interaction Design
- 🛡️ Advanced Security & Logic Patterns
- ⚡ High-Speed Pipeline via Vite 6

## Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19.2.3, TypeScript 5.9.3 |
| **Build Tool** | Vite 6.4.1 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Animations** | Framer Motion 12.29.2 |

---

## 🏗️ Architecture

### Project Structure

```
16-web-editorial-layouts/
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Tabs.tsx
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Articles.tsx
│   │   │   ├── Features.tsx
│   │   │   └── Footer.tsx
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Grid.tsx
│   │   └── features/     # Feature-specific components
│   │       ├── EditorialCard.tsx
│   │       ├── LayoutSwitcher.tsx
│   │       └── ThemeToggle.tsx
│   ├── data/             # Content data
│   │   ├── articles.ts
│   │   ├── layouts.ts
│   │   └── categories.ts
│   ├── hooks/            # Custom hooks
│   │   ├── useMediaQuery.ts
│   │   ├── useLocalStorage.ts
│   │   └── useTheme.ts
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── utils/            # Utility functions
│   │   ├── formatters.ts
│   │   └── constants.ts
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── docs/                 # Documentation
│   ├── ARCHITECTURE.md   # Detailed architecture
│   └── DESIGN.md         # Design system
├── public/               # Static assets
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── tailwind.config.ts    # Tailwind config
├── render.yaml           # Render deployment config
└── README.md             # This file
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19.2.3 |
| **Language** | TypeScript 5.9.3 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion 12.29.2 |
| **Build Tool** | Vite 6.4.1 |
| **Deployment** | CI/CD ready (Vercel, Render) |

### Key Architectural Patterns

- **Component-First**: Reusable, composable UI components
- **Type Safety**: Full TypeScript coverage with strict mode
- **Layout Patterns**: Multiple editorial layouts (grid, masonry, list)
- **Custom Hooks**: Encapsulated logic for theme, media queries, local storage
- **Error Boundaries**: Graceful error handling
- **Code Splitting**: Route and component-based lazy loading
- **Performance-First**: GPU-accelerated animations

### Editorial Layouts

```typescript
{
  layouts: [
    {
      name: "Classic Grid",
      pattern: "3-column grid",
      responsive: "1 → 2 → 3 columns",
      useCase: "Standard article lists"
    },
    {
      name: "Masonry",
      pattern: "Pinterest-style staggered grid",
      responsive: "Auto-adjusting heights",
      useCase: "Image-heavy content"
    },
    {
      name: "Editorial List",
      pattern: "Horizontal cards with thumbnails",
      responsive: "Stack on mobile",
      useCase: "Featured articles"
    },
    {
      name: "Split Layout",
      pattern: "Content + sidebar split",
      responsive: "Full-width on mobile",
      useCase: "Article pages with navigation"
    }
  ]
}
```

### State Management

```
Local State → Custom Hooks → URL Query Params
     ↓              ↓               ↓
  UI States     Theme/Layout    Shareable URLs
```

- **useTheme**: Dark/light theme toggle with persistence
- **useMediaQuery**: Responsive breakpoints
- **useLocalStorage**: Persistent preferences
- **Layout Context**: Global layout state

### Performance Optimizations

- **Code Splitting**: Route and component-based lazy loading
- **GPU Acceleration**: Framer Motion transforms
- **Tree Shaking**: Icon library and dependencies
- **Image Optimization**: Lazy loading for images
- **Minimal Re-renders**: React.memo for expensive components
- **CSS Optimization**: Tailwind's purge for production

### Design System

```typescript
// Editorial Theme
{
  typography: {
    heading: "Modern sans-serif",
    body: "Clean, readable",
    mono: "Technical code blocks"
  },
  color: {
    primary: "slate-900",
    secondary: "slate-600",
    accent: "indigo-500",
    neutral: "slate-50"
  },
  spacing: {
    editorial: "Generous whitespace",
    article: "Optimal line length (65-75 chars)"
  },
  layout: {
    container: "Max-width 1200px",
    grid: "CSS Grid + Flexbox",
    responsive: "Mobile-first breakpoints"
  }
}
```

### Multi-Platform Deployment

| Platform | URL | Auto-Deploy |
|----------|-----|-------------|
| Vercel | https://16-web-editorial-layouts.vercel.app | ✅ |
| Render | https://16-web-editorial-layouts.onrender.com | ✅ (render.yaml) |

*See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed documentation.*

---

## Quick Start
```bash
npm install
npm run dev
```

## Documentation
- [Architecture Overview](docs/ARCHITECTURE.md)
- [Design System](docs/DESIGN.md)

## AI-Assisted Development
This project is configured with [Kilo Code Reviewer](https://kilo.code/) for AI-powered code reviews on all pull requests.

---
*Maintained by [Kazi Musharraf](https://github.com/mk-knight23)*

Status: 🟢 Project Active
Last Updated: 2026-02-28
