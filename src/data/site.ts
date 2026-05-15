export interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  link: string;
  accent: string;
}

export interface Link {
  label: string;
  href: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "level3id",
    title: "Level3ID",
    description: "Next-gen digital identity platform for founders and creators.",
    status: "Live",
    link: "#",
    accent: "#a78bfa",
  },
  {
    id: "anthroshield",
    title: "AnthroShield",
    description: "AI-powered protection layer for human-AI interactions.",
    status: "Beta",
    link: "#",
    accent: "#60a5fa",
  },
  {
    id: "chromeguard",
    title: "Chrome Guard",
    description: "Privacy-first browser extension suite.",
    status: "Live",
    link: "#",
    accent: "#f472b6",
  },
  {
    id: "buildbygrok",
    title: "Build by Grok",
    description: "Autonomous coding agent and product studio.",
    status: "Active",
    link: "#",
    accent: "#4ade80",
  },
  {
    id: "jain",
    title: "J-AI-N",
    description: "Personal intelligence operating system.",
    status: "Research",
    link: "#",
    accent: "#c084fc",
  },
];

export const socialLinks: Link[] = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "X", href: "https://x.com", icon: "x" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Email", href: "mailto:hello@justinmobil.com", icon: "mail" },
];