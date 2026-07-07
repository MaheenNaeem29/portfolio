/**
 * Single source of truth for all portfolio content.
 * No component should hardcode content — import from here.
 */

/** Production URL — used for metadata, sitemap and robots. */
export const siteUrl = "https://portfolio-beryl-tau-31.vercel.app";

/* ----------------------------------------------------------------- */
/*  Identity & contact                                                */
/* ----------------------------------------------------------------- */

export const identity = {
  name: "Maheen Naeem",
  title: "AI Engineer",
  roles: ["Agentic AI Engineer", "Deep Learning Engineer", "ML Engineer"],
  tagline: "Building intelligent systems — Agentic AI, Multimodal Deep Learning & Computer Vision.",
  email: "maheennaeem94@gmail.com",
  phone: "+92 309 0054878",
  location: "Chiniot-Faisalabad, Pakistan",
  socials: {
    github: "https://github.com/MaheenNaeem29",
    githubHandle: "MaheenNaeem29",
    linkedin: "https://linkedin.com/in/maheen-naeem",
    linkedinHandle: "maheen-naeem",
  },
  /** Placeholder — drop resume.pdf into /public to make this live. */
  resumeUrl: "/resume.pdf",
} as const;

export const bio = {
  /** Short 2-sentence summary for the hero. */
  summary:
    "Artificial Intelligence graduate specializing in Multimodal Deep Learning and Agentic AI systems. I build intelligent automation with LLMs, RAG pipelines, and computer vision models — from research to production.",
  /** Expanded first-person bio for the About page. */
  long: [
    "I'm an Artificial Intelligence graduate specializing in Multimodal Deep Learning and Agentic AI systems. My work centers on building intelligent automation with LLMs, RAG pipelines, and computer vision models — turning research ideas into systems that actually ship.",
    "I'm proficient in Python, PyTorch, LangChain, and LangGraph, with hands-on experience designing AI-driven security frameworks, transformer-based models, and explainable multimodal networks. I care as much about clean, reproducible pipelines as I do about model accuracy.",
    "Recently I've focused on agentic architectures — orchestrating LLMs to reason, plan, and act — and on deploying models to production with FastAPI, Redis, and Docker. I'm always looking for problems where deep learning and autonomy can make a measurable difference.",
  ],
} as const;

/* ----------------------------------------------------------------- */
/*  Headline stats                                                    */
/* ----------------------------------------------------------------- */

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "AI Projects shipped" },
  { value: 65, suffix: "%", label: "Manual reporting time reduced (ASHEN)" },
  { value: 0.89, suffix: "", decimals: 2, label: "AUC-ROC — cancer prognosis" },
  { value: 95, suffix: "%", label: "Remediation accuracy (ASHEN)" },
];

/* ----------------------------------------------------------------- */
/*  Skills                                                            */
/* ----------------------------------------------------------------- */

export interface SkillCategory {
  name: string;
  accent: "primary" | "secondary";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Agentic & Generative AI",
    accent: "primary",
    skills: ["Agentic AI", "Generative AI", "RAG", "Prompt Engineering", "MCP", "LangChain", "LangGraph", "Agno"],
  },
  {
    name: "AI / Machine Learning",
    accent: "secondary",
    skills: ["CNNs", "RNNs", "LSTMs", "Transformers", "YOLOv8", "NLP", "Multimodal Learning", "SHAP", "LIME"],
  },
  {
    name: "Frameworks & Libraries",
    accent: "primary",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Hugging Face", "OpenCV", "Pandas", "NumPy"],
  },
  {
    name: "Languages",
    accent: "secondary",
    skills: ["Python", "C++", "SQL", "JavaScript", "React", "Bash"],
  },
  {
    name: "Tools & Platforms",
    accent: "primary",
    skills: ["Docker", "FastAPI", "Redis", "AWS (EC2, S3)", "Git", "GitHub"],
  },
  {
    name: "Security",
    accent: "secondary",
    skills: ["Nmap", "Metasploit", "OpenVAS"],
  },
];

