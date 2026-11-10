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
    description: "Building APIs and application logic with the .NET ecosystem.",
    icon: ServerCog,
    skills: ["C#", ".NET", "ASP.NET Core Web API", "Entity Framework Core", "ADO.NET", "LINQ", "RESTful APIs"],
  },
  {
    title: "Databases",
    description: "Working with relational data, queries, and database design.",
    icon: Database,
    skills: ["Microsoft SQL Server", "T-SQL", "Database Design", "Stored Procedures"],
  },
  {
    title: "Architecture & Engineering",
    description: "Organizing code into maintainable and clearly separated components.",
    icon: Box,
    skills: ["OOP", "SOLID", "Clean Architecture", "3-Tier Architecture", "Repository Pattern", "Dependency Injection"],
  },
  {
    title: "API Security",
    description: "Applying authentication and authorization controls in API projects.",
    icon: ShieldCheck,
    skills: ["JWT Authentication", "Role-Based Authorization", "Ownership-Based Authorization", "Refresh Tokens", "Rate Limiting", "BCrypt"],
  },
  {
    title: "Testing & Tools",
    description: "Testing application behavior and using a practical development workflow.",
    icon: Wrench,
    skills: ["xUnit", "Moq", "Unit Testing", "Integration Testing", "Swagger UI / OpenAPI", "Git", "GitHub", "Visual Studio"],
  },
];
