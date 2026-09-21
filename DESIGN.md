# Design System Contract (DESIGN.md)

This document is the absolute source of truth for UI/UX design in this portfolio. Every AI agent, tool, and developer must comply with these specifications.

## 1. Aesthetic Direction
- **Archetype:** Open Widescreen Editorial Index (inspired by Paco Coursey, Linear, and Swiss Typography).
- **Core Philosophy:** Typography carries the personality. Whitespace and hairline dividers define hierarchy. No generic card grids or nested boxes.

## 2. Color Palette (Strict 5-Stop System)
- **Base Background (`--bg`):** `#12141c` (Soft dark neutral, avoiding synthetic `#000000`).
- **Surface Elevation (`--bg-surface`):** `#181b26` (Subtle tint for elevated interactive components).
- **Hairline Divider (`--border`):** `#232635` (1px subtle border, no heavy 2px or colored strokes).
- **Primary Ink (`--text-primary`):** `#f0f2f5` (High-contrast, crisp readability).
- **Muted Ink (`--text-muted`):** `#8e94a5` (Descriptive text and metadata).
- **Single Accent:** `#3b82f6` (System Blue) & `#10b981` (Verified Emerald).
- **BANNED:** No purple/cyan gradients, no neon glows, no aurora blobs.

## 3. Typography Scale & Pairing
- **Display & Headings:** `Plus Jakarta Sans` / `Inter`, semi-bold (weight 600), tight tracking (`tracking-tight`), line-height 1.15.
- **Body & Editorial:** `Inter`, font-weight 300 to 400, line-height 1.6, line length < 80 characters.
- **System & Code:** `JetBrains Mono` / monospace — **STRICTLY reserved** for actual code blocks, terminal logs, and technical dates. Never use monospace for general badges, labels, or titles.

## 4. Layout Rules
- **Container Max-Width:** `max-w-7xl mx-auto px-6 sm:px-10 lg:px-12`.
- **Division Pattern:** Use open hairline rules (`divide-y divide-[#232635]` or `border-t border-[#232635]`).
- **Zero Card-in-Card:** Never wrap dates, icons, or badges in micro-boxes inside an existing container.
- **Dedicated Filter Row:** Filter buttons must always sit on their own full-width row with `overflow-x-auto min-w-max`, never squeezed into a flex header.
