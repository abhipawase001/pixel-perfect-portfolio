import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import portrait from "@/assets/abhijit-portrait.jpg.asset.json";
import drishtiImg from "@/assets/project-drishti.jpg";
import milanImg from "@/assets/project-milan.jpg";
import sarthiImg from "@/assets/project-sarthi.jpg";
import { animations, containerVariants, itemVariants } from "@/lib/animations";

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

// Project card component with enhanced hover animation
function ProjectCard({
  title,
  description,
  image,
  category,
  index,
}: {
  title: string;
  description: string;
  image: string;
  category: string;
  index: number;
}) {
  return (
    <Reveal className="bg-bg p-6 group transition-colors" index={index}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col"
      >
        <div className="flex justify-between items-start mb-12">
          <span className="font-mono text-xs text-ink/60">{category}</span>
          <motion.div
            className="size-10 border border-line grid place-items-center group-hover:bg-cyan group-hover:border-cyan transition-colors cursor-pointer"
            whileHover={{ rotate: 45, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="size-4 text-ink" />
          </motion.div>
        </div>
        <h3 className="font-display text-3xl font-bold uppercase mb-3">{title}</h3>
        <p className="text-ink/70 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full aspect-[16/9] object-cover border border-line grayscale hover:grayscale-0 transition-all duration-700"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </Reveal>
  );
}

// Skill tag with staggered animation
function SkillTag({
  skill,
  index,
  total,
}: {
  skill: string;
  index: number;
  total: number;
}) {
  return (
    <motion.span
      key={index}
      className="font-display font-extrabold uppercase text-3xl mx-8 text-ink/30 [&:nth-child(2n)]:text-cyan-soft hover:text-cyan transition-colors cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      transition={{ duration: 0.3, delay: (index % total) * 0.05 }}
      viewport={{ once: true }}
    >
      {skill} <span className="text-ink/15 mx-2">/</span>
    </motion.span>
  );
}

// Accolade item with stagger animation
function AccoladeItem({
  number,
  title,
  subtitle,
  index,
}: {
  number: string;
  title: string;
  subtitle: string;
  index: number;
}) {
  return (
    <motion.li
      key={number}
      className="flex gap-4"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.1 }}
    >
      <span className="font-mono text-xs text-ink/40">{number}</span>
      <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
        <p className="font-semibold text-sm text-ink">{title}</p>
        <p className="text-xs text-ink/50 font-mono mt-1">{subtitle}</p>
      </motion.div>
    </motion.li>
  );
}

// Certification item with hover effect
function CertItem({
  title,
  brand,
  index,
}: {
  title: string;
  brand: string;
  index: number;
}) {
  return (
    <motion.li
      key={title}
      className="py-3 flex items-center justify-between gap-4"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ x: 4 }}
    >
      <span className="text-sm text-ink">{title}</span>
      <motion.span
        className="px-2 py-0.5 border border-cyan/40 text-cyan font-mono text-[10px] uppercase tracking-wider shrink-0 cursor-default"
        whileHover={{ borderColor: "#4f46e5", backgroundColor: "rgba(79, 70, 229, 0.1)" }}
        transition={{ duration: 0.2 }}
      >
        {brand}
      </motion.span>
    </motion.li>
  );
}

// Contact button with enhanced hover
function ContactButton() {
  return (
    <motion.a
      href="mailto:abhipawase2005@gmail.com"
      className="inline-flex items-center gap-2 border border-ink/80 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-cyan transition-colors"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <Send className="size-3" />
      </motion.div>
      Send Transmission
    </motion.a>
  );
}

// Social link with icon animation
function SocialLink({
  href,
  icon: Icon,
  label,
  index,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
      rel={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "noopener noreferrer"}
      className="text-ink/70 hover:text-cyan transition-colors inline-flex items-center gap-1"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 4 }}
    >
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
        <Icon className="size-3" />
      </motion.div>
      {label}
    </motion.a>
  );
}

