export interface SkillDomain {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url?: string;
  abstract?: string;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export interface Venture {
  name: string;
  role: string;
  description: string;
  url: string;
}

export interface CVData {
  name: string;
  title: string;
  bio: string;
  email?: string;
  location?: string;
  avatarUrl?: string;
  socials: { label: string; url: string }[];
  skillDomains: SkillDomain[];
  publications: Publication[];
  projects: Project[];
  ventures: Venture[];
}

const cv: CVData = {
  name: "Isen Naiken",
  title: "AI Researcher & Entrepreneur in Healthcare",
  bio: "Pharmacist and AI researcher building intelligent systems for clinical diagnostics. Co-founder of Nexomedis, editor-in-chief of Revue IA Santé, and contributor to biomedical research at the intersection of deep learning and healthcare.",
  email: "isen.naiken@nexomedis.com",
  location: "Dijon, France",
  avatarUrl: undefined,

  socials: [
    { label: "GitHub", url: "https://github.com/naikenisen" },
    { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Naiken+I" },
  ],

  skillDomains: [
    {
      id: "ai",
      name: "AI & Deep Learning",
      icon: "🧠",
      color: "#06b6d4",
      skills: [
        { name: "Deep Learning", level: 90 },
        { name: "GANs", level: 85 },
        { name: "Computer Vision", level: 85 },
        { name: "LLMs / NLP", level: 80 },
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 75 },
      ],
    },
    {
      id: "data",
      name: "Data Science",
      icon: "📊",
      color: "#8b5cf6",
      skills: [
        { name: "Python", level: 95 },
        { name: "Data Analysis", level: 90 },
        { name: "Statistical Modeling", level: 80 },
        { name: "Pandas / NumPy", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "Data Visualization", level: 80 },
      ],
    },
    {
      id: "engineering",
      name: "Software Engineering",
      icon: "⚙️",
      color: "#f59e0b",
      skills: [
        { name: "Python", level: 95 },
        { name: "TypeScript", level: 75 },
        { name: "Electron", level: 80 },
        { name: "Desktop Applications", level: 80 },
        { name: "Git / GitHub", level: 85 },
        { name: "API Design", level: 75 },
      ],
    },
    {
      id: "research",
      name: "Biomedical Research",
      icon: "🧬",
      color: "#10b981",
      skills: [
        { name: "Scientific Writing", level: 90 },
        { name: "Clinical Research", level: 85 },
        { name: "Biomarkers", level: 85 },
        { name: "Pharmacology", level: 80 },
        { name: "Immunohistochemistry", level: 80 },
        { name: "Peer Review", level: 85 },
      ],
    },
    {
      id: "leadership",
      name: "Leadership",
      icon: "🚀",
      color: "#f43f5e",
      skills: [
        { name: "Startup Management", level: 85 },
        { name: "Scientific Direction", level: 90 },
        { name: "Editorial Management", level: 85 },
        { name: "Team Leadership", level: 80 },
        { name: "Regulatory Compliance", level: 75 },
        { name: "Strategic Planning", level: 80 },
      ],
    },
  ],

  publications: [
    {
      title:
        "Small Extracellular Vesicles as Biomarkers in Sarcoma Follow-Up: Protocol for a Prospective, Multicentric Pilot Study",
      authors:
        "Vautrot V, Hervieu A, Bertaut A, Charon-Barra C, Naiken I, Causseret S, Chaigneau L, Desmoulins I, Rederstoff E, Isambert N, Gobbo J",
      venue: "JMIR Research Protocols",
      year: 2025,
      url: "https://pubmed.ncbi.nlm.nih.gov/40925003/",
      abstract:
        "This prospective, multicentric pilot study investigates whether small extracellular vesicles (sEVs) can serve as reliable biomarkers for monitoring sarcoma progression and predicting recurrence risk via liquid biopsy.",
    },
    {
      title:
        "Monitoring Pseudoprogression Using Circulating Small Extracellular Vesicles Expressing PD-L1 in a Melanoma Patient Treated With Immune Checkpoint Inhibitors",
      authors:
        "Nardin C, Vautrot V, Naiken I, Doussot A, Puzenat E, De Girval C, Gobbo J",
      venue: "Journal of Extracellular Biology",
      year: 2025,
      url: "https://pubmed.ncbi.nlm.nih.gov/40552104/",
      abstract:
        "First report of PD-L1 monitoring in circulating small extracellular vesicles during pseudoprogression under immune checkpoint inhibitors, suggesting sEV-PD-L1 as an early sign of disease response.",
    },
  ],

  projects: [
    {
      name: "GAN-IA2HL",
      description:
        "Generative Adversarial Network\u2013Based Virtual CD30 Immunostaining from HES-Stained Hodgkin Lymphoma Lymph Node Biopsies. Deep learning model for virtual immunohistochemistry.",
      url: "https://github.com/naikenisen/gan-ia2hl",
      tags: ["GANs", "Deep Learning", "Computer Vision", "Pathology"],
    },
    {
      name: "NeuRail",
      description:
        "Electron and Python desktop client to centralize the management of tasks, emails, reminders, leads, and calendar in a single interface.",
      url: "https://github.com/naikenisen/NeuRail",
      tags: ["Electron", "Python", "Desktop App", "Productivity"],
    },
  ],

  ventures: [
    {
      name: "Nexomedis",
      role: "Co-Founder & Chief Scientific Officer",
      description:
        "AI startup developing custom solutions (Deep Learning, LLMs, Computer Vision) for clinical diagnostics, ensuring scientific robustness and regulatory compliance.",
      url: "https://www.nexomedis.com/",
    },
    {
      name: "Revue IA Santé",
      role: "President & Editor-in-Chief",
      description:
        "Peer-reviewed francophone scientific journal dedicated to AI in healthcare, promoting open science and reproducible research.",
      url: "https://revue-ia-sante.fr/index.php/accueil",
    },
  ],
};

export default cv;
