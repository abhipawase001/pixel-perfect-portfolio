import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import walkVideo from "@/assets/intro-walk.mp4.asset.json";

const NAME = "ABHIJIT PAWASE";

export function IntroSequence({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [phase, setPhase] = useState<"walk" | "name" | "out">("walk");

  useEffect(() => {
    if (reduce) {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
    // Text appears immediately (1s earlier); video keeps playing underneath
    setPhase("name");
    const t2 = setTimeout(() => setPhase("out"), 5700);
    const t3 = setTimeout(onDone, 6000);
    return () => {
      
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduce, onDone]);

  if (reduce) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[100] bg-bg grid place-items-center"
      >
        <div className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-ink">
          ABHIJIT <span className="text-cyan">PAWASE</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "out" ? 0 : 1, scale: phase === "out" ? 1.04 : 1 }}
      transition={{ duration: 0.3, ease: [0.3, 0, 0, 1] as const }}
      className="fixed inset-0 z-[100] bg-bg overflow-hidden"
    >
      {/* Walking video — full-body preset: contained, top-aligned so face/head never crops */}
      <video
        ref={videoRef}
        src={walkVideo.url}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-contain object-top bg-bg"
      />


      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(10,10,26,0.55) 75%, rgba(10,10,26,0.95) 100%)",
        }}
      />

      {/* Indigo wash */}
      <div className="absolute inset-0 pointer-events-none bg-cyan/[0.06] mix-blend-overlay" />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* HUD readouts */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-cyan-soft tracking-widest">
        REC ● 00:00:0{phase === "walk" ? "1" : phase === "name" ? "3" : "5"}
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-cyan-soft tracking-widest">
        FRAME // PAWASE.A
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-ink/50 tracking-widest">
        [ 19.5347° N, 74.0238° E ]
      </div>

      {/* WELCOME label */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: phase !== "walk" ? 1 : 0,
          y: phase !== "walk" ? 0 : -8,
        }}
        transition={{ duration: 0.5 }}
        className="absolute top-[18%] left-1/2 -translate-x-1/2 font-mono text-xs md:text-sm tracking-[0.6em] text-cyan-soft"
      >
        — WELCOME —
      </motion.div>

      {/* Name — per-letter crash in */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none w-full px-4">
        {/* Hairline rules */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase !== "walk" ? 1 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
            className="origin-right h-px w-24 md:w-48 bg-cyan"
          />
          <span className="font-mono text-[10px] tracking-[0.4em] text-cyan-soft/80">EST. 2005</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase !== "walk" ? 1 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
            className="origin-left h-px w-24 md:w-48 bg-cyan"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-[0.18em]">
          {NAME.split("").map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              initial={{ opacity: 0, y: 60, scale: 1.4, filter: "blur(18px)" }}
              animate={
                phase !== "walk"
                  ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                  : { opacity: 0, y: 60, scale: 1.4, filter: "blur(18px)" }
              }
              transition={{
                duration: 0.65,
                delay: phase !== "walk" ? 0.25 + i * 0.06 : 0,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className={`font-display font-extrabold leading-none tracking-tighter inline-block uppercase ${
                phase === "name" ? "text-glow" : ""
              }`}
              style={{
                color: ch === " " ? "transparent" : "#f8fafc",
                fontSize: "clamp(2.8rem, 11vw, 11rem)",
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </div>

        {/* Tagline under */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: phase === "name" ? 1 : 0,
            y: phase === "name" ? 0 : 12,
          }}
          transition={{ duration: 0.6, delay: phase === "name" ? 1.4 : 0 }}
          className="mt-6 font-mono text-[10px] md:text-xs tracking-[0.5em] text-cyan"
        >
          AI ARCHITECT · ENGINEER · BUILDER
        </motion.div>
      </div>

      {/* Skip */}
      <button
        onClick={onDone}
        className="absolute bottom-6 right-6 z-30 font-mono text-[11px] tracking-widest text-ink/60 hover:text-cyan transition-colors px-3 py-2 border border-line rounded-sm"
      >
        SKIP INTRO →
      </button>
    </motion.div>
  );
}
