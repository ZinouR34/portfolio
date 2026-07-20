/**
 * Plain-string site configuration, safe to import from server components
 * (layout metadata, sitemap, robots). Content with icons lives in data.ts.
 */
export const site = {
  name: "Zaaboub Zineddine Yanis",
  shortName: "Zineddine",
  initials: "ZY",
  // TODO: replace with your real domain once deployed.
  url: "https://zineddine-yanis.vercel.app",
  title: "Zaaboub Zineddine Yanis — Software Engineer & Network Specialist",
  description:
    "Portfolio of Zaaboub Zineddine Yanis, Master's student in Computer Science (Networks & Distributed Systems) at Ferhat Abbas University Sétif 1. I build scalable web applications, distributed systems, networking solutions and AI-powered software.",
  keywords: [
    "Zaaboub Zineddine Yanis",
    "Software Engineer",
    "Backend Developer",
    "Network Engineer",
    "Networks and Distributed Systems",
    "Ferhat Abbas University Sétif 1",
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "Cloud Computing",
    "Artificial Intelligence",
    "Sétif Algeria",
  ],
  email: "zaaboubzinedin@gmail.com",
  phone: "+213 549 94 16 73",
  location: "Sétif, Algeria",
  socials: {
    github: "https://github.com/ZinouR34",
    linkedin:
      "https://www.linkedin.com/in/zineddine-yanis-zaaboub-2a80b0228",
    instagram: "https://www.instagram.com/_zinedin_enma_",
  },
  resumeUrl: "/cv.pdf",
  portraitSrc: "/portrait.png",
} as const;
