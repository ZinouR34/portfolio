import {
  Atom,
  Award,
  Braces,
  Cloud,
  Code2,
  Coffee,
  Database,
  Globe,
  GraduationCap,
  Languages,
  Layers,
  Mail,
  MapPin,
  Network,
  Phone,
  QrCode,
  Router,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

/** Any 24px stroke icon component (lucide or the local brand icons). */
export type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
] as const;

export const sectionIds = navLinks.map((l) => l.href.slice(1));

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const roles = [
  "Software Engineer",
  "Backend Developer",
  "Network Engineer",
  "AI Enthusiast",
  "Cloud Computing Enthusiast",
] as const;

export const heroParagraph =
  "I build scalable web applications, distributed systems, networking solutions and AI-powered software with a strong focus on clean architecture, user experience and performance.";

export type FloatingBadge = {
  label: string;
  icon: Icon;
  /** Absolute positioning classes relative to the portrait frame. */
  className: string;
  delay: number;
  duration: number;
};

export const floatingBadges: FloatingBadge[] = [
  { label: "Java", icon: Coffee, className: "left-[4%] -top-8", delay: 0.5, duration: 4.5 },
  { label: "Python", icon: Braces, className: "right-[4%] -top-10", delay: 0.9, duration: 5 },
  { label: "GitHub", icon: GithubIcon, className: "left-1/2 -top-16 -translate-x-1/2 hidden sm:flex", delay: 0.2, duration: 4 },
  { label: "Next.js", icon: Code2, className: "-left-[26%] top-[10%] hidden md:flex", delay: 0, duration: 4.2 },
  { label: "React", icon: Atom, className: "-left-[38%] top-[40%] hidden lg:flex", delay: 0.6, duration: 5.2 },
  { label: "PostgreSQL", icon: Database, className: "-left-[30%] top-[68%] hidden md:flex", delay: 0.3, duration: 4.6 },
  { label: "Networking", icon: Network, className: "-left-[8%] bottom-[2%]", delay: 0.8, duration: 4.4 },
  { label: "Supabase", icon: Layers, className: "-right-[26%] top-[12%] hidden md:flex", delay: 0.4, duration: 4.8 },
  { label: "Cloud", icon: Cloud, className: "-right-[38%] top-[42%] hidden lg:flex", delay: 0.1, duration: 5.4 },
  { label: "AI", icon: Sparkles, className: "-right-[28%] top-[70%] hidden md:flex", delay: 0.7, duration: 4.3 },
  { label: "Backend", icon: Server, className: "-right-[8%] bottom-[2%]", delay: 0.25, duration: 4.7 },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Academic Projects" },
  { value: 5, suffix: "+", label: "Networking Labs" },
  { value: 3, suffix: "+", label: "Full Stack Applications" },
  { value: 1000, suffix: "+", label: "Hours Learning" },
];

