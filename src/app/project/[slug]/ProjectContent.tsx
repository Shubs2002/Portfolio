"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle, Users, Package, ShoppingCart, Brain, Video, Globe, Rocket, Leaf, Plane, Search } from "lucide-react";
import type { Project } from "@/data/projects";

const iconMap: { [key: string]: React.ElementType } = {
  Package, ShoppingCart, Brain, Video, Globe, Rocket, Leaf, Plane, Search
};

interface ProjectContentProps {
  project: Project;
  iconName: string;
}

export default function ProjectContent({ project, iconName }: ProjectContentProps) {
  const IconComponent = iconMap[iconName] || Package;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blob-purple opacity-40" />
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blob-blue opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-4 sm:px-6 py-6 border-b border-gray-800">
          <div className="max-w-5xl mx-auto">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              <ArrowLeft size={18} /> Back to Projects
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Icon & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center`}>
                  <IconComponent size={32} className="sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      project.status === "Live" ? "bg-green-500/20 text-green-400" :
                      project.status === "In Development" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-gray-500/20 text-gray-400"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-purple-400 text-base sm:text-lg">{project.tagline}</p>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
                {project.clients && project.clients.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{project.clients.length} Client{project.clients.length > 1 ? "s" : ""}</span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} /> {project.status === "In Development" ? "Dev Live" : "View Live"}
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-700 rounded-xl text-white font-medium hover:border-purple-500 transition-colors text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} /> View Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left - Description & Features */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 space-y-8 sm:space-y-10"
              >
                {/* About */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">About the Project</h2>
                  <div className="space-y-4">
                    {project.fullDescription.map((para, i) => (
                      <p key={i} className="text-gray-400 text-sm sm:text-base leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 sm:p-4 bg-[#111] border border-gray-800 rounded-xl"
                      >
                        <CheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clients Section */}
                {project.clients && project.clients.length > 0 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Clients Using This Product</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.clients.map((client, i) => (
                        <div
                          key={i}
                          className="p-4 sm:p-5 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Users className="text-purple-500" size={20} />
                            <h3 className="text-white font-semibold text-base sm:text-lg">{client.name}</h3>
                          </div>
                          <p className="text-gray-500 text-sm mb-3">{client.type}</p>
                          {client.link && (
                            <a
                              href={client.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-purple-500 hover:text-purple-400 text-sm"
                            >
                              <ExternalLink size={14} />
                              {client.isYouTube ? "View Channel" : client.isInstagram ? "View Profile" : "Visit Website"}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Right - Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="sticky top-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Tech Stack</h2>
                  <div className="p-5 sm:p-6 bg-[#111] border border-gray-800 rounded-2xl">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-[#111] border border-gray-800 rounded-2xl">
                    <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                          <Github size={18} /> Source Code
                        </a>
                      )}
                      <Link href="/#projects" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                        <ArrowLeft size={18} /> All Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Interested in working together?</h2>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Let&apos;s discuss how I can help bring your project to life.</p>
            <Link href="/#contact">
              <motion.span
                className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-medium text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
