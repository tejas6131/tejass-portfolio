export interface PersonalInfo {
  name: string;
  location: string;
  nationality: string;
  email: string;
  phone: string;
  socialLinks: {
    linkedin: string;
    github: string;
    leetcode: string;
    portfolio: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  contributions: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa?: string;
  dissertation?: string;
}

export interface Project {
  title: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  description: string;
  features?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Tejas Mali",
  location: "Pune, India",
  nationality: "Indian",
  email: "tejasmali2008@gmail.com",
  phone: "+91-7385455863",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/tejas-mali-6b9050209/",
    github: "https://github.com/tejasmali6131",
    leetcode: "https://leetcode.com/tejasmali77",
    portfolio: "https://tejass-portfolio.netlify.app/"
  }
};

export const professionalSummary = "I am an M.Tech Computer Engineering student at COEP Technological University with hands-on industry experience at KONE Elevators in R&D. I have a strong background in full-stack web development and real-time, distributed systems, with experience building scalable, production-ready applications.";

export const careerGoal = "Seeking Software Engineering Internship or Junior Software Engineer opportunities in Germany starting July 2026.";

export const experience: Experience[] = [
  {
    company: "KONE Elevators India Pvt. Ltd.",
    role: "Product Development Intern, R&D",
    duration: "Aug 2025 – Present",
    contributions: [
      "Designed and developed TeamRetro, a real-time retrospective collaboration platform using TypeScript, React, WebSockets, and Node.js",
      "Implemented multi-stage workflows including brainstorming, grouping, voting, discussion, and action-item tracking",
      "Added anonymous feedback support with a responsive Tailwind CSS frontend and Node.js backend",
      "Developed Planning Poker real-time estimation tool using React, Node.js, and Socket.io",
      "Implemented live voting, vote reveal/hide, customizable cards, and shareable session links",
      "Built BuildBuddy, an architect-customer collaboration platform with role-based dashboards and bidding system",
      "Containerized applications using Docker and deployed on company's edge device"
    ]
  }
];

export const education: Education[] = [
  {
    institution: "COEP Technological University, Pune",
    degree: "M.Tech in Computer Engineering",
    duration: "2024 – 2026",
    cgpa: "7.2 / 10",
    dissertation: "Agentic AI for Customer-Centric Architectural Design Assistance: A Template-Oriented Web Framework (Ongoing)"
  },
  {
    institution: "Government College of Engineering, Karad",
    degree: "B.Tech in Information Technology",
    duration: "2020 – 2024",
    cgpa: "8.43 / 10"
  }
];

export const projects: Project[] = [
  {
    title: "TeamRetro — Agile Retrospective Platform",
    techStack: ["TypeScript", "React", "Node.js", "WebSocket", "Tailwind CSS"],
    github: "https://github.com/tejasmali6131/TeamRetro",
    liveDemo: "https://team-retro.onrender.com",
    description: "A collaborative retrospective platform for Agile teams with real-time synchronization",
    features: [
      "Anonymous feedback support",
      "Voting mechanisms",
      "Action-item tracking",
      "Multi-stage workflows (brainstorming, grouping, voting, discussion)"
    ]
  },
  {
    title: "BuildBuddy — Architect-Customer Collaboration Platform",
    techStack: ["React", "Node.js", "Express", "SQLite"],
    liveDemo: "https://buildbuddy-app.onrender.com/",
    description: "Full-stack platform enabling collaboration between architects and customers through role-based dashboards",
    features: [
      "Project creation by customers with detailed requirements",
      "Bidding system for architects with pricing and proposal details",
      "Bid review workflows with acceptance or rejection",
      "Post-project star ratings and reviews",
      "Persistent SQLite-backed storage deployed on Render"
    ]
  },
  {
    title: "Planning Poker — Full-Stack Web Application",
    techStack: ["React.js", "Node.js", "Socket.io", "Docker", "WebSocket"],
    github: "https://github.com/tejasmali6131/Planning-Poker",
    description: "A real-time Planning Poker tool for distributed Agile teams with synchronized voting using WebSockets",
    features: [
      "Real-time synchronized voting",
      "Live vote reveal and automatic state management",
      "Multiplayer session support",
      "Docker containerization"
    ]
  },
  {
    title: "Puzzle Game Website",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/tejas6131/puzzle-game-website",
    liveDemo: "https://puzzle-game-website-indol.vercel.app/",
    description: "Interactive jigsaw puzzle game with drag-and-drop functionality",
    features: [
      "Interactive drag-and-drop assembly",
      "Progress tracking",
      "Responsive UI",
      "Local storage for game persistence"
    ]
  },
  {
    title: "Doctor Assistant — Desktop Application",
    techStack: ["JavaFX", "SQLite", "HTML", "CSS"],
    github: "https://github.com/tejas6131/Doctor-Assistant",
    description: "Medical practice management system for efficient patient care",
    features: [
      "Secure patient record management",
      "Prescription generation",
      "Appointment scheduling",
      "Drug repository with dosage and interaction details",
      "SQLite database backend"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Web Technologies",
    items: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    category: "Databases",
    items: ["SQL", "MongoDB"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "GitLab", "Docker", "VS Code", "IntelliJ", "Eclipse", "Android Studio"]
  }
];

export const languages = [
  { name: "English", proficiency: "Full Professional Proficiency" },
  { name: "Hindi", proficiency: "Full Professional Proficiency" },
  { name: "Marathi", proficiency: "Full Professional Proficiency" },
  { name: "German", proficiency: "A1 (Currently learning)" }
];
