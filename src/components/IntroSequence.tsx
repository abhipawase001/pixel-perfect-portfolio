import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import walkingAsset from "@/assets/abhijit-walking.png";

const NAME = ["ABHIJIT", "PAWASE"];

export function IntroSequence({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"walk" | "name" | "out">("walk");

  useEffect(() => {
    if (reduce) {
      const t = setTimeout(onDone, 400);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setPhase("name"), 3200);
    const t2 = setTimeout(() => setPhase("out"), 5400);
    const t3 = setTimeout(onDone, 6200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduce, onDone]);

  if (reduce) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] bg-bg"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "out" ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.3, 0, 0, 1] as const }}
      className="fixed inset-0 z-[100] bg-bg overflow-hidden flex items-end justify-center"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 100%, rgba(0,245,255,0.10), transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.02), transparent 70%)",
      }}
    >
      {/* Floor reflection */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Coordinate readouts */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-cyan/60 tracking-widest">
        REC ● 00:00:0{phase === "walk" ? "1" : phase === "name" ? "3" : "5"}
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-cyan/60 tracking-widest">
        FRAME // PAWASE.A
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-ink/40 tracking-widest">
        [ 19.5347° N, 74.0238° E ]
      </div>

      {/* Walking figure */}
      <motion.img
        src={walkingAsset}
        alt=""
        initial={{ scale: 0.06, y: 40, opacity: 0, filter: "blur(8px)" }}
        animate={
          phase === "walk"
            ? { scale: 1, y: 0, opacity: 1, filter: "blur(0px)" }
            : phase === "name"
              ? { scale: 1, y: 0, opacity: 1, filter: "blur(0px)" }
              : { scale: 1.05, y: -20, opacity: 0, filter: "blur(6px)" }
        }
        transition={{
          duration: phase === "out" ? 0.7 : 3.0,
          ease: phase === "out" ? "easeIn" as const : [0.22, 1, 0.36, 1] as const,
        }}
        className="relative z-10 h-[88vh] w-auto object-contain select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(0,245,255,0.25)]"
        draggable={false}
      />

      {/* WELCOME label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: phase !== "walk" ? 1 : 0, y: phase !== "walk" ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        className="absolute top-[14%] left-1/2 -translate-x-1/2 font-mono text-xs md:text-sm tracking-[0.5em] text-cyan"
      >
        — WELCOME —
      </motion.div>

      {/* Name crash-in */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
        {NAME.map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, scale: 1.6, y: -40, filter: "blur(20px)" }}
            animate={
              phase !== "walk"
                ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, scale: 1.6, y: -40, filter: "blur(20px)" }
            }
            transition={{
              duration: 0.7,
              delay: phase !== "walk" ? i * 0.18 : 0,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className={`font-display font-extrabold leading-[0.85] tracking-tighter text-[clamp(3rem,12vw,11rem)] ${phase === "name" ? "text-glow" : ""}`}
            style={{
              color: i === 0 ? "#fff5f5" : "#ff2a3d",
              animation: phase === "name" ? `glitch 0.3s steps(2) ${0.6 + i * 0.18}s 2` : undefined,
              textShadow:
                i === 1
                  ? "0 0 40px rgba(255,42,61,0.6), 0 0 80px rgba(255,42,61,0.3)"
                  : "0 0 24px rgba(255,245,245,0.25)",
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Skip button */}
      <button
        onClick={onDone}
        className="absolute bottom-6 right-6 z-30 font-mono text-[11px] tracking-widest text-ink/50 hover:text-cyan transition-colors px-3 py-2 border border-line rounded-sm"
      >
        SKIP INTRO →
      </button>
    </motion.div>
  );
}