export function Portfolio({ onReplayIntro }: { onReplayIntro?: () => void }) {
  return (
    <div className="min-h-screen bg-bg text-ink font-body selection:bg-cyan selection:text-ink relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto p-4 md:p-10">
        <motion.div
          className="border border-line bg-bg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* MASTHEAD */}
          <header className="border-b border-line flex flex-col md:flex-row">
            <motion.div
              className="p-6 md:p-10 flex-1 border-b md:border-b-0 md:border-r border-line"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.p
                className="font-mono text-xs uppercase tracking-widest text-cyan mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Volume 01 // Issue 2026
              </motion.p>
              <h1 className="font-display text-7xl md:text-9xl font-extrabold uppercase leading-[0.85] tracking-tighter">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  display="block"
                >
                  Abhijit
                </motion.span>
                <motion.span
                  className="text-cyan text-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  display="block"
                >
                  Pawase
                </motion.span>
              </h1>
            </motion.div>
            <motion.div
              className="p-6 md:p-10 w-full md:w-80 flex flex-col justify-between bg-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="font-mono text-[10px] leading-relaxed uppercase tracking-wider"
                style={{ color: "#ff2d2d", textShadow: "0 0 6px #ff2d2d, 0 0 14px rgba(255,45,45,0.7)" }}
              >
                AI Architect & Full-Stack Engineer
                <br />
                Google Student Ambassador
                <br />
                B.Tech AI & DS @ Amrutvahini
              </div>
              <div className="mt-8 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-cyan mb-2 uppercase tracking-widest">
                    Status
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
                    </span>
                    <span className="text-sm font-semibold tracking-wide" style={{ color: "#080808", textShadow: "0 0 8px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)" }}>AVAILABLE FOR HI[...]
                    </span>
                  </div>
                </div>
                {onReplayIntro && (
                  <motion.button
                    onClick={onReplayIntro}
                    className="shrink-0 font-mono text-[10px] tracking-widest uppercase border border-line hover:border-cyan hover:text-cyan transition-colors px-2 py-1 rounded-sm"
                    title="Replay intro"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▶ Replay
                  </motion.button>
                )}
              </div>
            </motion.div>
          </header>

          {/* MAIN GRID */}
          <main className="grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT: Statement + projects */}
            <section className="lg:col-span-8 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-line">
              <Reveal className="mb-12" index={0}>
                <motion.span
                  className="px-3 py-1 bg-cyan text-ink text-xs font-mono uppercase tracking-widest mb-6 inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  The Statement
                </motion.span>
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
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-12"
                  whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.02)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="md:col-span-7 p-6 md:p-8 border-b md:border-b-0 md:border-r border-line">
                    <div className="flex justify-between items-start mb-12">
                      <span className="font-mono text-xs text-ink/60 tracking-widest">
                        01 / AI COMPUTER VISION
                      </span>
                      <motion.div
                        className="size-10 border border-line grid place-items-center group cursor-pointer hover:bg-cyan hover:border-cyan transition-colors"
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight className="size-4 text-ink" />
                      </motion.div>
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
                  <motion.div
                    className="md:col-span-5 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={drishtiImg}
                      alt="Project Drishti"
                      loading="lazy"
                      className="w-full h-full min-h-[220px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </motion.div>
              </Reveal>

              {/* Sub project grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
                <ProjectCard
                  title="Sarthi"
                  category="02 / URBAN TRANSIT"
                  description="Real-time bus management & driver allocation. GPS tracking, shift scheduling, live seat availability."
                  image={sarthiImg}
                  index={1}
                />
                <ProjectCard
                  title="Milan Tours"
                  category="03 / FULL-STACK"
                  description="Custom full-stack platform for cab & tour booking — end-to-end booking flow, admin tooling, payments."
                  image={milanImg}
                  index={2}
                />
              </div>
            </section>

            {/* RIGHT: Profile + accolades + contact */}
            <aside className="lg:col-span-4 flex flex-col">

              <Reveal className="p-6 md:p-10 border-b border-line" index={1}>
                <motion.img
                  src={portrait.url}
                  alt="Abhijit Pawase"
                  className="w-full aspect-[3/4] object-cover border border-line mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex justify-between font-mono text-[10px] tracking-widest text-cyan">
                  <span>SUBJECT_01</span>
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ● LIVE
                  </motion.span>
                </div>
              </Reveal>

              <div id="about" />
              <Reveal className="p-6 md:p-10 border-b border-line" index={2}>
                <h4 className="font-mono text-xs uppercase tracking-widest text-cyan mb-8 font-bold">
                  Accolades
                </h4>
                <motion.ul
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                >
                  {[
                    { n: "01", t: "2nd Place — Build Bharat Hackathon", sub: "Visakhapatnam, AP" },
                    { n: "02", t: "National Skating Champion", sub: "Athletics & Endurance" },
                    { n: "03", t: "Certified Ethical Hacker (CEH)", sub: "EduSkills 2025" },
                  ].map((a, idx) => (
                    <AccoladeItem key={a.n} number={a.n} title={a.t} subtitle={a.sub} index={idx} />
                  ))}
                </motion.ul>
              </Reveal>

              <div id="contact" />
              <Reveal className="p-6 md:p-10 bg-cyan text-ink" index={3}>
                <motion.h4
                  className="font-display text-2xl font-bold uppercase mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Contact Registry
                </motion.h4>
                <p className="font-mono text-xs mb-8 leading-relaxed">
                  abhipawase2005@gmail.com
                  <br />
                  +91 72197 97155
                  <br />
                  Akole 422601, India
                </p>
                <ContactButton />
              </Reveal>
            </aside>
          </main>

          {/* SKILLS MARQUEE */}
          <div className="border-t border-line py-8 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -50 * 11] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...skills, ...skills].map((s, i) => (
                <SkillTag key={i} skill={s} index={i} total={skills.length} />
              ))}
            </motion.div>
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
              <motion.div
                className="flex items-center gap-2 font-mono text-xs text-ink/50 uppercase tracking-widest"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="size-3 text-cyan" /> Akole 422601 · India
              </motion.div>
            </Reveal>

            <Reveal className="lg:col-span-5 p-6 md:p-10" index={1}>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan mb-6 block">
                Certifications
              </span>
              <motion.ul
                className="divide-y divide-line"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
              >
                {[
                  { t: "Data Analytics Job Simulation", b: "Deloitte" },
                  { t: "Digital Marketing & E-commerce", b: "Google" },
                  { t: "Project Management Foundations", b: "Google" },
                  { t: "Certified Ethical Hacker (CEH)", b: "EduSkills" },
                ].map((c, idx) => (
                  <CertItem key={c.t} title={c.t} brand={c.b} index={idx} />
                ))}
              </motion.ul>
            </Reveal>
          </section>

          {/* COLOPHON FOOTER */}
          <motion.footer
            className="border-t border-line p-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-ink/50">
              © 2026 Abhijit Pawase — Engineered with Conviction
            </div>
            <div className="flex gap-8">
              <SocialLink
                href="https://www.linkedin.com/in/abhijit-pawase-aab5a3228"
                icon={Linkedin}
                label="LinkedIn"
                index={0}
              />
              <SocialLink href="mailto:abhipawase2005@gmail.com" icon={Mail} label="Email" index={1} />
              <SocialLink href="tel:+917219797155" icon={Phone} label="Phone" index={2} />
            </div>
            <motion.div
              className="text-cyan"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Built with Indigo-Swiss Precision
            </motion.div>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}
