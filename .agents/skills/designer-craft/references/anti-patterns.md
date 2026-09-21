# Anti-Patterns — The Named Tells of AI Slop

Derived from Hallmark and Anthropic Frontend Design benchmarks.

## 1. Structural Anti-Patterns
- **Card-in-Card:** Wrapping cards inside another card, or boxing icons/dates/tags in individual bordered divs inside a container.
- **The SaaS-Card Matrix:** Chopping every section into identical rounded rectangles (`rounded-2xl bg-[#161824] border border-[#25293a] p-6`).
- **The 3-Column Feature Clone:** 3 equal columns with an icon above a title above 3 lines of text.
- **The Squeezed Filter Header:** Placing filter buttons on the right side of a flex container next to a long title, causing them to wrap onto 2 awkward lines.
- **The Full-Viewport Centered Void:** `min-h-screen flex flex-col justify-center items-center` with one centered sentence and a giant CTA button.

## 2. Typographic Anti-Patterns
- **Inter-Everywhere / Monotone:** Using one default sans-serif font family without distinct display hierarchy.
- **Monospace for Small Labels:** Using monospace for random tags, labels, or badges to fake "technical depth".
- **Gradient-Clipped Headlines:** `bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500`.
- **Tracked-Out ALL-CAPS Eyebrows:** Generic small uppercase labels like `OVERVIEW`, `HIGHLIGHTS`, `01 // ARCHITECTURE` above every single heading.
- **Spaced Em-Dash Chains:** `TITLE — Subtitle — Fragment`.

## 3. Decorative Anti-Patterns
- **Aurora Mesh Blobs:** Big blurred colorful gradient circles floating in the background.
- **Fake IDE/Terminal Chrome:** macOS traffic light dots (red/yellow/green) with fake code typing inside a landing page hero.
- **Identical 3-Checkmark Checklists:** Placing exactly 3 bullet points with green checkmarks under every project.
- **Pure #000000 or Pure #FFFFFF:** Stark synthetic extremes without tonal depth. Use soft darks (`#12141c`, `#161924`) and off-whites (`#f0f2f5`).