export const socialLinks = [
  { label: "GitHub", href: site.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
] as const;

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutParagraphs = [
  "I'm Zaaboub Zineddine Yanis, a Master's student in Computer Science at Ferhat Abbas University Sétif 1, specializing in Networks & Distributed Systems. My work sits at the intersection of software engineering and network infrastructure — I design systems that are not only functional, but scalable, resilient and pleasant to use.",
  "From building full-stack platforms with Next.js and Supabase to simulating routing protocols and designing enterprise network topologies, I enjoy going deep into how systems communicate. Lately, I've been integrating AI and LLMs into real products, exploring how intelligent software can reshape everyday workflows.",
];

export const passions = [
  "Backend Development",
  "Distributed Systems",
  "Networking",
  "Cloud Computing",
  "Artificial Intelligence",
  "Problem Solving",
  "Software Engineering",
];

export const aboutFacts = [
  { label: "University", value: "Ferhat Abbas University Sétif 1", icon: GraduationCap },
  { label: "Degree", value: "Master's in Computer Science", icon: Award },
  { label: "Specialization", value: "Networks & Distributed Systems", icon: Network },
  { label: "Location", value: site.location, icon: MapPin },
  { label: "Email", value: site.email, icon: Mail },
] as const;

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type SkillCategory = {
  title: string;
  icon: Icon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "C", "C#", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: Atom,
    skills: ["Next.js", "React", "Node.js", "TailwindCSS", "Flutter"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Supabase", "PostgreSQL"],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      "Cisco Packet Tracer",
      "TCP/IP",
      "Routing",
      "Switching",
      "Wireless Networks",
      "Network Security",
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["Vercel", "Supabase", "GitHub", "Git"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "VS Code",
      "Android Studio",
      "NetBeans",
      "Maven",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Full Stack Web Development",
    description:
      "Building scalable web applications using Next.js, React, PostgreSQL and Supabase — from the first wireframe to a production deployment.",
    tags: ["Next.js", "React", "PostgreSQL", "Supabase", "TailwindCSS"],
  },
  {
    number: "02",
    title: "Network Design",
    description:
      "Designing reliable network infrastructures: addressing plans, segmentation, redundancy and security across wired and wireless environments.",
    tags: ["LAN", "WAN", "Routing", "Switching", "Network Security", "Wireless Networks"],
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Engineering robust server-side systems with clean architecture — well-designed APIs, secure authentication and data models built to grow.",
    tags: ["REST APIs", "Authentication", "Database Design", "Server Logic"],
  },
  {
    number: "04",
    title: "Cloud Deployment",
    description:
      "Deploying applications using Vercel and Supabase, with environment management, previews and a smooth path from commit to production.",
    tags: ["Vercel", "Supabase", "Git", "CI/CD"],
  },
  {
    number: "05",
    title: "Artificial Intelligence Integration",
    description:
      "Integrating LLMs and AI APIs into web applications — assistants, automation and intelligent features that feel native to the product.",
    tags: ["LLMs", "AI APIs", "Chat Assistants", "Automation"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  icon: Icon;
  featured?: boolean;
  /** Public live demo URL, if deployed. */
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Coffee and Fast Food Shop Ordering System",
    description:
      "An AI-powered ordering platform allowing customers to order through QR codes while managers, cashiers and kitchen stations receive real-time orders.",
    features: [
      "QR Ordering",
      "Kitchen Stations",
      "Admin Dashboard",
      "Product Customization",
      "Authentication",
      "Responsive Design",
      "Realtime Orders",
    ],
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"],
    icon: QrCode,
    featured: true,
    demoUrl: "https://coffee-flow-zineddine.vercel.app/shop/anis/table/1/menu",
  },
  {
    title: "Mobile Network Simulator",
    description:
      "A Java Swing desktop application that simulates mobile network topologies — build interactive topologies and watch routing decisions play out visually.",
    features: ["Interactive Topology", "Routing Simulation", "Networking Simulation"],
    stack: ["Java Swing", "Object-Oriented Programming"],
    icon: Router,
  },
  {
    title: "Weather Application",
    description:
      "A responsive weather app consuming the OpenWeather API to deliver live conditions and forecasts through a clean, glanceable interface.",
    features: ["Live Forecast", "Responsive Design"],
    stack: ["JavaScript", "OpenWeather API"],
    icon: Globe,
  },
  {
    title: "Networking Labs",
    description:
      "A collection of Cisco Packet Tracer labs covering LAN design, DHCP, VLAN segmentation, routing protocols and wireless network configuration.",
    features: ["LAN", "DHCP", "VLAN", "Routing", "Wireless Networks"],
    stack: ["Cisco Packet Tracer"],
    icon: Network,
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export type EducationEntry = {
  degree: string;
  field: string;
  school: string;
  status: "Completed" | "Current";
  details: string[];
};

export const education: EducationEntry[] = [
  {
    degree: "Bachelor's Degree",
    field: "Computer Science",
    school: "Ferhat Abbas University Sétif 1",
    status: "Completed",
    details: ["Algorithms & Data Structures", "Operating Systems", "Databases", "Networks"],
  },
  {
    degree: "Master's Degree",
    field: "Computer Science — Networks & Distributed Systems",
    school: "Ferhat Abbas University Sétif 1",
    status: "Current",
    details: ["Distributed Systems", "Advanced Networking", "Network Security", "Cloud Computing"],
  },
];

/* ------------------------------------------------------------------ */
/* Certificates                                                        */
/* ------------------------------------------------------------------ */

export type Certificate = {
  title: string;
  issuer: string;
  status: "In Progress" | "Future" | "Planned";
  icon: Icon;
};

export const certificates: Certificate[] = [
  { title: "Cisco CCNA", issuer: "Cisco Networking Academy", status: "In Progress", icon: Router },
  { title: "Google Cybersecurity", issuer: "Google / Coursera", status: "Future", icon: ShieldCheck },
  { title: "IELTS", issuer: "British Council", status: "Planned", icon: Languages },
];

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contactCards = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "LinkedIn", value: "Connect with me", href: site.socials.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "Browse my code", href: site.socials.github, icon: GithubIcon },
  { label: "Location", value: site.location, href: undefined, icon: MapPin },
] as const;