import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ContactRound,
  GraduationCap,
  HeartPulse,
  IdCard,
  Layers3,
  Github,
} from "lucide-react";

import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const caseStudies = {
  "student-management-api": {
    eyebrow: "Backend API",
    architecture: "Layered architecture",
    architectureDescription:
      "The API separates application responsibilities into layers and uses ADO.NET to communicate with SQL Server.",
    icon: GraduationCap,
    focus: "API development, authentication, authorization, and automated tests",
  },
  "contacts-management-api": {
    eyebrow: "Backend API",
    architecture: "Clean Architecture",
    architectureDescription:
      "The solution is organized around Domain, Application, Infrastructure, and API responsibilities.",
    icon: ContactRound,
    focus: "Maintainable application structure, data access, and API security",
  },
  "dvld-system": {
    eyebrow: "Desktop management system",
    architecture: "3-Tier architecture",
    architectureDescription:
      "The desktop application separates the presentation, business logic, and data access responsibilities.",
    icon: IdCard,
    focus: "Driver, vehicle, application, and licensing workflows",
  },
  "clinic-management": {
    eyebrow: "Desktop management system",
    architecture: "Windows Forms application",
    architectureDescription:
      "A C# desktop application backed by SQL Server for organizing clinic management tasks.",
    icon: HeartPulse,
    focus: "Patient, doctor, and appointment management",
  },
} as const;

type CaseStudySlug = keyof typeof caseStudies;

function isCaseStudySlug(slug: string): slug is CaseStudySlug {
  return Object.prototype.hasOwnProperty.call(caseStudies, slug);
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.title} | Albara's Portfolio`
      : "Project Not Found | Albara's Portfolio",
    description: project?.description,
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isCaseStudySlug(slug)) notFound();

  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const study = caseStudies[slug];
  const Icon = study.icon;

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12 sm:px-8 sm:py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-cyan"
      >
        <ArrowLeft className="size-4" />
        Back to all projects
      </Link>

      <header className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0b193b] p-7 sm:p-10">
        <div className="absolute -right-16 -top-20 size-64 rounded-full border border-cyan/10" />
        <div className="absolute -bottom-24 -left-12 size-64 rounded-full bg-cyan/5 blur-3xl" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
            <span>{study.eyebrow}</span>
            <span className="text-white/25">/</span>
            <span>{project.category}</span>
          </div>
          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="grid size-20 shrink-0 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
              <Icon className="size-10" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.repository ? (
              <Button asChild>
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  View source code
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            ) : null}
            <Button asChild variant="outline">
              <Link href="/#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="mt-8 grid gap-5 md:grid-cols-[1.1fr_.9fr]">
        <Card className="p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-cyan/10 text-cyan">
              <Layers3 className="size-5" />
            </span>
            <h2 className="text-lg font-bold text-white">Architecture & approach</h2>
          </div>
          <h3 className="mt-6 text-base font-semibold text-cyan">{study.architecture}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {study.architectureDescription}
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">
            Main engineering focus
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{study.focus}</p>
        </Card>

        <Card className="p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-cyan/10 text-cyan">
              <Code2 className="size-5" />
            </span>
            <h2 className="text-lg font-bold text-white">Technology stack</h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-5 p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-cyan/10 text-cyan">
            <CheckCircle2 className="size-5" />
          </span>
          <h2 className="text-lg font-bold text-white">Implemented features</h2>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
              <CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </Card>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-sm text-muted-foreground">
          Part of my .NET and software development portfolio.
        </p>
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white">
          Explore more projects
          <ArrowUpRight className="size-4" />
        </Link>
      </footer>
    </main>
  );
}
