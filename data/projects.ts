export type ProjectCategory = ".NET" | "C++" | "SQL Server" | "Flutter" | "PHP & MySQL" | "Python" | "Backend";

export type ProjectIcon =
  | "id"
  | "contacts"
  | "clinic"
  | "building"
  | "pizza"
  | "calculator"
  | "notebook"
  | "game"
  | "code"
  | "terminal"
  | "database"
  | "mobile"
  | "book"
  | "tasks"
  | "medical"
  | "brain"
  | "server";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: readonly string[];
  highlights: readonly string[];
  repository?: string;
  icon: ProjectIcon;
  featured?: boolean;
  image?: string;
  gallery?: string[];
}

// Source of truth for every project and repository extracted from the legacy portfolio.
export const projects: Project[] = [
  {
    slug: "clinic-management",
    title: "Clinic Management System",
    image: "/images/Clinic/ClinicSystem.png",

  gallery: [
    "/images/Clinic/frmMain1.png",
    "/images/Clinic/frmLogin.png",
    "/images/Clinic/frmMianResapations.png",
    "/images/Clinic/frmMainDoctor.png",
    "/images/Clinic/frmMainPharmicy.png",
    "/images/Clinic/frmMainCasher.png",
    "/images/Clinic/frmListPatients.png",
    "/images/Clinic/frmlistDoctor.png",
    "/images/Clinic/frmlistUser.png",
    "/images/Clinic/frmMangeBills.png",
  ],
    category: ".NET",
    description: "A healthcare management desktop application built using C# and SQL Server.",
    technologies: ["C# WinForms", "SQL Server", ".NET Framework 4.7.2", "Architecture"],
    highlights: ["Patients management", "Doctors management", "Appointments", "Medical operations"],
    repository: "https://github.com/Albarafahed/Clinic-Windows-Form-CSharp",
    icon: "clinic",
    featured: true,
  },

  {
    slug: "dvld-system",
    title: "DVLD System",
     image: "/images/DVLD/DVLDSystem.png",
  gallery: [
    "/images/DVLD/frmlogin.png",
    "/images/DVLD/frmMain.png",
    "/images/DVLD/frmListPeople.png",
    "/images/DVLD/frmListDriver.png",
    "/images/DVLD/frmListLocalDrivingLicense.png",
    "/images/DVLD/frmDetainLicenses.png",
    "/images/DVLD/frmReleaseDetainedLicense.png",
  ],
    category: ".NET",
    description: "Drivers, License & Vehicle Department System. A complete Windows Forms management system.",
    technologies: ["C# WinForms", "SQL Server", "3-Tier", "ADO.NET"],
    highlights: ["Drivers management", "License management", "Testing workflow", "User management"],
    repository: "https://github.com/Albarafahed/DVLD-Windows-Form-CSharp",
    icon: "id",
    featured: true,
  },

  {
    slug: "contacts-management",
    title: "Contacts Management",
     image: "/images/Contact/ContactSystem.png",
  gallery: [
    "/images/Contact/frmListContacts.png",
    "/images/Contact/frmAddContact.png",
    "/images/Contact/frmEdiContact.png",
  ],
    category: ".NET",
    description: "Contact management system using layered architecture and SQL Server database.",
    technologies: ["C# WinForms", "SQL Server", "EF", "Layered Architecture"],
    highlights: ["Contact CRUD operations", "Country management", "Image path handling", "DataGridView binding"],
    repository: "https://github.com/Albarafahed/Contact-Windows-Form-CSharp",
    icon: "contacts",
    featured: true,
  },
  
  {
    slug: "real-estate-solution",
    title: "Real Estate Management System",
     image: "/images/Real/RealEstateSystem.png",
  gallery: [
    "/images/Real/frmLogin.png",
    "/images/Real/frmMain.png",
    "/images/Real/frmCustomers.png",
    "/images/Real/frmMangeRealEstate.png",
    "/images/Real/frmContracts.png",
    "/images/Real/frmPayments.png",
    "/images/Real/frmReports.png",
    "/images/Real/frmSetings.png",
  ],
    category: ".NET",
    description:
      "A desktop real estate management system built using C# WinForms, SQL Server, ADO.NET, and N-Tier Architecture. Manage clients, properties, contracts, payments, and reports through an organized desktop application.",
    technologies: ["C#", ".NET 9", "SQL Server", "ADO.NET", "N-Tier"],
    highlights: ["Client management", "Property management", "Contract management", "Payments and reports"],
    repository: "https://github.com/Albarafahed/RealEstateSolution-Windows-Form-CSharp",
    icon: "building",
    featured: true,
  },
  {
    slug: "pizza-ordering",
    title: "Pizza Ordering System",
    image: "/images/Pizza/PizzaSystem.png",
  gallery: [
    "/images/Pizza/frmLogin.png",
    "/images/Pizza/frmMain.png",
    "/images/Pizza/frmPizzaOrder.png",
    "/images/Pizza/frmJuicesOrder.png",
    "/images/Pizza/frmDesertOrder.png",
    "/images/Pizza/frmRemoteDelivery.png",
    "/images/Pizza/frmPrintBills.png",
  ],
    category: ".NET",
    description: "Windows Forms ordering application built using C#.",
    technologies: ["C# WinForms", "UI Design", "Order Management","Json Storage"],
    highlights: ["C# WinForms", "User interface design", "Order management"],
    repository: "https://github.com/Albarafahed/Pizza-Ordering-Management-System--Windows-Form-CSharp",
    icon: "pizza",
  },
  {
    slug: "calculator",
    title: "Calculator",
    image: "/images/Calculator.png",
    category: ".NET",
    description: "A simple calculator desktop application.",
    technologies: ["C#", "Windows Forms", "Event Handling"],
    highlights: ["C#", "Windows Forms", "Event handling"],
    repository: "https://github.com/Albarafahed/Calculator-Windows-Form-CSharp",
    icon: "calculator",
  },
  {
    slug: "note-book",
    title: "Note Book",
    image: "/images/Notebook.png",
    category: ".NET",
    description: "Text editing desktop application.",
    technologies: ["C#", "Windows Forms", "File Handling"],
    highlights: ["File handling", "Windows Forms", "C# events"],
    repository: "https://github.com/Albarafahed/Note-Book-Windows-Form-CSharp",
    icon: "notebook",
  },
  
  {
    slug: "xo-game",
    title: "XO Game",
    image: "/images/XOGame.png",
    category: ".NET",
    description: "Classic Tic Tac Toe game using Windows Forms.",
    technologies: ["C#", "Windows Forms", "Game Logic"],
    highlights: ["Game logic", "C# programming", "UI interaction"],
    repository: "https://github.com/Albarafahed/XO-Game-Windows-Form-CSharp",
    icon: "game",
  },
  
  {
    slug: "programming-courses",
    title: "Programming Courses",
    image: "/images/problemsolving.png",
    category: "C++",
    description: "A problem-solving collection spanning programming challenges and applications.",
    technologies: ["C++", "Problem Solving", "Algorithms"],
    highlights: ["Course 4 - Problem Solving", "Course 5 - Programming Challenges", "Course 7 - Advanced Problems", "Course 8 - Programming Applications"],
    repository: "https://github.com/Albarafahed/cpp-problem-solving/blob/main/README.md",
    icon: "code",
  },
  {
    slug: "console-applications",
    title: "Console Applications",
    image: "/images/ConsoleApplications.png",
    category: "C++",
    description: "A set of C++ console applications focused on object-oriented programming.",
    technologies: ["C++", "OOP", "Console"],
    highlights: ["ATM System", "Bank Functional", "Bank Extension", "Bank OOP"],
    repository: "https://github.com/Albarafahed/cpp-console-projects/blob/main/README.md",
    icon: "terminal",
  },
  {
    slug: "data-structures",
    title: "Data Structures",
    image: "/images/DataStructures.png",
    category: "C++",
    description: "C++ implementations exploring core data structures and algorithms.",
    technologies: ["C++", "Algorithms", "Data Structures"],
    highlights: ["Undo & Redo", "Linked Lists", "Stack", "Queue", "File Handling"],
    repository: "https://github.com/Albarafahed/Course-13-Abu-Hadhoud-C-project-by-Data-Structurs-",
    icon: "code",
  },
  {
    slug: "sql-database-practice",
    title: "SQL Database Concepts & Practices",
    image: "/images/SQLDatabase.png",
    category: "SQL Server",
    description: "Database design, SQL programming, and real-world practice in SQL Server.",
    technologies: ["SQL Server", "T-SQL", "Database Design"],
    highlights: ["Clinic, library, car rental, online store, and karate club designs", "Views, functions, stored procedures, triggers", "54 solved SQL challenges"],
    repository: "https://github.com/Albarafahed/SQL-Database-Part-of-Concepts-and-Practices-by-Programming-Advices",
    icon: "database",
  },
  {
    slug: "flutter-ui-projects",
    title: "Flutter UI Projects",
    image: "/images/FlutterUIProjects.png",
    category: "Flutter",
    description: "Mobile interface projects including Modern UI, Smart Home UI, and ImageLab.",
    technologies: ["Flutter", "Dart", "UI"],
    highlights: ["Modern UI", "Smart Home UI", "ImageLab"],
    repository: "https://github.com/Albarafahed/flutter-ui-projects/blob/main/README.md",
    icon: "mobile",
  },
  {
    slug: "flutter-games",
    title: "Flutter Games",
    image: "/images/FlutterGame.png",
    category: "Flutter",
    description: "A Flutter game collection focused on interaction and game mechanics.",
    technologies: ["Flutter", "Dart", "Games"],
    highlights: ["Memory Math Game", "XO Game", "Rock Paper Scissors"],
    repository: "https://github.com/Albarafahed/flutter-games/blob/main/README.md",
    icon: "game",
  },
  {
    slug: "flutter-applications",
    title: "Flutter Applications",
    image: "/images/FlutterApplications.png",
    category: "Flutter",
    description: "Flutter application projects including a BMI Calculator and Event Manager.",
    technologies: ["Flutter", "Dart", "Apps"],
    highlights: ["BMI Calculator", "Event Manager"],
    repository: "https://github.com/Albarafahed/flutter-applications/blob/main/README.md",
    icon: "mobile",
  },
  {
    slug: "medical-center",
    title: "Medical Center",
    image: "/images/MedicalCenter.png",
    category: "Python",
    description: "Python desktop application for managing medical center operations.",
    technologies: ["Python", "Desktop Application"],
    highlights: ["Medical center operations", "Python desktop application"],
    repository: "https://github.com/Albarafahed/Medical-Center-Paython-",
    icon: "medical",
  },
  {
    slug: "academic-advisor-ai",
    title: "Academic Advisor AI",
    image: "/images/AcademicAdvisorAI.png",
    category: "Python",
    description: "AI assistant prototype designed to support academic advising.",
    technologies: ["Python", "AI"],
    highlights: ["Academic advising", "AI assistant prototype"],
    repository: "https://github.com/Albarafahed/Academic-Advisor-AI-Paython",
    icon: "brain",
  },
  {
    slug: "aspnet-core-apis",
    title: "ASP.NET Core APIs",
    category: "Backend",
    description: "Backend development projects focused on REST APIs, database relationships, and authentication concepts.",
    technologies: ["ASP.NET Core", "Entity Framework Core", "JWT"],
    highlights: ["RESTful APIs", "Entity Framework Core", "Authentication", "SQL Server integration"],
    icon: "server",
  },
];

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  ".NET",
  "Backend",
  "C++",
  "SQL Server",
  "Flutter",
  "PHP & MySQL",
  "Python",
];
