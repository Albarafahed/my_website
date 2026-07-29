"use client";

import {
  ArrowUpRight,
  Binary,
  BookOpen,
  BrainCircuit,
  Building2,
  Calculator,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  Code2,
  ContactRound,
  Database,
  FilePenLine,
  Gamepad2,
  Github,
  HeartPulse,
  IdCard,
  Laptop,
  MonitorSmartphone,
  Pizza,
  Server,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import type { Project, ProjectIcon } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const iconMap: Record<ProjectIcon, LucideIcon> = {
  id: IdCard,
  contacts: ContactRound,
  clinic: HeartPulse,
  building: Building2,
  pizza: Pizza,
  calculator: Calculator,
  notebook: FilePenLine,
  game: Gamepad2,
  code: Code2,
  terminal: TerminalSquare,
  database: Database,
  mobile: MonitorSmartphone,
  book: BookOpen,
  tasks: ClipboardList,
  medical: HeartPulse,
  brain: BrainCircuit,
  server: Server,
};

const toneMap: Record<Project["category"], string> = {
  ".NET": "from-sky-400/20 via-cyan-400/10 to-transparent",
  Backend: "from-cyan-400/25 via-blue-500/10 to-transparent",
  "C++": "from-violet-500/25 via-blue-500/10 to-transparent",
  "SQL Server": "from-cyan-400/20 via-teal-400/10 to-transparent",
  Flutter: "from-sky-400/20 via-indigo-500/10 to-transparent",
  "PHP & MySQL": "from-indigo-500/25 via-purple-500/10 to-transparent",
  Python: "from-amber-300/20 via-sky-500/10 to-transparent",
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onDetails: (project: Project) => void;
}

export function ProjectCard({ project, index, onDetails }: ProjectCardProps) {
  const Icon = iconMap[project.icon] ?? CircleHelp;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.035, 0.18) }}
      className="group"
    >
      <Card className="project-card flex h-full flex-col overflow-hidden transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/35 group-hover:shadow-cyan">
        <div className={`relative h-40 overflow-hidden border-b border-white/10 bg-gradient-to-br ${toneMap[project.category]} p-5`}>
          <div className="absolute -right-7 -top-10 size-36 rounded-full border border-cyan/20" />
          <div className="absolute right-9 top-10 size-14 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 h-1 w-2/3 bg-gradient-to-r from-cyan to-transparent" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <span className="rounded-full border border-cyan/20 bg-[#08132f]/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan backdrop-blur">
                {project.category}
              </span>
              <div className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/[0.06] text-cyan shadow-cyan">
                <Icon className="size-5" aria-hidden="true" />
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-white/40">
              <Binary className="size-3.5" />
              <span>PROJECT / {project.slug.toUpperCase().slice(0, 18)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-bold tracking-[-0.02em] text-white">{project.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <span key={technology} className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-slate-300">
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 pt-6">
            {project.repository ? (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                  <Github className="size-3.5" />
                  GitHub
                  <ArrowUpRight className="ml-auto size-3.5" />
                </a>
              </Button>
            ) : (
              <span className="flex-1 rounded-lg border border-dashed border-white/10 px-3 py-2 text-center text-[11px] text-muted-foreground">
                No repository linked in the original site
              </span>
            )}
            <Button variant="ghost" size="sm" onClick={() => onDetails(project)} aria-label={`View ${project.title} details`}>
              Details
              <ChevronRight className="size-3.5" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
