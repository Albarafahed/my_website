import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  Code2,
  ContactRound,
  GraduationCap,
  HeartPulse,
  IdCard,
  Layers3,
  Workflow,
  Github,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const caseStudies = {
  "student-management-api": {
    eyebrow: "Backend API",
    architecture: "Layered architecture",
    summary:
      "A REST API for student records, built to practice backend responsibilities alongside authentication, access control, database access, and automated testing.",
    icon: GraduationCap,
    problem:
      "Student information needs a consistent interface for managing records while restricting access to protected operations.",
    workflow: ["HTTP request", "Students controller", "Business / service logic", "ADO.NET data access", "SQL Server"],
    decisions: [
      ["ADO.NET and stored procedures", "Database operations are handled explicitly through ADO.NET rather than an ORM."],
      ["JWT access and refresh tokens", "The implementation includes token-based authentication and refresh-token handling."],
      ["Authorization rules", "Admin/Student roles and ownership checks are used to restrict access to student resources."],
      ["Automated tests", "xUnit and Moq are used for unit and integration testing."],
    ],
    capabilities: [
      "Student management endpoints",
      "JWT authentication with access and refresh tokens",
      "Role-based and ownership-based authorization",
      "Login rate limiting and BCrypt password hashing",
      "Asynchronous database operations and stored-procedure calls",
      "Unit and integration tests using xUnit and Moq",
    ],
    evidence: [
      ["Test tooling", "The repository documents xUnit and Moq test projects."],
      ["Security implementation", "The API source includes JWT handling, BCrypt hashing, and a login rate limiter."],
    ],
    limitations: [
      "The SQL setup script contains sample student accounts and records intended for development use.",
      "The SQL Server connection string is currently defined in StudentData.cs and is specific to the development environment.",
    ],
    next: ["Move the database connection string into environment-specific configuration rather than keeping it in source code.", "Verify the complete setup from a clean SQL Server database and document the exact run steps.", "Expand automated tests around authentication, authorization, refresh-token lifecycle, and database failure cases."],
    stackNote: "ASP.NET Core Web API · .NET 8 · C# · SQL Server · ADO.NET · JWT · xUnit · Moq",
  },
  "contacts-management-api": {
    eyebrow: "Backend API",
    architecture: "Clean Architecture",
    summary:
      "A secure .NET 8 contact-management API organized into Domain, Application, Infrastructure, and API projects. It uses EF Core and SQL Server, with JWT authentication, role-based access, contact ownership enforcement, and audit logging.",
    icon: ContactRound,
    problem:
      "A multi-user contact system must protect private records while keeping business rules, application workflows, persistence, and HTTP concerns maintainable and clearly separated.",
    workflow: ["HTTP request", "JWT authentication", "Authorization and ownership checks", "API controller", "Application service", "Repository / Unit of Work", "EF Core", "SQL Server"],
    decisions: [
      ["Clean Architecture", "Domain, Application, Infrastructure, and API responsibilities are separated, with infrastructure implementations behind application abstractions."],
      ["JWT and refresh-token lifecycle", "Access tokens authenticate API requests; refresh tokens are stored as hashes and support rotation, revocation, and logout."],
      ["Role and ownership authorization", "Admin and User roles are supported, while contact access is scoped to the authenticated owner."],
      ["Auditability", "Authentication and contact operations produce audit records with outcome, UTC timestamp, affected entity details, and request Trace ID when available."],
      ["Unit of Work and repositories", "Repository abstractions and a shared persistence boundary coordinate database operations."],
      ["Domain validation and HTTP semantics", "Domain rules validate contact data, while controllers return appropriate HTTP status codes for successful and missing-resource cases."],
    ],
    capabilities: [
      "Contact and country CRUD operations",
      "JWT authentication with registration, login, refresh, token rotation, and logout",
      "Role-based and ownership-based authorization",
      "Hashed password storage and hashed refresh-token storage",
      "Rate limiting, HTTPS/CORS configuration, and centralized exception handling",
      "Audit logging for authentication and contact operations",
      "Admin-only audit log endpoint with filtering and pagination",
      "Clean Architecture, Repository Pattern, Unit of Work, Dependency Injection, and DTOs",
      "Asynchronous EF Core database access with SQL Server",
      "Swagger / OpenAPI documentation with Bearer authentication",
    ],
    evidence: [
      ["Repository documentation", "The README documents JWT authentication, ownership protection, refresh-token rotation and revocation, rate limiting, audit logs, and the four-project architecture."],
      ["Audit Logs API", "The documented GET /api/AuditLogs endpoint supports admin-only access, filtering, and pagination."],
    ],
    limitations: [
      "Automated unit and integration tests are not included in the current repository; the README lists them as planned work.",
      "Docker, cloud deployment, CI/CD, API versioning, and advanced search are identified in the README as potential future enhancements.",
    ],
    next: ["Add and run automated unit and integration tests for authentication, ownership, contacts, and audit logging.", "Add deployment automation and containerization when the application is ready for deployment.", "Consider API versioning and advanced contact search as the API evolves."],
    stackNote: ".NET 8 · ASP.NET Core Web API · C# · EF Core · SQL Server · Clean Architecture · JWT · RBAC · Audit Logging · Swagger",
  },
  "dvld-system": {
    eyebrow: "Desktop management system",
    architecture: "3-Tier architecture",
    summary:
      "A Windows Forms system for managing people, drivers, driving-license applications, tests, and license services using C#, ADO.NET, and SQL Server.",
    icon: IdCard,
    problem:
      "Driving-license administration involves connected records and a sequence of application, test, and licensing steps. The system brings these related operations into one desktop application.",
    workflow: ["Register person", "Create license application", "Schedule required tests", "Record test results", "Issue driving license", "Renew / replace / detain / release / international license"],
    decisions: [
      ["Presentation / Business / Data Access separation", "Forms handle user interaction, business classes handle application rules, and data-access classes communicate with SQL Server."],
      ["ADO.NET", "The data-access layer executes SQL operations and retrieves stored records."],
      ["Business objects", "Classes represent key concepts such as people, drivers, applications, licenses, and tests."],
      ["SQL Server relational model", "The database contains linked records for people, applications, license classes, licenses, and tests."],
    ],
    capabilities: [
      "People, users, and drivers management",
      "Local driving-license applications",
      "Test appointment and test-processing workflow",
      "Issuing driving licenses after required tests",
      "Renewing and replacing lost or damaged licenses",
      "Detaining and releasing licenses",
      "International driving-license services",
    ],
    evidence: [
      ["Database setup", "The repository includes a DVLD.sql database creation script."],
      ["Workflow documentation", "The README describes the license application through test and issuance stages, plus additional license services."],
    ],
    limitations: [
      "The current implementation does not include automated tests or a dedicated logging framework.",
      "Database connection details are stored in the source code, while password hashing is identified as an area for security improvement.",
      "The documented implementation does not include the Repository Pattern or Dependency Injection.",
    ],
    next: ["Move environment-specific connection settings out of source code.", "Introduce automated tests around business rules and licensing workflows.", "Improve credential handling and add structured logging."],
    stackNote: "C# · Windows Forms · .NET Framework 4.7.2 · ADO.NET · SQL Server · 3-Tier architecture",
  },
  "clinic-management": {
    eyebrow: "Desktop management system",
    architecture: "3-Tier architecture",
    summary:
      "A clinic operations desktop application covering patient registration, appointments, reception, nursing, doctor visits, pharmacy, billing, and payments.",
    icon: HeartPulse,
    problem:
      "A clinic visit touches several operational stations. The application organizes the patient journey and the records created by reception, nursing, doctors, pharmacy, and cashier staff.",
    workflow: ["Patient registration", "Reception and appointment", "Cashier check-in", "Nurse records vital signs", "Doctor records diagnosis and prescription", "Pharmacy dispenses medicine", "Cashier completes billing"],
    decisions: [
      ["Layered desktop structure", "The documented stack separates Windows Forms presentation, business logic, and SQL Server data access."],
      ["Relational database", "The database covers patients, doctors, appointments, visits, diagnoses, prescriptions, medicines, bills, and payments."],
      ["Transactions", "The README describes SQL transactions for maintaining consistency across complex operations."],
      ["Role-oriented workstations", "Separate reception, nurse, doctor, pharmacy, and cashier stations reflect the operational roles in the clinic workflow."],
    ],
    capabilities: [
      "Patient, doctor, and user management",
      "Appointment and queue management",
      "Reception and nurse stations",
      "Doctor visits, diagnoses, and prescriptions",
      "Pharmacy and medicine management",
      "Bills, payments, invoices, and medicine returns",
      "SQL Server database with relational constraints and transactional operations",
    ],
    evidence: [
      ["Interface documentation", "The project README includes screenshots for reception, nurse, doctor, pharmacy, and cashier screens."],
      ["Database setup", "The README documents a ClinicDB.sql script for creating the database and initial data."],
    ],
    limitations: [
      "The project is currently documented as a Windows Forms desktop application, with no web API or mobile client included in its scope.",
      "Multi-branch support, inventory, laboratory, radiology, and cloud synchronization are listed as future enhancements.",
      "The README describes SHA-256 for password storage; SHA-256 alone is not designed to resist offline password-guessing attacks. A dedicated password-hashing algorithm with unique salts and an appropriate work factor would provide stronger protection.",
    ],
    next: ["Review password storage and local credential handling using a modern password-hashing approach.", "Add automated tests for billing, appointments, and visit workflows.", "Consider inventory and multi-branch capabilities only if the project scope requires them."],
    stackNote: "C# · Windows Forms · .NET Framework 4.7.2 · ADO.NET · SQL Server · 3-Tier architecture",
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
    title: project ? `${project.title} | Albara's Portfolio` : "Project Not Found | Albara's Portfolio",
    description: project?.description,
  };
}

