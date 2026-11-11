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
    description: "Building REST APIs and application logic with C# and ASP.NET Core.",
    icon: ServerCog,
    skills: ["C#", ".NET 8", "ASP.NET Core Web API", "RESTful APIs", "Entity Framework Core", "ADO.NET", "LINQ", "Asynchronous Programming"],
  },
  {
    title: "Databases",
    description: "Designing and accessing relational databases through SQL Server and T-SQL.",
    icon: Database,
    skills: ["Microsoft SQL Server", "T-SQL", "Database Design", "Stored Procedures", "SQL Queries", "Unique Indexes"],
  },
  {
    title: "Architecture & Engineering",
    description: "Applying layered design and maintainable coding practices in desktop and API projects.",
    icon: Box,
    skills: ["OOP", "SOLID Principles", "Clean Architecture", "3-Tier Architecture", "Repository Pattern", "Unit of Work", "Dependency Injection", "DTOs"],
  },
  {
    title: "API Security",
    description: "Implementing authentication, authorization, and request protection in API projects.",
    icon: ShieldCheck,
    skills: ["JWT Authentication", "Role-Based Authorization", "Ownership-Based Authorization", "Refresh Token Rotation & Revocation", "BCrypt Password Hashing", "Rate Limiting", "Audit Logging"],
  },
  {
    title: "Testing & Developer Tools",
    description: "Writing automated tests and documenting and exercising APIs during development.",
    icon: Wrench,
    skills: ["xUnit", "Moq", "Unit Testing", "API Integration Testing", "Swagger UI / OpenAPI", "Git", "GitHub", "Visual Studio"],
  },
];
