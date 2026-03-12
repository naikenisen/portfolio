// ====================================================
// Edit this file to fill in YOUR information.
// The site reads everything from here — no other files to touch.
// ====================================================

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "devops" | "data" | "other";
}

export interface Publication {
  title: string;
  authors: string;
  venue: string; // journal / conference
  year: number;
  url?: string;
  abstract?: string;
}

export interface GitRepo {
  name: string;
  description: string;
  url: string;
  language?: string;
  stars?: number;
}

export interface Website {
  name: string;
  description: string;
  url: string;
  imageUrl?: string; // optional screenshot / logo in /public
}

export interface CVData {
  name: string;
  title: string;
  bio: string;
  email?: string;
  location?: string;
  avatarUrl?: string; // path inside /public
  socials: { label: string; url: string }[];
  skills: Skill[];
  publications: Publication[];
  repos: GitRepo[];
  websites: Website[];
}

const cv: CVData = {
  // ── Identity ──────────────────────────────────────
  name: "Your Name",
  title: "Full-Stack Developer & Researcher",
  bio: "Passionate developer with expertise in web technologies, data science, and open-source. Replace this with your own bio.",
  email: "you@example.com",
  location: "Paris, France",
  avatarUrl: undefined, // e.g. "/avatar.jpg"

  // ── Social links ──────────────────────────────────
  socials: [
    { label: "GitHub", url: "https://github.com/naikenisen" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  ],

  // ── Skills ────────────────────────────────────────
  skills: [
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "React / Next.js", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Python", level: 85, category: "backend" },
    { name: "PostgreSQL", level: 70, category: "backend" },
    { name: "Docker", level: 75, category: "devops" },
    { name: "CI/CD", level: 70, category: "devops" },
    { name: "Machine Learning", level: 65, category: "data" },
  ],

  // ── Publications ──────────────────────────────────
  publications: [
    {
      title: "A Novel Approach to Widget Optimization",
      authors: "Your Name, Co-Author",
      venue: "International Conference on Software Engineering",
      year: 2024,
      url: "https://doi.org/10.1234/example",
      abstract:
        "We propose a novel framework for optimizing widget rendering in large-scale applications…",
    },
    {
      title: "Deep Learning for Code Analysis",
      authors: "Your Name, Another Author",
      venue: "Journal of Artificial Intelligence Research",
      year: 2023,
      url: "https://doi.org/10.5678/example",
    },
  ],

  // ── Git Repositories ──────────────────────────────
  repos: [
    {
      name: "portfolio",
      description: "This interactive CV / portfolio site built with Next.js & Tailwind.",
      url: "https://github.com/naikenisen/portfolio",
      language: "TypeScript",
    },
    {
      name: "awesome-tool",
      description: "A CLI tool for automating repetitive dev tasks.",
      url: "https://github.com/naikenisen/awesome-tool",
      language: "Python",
      stars: 42,
    },
  ],

  // ── Websites / Projects ───────────────────────────
  websites: [
    {
      name: "My Blog",
      description: "Technical articles on web dev, data science, and more.",
      url: "https://yourblog.dev",
    },
    {
      name: "SaaS Dashboard",
      description: "A real-time analytics dashboard I built for a client.",
      url: "https://dashboard.example.com",
    },
  ],
};

export default cv;
