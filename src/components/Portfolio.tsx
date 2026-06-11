import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import portrait from "@/assets/abhijit-portrait.jpg.asset.json";
import drishtiImg from "@/assets/project-drishti.jpg";
import milanImg from "@/assets/project-milan.jpg";
import sarthiImg from "@/assets/project-sarthi.jpg";

const skills = [
  "PYTHON", "TENSORFLOW", "PYTORCH", "C++", "SQL", "PANDAS", "NUMPY",
  "FULL-STACK", "AI / ML", "DATA SCIENCE", "CYBERSEC",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.06 },
  }),
} as const;

function Tile({
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
      viewport={{ once: true, margin: "-80px" }}
      className={`relative rounded-2xl border border-line bg-card overflow-hidden group transition-colors duration-500 hover:border-cyan/40 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 [background:radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(0,245,255,0.08),transparent_60%)]" />
      {children}
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body selection:bg-cyan selection:text-bg relative overflow-x-hidden">
      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-30 mix-blend-overlay">
        <div
          className="absolute inset-x-0 h-[120px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(0,245,255,0.06), transparent)",
            animation: "scanline-move 6s linear infinite",
          }}
        />
      </div>
      {/* Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Top nav */}
      <header className="relative z-20 max-w-[1400px] mx-auto px-4 md:px-8 pt-6 flex items-center justify-between">
        <div className="font-display font-extrabold tracking-tighter text-xl">
          AP<span className="text-cyan">.</span>
        </div>
        <nav className="hidden md:flex gap-8 font-mono text-[11px] tracking-widest text-ink/50">
          <a href="#work" className="hover:text-cyan transition-colors">WORK</a>
          <a href="#about" className="hover:text-cyan transition-colors">ABOUT</a>
          <a href="#contact" className="hover:text-cyan transition-colors">CONTACT</a>
        </nav>
        <a
          href="mailto:abhipawase2005@gmail.com"
          className="font-mono text-[11px] tracking-widest border border-line hover:border-cyan hover:text-cyan transition-colors px-3 py-2 rounded-sm"
        >
          HIRE ME ↗
        </a>
      </header>

      <main className="relative z-20 max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* BENTO GRID */}
        <section className="grid grid-cols-4 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(120px,auto)]">
          {/* HERO */}
          <Tile className="col-span-4 md:col-span-8 md:row-span-2 p-8 md:p-12 min-h-[440px] flex flex-col justify-end" index={0}>
            <div className="absolute top-6 right-6 font-mono text-[10px] text-cyan/40 tracking-widest">
              EST_2005 // AKOLE.IN
            </div>
            <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[10px] text-cyan tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
              </span>
              AVAILABLE FOR WORK
            </div>
            <h1 className="font-display font-extrabold leading-[0.82] tracking-tighter text-[clamp(3rem,9vw,8rem)] mb-6">
              ABHIJIT<br />
              <span className="text-cyan" style={{ textShadow: "0 0 40px rgba(0,245,255,0.4)" }}>
                PAWASE.
              </span>
            </h1>
            <p className="text-base md:text-xl text-ink/60 max-w-xl leading-relaxed">
              AI architect & full-stack engineer crafting the future of
              <span className="text-ink"> data-driven intelligence</span>.
              Google Student Ambassador. National Skating Champion.
            </p>
          </Tile>

          {/* PORTRAIT */}
          <Tile className="col-span-2 md:col-span-4 md:row-span-2 min-h-[440px]" index={1}>
            <img
              src={portrait.url}
              alt="Abhijit Pawase"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] tracking-widest text-cyan/80 flex justify-between">
              <span>SUBJECT_01</span>
              <span>● LIVE</span>
            </div>
          </Tile>

          {/* STATUS / GOOGLE */}
          <Tile className="col-span-2 md:col-span-3 p-6 bg-cyan border-cyan text-bg" index={2}>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest mb-8">
              ROLE / 01
            </div>
            <div className="font-display font-extrabold text-3xl md:text-4xl leading-none">
              Google Student Ambassador
            </div>
          </Tile>

          {/* HACKATHON */}
          <Tile className="col-span-2 md:col-span-3 p-6" index={3}>
            <div className="font-mono text-[10px] text-cyan tracking-widest mb-8">
              AWARD / 02
            </div>
            <div className="font-display font-extrabold text-4xl text-cyan mb-1">2nd</div>
            <div className="text-sm font-semibold">Build Bharat Hackathon</div>
            <div className="text-xs text-ink/50 mt-1">Visakhapatnam, AP</div>
          </Tile>

          {/* SKILLS MARQUEE */}
          <Tile className="col-span-4 md:col-span-6 h-32 flex items-center" index={4}>
            <div className="flex whitespace-nowrap" style={{ animation: "marquee-x 28s linear infinite" }}>
              {[...skills, ...skills].map((s, i) => (
                <span
                  key={i}
                  className="font-display font-bold uppercase text-2xl mx-8 text-ink/20 [&:nth-child(2n)]:text-cyan"
                >
                  {s}
                </span>
              ))}
            </div>
          </Tile>

          {/* PROJECT — DRISHTI */}
          <div id="work" />
          <Tile className="col-span-4 md:col-span-7 md:row-span-2" index={5}>
            <div className="p-8 pb-4">
              <div className="flex justify-between items-start mb-10">
                <span className="font-mono text-[10px] py-1 px-2 border border-line rounded-full text-cyan">
                  AI / COMPUTER VISION
                </span>
                <div className="size-10 rounded-full border border-line grid place-items-center group-hover:bg-cyan group-hover:border-cyan transition-all duration-300">
                  <ArrowUpRight className="size-4 text-ink group-hover:text-bg transition-colors" />
                </div>
              </div>
              <h3 className="font-display font-extrabold text-3xl md:text-5xl uppercase tracking-tight mb-3">
                Project Drishti
              </h3>
              <p className="text-ink/60 text-sm md:text-base max-w-md mb-6">
                AI-powered crowd management & event safety platform. Acts as a
                thousand extra eyes for security teams — real-time surveillance,
                behavioral analysis, and proactive response at scale.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src={drishtiImg}
                alt="Project Drishti"
                loading="lazy"
                className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </Tile>

          {/* PROJECT — SARTHI */}
          <Tile className="col-span-4 md:col-span-5 p-6" index={6}>
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-[10px] text-cyan tracking-widest">
                03 / TRANSIT SYSTEM
              </span>
              <span className="font-mono text-[10px] text-ink/40">ACTIVE</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl uppercase mb-3">
              Project Sarthi
            </h3>
            <p className="text-ink/60 text-sm mb-6">
              Real-time bus management & driver allocation system. GPS tracking,
              automated shift scheduling, live seat availability.
            </p>
            <div className="overflow-hidden rounded-lg border border-line">
              <img
                src={sarthiImg}
                alt="Project Sarthi"
                loading="lazy"
                className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Tile>

          {/* PROJECT — MILAN TOURS */}
          <Tile className="col-span-4 md:col-span-5 p-6" index={7}>
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-[10px] text-cyan tracking-widest">
                04 / FULL-STACK
              </span>
              <span className="font-mono text-[10px] text-ink/40">SHIPPED</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl uppercase mb-3">
              Milan Tours
            </h3>
            <p className="text-ink/60 text-sm mb-6">
              Custom full-stack web platform for a cab & tour booking service.
              End-to-end booking flow, admin tooling, payments.
            </p>
            <div className="overflow-hidden rounded-lg border border-line">
              <img
                src={milanImg}
                alt="Milan Tours"
                loading="lazy"
                className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Tile>

          {/* ACHIEVEMENTS */}
          <Tile className="col-span-4 md:col-span-7 p-8" index={8}>
            <div className="font-mono text-[10px] text-ink/40 tracking-widest mb-6 uppercase">
              Merit & Recognition
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-cyan font-display font-extrabold text-3xl">2nd</div>
                <div className="text-sm font-semibold mt-1">Build Bharat Hackathon</div>
                <div className="text-[11px] text-ink/40 mt-1">National-level, AP</div>
              </div>
              <div>
                <div className="text-ink font-display font-extrabold text-3xl">Champion</div>
                <div className="text-sm font-semibold mt-1">National Skating</div>
                <div className="text-[11px] text-ink/40 mt-1">Madhya Pradesh</div>
              </div>
              <div>
                <div className="text-ink font-display font-extrabold text-3xl">CEH</div>
                <div className="text-sm font-semibold mt-1">Ethical Hacker</div>
                <div className="text-[11px] text-ink/40 mt-1">EduSkills 2025</div>
              </div>
            </div>
          </Tile>

          {/* ABOUT */}
          <Tile id-anchor="about" className="col-span-4 md:col-span-5 p-8" index={9}>
            <div id="about" />
            <div className="font-mono text-[10px] text-cyan tracking-widest mb-4">
              ABOUT // EDU
            </div>
            <h3 className="font-display text-2xl font-extrabold mb-3 leading-tight">
              B.Tech in AI & Data Science
            </h3>
            <p className="text-ink/60 text-sm leading-relaxed mb-4">
              Currently at Amrutvahini College of Engineering, Sangamner.
              Pursuing the intersection of machine learning, full-stack
              systems and the kind of leadership that ships product.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-ink/40">
              <MapPin className="size-3" /> Akole 422601, India
            </div>
          </Tile>

          {/* CERTS */}
          <Tile className="col-span-4 md:col-span-6 p-6" index={10}>
            <div className="font-mono text-[10px] text-ink/40 tracking-widest mb-4 uppercase">
              Certifications
            </div>
            <div className="space-y-3">
              {[
                { tag: "DL", t: "Data Analytics Job Simulation", b: "Deloitte" },
                { tag: "G", t: "Foundations of Digital Marketing & E-commerce", b: "Google" },
                { tag: "G", t: "Foundations of Project Management", b: "Google" },
                { tag: "CE", t: "Certified Ethical Hacker (CEH)", b: "EduSkills" },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-3 py-2 border-b border-line/60 last:border-0">
                  <div className="size-8 shrink-0 rounded bg-card-2 border border-line grid place-items-center font-mono text-[10px] text-cyan">
                    {c.tag}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm truncate">{c.t}</div>
                    <div className="text-[11px] text-ink/40">{c.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </Tile>

          {/* STATS */}
          <Tile className="col-span-2 md:col-span-3 p-6 flex flex-col justify-between" index={11}>
            <div className="font-mono text-[10px] text-ink/40 tracking-widest uppercase">Projects</div>
            <div className="font-display font-extrabold text-6xl text-cyan leading-none">03</div>
            <div className="text-xs text-ink/50">shipped & growing</div>
          </Tile>
          <Tile className="col-span-2 md:col-span-3 p-6 flex flex-col justify-between" index={12}>
            <div className="font-mono text-[10px] text-ink/40 tracking-widest uppercase">Awards</div>
            <div className="font-display font-extrabold text-6xl leading-none">04+</div>
            <div className="text-xs text-ink/50">hackathon + sport</div>
          </Tile>

          {/* CONTACT */}
          <div id="contact" />
          <Tile className="col-span-4 md:col-span-12 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8" index={13}>
            <div>
              <div className="font-mono text-[10px] text-cyan tracking-widest mb-3 uppercase">
                Let's build something bold
              </div>
              <div className="font-display font-extrabold text-3xl md:text-5xl tracking-tighter leading-[0.9] max-w-xl">
                Got an idea? <span className="text-cyan">Let's ship it.</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="mailto:abhipawase2005@gmail.com"
                className="flex items-center gap-2 px-5 py-3 bg-cyan text-bg font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                <Mail className="size-4" /> abhipawase2005@gmail.com
              </a>
              <a
                href="tel:+917219797155"
                className="flex items-center gap-2 px-5 py-3 border border-line hover:border-cyan transition-colors rounded-sm font-mono text-sm"
              >
                <Phone className="size-4" /> +91 72197 97155
              </a>
              <a
                href="https://www.linkedin.com/in/abhijit-pawase-aab5a3228"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-line hover:border-cyan transition-colors rounded-sm font-mono text-sm"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </div>
          </Tile>
        </section>

        <footer className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-[10px] tracking-widest text-ink/40 uppercase">
          <span>© 2026 Abhijit Pawase — engineered with conviction</span>
          <span>Akole · India</span>
        </footer>
      </main>
    </div>
  );
}
