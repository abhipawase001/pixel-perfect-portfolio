import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import walkVideo from "@/assets/intro-walk.mp4.asset.json";

const INTRO_LINES = ["Welcome", "To", "My Portfolio"];

export function IntroSequence({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [phase, setPhase] = useState<"walk" | "name" | "out">("walk");

  useEffect(() => {
    if (reduce) {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
    // Text appears immediately; video keeps playing underneath
    setPhase("name");
    const t2 = setTimeout(() => setPhase("out"), 1700);
    const t3 = setTimeout(onDone, 2000);
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
        <div className="font-display text-center text-5xl md:text-7xl font-extrabold tracking-tighter text-ink leading-[0.9]">
          <div>Welcome</div>
          <div className="text-cyan text-3xl md:text-5xl my-2">To</div>
          <div>My Portfolio</div>
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
        className="absolute inset-0 w-full h-full object-cover object-top bg-bg"
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

      {/* Intro text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none w-full px-4">
        <div className="flex flex-col items-center justify-center gap-1 md:gap-3">
          {INTRO_LINES.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 42, scale: 1.18, filter: "blur(14px)" }}
              animate={
                phase !== "walk"
                  ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                  : { opacity: 0, y: 42, scale: 1.18, filter: "blur(14px)" }
              }
              transition={{
                duration: 0.55,
                delay: phase !== "walk" ? i * 0.14 : 0,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className={`font-display font-extrabold leading-none tracking-normal inline-block ${
                phase === "name" && i !== 1 ? "text-glow" : ""
              }`}
              style={{
                color: i === 1 ? "#67e8f9" : "#f8fafc",
                fontSize: i === 1 ? "clamp(2rem, 7vw, 6rem)" : "clamp(3.2rem, 12vw, 11rem)",
              }}
            >
              {line}
            </motion.span>
          ))}
        </div>
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
