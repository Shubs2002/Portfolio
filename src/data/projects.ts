export interface Client {
  name: string;
  type: string;
  link?: string;
  isYouTube?: boolean;
  isInstagram?: boolean;
}

export interface Project {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  features: string[];
  tech: string[];
  color: string;
  link?: string;
  github?: string;
  clients?: Client[];
  status: "Live" | "In Development" | "Completed";
  year: string;
}

export const projects: Project[] = [
  {
    slug: "smartshelf",
    icon: "Package",
    title: "SmartShelf",
    tagline: "AI-Powered Inventory Management Platform",
    description: "AI-powered inventory management platform with real-time tracking, smart alerts, demand prediction, and offline-first capabilities for retail & warehouses.",
    fullDescription: [
      "SmartShelf is an AI-powered inventory management platform designed to help businesses intelligently track, manage, and optimize their inventory in real time.",
      "The system focuses on reducing stock shortages, preventing overstocking, and improving operational efficiency by combining automation, analytics, and AI-driven insights.",
      "SmartShelf enables users to monitor inventory levels in real time, get smart alerts for low stock, restocking, or anomalies, analyze product movement and demand trends, and manage inventory efficiently even in offline or low-connectivity environments.",
      "The platform is built with a modern, scalable architecture and is designed to work as both a web application and a desktop/offline application, making it suitable for retail stores, warehouses, and smart supply-chain systems."
    ],
    features: [
      "Real-time inventory monitoring",
      "AI-powered demand prediction",
      "Smart alerts for low stock & anomalies",
      "Offline-first desktop application",
      "Role-based access control (Admin/Staff/Manager)",
      "Product movement analytics",
      "Automated restocking recommendations",
      "Cross-platform support"
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Material UI", "Electron.js", "Node.js", "ElysiaJS", "Bun", "MongoDB", "Redis", "Machine Learning", "Docker", "JWT"],
    color: "from-emerald-600 to-teal-600",
    status: "In Development",
    year: "2025"
  },
  {
    slug: "sukta",
    icon: "Globe",
    title: "SUKTA",
    tagline: "Web Intelligence Platform",
    description: "AI-powered chatbot that analyzes any website. Scrape once, ask unlimited questions with real-time status updates and background job processing.",
    fullDescription: [
      "SUKTA is a full-stack chatbot application that allows users to ask questions about any website using AI.",
      "Simply submit any website URL to analyze, and the AI-powered system will provide answers using OpenRouter (GPT-3.5 Turbo).",
      "The chat-style interface allows you to scrape once and ask unlimited questions, with real-time status updates throughout the process.",
      "Built with modern technologies including Next.js 15, Express, BullMQ for background job processing, and PostgreSQL with Drizzle ORM for data persistence."
    ],
    features: [
      "Submit any website URL to analyze",
      "AI-powered answers using OpenRouter",
      "Chat-style interface",
      "Real-time status updates",
      "Background job processing with BullMQ",
      "Markdown rendering for AI responses",
      "Mobile responsive design",
      "Dynamic & static content scraping"
    ],
    tech: ["Next.js 15", "React", "TanStack Query", "Tailwind CSS", "Express", "BullMQ", "Redis", "PostgreSQL", "Drizzle ORM", "Playwright", "Cheerio", "OpenRouter AI"],
    color: "from-cyan-600 to-blue-600",
    link: "https://web-production-e841.up.railway.app/",
    github: "https://github.com/Shubs2002/SUKTA",
    status: "Live",
    year: "2025"
  },
  {
    slug: "aadya-creation",
    icon: "ShoppingCart",
    title: "Aadya Creation",
    tagline: "Full-Stack E-Commerce Platform",
    description: "Full-stack e-commerce platform with smooth UI, secure payment integration, and inventory management.",
    fullDescription: [
      "Aadya Creation is a comprehensive full-stack e-commerce website that allows users to browse and purchase products online with a smooth and responsive user interface.",
      "The platform features secure payment integration, product management, and a modern design that enhances user experience and drives conversions.",
      "Built with the MERN stack and deployed with Nginx and PM2 for optimal performance and reliability.",
      "The website was hosted on aadyacreation.com for a year, temporarily taken down in preparation for an upcoming relaunch event."
    ],
    features: [
      "Product catalog with categories",
      "Secure payment integration",
      "User authentication",
      "Shopping cart functionality",
      "Order management",
      "Responsive design",
      "Admin dashboard",
      "Inventory management"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Nginx", "PM2", "JWT"],
    color: "from-purple-600 to-pink-600",
    clients: [
      { name: "Aadya Creation", type: "E-Commerce Business" }
    ],
    status: "Completed",
    year: "2024"
  },
  {
    slug: "nextgen-finance",
    icon: "Brain",
    title: "Next-gen Finance",
    tagline: "Financial Services Frontend",
    description: "Client-focused financial services frontend with intuitive design and analytics integration.",
    fullDescription: [
      "Next-gen Finance is a client-focused Next.js frontend for listing financial services and loans.",
      "The platform features intuitive, responsive design and customized UI to boost engagement and visibility.",
      "Integrated with Google Analytics for tracking user behavior and optimizing the user experience.",
      "Built with modern web technologies to ensure fast loading times and excellent SEO performance."
    ],
    features: [
      "Financial services listing",
      "Loan information display",
      "Responsive design",
      "Google Analytics integration",
      "SEO optimized",
      "Fast performance",
      "Modern UI/UX",
      "Mobile-first approach"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Analytics"],
    color: "from-blue-600 to-indigo-600",
    link: "https://next-gen-finance.vercel.app",
    clients: [
      { name: "Next-gen Finance", type: "Financial Services", link: "https://next-gen-finance.vercel.app" }
    ],
    status: "In Development",
    year: "2024"
  },
  {
    slug: "avpe",
    icon: "Video",
    title: "AVPE",
    tagline: "Automated Video Pipeline Engine",
    description: "AI-powered video production ecosystem automating scriptwriting, character design, voice generation, and video creation for social media.",
    fullDescription: [
      "AVPE (Automated Video Pipeline Engine) is an AI-powered video production ecosystem that automates the entire video creation process.",
      "The platform handles scriptwriting, character design, voice generation, and video creation, making it perfect for social media content creators.",
      "Using cutting-edge AI technologies including Google Veo-3 and OpenAI GPT, AVPE transforms ideas into fully produced videos with minimal human intervention.",
      "The system is designed to scale and serve multiple content creators, automating their video production workflow."
    ],
    features: [
      "Automated scriptwriting with AI",
      "Character design generation",
      "AI voice generation",
      "Video creation automation",
      "Social media optimization",
      "Multi-platform export",
      "Content scheduling",
      "Analytics dashboard"
    ],
    tech: ["Python", "FastAPI", "Google Veo-3.1", "React", "Node.js", "Next JS", "Gemini 3"],
    color: "from-violet-600 to-purple-600",
    clients: [
      { name: "Floof's World", type: "YouTube Content Creator", link: "https://youtube.com/@floofsworld?si=jA2pyxddlk6gu_yR", isYouTube: true },
      { name: "Floof's World", type: "Instagram Content Creator", link: "https://www.instagram.com/floofs._.world?igsh=MXh4eDBwaWwxMDFoMQ==", isInstagram: true },
      { name: "ArtRage Studios", type: "YouTube Content Creator", link: "https://youtube.com/@artrage-studios?si=KoLRKZimpUNYhL-g", isYouTube: true },
      { name: "AVPE Productions", type: "Instagram Content Creator", link: "https://www.instagram.com/avpe.productions?igsh=MTE3NzBnMHN6b2t6eg==", isInstagram: true }
    ],
    status: "In Development",
    year: "2025"
  },
  {
    slug: "xplore",
    icon: "Rocket",
    title: "Xplore",
    tagline: "Space Exploration Website",
    description: "Space exploration website with Firebase auth and interactive animations about the universe.",
    fullDescription: [
      "Xplore is a website developed for space exploration and information, providing users with fascinating content about the universe.",
      "The platform features Firebase-based user authentication for personalized experiences.",
      "Interactive animations powered by Anime.js bring space content to life, making learning about the cosmos engaging and fun.",
      "Provides space enthusiasts with information and interactive animations about the universe."
    ],
    features: [
      "Space exploration content",
      "Firebase authentication",
      "Interactive animations",
      "User profiles",
      "Educational content",
      "Responsive design"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Anime.js", "Firebase"],
    color: "from-orange-600 to-red-600",
    github: "https://github.com/Shubs2002/IP_projet_sem5/tree/main/Internet%20Programming%20Project",
    status: "Completed",
    year: "2023"
  },
  {
    slug: "fruit-detection-ai",
    icon: "Leaf",
    title: "Fruit Detection & Classification",
    tagline: "AI-Powered Computer Vision",
    description: "AI computer vision project to help blind individuals choose quality fruits using live capture classification.",
    fullDescription: [
      "Fruit Detection and Classification is an AI-powered computer vision project designed to help blind individuals choose the best fruit from a tray.",
      "The system uses live capture to classify fruits into categories of quality (best, mixed, or bad).",
      "Built with Python and OpenCV, the project demonstrates practical application of machine learning for accessibility.",
      "The goal is to provide an assistive technology that improves independence for visually impaired individuals."
    ],
    features: [
      "Live camera capture",
      "Real-time fruit classification",
      "Quality categorization (best/mixed/bad)",
      "Accessibility focused",
      "Machine learning model",
      "User-friendly interface"
    ],
    tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    color: "from-green-600 to-emerald-600",
    github: "https://github.com/Shubs2002/Sem5_miniproj_Fruit_detection_and_classification",
    status: "Completed",
    year: "2024"
  },
  {
    slug: "ai-drone-autopilot",
    icon: "Plane",
    title: "AI Based Autopilot for Drones",
    tagline: "Autonomous Navigation System",
    description: "BUG2 algorithm for autonomous drone navigation in rescue operations and precision agriculture.",
    fullDescription: [
      "AI Based Autopilot for Drones is a Python-based project using the BUG2 algorithm for autonomous navigation.",
      "The system is designed for military purposes, precision agriculture, and rescue operations.",
      "This project can be extended to rescue helicopters where manual landing is not possible.",
      "The autonomous navigation system enables drones to navigate complex environments without human intervention."
    ],
    features: [
      "BUG2 algorithm implementation",
      "A* pathfinding algorithm",
      "Autonomous navigation",
      "Obstacle avoidance",
      "Military applications",
      "Precision agriculture support",
      "Rescue operation capabilities",
      "Unreal Engine simulation"
    ],
    tech: ["Python", "BUG2", "A*", "Unreal Engine", "OpenCV"],
    color: "from-cyan-600 to-blue-600",
    status: "Completed",
    year: "2024"
  },
  {
    slug: "document-indexing",
    icon: "Search",
    title: "AI-Powered Knowledge Search",
    tagline: "Semantic Document Search System",
    description: "Modern intelligent document search system powered by Google Gemini AI with semantic search and automatic categorization.",
    fullDescription: [
      "AI-Powered Knowledge Search is a modern, intelligent document search system powered by Google Gemini AI.",
      "Upload documents, search by meaning (not just keywords), and find what you need instantly using advanced semantic search with 768-dimensional embeddings.",
      "Features intelligent categorization where Gemini AI automatically organizes documents by topic, team, and project with smart AI-generated tags.",
      "Built with a modern tech stack including React, Bun, Elysia.js, and Supabase with pgvector for efficient vector similarity search."
    ],
    features: [
      "Google Gemini AI-powered semantic search",
      "Intelligent auto-categorization",
      "Smart AI-generated tagging",
      "Multi-format support (PDF, DOCX, TXT, MD, HTML, JSON)",
      "Real-time search with live suggestions",
      "Cloud storage on Cloudinary CDN",
      "Vector embeddings with pgvector",
      "Beautiful dark theme UI"
    ],
    tech: ["React", "TypeScript", "Vite", "Bun", "Elysia.js", "Google Gemini AI", "Supabase", "PostgreSQL", "pgvector", "Cloudinary"],
    color: "from-indigo-600 to-purple-600",
    github: "https://github.com/Shubs2002/Documents_indexing",
    status: "Completed",
    year: "2025"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 5);
};

export const getOtherProjects = (): Project[] => {
  return projects.slice(5);
};
