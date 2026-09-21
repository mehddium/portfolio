# Anti-AI-Slop Frontend Design Rules

## Scope
Applies to all files in `src/components/**` and `src/app/**`.

## Inviolable Design Constraints
1. **Never Nest Containers (Anti-Card-in-Card):**
   - If an element is already inside a section or card, do not wrap its sub-elements (dates, badges, icons) in bordered background boxes.
   - Use plain text with appropriate weight, color, or simple dividers.

2. **No Repetitive Mechanical Templates:**
   - Projects must never share an identical formulaic checklist (e.g. 3 bullet points with green checkmarks).
   - Use editorial narrative, architecture specifics, and authentic technical copy.

3. **Dedicated Filter Lines:**
   - Category selectors and filter tabs must always occupy their own full-width line with horizontal scroll support (`overflow-x-auto min-w-max`). Never squeeze them into the corner of a flex header.

4. **Typography-First Layout:**
   - Hierarchy is established through font scale, line-height, and contrast, not by boxing everything in rectangles.
   - Restrict monospace exclusively to actual code snippets and raw data (dates, commit hashes).

5. **Palette Discipline:**
   - No purple/cyan gradients.
   - No aurora mesh blobs.
   - Use solid, authentic ink on soft dark surfaces defined in `DESIGN.md`.
