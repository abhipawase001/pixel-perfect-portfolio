import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import portrait from "@/assets/abhijit-portrait.jpg.asset.json";
import drishtiImg from "@/assets/project-drishti.jpg";
import milanImg from "@/assets/project-milan.jpg";
import sarthiImg from "@/assets/project-sarthi.jpg";

const skills = [
  "PYTHON", "TENSORFLOW", "PYTORCH", "C++", "SQL", "PANDAS", "NUMPY",
  "FULL-STACK", "AI / ML", "DATA SCIENCE", "CYBERSEC",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.05 },
  }),
} as const;

function Reveal({
  className = "",
  children,
  index = 0,
}: {
  className?: string;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body selection:bg-cyan selection:text-ink relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto p-4 md:p-10">
        <div className="border border-line bg-bg shadow-2xl overflow-hidden">

          {/* MASTHEAD */}
          <header className="border-b border-line flex flex-col md:flex-row">
            <div className="p-6 md:p-10 flex-1 border-b md:border-b-0 md:border-r border-line">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">
                Volume 01 // Issue 2026
              </p>
              <h1 className="font-display text-7xl md:text-9xl font-extrabold uppercase leading-[0.85] tracking-tighter">
                <span>Abhijit</span>
                <br />
                <span className="text-cyan text-glow">Pawase</span>
              </h1>
            </div>
            <div className="p-6 md:p-10 w-full md:w-80 flex flex-col justify-between bg-card">
              <div className="font-mono text-[10px] leading-relaxed text-ink/70 uppercase tracking-wider">
                AI Architect & Full-Stack Engineer
                <br />
                Google Student Ambassador
                <br />
                B.Tech AI & DS @ Amrutvahini
              </div>
              <div className="mt-8">
                <p className="font-mono text-xs text-cyan mb-2 uppercase tracking-widest">
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide">AVAILABLE FOR HIRE</span>
                </div>
              </div>
            </div>
          </header>

          {/* MAIN GRID */}
          <main className="grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT: Statement + projects */}
            <section className="lg:col-span-8 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-line">
              <Reveal className="mb-12" index={0}>
                <span className="px-3 py-1 bg-cyan text-ink text-xs font-mono uppercase tracking-widest mb-6 inline-block">
                  The Statement
                </span>
                <p className="font-body text-2xl md:text-4xl font-medium leading-snug tracking-tight text-ink/95">
                  Crafting the future of{" "}
                  <span className="text-cyan-soft">data-driven intelligence</span>{" "}
                  through elegant architecture and full-stack precision. Bridging the gap
                  between raw neural networks and human-centric software.
                </p>
              </Reveal>

              <div id="work" />

              {/* Featured project — Drishti */}
              <Reveal className="border border-line mb-px" index={1}>
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-7 p-6 md:p-8 border-b md:border-b-0 md:border-r border-line">
                    <div className="flex justify-between items-start mb-12">
                      <span className="font-mono text-xs text-ink/60 tracking-widest">
                        01 / AI COMPUTER VISION
                      </span>
                      <div className="size-10 border border-line grid place-items-center group cursor-pointer hover:bg-cyan hover:border-cyan transition-colors">
                        <ArrowUpRight className="size-4 text-ink" />
                      </div>
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">
                      Drishti
                    </h3>
                    <p className="text-ink/75 text-sm md:text-base leading-relaxed">
                      AI-powered crowd management & event safety platform. Real-time
                      surveillance and behavioral analysis — a thousand extra eyes for
                      security teams at scale.
                    </p>
                  </div>
                  <div className="md:col-span-5 overflow-hidden">
                    <img
                      src={drishtiImg}
                      alt="Project Drishti"
                      loading="lazy"
                      className="w-full h-full min-h-[220px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Sub project grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
                <Reveal className="bg-bg p-6 group hover:bg-card transition-colors" index={2}>
                  <div className="flex justify-between items-start mb-12">
                    <span className="font-mono text-xs text-ink/60">02 / URBAN TRANSIT</span>
                    <div className="size-10 border border-line grid place-items-center group-hover:bg-cyan group-hover:border-cyan transition-colors">
                      <ArrowUpRight className="size-4 text-ink" />
                    </div>
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase mb-3">Sarthi</h3>
                  <p className="text-ink/70 text-sm leading-relaxed mb-4">
                    Real-time bus management & driver allocation. GPS tracking, shift
                    scheduling, live seat availability.
                  </p>
                  <img
                    src={sarthiImg}
                    alt="Project Sarthi"
                    loading="lazy"
                    className="w-full aspect-[16/9] object-cover border border-line grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </Reveal>

                <Reveal className="bg-bg p-6 group hover:bg-card transition-colors" index={3}>
                  <div className="flex justify-between items-start mb-12">
                    <span className="font-mono text-xs text-ink/60">03 / FULL-STACK</span>
                    <div className="size-10 border border-line grid place-items-center group-hover:bg-cyan group-hover:border-cyan transition-colors">
                      <ArrowUpRight className="size-4 text-ink" />
                    </div>
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase mb-3">Milan Tours</h3>
                  <p className="text-ink/70 text-sm leading-relaxed mb-4">
                    Custom full-stack platform for cab & tour booking — end-to-end
                    booking flow, admin tooling, payments.
                  </p>
                  <img
                    src={milanImg}
                    alt="Milan Tours"
                    loading="lazy"
                    className="w-full aspect-[16/9] object-cover border border-line grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </Reveal>
              </div>
            </section>

            {/* RIGHT: Profile + accolades + contact */}
            <aside className="lg:col-span-4 flex flex-col">

              <Reveal className="p-6 md:p-10 border-b border-line" index={1}>
                <img
                  src={portrait.url}
                  alt="Abhijit Pawase"
                  className="w-full aspect-[3/4] object-cover border border-line grayscale hover:grayscale-0 transition-all duration-700 mb-4"
                />
                <div className="flex justify-between font-mono text-[10px] tracking-widest text-cyan">
                  <span>SUBJECT_01</span>
                  <span>● LIVE</span>
                </div>
              </Reveal>

              <div id="about" />
              <Reveal className="p-6 md:p-10 border-b border-line" index={2}>
                <h4 className="font-mono text-xs uppercase tracking-widest text-cyan mb-8 font-bold">
                  Accolades
                </h4>
                <ul className="space-y-6">
                  {[
                    { n: "01", t: "2nd Place — Build Bharat Hackathon", sub: "Visakhapatnam, AP" },
                    { n: "02", t: "National Skating Champion", sub: "Athletics & Endurance" },
                    { n: "03", t: "Certified Ethical Hacker (CEH)", sub: "EduSkills 2025" },
                  ].map((a) => (
                    <li key={a.n} className="flex gap-4">
                      <span className="font-mono text-xs text-ink/40">{a.n}</span>
                      <div>
                        <p className="font-semibold text-sm text-ink">{a.t}</p>
                        <p className="text-xs text-ink/50 font-mono mt-1">{a.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div id="contact" />
              <Reveal className="p-6 md:p-10 bg-cyan text-ink" index={3}>
                <h4 className="font-display text-2xl font-bold uppercase mb-4">
                  Contact Registry
                </h4>
                <p className="font-mono text-xs mb-8 leading-relaxed">
                  abhipawase2005@gmail.com
                  <br />
                  +91 72197 97155
                  <br />
                  Akole 422601, India
                </p>
                <a
                  href="mailto:abhipawase2005@gmail.com"
                  className="inline-flex items-center gap-2 border border-ink/80 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-cyan transition-colors"
                >
                  <Send className="size-3" /> Send Transmission
                </a>
              </Reveal>
            </aside>
          </main>

          {/* SKILLS MARQUEE */}
          <div className="border-t border-line py-8 overflow-hidden">
            <div className="flex whitespace-nowrap" style={{ animation: "marquee-x 32s linear infinite" }}>
              {[...skills, ...skills].map((s, i) => (
                <span
                  key={i}
                  className="font-display font-extrabold uppercase text-3xl mx-8 text-ink/30 [&:nth-child(2n)]:text-cyan-soft"
                >
                  {s} <span className="text-ink/15 mx-2">/</span>
                </span>
              ))}
            </div>
          </div>

          {/* EDUCATION + CERTS */}
          <section className="grid grid-cols-1 lg:grid-cols-12 border-t border-line">
            <Reveal className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-line" index={0}>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan mb-4 block">
                Education
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold uppercase mb-4 leading-tight">
                B.Tech in AI & Data Science
              </h3>
              <p className="text-ink/75 text-base leading-relaxed mb-6 max-w-2xl">
                Amrutvahini College of Engineering, Sangamner. Pursuing the
                intersection of machine learning, full-stack systems and the kind of
                leadership that ships product.
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-ink/50 uppercase tracking-widest">
                <MapPin className="size-3 text-cyan" /> Akole 422601 · India
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5 p-6 md:p-10" index={1}>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan mb-6 block">
                Certifications
              </span>
              <ul className="divide-y divide-line">
                {[
                  { t: "Data Analytics Job Simulation", b: "Deloitte" },
                  { t: "Digital Marketing & E-commerce", b: "Google" },
                  { t: "Project Management Foundations", b: "Google" },
                  { t: "Certified Ethical Hacker (CEH)", b: "EduSkills" },
                ].map((c) => (
                  <li key={c.t} className="py-3 flex items-center justify-between gap-4">
                    <span className="text-sm text-ink">{c.t}</span>
                    <span className="px-2 py-0.5 border border-cyan/40 text-cyan font-mono text-[10px] uppercase tracking-wider shrink-0">
                      {c.b}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* COLOPHON FOOTER */}
          <footer className="border-t border-line p-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em]">
            <div className="text-ink/50">
              © 2026 Abhijit Pawase — Engineered with Conviction
            </div>
            <div className="flex gap-8">
              <a
                href="https://www.linkedin.com/in/abhijit-pawase-aab5a3228"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/70 hover:text-cyan transition-colors inline-flex items-center gap-1"
              >
                <Linkedin className="size-3" /> LinkedIn
              </a>
              <a
                href="mailto:abhipawase2005@gmail.com"
                className="text-ink/70 hover:text-cyan transition-colors inline-flex items-center gap-1"
              >
                <Mail className="size-3" /> Email
              </a>
              <a
                href="tel:+917219797155"
                className="text-ink/70 hover:text-cyan transition-colors inline-flex items-center gap-1"
              >
                <Phone className="size-3" /> Phone
              </a>
            </div>
            <div className="text-cyan">Built with Indigo-Swiss Precision</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