function SectionHeading({ icon: Icon, eyebrow, title }: { icon: typeof Layers3; eyebrow: string; title: string }) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cyan">{eyebrow}</p>
        <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">{title}</h2>
      </div>
    </div>
  );
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isCaseStudySlug(slug)) notFound();

  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const study = caseStudies[slug];
  const Icon = study.icon;

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-cyan">
        <ArrowLeft className="size-4" /> Back to all projects
      </Link>

      <header className="relative mt-9 overflow-hidden rounded-3xl border border-white/10 bg-[#0b193b] p-7 sm:p-10">
        <div aria-hidden="true" className="absolute -right-16 -top-20 size-64 rounded-full border border-cyan/10" />
        <div aria-hidden="true" className="absolute -bottom-24 -left-12 size-64 rounded-full bg-cyan/5 blur-3xl" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
            <span>{study.eyebrow}</span><span className="text-white/25">/</span><span>{project.category}</span>
          </div>
          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="grid size-20 shrink-0 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
              <Icon className="size-10" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">{project.title}</h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">{study.summary}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.repository && <Button asChild><a href={project.repository} target="_blank" rel="noreferrer"><Github className="size-4" /> View source code <ArrowUpRight className="size-4" /></a></Button>}
            <Button asChild variant="outline"><Link href="/#contact">Get in touch</Link></Button>
          </div>
        </div>
      </header>

      <section className="mt-8 grid gap-5 md:grid-cols-[1.1fr_.9fr]">
        <Card className="p-6 sm:p-7">
          <SectionHeading icon={Workflow} eyebrow="Project context" title="Problem being addressed" />
          <p className="text-sm leading-7 text-slate-300">{study.problem}</p>
        </Card>
        <Card className="p-6 sm:p-7">
          <SectionHeading icon={Code2} eyebrow="Technology" title="Technology stack" />
          <p className="text-sm leading-7 text-slate-300">{study.stackNote}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300">{technology}</span>)}
          </div>
        </Card>
      </section>

      <section className="mt-5">
        <Card className="p-6 sm:p-8">
          <SectionHeading icon={Layers3} eyebrow="System design" title="Architecture & request flow" />
          <p className="mb-5 text-sm leading-7 text-slate-300">{study.architecture}. The flow below summarizes the documented responsibility boundaries.</p>
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-2">
            {study.workflow.map((step, index) => (
              <div key={step} className="flex min-w-0 flex-1 flex-col items-center gap-2 sm:flex-row">
                <div className="flex min-h-16 w-full flex-1 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.06] px-3 py-3 text-center text-xs font-semibold leading-5 text-slate-200">{step}</div>
                {index < study.workflow.length - 1 && <ArrowRight className="hidden size-4 shrink-0 text-cyan sm:block" />}
                {index < study.workflow.length - 1 && <ArrowRight className="size-4 rotate-90 text-cyan sm:hidden" />}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-5">
        <Card className="p-6 sm:p-8">
          <SectionHeading icon={ShieldCheck} eyebrow="Engineering decisions" title="Key technical decisions" />
          <div className="grid gap-4 md:grid-cols-2">
            {study.decisions.map(([title, description]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-5">
        <Card className="p-6 sm:p-8">
          <SectionHeading icon={CheckCircle2} eyebrow="Current implementation" title="Implemented capabilities" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {study.capabilities.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan" /><span>{item}</span></li>)}
          </ul>
        </Card>
      </section>

      <section className="mt-5">
        <Card className="p-6 sm:p-8">
          <SectionHeading icon={TestTube2} eyebrow="Verification" title="Testing & project evidence" />
          <div className="grid gap-3 sm:grid-cols-2">
            {study.evidence.map(([title, description]) => <div key={title} className="rounded-xl border border-white/10 p-4"><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{description}</p></div>)}
          </div>
        </Card>
      </section>

      <section className="mt-5 grid gap-5 md:grid-cols-2">
        <Card className="p-6 sm:p-7">
          <SectionHeading icon={AlertTriangle} eyebrow="Transparency" title="Known limitations" />
          <ul className="space-y-3">{study.limitations.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><AlertTriangle className="mt-1 size-4 shrink-0 text-amber-300" /><span>{item}</span></li>)}</ul>
        </Card>
        <Card className="p-6 sm:p-7">
          <SectionHeading icon={ArrowUpRight} eyebrow="Next iteration" title="Potential improvements" />
          <ul className="space-y-3">{study.next.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><ArrowUpRight className="mt-1 size-4 shrink-0 text-cyan" /><span>{item}</span></li>)}</ul>
        </Card>
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-sm text-muted-foreground">A practical project in my software development portfolio.</p>
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white">Explore more projects <ArrowUpRight className="size-4" /></Link>
      </footer>
    </main>
  );
}
