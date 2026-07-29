"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { projectCategories, projects, type Project, type ProjectCategory } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { socialLinks } from "@/data/social";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const journey = [
  "Programming",
  "Desktop Applications",
  "SQL Server",
  "ADO.NET",
  "ASP.NET Core",
  "Entity Framework Core",
  "Looking for Internship",
];

function ExternalLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050d22]">
      <div className="absolute inset-0 bg-hero-grid bg-[length:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_74%)]" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(19,37,95,0.65),transparent_34%)]" />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#08132f]/75 px-4 py-3 backdrop-blur-xl sm:px-5">
        <Link href="#top" className="flex items-center gap-2 text-sm font-bold tracking-[-0.02em] text-white" onClick={() => setIsOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-cyan font-mono text-xs text-navy">AF</span>
          <span>albara.dev</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/[0.06] hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="#contact">Let&apos;s connect <ArrowRight className="size-3.5" /></Link>
          </Button>
        </div>

        <button className="grid size-9 place-items-center rounded-lg text-white lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen ? (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto max-w-6xl overflow-hidden rounded-b-2xl border-x border-b border-white/10 bg-[#08132f]/95 px-4 pb-4 backdrop-blur-xl lg:hidden">
            <div className="grid gap-1 pt-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/[0.06] hover:text-white" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[calc(100svh-88px)] max-w-6xl items-center px-6 pb-16 pt-20 sm:px-8 lg:pb-24 lg:pt-28">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-cyan">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-cyan" /></span>
            {profile.availability}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, delay: 0.08 }} className="max-w-3xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
            Albara Fahed <span className="text-gradient">Alharissy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.14 }} className="mt-6 font-mono text-sm font-bold uppercase tracking-[0.12em] text-cyan sm:text-base">
            {profile.role}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }} className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {profile.headline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={profile.cvPath} download><Download className="size-4" />Download CV</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View Projects <ArrowRight className="size-4" /></Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.46 }} className="mt-9 flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <ExternalLink key={social.label} href={social.href} className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition hover:-translate-y-0.5 hover:border-cyan/45 hover:bg-cyan/10 hover:text-cyan" >
                  <Icon className="size-4" aria-label={social.label} />
                </ExternalLink>
              );
            })}
            <span className="ml-2 h-5 w-px bg-white/15" />
            <a href="#contact" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-white"><Mail className="size-4" />Contact</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-md lg:ml-auto">
          <motion.div animate={{ y: [-7, 7, -7], rotate: [-1, 1, -1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative aspect-square rounded-[2rem] border border-cyan/25 bg-gradient-to-br from-[#153373] via-[#0d2050] to-[#08132f] p-3 shadow-cyan-lg">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_15%,rgba(36,230,255,.35),transparent_25%),radial-gradient(circle_at_85%_90%,rgba(69,93,255,.23),transparent_33%)]" />
            <div className="relative h-full overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#08132f]">
              <Image src={profile.avatar} alt={`Profile photo of ${profile.name}`} fill priority sizes="(max-width: 768px) 90vw, 450px" className="object-cover object-top opacity-90 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(8,19,47,.2)_58%,rgba(8,19,47,.96)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">Engineering reliable systems</p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">Junior .NET Developer</p>
              </div>
            </div>
          </motion.div>
          <div className="absolute -bottom-5 -left-5 grid size-20 place-items-center rounded-2xl border border-white/15 bg-[#102454]/90 text-cyan shadow-cyan backdrop-blur"><Sparkles className="size-7" /></div>
          <div className="absolute -right-5 top-1/4 rounded-xl border border-cyan/20 bg-[#0a1737]/90 px-4 py-3 text-xs font-medium text-white shadow-cyan backdrop-blur"><span className="mr-2 text-cyan">01</span> Build with intent</div>
        </motion.div>
      </div>
      <Link href="#about" aria-label="Scroll to about section" className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition hover:text-cyan sm:flex sm:flex-col sm:items-center sm:gap-2"><span className="text-[10px] font-bold uppercase tracking-[0.18em]">Explore</span><ArrowDown className="size-4 animate-bounce" /></Link>
    </section>
  );
}

function About() {
  const highlights = ["4th-year IT student", "C#/.NET focus", "Open to internships"];
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} className="relative mx-auto w-full max-w-sm">
          <Card className="relative overflow-hidden p-6 shadow-cyan">
            <div className="absolute right-0 top-0 size-40 translate-x-1/3 -translate-y-1/3 rounded-full border border-cyan/20" />
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">Developer profile</p>
            <div className="mt-8 grid gap-5">
              {highlights.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-cyan/20 bg-cyan/10 font-mono text-xs font-bold text-cyan">0{index + 1}</span>
                  <span className="text-sm font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/10 pt-5"><span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground"><span className="size-2 rounded-full bg-cyan" /> {profile.location}</span></div>
          </Card>
        </motion.div>
        <div>
          <SectionHeading eyebrow="About me" title="Intentional software, engineered to last." />
          <p className="mt-7 max-w-2xl text-pretty leading-8 text-muted-foreground">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Structured code", "Layered architecture", "Practical systems"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300">{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8">
      <SectionHeading eyebrow="Capabilities" title="A backend-first toolkit." description="Technologies and engineering practices shaped by hands-on systems work and an ongoing focus on modern .NET development." align="center" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
              <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-cyan/30 hover:shadow-cyan sm:p-7">
                <div className="flex items-start justify-between gap-6"><div><h3 className="text-xl font-bold tracking-[-0.025em] text-white">{group.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p></div><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan"><Icon className="size-5" /></span></div>
                <div className="mt-6 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-xs font-medium text-slate-300">{skill}</span>)}</div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-[#030817]/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={onClose}>
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 18 }} transition={{ duration: 0.2 }} onMouseDown={(event) => event.stopPropagation()} className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-[#0b193b] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5"><span className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">{project.category}</span><button className="grid size-9 place-items-center rounded-lg text-muted-foreground hover:bg-white/[0.08] hover:text-white" onClick={onClose} aria-label="Close project details"><X className="size-5" /></button></div>
            <div className="p-6 sm:p-8"><h3 id="project-title" className="text-2xl font-bold tracking-[-0.03em] text-white">{project.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>{project.gallery && project.gallery.length > 0 && (
  <div className="mt-6">
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {project.gallery.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${project.title} ${index + 1}`}
          className="h-32 w-full rounded-lg border border-white/10 object-cover transition hover:scale-105"
        />
      ))}
    </div>
  </div>
)}
<div className="mt-7"><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Highlights</p><ul className="mt-4 grid gap-3 sm:grid-cols-2">{project.highlights.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300"><Check className="mt-1 size-3.5 shrink-0 text-cyan" />{item}</li>)}</ul></div><div className="mt-8 flex flex-wrap gap-3">{project.repository ? <Button asChild><ExternalLink href={project.repository}><Github className="size-4" />Open repository <ArrowUpRight className="size-4" /></ExternalLink></Button> : null}<Button variant="outline" onClick={onClose}>Close</Button></div></div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Projects() {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = useMemo(() => category === "All" ? projects : projects.filter((project) => project.category === category), [category]);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="Selected work" title="Projects built through practice." description="Every repository below is preserved from the original portfolio, now organized into one focused project experience." /><div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-muted-foreground"><BriefcaseBusiness className="size-4 text-cyan" /><span>{projects.length - 1} linked repositories</span></div></div>
      <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">{projectCategories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-semibold transition ${category === item ? "border-cyan bg-cyan text-navy" : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-cyan/40 hover:text-white"}`}>{item}</button>)}</div>
      <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} onDetails={setSelectedProject} />)}</motion.div>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:px-8">
      <SectionHeading eyebrow="Learning journey" title="One focused step at a time." description="A progression from foundational programming to building backend systems that solve practical problems." align="center" />
      <div className="relative mx-auto mt-14 max-w-2xl"><div className="absolute bottom-7 left-6 top-7 w-px bg-gradient-to-b from-cyan via-cyan/35 to-transparent sm:left-1/2" />{journey.map((step, index) => <motion.div key={step} initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }} className={`relative mb-6 flex items-center gap-5 sm:justify-between ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}><div className="order-2 w-full sm:w-[calc(50%-2rem)]"><Card className={`p-4 transition hover:border-cyan/30 ${index === journey.length - 1 ? "border-cyan/30 bg-cyan/10" : ""}`}><p className="text-sm font-semibold text-white">{step}</p><p className="mt-1 text-xs text-muted-foreground">Stage {String(index + 1).padStart(2, "0")}</p></Card></div><div className="relative z-10 order-1 grid size-12 shrink-0 place-items-center rounded-full border border-cyan/40 bg-[#08132f] font-mono text-xs font-bold text-cyan shadow-cyan sm:order-none">{String(index + 1).padStart(2, "0")}</div><div className="hidden w-[calc(50%-2rem)] sm:block" /></motion.div>)}</div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-8">
      <Card className="relative overflow-hidden p-7 sm:p-12"><div className="absolute -right-20 -top-28 size-80 rounded-full bg-cyan/10 blur-3xl" /><div className="absolute -bottom-28 -left-24 size-72 rounded-full bg-blue-600/15 blur-3xl" /><div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]"><div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan"><span className="size-2 rounded-full bg-cyan" />Available for internships</p><h2 className="mt-5 max-w-xl text-balance text-3xl font-bold tracking-[-0.045em] text-white sm:text-5xl">Let&apos;s build something useful.</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">I&apos;m interested in opportunities to contribute as a Junior C#/.NET Backend Developer, learn from an engineering team, and help turn real-world requirements into dependable software.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><a href={profile.cvPath} download><Download className="size-4" />Download CV</a></Button><Button asChild variant="outline" size="lg"><ExternalLink href={profile.github}><Github className="size-4" />GitHub</ExternalLink></Button></div></div><div className="grid gap-3"><ExternalLink href={profile.github} className="contact-link"><span className="grid size-11 place-items-center rounded-xl bg-white/[0.06] text-cyan"><Github className="size-5" /></span><span><span className="block text-xs text-muted-foreground">GitHub</span><span className="mt-0.5 block text-sm font-semibold text-white">@Albarafahed</span></span><ArrowUpRight className="ml-auto size-4 text-muted-foreground" /></ExternalLink><ExternalLink href={profile.linkedin} className="contact-link"><span className="grid size-11 place-items-center rounded-xl bg-white/[0.06] text-cyan"><Linkedin className="size-5" /></span><span><span className="block text-xs text-muted-foreground">LinkedIn</span><span className="mt-0.5 block text-sm font-semibold text-white">albara-csharp-developer</span></span><ArrowUpRight className="ml-auto size-4 text-muted-foreground" /></ExternalLink><div className="contact-link cursor-default opacity-70"><span className="grid size-11 place-items-center rounded-xl bg-white/[0.06] text-cyan"><Mail className="size-5" /></span><span><span className="block text-xs text-muted-foreground">Direct contact</span><span className="mt-0.5 block text-sm font-semibold text-white">Reach out via GitHub or LinkedIn</span></span><Phone className="ml-auto size-4 text-muted-foreground" /></div></div></div></Card>
    </section>
  );
}

function Footer() {
  return <footer className="border-t border-white/10 px-6 py-8 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><p className="text-sm text-muted-foreground">Designed &amp; Developed by <span className="font-semibold text-white">Albara Fahed Alharissy</span></p><div className="flex items-center gap-4">{socialLinks.map((social) => { const Icon = social.icon; return <ExternalLink key={social.label} href={social.href} className="text-muted-foreground transition hover:text-cyan"><Icon className="size-4" aria-label={social.label} /></ExternalLink>; })}<span className="text-xs text-slate-500">© {new Date().getFullYear()}</span></div></div></footer>;
}

export function Portfolio() {
  return <><Background /><Navbar /><main><Hero /><About /><Skills /><Projects /><Journey /><Contact /></main><Footer /></>;
}
