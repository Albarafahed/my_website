import { Box, Database, ServerCog, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: readonly string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Development",
    description: "Designing HTTP APIs and backend workflows with C#, ASP.NET Core, EF Core, and ADO.NET across practical management projects.",
    icon: ServerCog,
    skills: ["C#", ".NET 8", "ASP.NET Core Web API", "RESTful APIs", "Entity Framework Core", "ADO.NET", "LINQ", "Asynchronous Programming"],
  },
  {
    title: "Databases",
    description: "Modeling relational data and implementing database access with SQL Server, T-SQL, queries, and stored procedures.",
    icon: Database,
    skills: ["Microsoft SQL Server", "T-SQL", "Database Design", "Stored Procedures", "SQL Queries", "Unique Indexes"],
  },
  {
    title: "Architecture & Engineering",
    description: "Separating responsibilities across Domain, Application, Infrastructure, API, and 3-tier desktop layers using established design principles.",
    icon: Box,
    skills: ["OOP", "SOLID Principles", "Clean Architecture", "3-Tier Architecture", "Repository Pattern", "Unit of Work", "Dependency Injection", "DTOs"],
  },
  {
    title: "API Security",
    description: "Protecting API endpoints and user-owned resources through token-based authentication, access policies, and operational safeguards.",
    icon: ShieldCheck,
    skills: ["JWT Authentication", "Role-Based Authorization", "Ownership-Based Authorization", "Refresh Token Rotation & Revocation", "BCrypt Password Hashing", "Rate Limiting", "Audit Logging"],
  },
  {
    title: "Testing & Developer Tools",
    description: "Working with xUnit and Moq test projects, and exploring and documenting API contracts with Swagger / OpenAPI.",
    icon: Wrench,
    skills: ["xUnit", "Moq", "Unit Testing", "API Integration Testing", "Swagger UI / OpenAPI", "Git", "GitHub", "Visual Studio"],
  },
];
