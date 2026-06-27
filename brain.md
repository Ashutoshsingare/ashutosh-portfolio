# Project Brain v2: AI Runtime Architecture for Ashutosh Singare's Portfolio (`port1`)

## Vision

**Project Brain** is an AI-native engineering runtime tailored specifically for **Ashutosh Singare's Creative Developer Portfolio (`port1`)**. It eliminates repeated codebase analysis by maintaining a continuously synchronized knowledge system. Instead of forcing the AI to rediscover the Next.js 14 / WebGL / Framer Motion architecture on every session, Project Brain provides persistent architectural memory, graph-based retrieval, deterministic execution workflows, and incremental knowledge synchronization. 

The primary objective is to **minimize context tokens while maintaining cinematic code quality and adherence to strict lockdown rules** through structured engineering workflows.

---

## Core Principles

Project Brain follows several non-negotiable principles for `port1`:
1. **Never analyze the entire codebase** unless explicitly requested.
2. **Always retrieve only the required context** (e.g., loading only `Projects.tsx` when editing project listings).
3. **Every prompt follows the same deterministic execution pipeline**.
4. **Memory is modular** instead of monolithic.
5. **Graph retrieval** is the primary source of project context.
6. **Project Codebase Lockdown Directive**: Never modify locked components (`src/components/*`, `src/app/*`) without explicit user authorization.
7. **Knowledge grows incrementally** with every completed task.

---

## Project Structure

```text
port1/
├── src/
│   ├── app/                 # Next.js App Router (layout, page)
│   └── components/          # Locked UI & WebGL Components
│       ├── Contact.tsx      # Email & Social links orchestration
│       ├── Education.tsx    # Academic timeline (OIST, CBSE)
│       ├── LayoutContainer.tsx # Responsive wrapper
│       ├── Loader.tsx       # Initial cinematic suspense screen
│       ├── Navbar.tsx       # Floating glassmorphic navigation
│       ├── Overlay.tsx      # Scrollytelling typography overlays
│       ├── Projects.tsx     # Showcase (Neural Synth, Chronos, etc.)
│       ├── ScrollyCanvas.tsx # 3D WebGL / Canvas interactive background
│       └── TechStack.tsx    # Categorized skill matrix
├── project-brain/           # Project Brain Runtime System
│   ├── system/
│   ├── graph/
│   ├── memory/
│   ├── tasks/
│   ├── standards/
│   ├── reviews/
│   └── runtime/
└── package.json
```

---

## Phase 1 — System Layer

The System layer defines *how* the AI thinks when navigating Ashutosh's creative portfolio.

```text
project-brain/system/
├── system.md
├── planner.md
└── workflow.md
```

### `system.md`
- **Purpose**: Defines global portfolio engineering workflow.
- **Responsibilities**:
  - Receive user prompts regarding portfolio updates or enhancements
  - Enforce execution order and check lockdown rules
  - Never store implementation details directly

### `planner.md`
Responsible for prompt decomposition, verifying authorization against locked components (`src/components/*`), estimating Framer Motion animation complexity, and risk assessment.

### `workflow.md`
Defines the execution lifecycle:

```text
Receive Prompt
      ↓
Verify Authorization (Lockdown Check)
      ↓
Retrieve Context (Graph Node Lookup)
      ↓
  Planning
      ↓
  Execution
      ↓
   Review
      ↓
Knowledge Synchronization
```

---

## Phase 2 — Memory Layer

Divides portfolio knowledge into independent domains under 300 lines each.

```text
project-brain/memory/
├── overview.md       # Ashutosh Singare - Creative Developer & AI Engineer
├── architecture.md   # Next.js 14 + React 19 + Framer Motion 12
├── ui-animation.md   # GSAP, Lenis Scroll & Scrollytelling canvas mechanics
├── components.md     # Component breakdown (Hero, Projects, TechStack)
└── contact-flow.md   # Mailto redirection & clipboard copying logic
```

---

## Phase 3 — Graph Layer

The structural source of truth mapping component hierarchy and animation dependencies.

```text
project-brain/graph/
├── graph.json
├── nodes.json
└── edges.json
```

### Component Dependency Graph (ASCII)
```text
[app/page.tsx]
  ├──> [Loader.tsx]
  ├──> [Navbar.tsx]
  ├──> [ScrollyCanvas.tsx] (WebGL 3D Background)
  └──> [Overlay.tsx] (Scroll-driven Typography)
         ├──> [Projects.tsx]
         ├──> [TechStack.tsx]
         ├──> [Education.tsx]
         └──> [Contact.tsx]
```

---

## Phase 4 — Runtime Layer

Acts as the execution engine for portfolio updates.

### Example Runtime Execution for `port1`
- **User Prompt**: *"Add a new certification to the Education timeline"*
- **Execution Sequence**:
  1. **Task Classifier** $\rightarrow$ Low Complexity (Content Update)
  2. **Lockdown Verifier** $\rightarrow$ Prompt grants explicit authorization to edit `Education.tsx`
  3. **Graph Retriever** $\rightarrow$ Affected Nodes: `Education.tsx`, `LayoutContainer.tsx`
  4. **Context Loader** $\rightarrow$ Loads only: `Education.tsx`
  5. **Execution** $\rightarrow$ Appends new timeline object preserving Tailwind styling (`border-purple-500/30`)

---

## Phase 5 — Standards Layer

Defines creative engineering quality for `port1`.

```text
project-brain/standards/
├── typescript.md     # Strict interfaces for Project and Skill props
├── framer-motion.md  # Smooth spring transitions and scroll transforms
├── tailwind.md       # Glassmorphism (bg-white/[0.05], backdrop-blur-md)
└── performance.md    # 60 FPS WebGL rendering & font optimization
```

---

## Phase 6 — Review Layer

Review agents ensure visual excellence and code integrity.

### Example: UI & Animation Review
- **Checklist**: 60 FPS scroll performance, responsive mobile padding, contrast ratios against dark backgrounds (`#121212`), smooth Framer Motion unmounting.
- **Output Format**:
  ```text
  Score: 98/100
  Status: Passed Visual Excellence Standard
  ```

---

## Phase 7 — Task History

Tracks chronological evolutions of Ashutosh's portfolio.

```text
project-brain/tasks/
├── active.md
├── completed.md
└── changelog.md
```
Each entry records changed components, visual metrics, and user authorization stamps.

---

## Phase 8 — Orchestrator Pipeline

```text
User Prompt
     ↓
Lockdown Rule Authorization Gate
     ↓
Graph Retrieval (Select specific component)
     ↓
Context Loading (< 500 tokens)
     ↓
Planning & Execution
     ↓
Static Validation (npm run build / lint)
     ↓
Confidence Scoring (≥ 90 Required)
     ↓
Response & Synchronization
```

---

## Phase 9–18 — Advanced Retrieval & Synchronization

When a portfolio section is modified (e.g., adding a project to `Projects.tsx`):
1. Only `Projects.tsx` is re-analyzed.
2. The graph node metadata for `Projects` updates its metric count.
3. Cache layers store recent project tags (`WebGL`, `Three.js`, `Next.js 14`) for rapid subsequent follow-ups.

### Summary Scorecard Acceptance
```text
Visual Aesthetics   99
TypeScript Strict   96
Animation 60FPS     98
Lockdown Adherence  100
-----------------------
Overall Portfolio   98 (ACCEPTED)
```

**Project Brain v2** ensures Ashutosh Singare's portfolio remains a cutting-edge, state-of-the-art masterpiece with zero context drift.

