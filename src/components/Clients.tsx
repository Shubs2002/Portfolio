"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, TrendingUp, Quote, Video, ExternalLink, Instagram } from "lucide-react";

const clients = [
  {
    icon: TrendingUp,
    name: "Next-gen Finance",
    type: "Financial Services",
    description: "Developed a modern, client-focused frontend for financial services and loans with intuitive design and analytics integration.",
    services: ["Frontend Development", "Analytics Setup", "Responsive Design"],
    color: "from-blue-600 to-indigo-600",
    link: "https://next-gen-finance.vercel.app",
  },
  {
    icon: Video,
    name: "Floof's World",
    type: "Content Creator",
    description: "Providing AI-powered video production through AVPE - automating scriptwriting, character design, voice generation, and video creation for their YouTube channel.",
    services: ["AVPE Integration", "AI Video Production", "Content Automation"],
    color: "from-red-600 to-orange-600",
    link: "https://youtube.com/@floofsworld?si=jA2pyxddlk6gu_yR",
    isYouTube: true,
  },
  {
    icon: Video,
    name: "ArtRage Studios",
    type: "Content Creator",
    description: "Leveraging AVPE for automated video production pipeline - from scriptwriting to final video creation for their creative content channel.",
    services: ["AVPE Integration", "AI Video Production", "Content Automation"],
    color: "from-violet-600 to-purple-600",
    link: "https://youtube.com/@artrage-studios?si=KoLRKZimpUNYhL-g",
    isYouTube: true,
  },
  {
    icon: Instagram,
    name: "AVPE Productions",
    type: "Instagram Content Creator",
    description: "Using AVPE to create engaging AI-generated video content for their Instagram channel with automated production workflows.",
    services: ["AVPE Integration", "AI Video Production", "Social Media Content"],
    color: "from-pink-600 to-rose-600",
    link: "https://www.instagram.com/avpe.productions?igsh=MTE3NzBnMHN6b2t6eg==",
    isInstagram: true,
  },
  {
    icon: ShoppingCart,
    name: "Aadya Creation",
    type: "E-Commerce",
    description: "Built a complete e-commerce platform with product management, secure payments, and responsive design that boosted their online sales.",
    services: ["Full Stack Development", "Payment Integration", "UI/UX Design"],
    color: "from-purple-600 to-pink-600",
  },
];

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
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <client.icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
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

                {client.link && (
                  <a href={client.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-purple-500 hover:text-purple-400 text-xs sm:text-sm">
                    <ExternalLink size={14} /> {client.isYouTube ? "View Channel" : client.isInstagram ? "View Profile" : "Visit Website"}
                  </a>
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
