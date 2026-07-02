# ✨ Ashutosh Singare // Portfolio

**Cinematic user interfaces, fluid WebGL graphics, spatial 3D animations, and AI engineering orchestration.**

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-%2320232a.svg?style=flat-square&logo=react)](https://react.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=flat-square&logo=framer)](https://framer.com/motion)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-cyan?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

**[🌐 Live Portfolio](https://yourportfolio.com) • [📧 Get in Touch](mailto:ashutoshsingarehere@gmail.com) • [🐙 GitHub](https://github.com/Ashutoshsingare)**

</div>

---

## 📑 Table of Contents

- [📖 About](#-about)
- [✨ Features](#-features)
- [📊 Performance Metrics](#-performance-metrics)
- [🚀 Quick Start](#-quick-start)
- [🏗️ Architecture](#️-architecture)
- [💻 Tech Stack](#-tech-stack)
- [📂 Folder Structure](#-folder-structure)
- [🛠️ Installation](#️-installation)
- [🎯 Usage](#-usage)
- [📱 Browser Support](#-browser-support)
- [☁️ Deployment](#️-deployment)
- [🔧 Troubleshooting](#-troubleshooting)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License & Contact](#-license--contact)

---

## 📖 About

Welcome to the digital playground of **Ashutosh Singare**, a Computer Science engineering student specializing in **Data Science, Applied AI, and Creative Web Architecture**. 

This portfolio represents a **high-performance, cinematic personal brand platform** designed to showcase:
- ✅ **Full-stack engineering excellence** with Next.js & React 19
- ✅ **Premium visual design** through WebGL, Framer Motion & Tailwind CSS
- ✅ **Interactive storytelling** via scroll-driven animations
- ✅ **Real-world projects** including AI systems, generative graphics, and algorithmic platforms

Built specifically for **engineering recruiters**, **creative design agencies**, and **AI startups**, this application merges mathematical visual effects with high-performance web engineering—eliminating static layouts in favor of immersive, scroll-driven experiences.

**Whether showcasing generative particle visualizers** like **Neural Synth**, **spatial 4D timelines** like **Chronos Spatial**, or **sub-second algorithmic trading interfaces** like **Hyperion DEX**, this portfolio demonstrates state-of-the-art frontend excellence with zero visual compromise.

---

## ✨ Features

### Core Portfolio Features

- 🌌 **Cinematic 3D Scrollytelling**  
  Interactive Lenis-powered scroll progression driving dynamic Framer Motion transforms and WebGL particle nebulas.

- 🎨 **Glassmorphic Design System**  
  Custom HSL dark theme (`#121212`) enhanced with ambient gradient blur glows and micro-animated pill borders.

- ⚡ **60 FPS Rendering Pipeline**  
  Optimized canvas rendering and non-blocking DOM updates ensuring silky-smooth frame rates across all viewport sizes.

- 💼 **Dynamic Project Showcase**  
  Filterable project displays featuring production metrics, live external links, and technology stack tagging.

- 🎓 **Interactive Academic Timeline**  
  Chronological mapping of academic achievements from CBSE Secondary through B.Tech Data Science at OIST.

- 📬 **Direct Commission Inquiry System**  
  Integrated mailto dispatcher and instant email clipboard utility for effortless client contact.

- 🎯 **Responsive Mobile Experience**  
  Fully optimized for mobile devices with touch-friendly interactions and adaptive layouts.

- 🕹️ **Hidden Secret Mode (`snake.exe`)**  
  An interactive retro Snake arcade game embedded right inside the portfolio! Triggered seamlessly by triple-clicking the top navbar logo. Features 5 distinct progressive difficulty levels (Rookie through Cyber Snake), live speed-scaling, high-score tracking, and custom grid rendering.

- ⚠ **Classified Warning Component**  
  A sleek, glassmorphic Easter egg notice inspired by Linear and Apple design systems, inviting curious developers into the secret mode.

- 🔍 **Automated SEO Indexing**  
  Production-ready search engine optimization with dynamic `sitemap.xml` and `robots.txt` ensuring complete web discoverability.

- 🛡️ **Type-Safe Codebase**  
  Full TypeScript coverage protecting components against runtime mutations.

---

## 📊 Performance Metrics

| Metric | Target | Status |
|:---|:---|:---|
| **Lighthouse Performance** | 95+ | ⚡ Maintained |
| **First Contentful Paint (FCP)** | < 1.2s | ✅ Optimized |
| **Largest Contentful Paint (LCP)** | < 2.5s | ✅ Optimized |
| **Cumulative Layout Shift (CLS)** | < 0.1 | ✅ Zero Shift |
| **Time to Interactive (TTI)** | < 3s | ✅ Fast |
| **Frame Rate (Canvas)** | 60 FPS | ✅ Smooth |

---

## 🚀 Quick Start

Get the portfolio running locally on your development machine in **under 2 minutes**.

### 1. Clone & Install
```bash
git clone https://github.com/Ashutoshsingare/port1.git
cd port1
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🏗️ Architecture

The application uses a **modular, reactive UI architecture** that decouples background rendering from foreground interactions.

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│           Next.js 16 App Router (Root)                   │
│                  (layout.tsx)                            │
└──────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        v              v              v
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ ScrollyCanvas│ │  Overlay.tsx │ │  Navbar.tsx  │
│   (WebGL)    │ │  (Typography)│ │ (Navigation) │
└──────────────┘ └──────────────┘ └──────────────┘
        │              │              │
        └──────────────┼──────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        v                             v
┌──────────────────┐     ┌──────────────────┐
│ Projects.tsx     │     │ Contact.tsx      │
│ (Showcase)       │     │ (Commission Flow)│
└──────────────────┘     └──────────────────┘
```

### Data Flow Architecture

```
User Scroll Action
    ↓
Window Scroll Event (Lenis)
    ↓
useTransform Hook (Framer Motion)
    ↓
MotionValue Updates
    ↓
Re-render Overlay Typography & Canvas
    ↓
RequestAnimationFrame Loop
    ↓
Smooth 60 FPS Animation
```

### Component Responsibilities

| Component | Purpose | Key Libraries |
|:---|:---|:---|
| **`ScrollyCanvas.tsx`** | Renders dynamic WebGL particle backgrounds and visual effects | HTML5 Canvas, WebGL, Three.js |
| **`Overlay.tsx`** | Orchestrates scroll-linked text opacity and Y-axis transforms | Framer Motion `useTransform` |
| **`Navbar.tsx`** | Sticky glassmorphic navigation with section anchors | Lucide Icons, Tailwind CSS |
| **`Projects.tsx`** | Displays featured works with metrics and live links | React 19, Framer Motion |
| **`TechStack.tsx`** | Shows categorized technology skills | React, Tailwind CSS |
| **`Education.tsx`** | Timeline of academic achievements | Framer Motion |
| **`Contact.tsx`** | Email commission flow and social links | Clipboard API, Mailto |
| **`Loader.tsx`** | Initial suspense loader animation | Framer Motion |

### State Management

- **Client-side only** (no external state management needed)
- Framer Motion `useTransform` for scroll-linked values
- React hooks for UI state (`useState`, `useEffect`)
- Context API for potential future global state

---

## 💻 Tech Stack

### Frontend Framework & Core

![Next JS](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### Styling & Animation

![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=for-the-badge&logo=framer&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-React-F56565?style=for-the-badge&logo=lucide&logoColor=white)

### Graphics & Performance

![HTML5 Canvas](https://img.shields.io/badge/HTML5_Canvas-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r128-black?style=for-the-badge&logo=three.js&logoColor=white)

### Development & Build

![Node.js](https://img.shields.io/badge/Node.js-LTS-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-9+-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

---

## 📂 Folder Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico              # Browser tab icon
│   │   ├── globals.css              # Tailwind imports & theme overrides
│   │   ├── layout.tsx               # Root HTML wrapper with fonts
│   │   └── page.tsx                 # Main landing page component assembly
│   │
│   └── components/                  # Reusable UI & animation modules
│       ├── ClassifiedWarning.tsx    # Premium Linear-style Easter egg warning notice
│       ├── Contact.tsx              # Email clipboard & commission flow
│       ├── Education.tsx            # Academic timeline cards (OIST, CBSE)
│       ├── LayoutContainer.tsx      # Responsive layout wrapper
│       ├── Loader.tsx               # Initial loading suspense animation
│       ├── Navbar.tsx               # Fixed navigation bar with anchors
│       ├── Overlay.tsx              # Scroll-driven typography container
│       ├── Projects.tsx             # Featured project showcase & grid
│       ├── ScrollyCanvas.tsx        # WebGL particle background canvas
│       ├── SnakeEasterEgg.tsx       # Interactive 5-level retro Snake game engine
│       └── TechStack.tsx            # Skill pills categorized by domain
│
├── public/                          # Static assets & SEO files
│   ├── resume/                      # Downloadable resume PDF
│   ├── sequence/                    # WebGL canvas background frame animation
│   ├── robots.txt                   # Search engine crawler directives
│   └── sitemap.xml                  # Site map indexing
│
├── .env.example                     # Environment variables template
├── brain.md                         # Project Brain v2 AI Architecture
├── package.json                     # Dependencies & build scripts
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript compiler options
├── next.config.js                   # Next.js build & optimization config
└── README.md                        # This file
```

---

## 🛠️ Installation

Follow these step-by-step instructions to set up your local development environment.

### Prerequisites

| Tool | Minimum Version | Purpose |
|:---|:---|:---|
| **Node.js** | `v18.17.0+` | JavaScript runtime for Next.js |
| **npm / pnpm** | `v9.0.0+` | Package dependency management |
| **Git** | `v2.40.0+` | Version control & repository cloning |

### Step 1: Clone Repository
```bash
git clone https://github.com/Ashutoshsingare/port1.git
cd port1
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Validate Build
Verify TypeScript and Tailwind CSS compilation:
```bash
npm run build
```

### Step 4: Start Development Server
```bash
npm run dev
# Server running at http://localhost:3000
```
---

## 📱 Browser Support

| Browser | Minimum Version | Status |
|:---|:---|:---|
| Chrome / Edge | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14.1+ | ✅ Full Support |
| Mobile Safari (iOS) | 14.5+ | ✅ Full Support |
| Chrome Android | 90+ | ✅ Full Support |

**Note:** WebGL features require hardware acceleration. Fallback CSS gradient activates automatically on unsupported devices.

---

## ☁️ Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your `port1` repository
   - Framework preset: **Next.js** (auto-detected)
   - Click **Deploy**

3. **Custom Domain** (Optional)
   - In Vercel Dashboard → Settings → Domains
   - Add your custom domain and update DNS records

Your portfolio is now **live globally** on Vercel's CDN with automatic HTTPS and edge optimization.

### Local Production Build
```bash
npm run build
npm run start
# Server running at http://localhost:3000
```

---

## 🔧 Troubleshooting

### Issue: Animation Jitter on Mobile Scroll

**Cause:** Touch events conflicting with browser overscroll behavior

**Solution:**
```css
body {
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
}
```

---

### Issue: WebGL Canvas Not Rendering

**Cause:** Hardware acceleration disabled or WebGL unsupported

**Solution:**
- Check browser WebGL support: [webglreport.com](https://webglreport.com)
- Canvas automatically falls back to CSS gradient background
- Update GPU drivers to latest version

---

### Issue: Port 3000 Already in Use

**Cause:** Another Node process is running

**Solution:**
```bash
# Use different port
PORT=3001 npm run dev

# Or kill the process
lsof -i :3000
kill -9 <PID>
```

---

### Issue: Slow Initial Load

**Cause:** Large unoptimized images or slow internet

**Solution:**
```bash
npm run build
npm run start  # Test production build locally
```

Check Network tab in DevTools for bottlenecks.

---

## 🗺️ Roadmap

### ✅ Completed Features
- [x] Interactive 3D WebGL particle background engine
- [x] Responsive glassmorphic UI with Tailwind CSS
- [x] Scroll-driven Framer Motion animations
- [x] Project showcase with live links
- [x] Academic timeline and tech stack display
- [x] Email clipboard copy utility
- [x] Mobile-responsive design

### 🚀 Planned Enhancements
- [ ] **AI Chatbot Integration** — Google Gemini API for recruiter FAQs
- [ ] **GitHub Contribution Graph** — Live activity metrics on dashboard
- [ ] **Spatial Audio Effects** — Sound on component interactions
- [ ] **Dark/Light Mode Toggle** — Theme switcher with persistence
- [ ] **Blog Section** — Technical articles and tutorials
- [ ] **Real-time Notifications** — Updates on new project deployments
- [ ] **3D Model Viewer** — Interactive product/design showcase
- [ ] **Performance Dashboard** — Live Lighthouse metrics

---

## 🤝 Contributing

This portfolio represents personal creative work, but constructive feedback and performance optimizations are welcome!

### Contribution Process

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/port1.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/performance-improvement
   ```

3. **Make Your Changes**
   - Follow existing code style (TypeScript, ESLint)
   - Maintain performance standards (60 FPS)
   - Add comments for complex logic

4. **Commit Changes**
   ```bash
   git commit -m "perf: optimize WebGL canvas resize handler"
   ```

5. **Push & Open Pull Request**
   ```bash
   git push origin feature/performance-improvement
   ```

⚠️ **Note:** Please adhere to the existing code structure when modifying UI components.

---

## 📄 License & Contact

### License
Distributed under the **MIT License**. Feel free to use architectural concepts and UI components for inspiration in your own projects.

See [LICENSE](./LICENSE) file for details.

### Author: Ashutosh Singare

**Computer Science Engineering (Data Science)**  
**Oriental Institute of Science & Technology, Bhopal**

---

### 📫 Get in Touch

- **Email:** [ashutoshsingarehere@gmail.com](mailto:ashutoshsingarehere@gmail.com) — Commission inquiries & collaborations
- **GitHub:** [@Ashutoshsingare](https://github.com/Ashutoshsingare) — Code & projects
- **LinkedIn:** [Ashutosh Singare](https://www.linkedin.com/in/ashutosh-singare/) — Professional network
- **Twitter:** [@ashutoshsingare](https://twitter.com/ashutoshsingare) — Updates & insights

---

<div align="center">

**Designed and engineered with PASSION by Ashutosh Singare.**

⭐ **If you love the design and engineering, consider starring this repository!**

*"Building the impossible, one pixel at a time."*

</div>
