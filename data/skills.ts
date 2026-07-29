import { Box, Database, ServerCog, Wrench, type LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: readonly string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description: "Building services and clean application logic.",
    icon: ServerCog,
    skills: ["C#", ".NET", "ASP.NET Core", "Web API", "Entity Framework Core", "LINQ", "REST APIs"],
  },
  {
    title: "Database",
    description: "Designing dependable data layers and queries.",
    icon: Database,
    skills: ["SQL Server", "T-SQL", "Database Design"],
  },
  {
    title: "Software Engineering",
    description: "Keeping systems maintainable as they grow.",
    icon: Box,
    skills: ["OOP", "SOLID", "Clean Architecture", "3-Tier", "N-Tier"],
  },
  {
    title: "Tools",
    description: "A practical workflow for shipping and testing.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Visual Studio", "Postman"],
  },
];
