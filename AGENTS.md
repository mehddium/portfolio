# Workspace Guidelines & Anti-AI-Slop Mandate

You are working on the portfolio of Mehdi, a Software & Systems Engineer (C / POSIX & Next.js Fullstack).

## Core Mandate: Eliminate AI Slop & Generic Templates

You are strictly prohibited from generating default, generic "AI-slop" frontend interfaces. Every design choice must feel authored by a human designer with a distinct point of view.

### 1. Banned Visual Anti-Patterns (The 57 Slop Gates)
- **NO Card-in-Card Nesting:** Never put a card inside another card, or enclose dates, icons, or chips in micro-boxes inside containers. One containment layer maximum, or use open editorial whitespace with hairline dividers.
- **NO Generic 3-Column SaaS Feature Grids:** Never generate 3 equal-width boxes with an icon above a title above 3 lines of text.
- **NO Cookie-Cutter Project Cards:** Never generate identical repeating cards with 3 green checkmarks (`Check` icon x3). Every project must have its own technical voice, real architecture description, and tailored layout.
- **NO Centered Squeezed Headers:** Never cram filter tabs into the right side of a flex container next to a title. Filters must have their own dedicated row with horizontal scrolling on mobile.
- **NO Gradient Text / Gradient Backgrounds:** No `bg-gradient-to-r from-purple-500 to-cyan-500` and no text clipping gradients. Use solid ink and disciplined contrast.
- **NO Monotone Typography:** Do not use a single font family (Inter everywhere) for everything. Use deliberate hierarchy and pairing. Never use all-caps for labels unless explicitly required.
- **NO AI Chrome:** No tracked-out all-caps eyebrows above every title (e.g. `01 // PROJETS`). No generic middle-dot chains (`A · B · C`). No fake code editor widgets with mocked typing.

### 2. Mandatory Design Process
Before generating or editing frontend UI code:
1. **Consult `DESIGN.md`:** Always adhere to the tokens, type scales, and spacing defined in `DESIGN.md`.
2. **Consult `.agents/skills/designer-craft/SKILL.md`:** When refactoring UI, invoke and follow the designer-craft skill principles.
3. **Execute Pre-Emit Self-Critique:** Ask: "Does this look like an LLM template? Are there nested boxes? Are cards repeating mechanically?" If yes, break the grid, remove the boxes, and let the typography breathe.