/** Compact 4-category preview shown on the home page. */
export const skillsPreview = [
  { name: "Agentic & GenAI", items: ["LangChain", "LangGraph", "RAG", "MCP", "Agno"] },
  { name: "ML / DL", items: ["PyTorch", "Transformers", "CNNs", "Multimodal", "YOLOv8"] },
  { name: "Frameworks", items: ["TensorFlow", "Hugging Face", "OpenCV", "Scikit-Learn"] },
  { name: "Tools", items: ["Docker", "FastAPI", "Redis", "AWS", "Git"] },
] as const;

/* ----------------------------------------------------------------- */
/*  Projects                                                          */
/* ----------------------------------------------------------------- */

export type ProjectCategory =
  | "Agentic AI"
  | "Deep Learning"
  | "Computer Vision"
  | "AI Navigation"
  | "Data Engineering";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** One-line impact for cards. */
  tagline: string;
  featured: boolean;
  /** Optional tag e.g. "Final Year Project". */
  badge?: string;
  /** Short neutral overview paragraphs derived from the bullets. */
  overview: string[];
  /** CV bullet points — used verbatim as the achievements list. */
  achievements: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    slug: "ashen",
    title: "ASHEN — AI-Driven Automated Penetration Testing",
    category: "Agentic AI",
    tagline: "LLM-driven security framework that cuts manual reporting time by 65%.",
    featured: true,
    badge: "Final Year Project",
    overview: [
      "ASHEN is an automated penetration-testing framework that uses large language models to interpret raw vulnerability-scan output and turn it into structured, actionable security findings.",
      "A distributed FastAPI + Redis backend coordinates concurrent host exploitation and streams real-time monitoring, while an LLM layer generates remediation guidance — dramatically reducing the manual effort of security reporting.",
    ],
    achievements: [
      "Engineered an automated security framework using LLMs to analyze vulnerability scans, reducing manual reporting time by 65%.",
      "Architected a distributed backend using FastAPI and Redis, enabling concurrent host exploitation and real-time monitoring.",
      "Implemented automated remediation generation, achieving 95% accuracy in actionable security patches.",
    ],
    tech: ["Python", "FastAPI", "Redis", "Celery", "LLMs", "Docker", "Nmap", "OpenVAS", "Metasploit"],
  },
  {
    slug: "multimodal-cancer-prognosis",
    title: "Multimodal Cancer Prognosis System",
    category: "Deep Learning",
    tagline: "Late-fusion network across histopathology, genomics & clinical data — 0.89 AUC-ROC.",
    featured: true,
    overview: [
      "A multimodal deep-learning system for cancer prognosis that fuses histopathology imagery, genomic profiles, and clinical records into a single predictive model.",
      "A late-fusion neural architecture combines the modalities, and Explainable AI techniques surface which features drive each prediction — making the model's reasoning interpretable for clinical review.",
    ],
    achievements: [
      "Developed a Late-Fusion Neural Network integrating histopathology, genomic, and clinical data — 0.89 AUC-ROC.",
      "Leveraged Explainable AI (XAI) to visualize feature importance for clinical interpretability.",
      "Optimized PyTorch preprocessing pipelines for heterogeneous data across multiple cancer types.",
    ],
    tech: ["Python", "PyTorch", "Multimodal Learning", "CNNs", "SHAP", "LIME"],
  },
  {
    slug: "smart-city-surveillance",
    title: "Smart City Urban Surveillance",
    category: "Computer Vision",
    tagline: "Real-time pedestrian detection at 30+ FPS on edge hardware.",
    featured: true,
    overview: [
      "A real-time urban surveillance system built around a fine-tuned YOLOv8 detector for pedestrian detection on custom-annotated city datasets.",
      "The model is optimized with TensorRT for high-throughput inference on edge hardware, sustaining 30+ FPS for live deployment scenarios.",
    ],
    achievements: [
      "Fine-tuned YOLOv8 for real-time pedestrian detection — 83% precision on custom-annotated urban datasets.",
      "Deployed with TensorRT for optimized inference at 30+ FPS on edge hardware.",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "TensorRT"],
  },
  {
    slug: "autonomous-delivery-robot",
    title: "Autonomous Delivery Robot",
    category: "AI Navigation",
    tagline: "A* heuristic navigation with dynamic obstacle avoidance and re-routing.",
    featured: false,
    overview: [
      "An autonomous navigation stack for a delivery robot that plans optimal routes using A* heuristic search.",
      "The system detects obstacles dynamically and re-routes in real time, keeping the robot on an efficient path as its environment changes.",
    ],
    achievements: [
      "Designed autonomous navigation using A* heuristic search for optimized path planning.",
      "Implemented dynamic obstacle detection/avoidance with real-time re-routing.",
    ],
    tech: ["Python", "Heuristic Search (A*)", "Path Planning"],
  },
  {
    slug: "crypto-data-pipeline",
    title: "Crypto Data Pipeline",
    category: "Data Engineering",
    tagline: "Real-time crypto market pipeline for collection, processing & analysis.",
    featured: false,
    overview: [
      "A real-time data pipeline for cryptocurrency markets that automates the collection, processing, and analysis of live market feeds.",
      "Ingestion and transformation workflows are structured for downstream analytics, enabling trend monitoring over continuously updating data.",
    ],
    achievements: [
      "Built a real-time cryptocurrency data pipeline automating collection, processing, and analysis of live market data.",
      "Structured ingestion/transformation workflows for downstream analytics and trend monitoring.",
    ],
    tech: ["Python", "Pandas", "REST APIs", "SQL"],
  },
  {
    slug: "glowcelestia",
    title: "GlowCelestia — Interactive 3D Hand-Tracking Experience",
    category: "Computer Vision",
    tagline: "Real-time hand-tracking meets an immersive 3D celestial scene in the browser.",
    featured: true,
    overview: [
      "GlowCelestia is an interactive web experience that combines real-time hand-tracking with a dynamic, animated 3D celestial scene rendered entirely in the browser.",
      "Webcam input is processed with MediaPipe Hands to detect hand landmarks in real time, which drive interactions within a Three.js scene — creating a playful, gesture-controlled interface with no installs required.",
    ],
    achievements: [
      "Built a real-time hand-tracking pipeline using MediaPipe Hands integrated directly into a React + Three.js rendering loop.",
      "Designed an interactive 3D celestial scene with React Three Fiber, animated with Framer Motion for smooth transitions.",
      "Deployed as a fully client-side, webcam-powered web app accessible from any modern browser.",
    ],
    tech: ["React", "Vite", "Three.js", "React Three Fiber", "MediaPipe", "Tailwind CSS", "Framer Motion"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

/** Filter chips derived from the data — "All" first, then each category present. */
export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Returns the previous / next project for case-study navigation (wraps around). */
export function getAdjacentProjects(slug: string): { prev: Project; next: Project } | null {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}

/* ----------------------------------------------------------------- */
/*  Education & certifications                                        */
/* ----------------------------------------------------------------- */

export const education = {
  degree: "BS Artificial Intelligence",
  institution: "FAST-NUCES",
  location: "Chiniot-Faisalabad, Pakistan",
  period: "09/2022 – 06/2026 (Expected)",
  coursework: [
    "Deep Learning",
    "Computer Vision",
    "Probabilistic Graphical Models",
    "Big Data Analytics",
  ],
} as const;

export interface Certification {
  name: string;
  issuer: string;
  inProgress?: boolean;
}

export const certifications: Certification[] = [
  { name: "Machine Learning Specialization", issuer: "Stanford Online · DeepLearning.AI" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", inProgress: true },
];

/* ----------------------------------------------------------------- */
/*  Navigation                                                        */
/* ----------------------------------------------------------------- */

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
