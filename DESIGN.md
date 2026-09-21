# Design System Contract — Swiss Architectural Ledger (DESIGN.md)

This document is the absolute source of truth for the Swiss Architectural Ledger design system in this portfolio. Every component and style must adhere to these specifications.

## 1. Aesthetic Direction: Swiss Architectural Ledger
- **Archetype:** Swiss Modernist Technical Broadsheet & Engineering Ledger (inspired by Josef Müller-Brockmann, Massimo Vignelli, and Dieter Rams).
- **Core Philosophy:** Pure typographic authority and mathematical grid lines. Absolute zero card-in-card, zero generic SaaS grids, and zero synthetic aurora/mesh gradients.
- **Geometry:** Strict **0px border-radius** (`rounded-none`). Crisp, clean rectilinear architecture without decorative rounded bubbles.

## 2. Color Palette (Strict 5-Stop System)
- **Base Background (`--bg`):** `#0e1017` (Architectural deep matte slate, avoiding washed synthetic blacks).
- **Surface Elevation (`--bg-surface`):** `#151822` (Subtle tint for expanded dossier rows and technical matrices).
- **Hairline Grid Divider (`--border`):** `#222533` (Exact 1px hairline border rules).
- **Primary Ink (`--text-primary`):** `#f4f5f8` (Crisp readability, high contrast).
- **Secondary Ink (`--text-muted`):** `#8b90a0` (Descriptive architectural copy and metadata).
- **Accents:** `#3b82f6` (POSIX Systems Blue) & `#10b981` (Verified Invariant Emerald).
- **BANNED:** Purple-to-cyan AI gradients, text clipping gradients, and blur blobs.

## 3. Typography Hierarchy
- **Monumental Swiss Display:** `Plus Jakarta Sans` / `Inter`, weight 700 to 800, tight tracking (`tracking-tighter` / `-0.03em`), line-height 1.05 to 1.15.
- **Editorial Prose:** `Inter`, weight 300 to 400, line-height 1.6.
- **System Monospace:** `JetBrains Mono` — **STRICTLY reserved** for code, syscall signatures, memory addresses, and technical dates.

## 4. Architectural Rules
- **Container Max-Width:** `max-w-7xl mx-auto px-4 sm:px-8 lg:px-12`.
- **The Ledger Table:** Projects are presented in an expandable technical registry ledger with column headers, index numbers, inline deep dossiers, and zero floating cards.
- **Hairline Division Pattern:** Full-width structural rulers (`border-b border-[#222533]`, `divide-y divide-[#222533]`).
- **No Card-in-Card:** One single containment layer, or open grid whitespace.
