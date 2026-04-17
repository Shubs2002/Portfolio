"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ExternalLink, MapPin, Youtube } from "lucide-react";
import Image from "next/image";

interface ClientLink {
  label: string;
  url: string;
  type: "website" | "youtube" | "instagram" | "maps";
}

interface Client {
  name: string;
  type: string;
  description: string;
  services: string[];
  color: string;
  logo: string;
  logoType: "image" | "svg";
  links: ClientLink[];
  usedProjectSlug?: string;
}

const clients: Client[] = [
  {
    name: "Forever Consultants",
    type: "Financial Advisory Firm",
    description: "Built a comprehensive financial advisory platform with scroll-based navigation, Cal.com booking, digital vCards, trophy showcase, and full SEO optimization — delivered in just 2 weeks.",
    services: ["Full Stack Development", "SEO Optimization", "Analytics Setup", "Booking Integration"],
    color: "from-amber-600 to-orange-600",
    logo: "/clients/forever-consultants.svg",
    logoType: "svg",
    usedProjectSlug: "forever-consultants",
    links: [
      { label: "Visit Website", url: "https://www.foreverconsultants.in", type: "website" },
      { label: "View on Maps", url: "https://share.google/EQRq1PVQthCAw600J", type: "maps" },
    ],
  },
  {
    name: "Next-gen Finance",
    type: "Financial Services",
    description: "Developed a modern, client-focused frontend for financial services and loans with intuitive design and analytics integration.",
    services: ["Frontend Development", "Analytics Setup", "Responsive Design"],
    color: "from-blue-600 to-indigo-600",
    logo: "",
    logoType: "image",
    usedProjectSlug: "nextgen-finance",
    links: [
      { label: "Visit Website", url: "https://next-gen-finance.vercel.app", type: "website" },
    ],
  },
  {
    name: "Floof's World",
    type: "Content Creator",
    description: "Providing AI-powered video production through AVPE — automating scriptwriting, character design, voice generation, and video creation for their YouTube & Instagram channels.",
    services: ["AVPE Integration", "AI Video Production", "Content Automation"],
    color: "from-red-600 to-orange-600",
    logo: "https://res.cloudinary.com/dc3o4l7rx/image/upload/q_auto/f_auto/v1760381075/Gemini_Generated_Image_4hmirp4hmirp4hmi_2_u2mi6w.png",
    logoType: "image",
    usedProjectSlug: "avpe",
    links: [
      { label: "YouTube", url: "https://youtube.com/@floofsworld?si=LWp5UjsccKYT0oWX", type: "youtube" },
      { label: "Instagram", url: "https://www.instagram.com/floofs._.world?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", type: "instagram" },
    ],
  },
  {
    name: "ArtRage Studios",
    type: "Content Creator",
    description: "Leveraging AVPE for automated video production pipeline — from scriptwriting to final video creation for their creative content across YouTube & Instagram.",
    services: ["AVPE Integration", "AI Video Production", "Content Automation"],
    color: "from-violet-600 to-purple-600",
    logo: "https://res.cloudinary.com/dc3o4l7rx/image/upload/q_auto/f_auto/v1776243264/Untitled_design_19_be3cpm.png",
    logoType: "image",
    usedProjectSlug: "avpe",
    links: [
      { label: "YouTube", url: "https://yt.openinapp.co/atucv", type: "youtube" },
      { label: "Instagram", url: "https://insta.openinapp.co/teti0", type: "instagram" },
    ],
  },
  {
    name: "Aadya Creation",
    type: "E-Commerce",
    description: "Built a complete e-commerce platform with product management, secure payments, and responsive design that boosted their online sales.",
    services: ["Full Stack Development", "Payment Integration", "UI/UX Design"],
    color: "from-purple-600 to-pink-600",
    logo: "",
    logoType: "image",
    usedProjectSlug: "aadya-creation",
    links: [],
  },
];

function getLinkIcon(type: ClientLink["type"]) {
  switch (type) {
    case "youtube":
      return <Youtube size={14} />;
    case "instagram":
      return <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
    case "maps":
      return <MapPin size={14} />;
    default:
      return <ExternalLink size={14} />;
  }
}

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="clients" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16 text-center lg:text-left">
          <span className="text-purple-500 text-xs sm:text-sm tracking-widest uppercase">Trusted By</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">My Clients</h2>
          <div className="accent-line mt-4 mx-auto lg:mx-0" />
          <p className="text-gray-500 mt-4 max-w-2xl text-sm sm:text-base mx-auto lg:mx-0">
            I&apos;ve had the pleasure of working with amazing clients to bring their visions to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden card-hover"
            >
              {/* Header with gradient */}
              <div className={`h-24 sm:h-28 bg-gradient-to-r ${client.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-between px-5 sm:px-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center overflow-hidden">
                      {client.logo ? (
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <span className="text-white text-lg sm:text-xl font-bold">
                          {client.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{client.name}</h3>
                      <p className="text-white/80 text-xs sm:text-sm">{client.type}</p>
                    </div>
                  </div>
                  <Quote className="text-white/30 w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">{client.description}</p>
                
                <div className="mb-4">
                  <p className="text-gray-500 text-xs sm:text-sm mb-2">Services Provided:</p>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, j) => (
                      <span key={j} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 text-[10px] sm:text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {client.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {client.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-purple-500 hover:text-purple-400 text-xs sm:text-sm transition-colors"
                      >
                        {getLinkIcon(link.type)} {link.label}
                      </a>
                    ))}
                    {client.usedProjectSlug && (
                      <a
                        href={`/project/${client.usedProjectSlug}`}
                        title="View Case Study"
                        className="group flex items-center justify-center h-7 sm:h-8 px-1.5 sm:px-2 text-purple-500 hover:text-white bg-purple-500/10 hover:bg-purple-500 rounded-full transition-all duration-300 ml-auto overflow-hidden"
                      >
                        <ExternalLink size={14} className="flex-shrink-0" />
                        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[130px] group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300 ease-in-out text-[10px] sm:text-xs font-medium">
                          View Project Details
                        </span>
                      </a>
                    )}
                  </div>
                )}
                
                {client.links.length === 0 && client.usedProjectSlug && (
                  <div className="flex justify-end mt-4">
                     <a
                        href={`/project/${client.usedProjectSlug}`}
                        title="View Case Study"
                        className="group flex items-center justify-center h-7 sm:h-8 px-1.5 sm:px-2 text-purple-500 hover:text-white bg-purple-500/10 hover:bg-purple-500 rounded-full transition-all duration-300 overflow-hidden"
                      >
                        <ExternalLink size={14} className="flex-shrink-0" />
                        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[130px] group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300 ease-in-out text-[10px] sm:text-xs font-medium">
                          View Project Details
                        </span>
                      </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-gray-500 text-sm sm:text-base mb-4">Want to be my next success story?</p>
          <motion.a 
            href="#contact" 
            className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-medium text-sm sm:text-base" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
