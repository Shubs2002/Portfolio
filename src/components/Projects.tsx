"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ExternalLink, Github, ShoppingCart, Brain, Video, Package, Rocket, Plane, Leaf, Globe, ArrowRight } from "lucide-react";

const products = [
  { 
    icon: Brain, 
    title: "Next-gen Finance",
    slug: "nextgen-finance",
    description: "Client-focused financial services frontend with intuitive design and analytics integration.", 
    tech: ["Next.js", "TypeScript", "Google Analytics"], 
    link: "https://next-gen-finance.vercel.app", 
    color: "from-blue-600 to-indigo-600",
    featured: true
  },
  { 
    icon: Video, 
    title: "AVPE",
    slug: "avpe",
    description: "AI-powered video production ecosystem automating scriptwriting, character design, voice generation, and video creation for social media.", 
    tech: ["Python", "FastAPI", "Google Veo-3", "OpenAI", "React"], 
    color: "from-violet-600 to-purple-600",
    featured: true
  },
  { 
    icon: Package, 
    title: "SmartShelf",
    slug: "smartshelf",
    description: "AI-powered inventory management platform with real-time tracking, smart alerts, demand prediction, and offline-first capabilities for retail & warehouses.", 
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Electron", "Node.js", "ElysiaJS", "Bun", "MongoDB", "Redis", "ML/AI", "Docker", "JWT"], 
    color: "from-emerald-600 to-teal-600",
    featured: true
  },
  { 
    icon: Globe, 
    title: "SUKTA",
    slug: "sukta",
    description: "Web Intelligence Platform - AI-powered chatbot that analyzes any website. Scrape once, ask unlimited questions with real-time status updates and background job processing.", 
    tech: ["Next.js 15", "Express", "BullMQ", "PostgreSQL", "Drizzle ORM", "Redis", "Playwright", "OpenRouter AI", "Tailwind"], 
    link: "https://web-production-e841.up.railway.app/",
    github: "https://github.com/Shubs2002/SUKTA",
    color: "from-cyan-600 to-blue-600",
    featured: true
  },
  { 
    icon: ShoppingCart, 
    title: "Aadya Creation",
    slug: "aadya-creation",
    description: "Full-stack e-commerce platform with smooth UI, secure payment integration, and inventory management.", 
    tech: ["React", "Node.js", "MongoDB", "Nginx", "PM2"], 
    color: "from-purple-600 to-pink-600",
    featured: true
  },
];

const otherProjects = [
  { icon: Rocket, title: "Xplore", slug: "xplore", description: "Space exploration website with Firebase auth and interactive animations.", tech: ["HTML", "CSS", "Firebase"], color: "from-orange-600 to-red-600" },
  { icon: Leaf, title: "Fruit Detection AI", slug: "fruit-detection-ai", description: "AI computer vision to help blind individuals choose quality fruits.", tech: ["Python", "OpenCV", "ML"], color: "from-green-600 to-emerald-600" },
  { icon: Plane, title: "AI Drone Autopilot", slug: "ai-drone-autopilot", description: "BUG2 algorithm for autonomous drone navigation in rescue & agriculture.", tech: ["Python", "BUG2"], color: "from-cyan-600 to-blue-600" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16 text-center lg:text-left">
          <span className="text-purple-500 text-xs sm:text-sm tracking-widest uppercase">My Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">My Products & Projects</h2>
          <div className="accent-line mt-4 mx-auto lg:mx-0" />
        </motion.div>

        {/* Featured Products - Top 4 */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {products.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden card-hover"
            >
              <div className={`h-36 sm:h-44 bg-gradient-to-r ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={44} className="sm:w-14 sm:h-14 text-white/80" />
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-[10px] sm:text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.slice(0, 5).map((tech, j) => (
                    <span key={j} className="px-2 py-0.5 sm:py-1 bg-[#0a0a0a] border border-gray-800 rounded text-gray-500 text-[10px] sm:text-xs">{tech}</span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-0.5 sm:py-1 text-purple-500 text-[10px] sm:text-xs">+{project.tech.length - 5}</span>
                  )}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-purple-500 hover:text-purple-400 text-xs sm:text-sm">
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  <a href={project.github || "https://github.com/Shubs2002"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-400 text-xs sm:text-sm">
                    <Github size={14} /> Code
                  </a>
                  <Link href={`/project/${project.slug}`} className="flex items-center gap-1.5 text-purple-500 hover:text-purple-400 text-xs sm:text-sm ml-auto">
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="group bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden card-hover"
              >
                <div className={`h-28 sm:h-32 bg-gradient-to-r ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon size={36} className="sm:w-10 sm:h-10 text-white/80" />
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-2 py-0.5 bg-[#0a0a0a] border border-gray-800 rounded text-gray-500 text-[10px] sm:text-xs">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/Shubs2002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-400 text-xs sm:text-sm">
                      <Github size={14} /> Code
                    </a>
                    <Link href={`/project/${project.slug}`} className="flex items-center gap-1.5 text-purple-500 hover:text-purple-400 text-xs sm:text-sm ml-auto">
                      Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }} className="text-center">
          <motion.a href="https://github.com/Shubs2002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border border-gray-700 rounded-xl text-white font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Github size={18} /> More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
