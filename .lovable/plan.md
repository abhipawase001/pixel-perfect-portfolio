## Goal
Two things, in one pass:
1. Replace the still-image walk with a real **6-second cinematic video intro** (3s walk-in + 3s stylish "Welcome" reveal).
2. Rebuild the portfolio body in the **Brutalist Midnight-Indigo magazine** template you picked.

---

## Part 1 — Cinematic Video Intro (6s total)

### Generate the walking video
- `videogen--generate_video` → `src/assets/intro-walk.mp4`
- Prompt: *Young man in sharp black formal outfit walking confidently from the far end of a dark cinematic corridor toward the camera. Slow strong stride, slight motion blur on legs, deep 3D perspective, moody dark indigo background with soft rim-light, fog and dust particles in the air, shallow depth of field. He approaches and stops centered facing camera in the final second. Cinematic 35mm, color grade: blacks + indigo + soft warm skin tones.*
- Settings: 16:9, 1080p, 5s, `camera_fixed: true` (stable framing so depth reads cleanly)
- Likeness disclaimer: the video model can't match your face precisely — it'll be a stylized figure walking in. If you want exact likeness, we'd need a different pipeline (still photo + 3D camera move). I'll proceed with the cinematic stylized version unless you say otherwise.

### Rewrite `src/components/IntroSequence.tsx`
- Replace the `<motion.img>` walking PNG with an HTML `<video>` (autoplay, muted, playsInline, no controls), full-screen `object-cover`
- Phase timing (total 6000ms):
  - **0 – 3000ms** — video plays (walk approach)
  - **3000ms** — pause video on its current frame (`videoRef.current.pause()`), trigger Welcome phase
  - **3000 – 6000ms** — "WELCOME" mono label fades down + "ABHIJIT PAWASE" Syne crash-in with per-letter stagger, indigo glow pulse, subtle glitch
  - **5700 – 6000ms** — whole overlay fades + scales up, calls `onDone()`
- Stylish Welcome treatment:
  - Top label: `— WELCOME —` JetBrains Mono, letter-spaced, indigo `#6366f1`
  - Name: Syne 800, clamp(4rem, 14vw, 13rem), per-letter `framer-motion` stagger (0.06s) with `y: 60 → 0`, `scale: 1.4 → 1`, `blur(20px) → 0`, `opacity: 0 → 1`; pulsing indigo text-shadow glow (`name-glow` keyframe, retinted)
  - Hairline indigo rules sweep in left + right of the name
- Vignette + grain overlay on top of video for cinematic feel
- Reduced-motion: skip video, show static name card for 1.2s then fade
- Skip button retained (bottom-right, mono)

### Asset / styles
- Keep `intro-walk.mp4` in `src/assets/` (auto-bundled by Vite). If size > limits, move to CDN via migrate-to-assets — decide after generation.
- Retune `name-glow` keyframe in `styles.css` to indigo rgb `99, 102, 241`.

---

## Part 2 — Brutalist Midnight-Indigo Portfolio

### `src/styles.css`
Swap palette tokens (token names kept so consumers don't change):
- `--color-bg #0a0a1a`, `--color-card #141432`, `--color-card-2 #0f0f24`, `--color-line #1e1e5a`
- `--color-cyan #4f46e5` (now indigo accent), `--color-cyan-soft #6366f1`
- `--color-ink #f8fafc`, `--color-dim #b0b0cc`
- Update `name-glow` keyframe to indigo

### `src/components/Portfolio.tsx` — full rewrite to match the chosen Brutalist Edition prototype
1. **Brutalist container** — `border border-line` wrapping the page (magazine frame)
2. **Masthead** — split row: left = `Volume 01 // Issue 2026` label + huge `ABHIJIT / PAWASE` (Syne 7xl→9xl, indigo glow on PAWASE); right = 320px `bg-card` panel with role lines + pulsing indigo dot "AVAILABLE FOR HIRE"
3. **Main 12-col grid**:
   - **Left col-span-8**: indigo "THE STATEMENT" pill → large standfirst (Plus Jakarta 2xl/4xl) with "data-driven intelligence" highlighted in indigo → 2-col project grid (Drishti, Sarthi) — each cell has arrow-icon corner that flips to indigo on hover, hairline-divider grid (`gap-px bg-line`)
   - **Right col-span-4**: "Accolades" numbered list (Build Bharat 2nd, National Skating, CEH); below it a solid **indigo contact panel** (`bg-[#4f46e5]`) with email/phone + bordered "Send Transmission" mailto button
4. **Full-width Milan Tours row** below main grid, same brutalist hairline frame
5. **Skills marquee strip** — reuses existing `marquee-x` keyframe, indigo accents
6. **Education / About row** — B.Tech AI & DS, Amrutvahini, Akole
7. **Certifications list** — 4 mono rows, indigo tag chips
8. **Colophon footer** — 3-cell row: © line · LinkedIn/GitHub/Email mono links · "Built with Indigo-Swiss Precision"
9. Framer Motion: per-section `fadeUp` `whileInView`, hover lift on project cells, grayscale→color on imagery
10. Preserve all real content: contact (`abhipawase2005@gmail.com`, `+91 72197 97155`, LinkedIn URL), assets (`portrait`, `drishtiImg`, `sarthiImg`, `milanImg`)

---

## Out of scope
- No backend / contact form
- No new content sections
- No routing changes (intro session-storage logic stays)

## Quick check before I build
Generating the video takes a credit. Want me to:
- **A.** Proceed and generate the cinematic walking video now (stylized figure, not your exact likeness), or
- **B.** Skip the video and instead animate the existing portrait with a 3D depth/zoom illusion (no new generation)?

If you don't reply, I'll go with **A**.
