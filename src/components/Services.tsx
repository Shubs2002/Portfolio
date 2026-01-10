"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, ShoppingCart, Brain, Server, Smartphone, Palette } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", description: "Custom websites built with React, Next.js, and Node.js. Fast and SEO-optimized.", features: ["Responsive", "SEO", "Fast"] },
  { icon: ShoppingCart, title: "E-Commerce", description: "Full-featured online stores with secure payment and inventory management.", features: ["Payments", "Inventory", "Analytics"] },
  { icon: Brain, title: "AI-Powered Apps", description: "Intelligent solutions using machine learning and AI technologies.", features: ["ML", "Vision", "Automation"] },
  { icon: Server, title: "Backend Dev", description: "Robust backend systems using Node.js, Python, Flask, and FastAPI.", features: ["APIs", "Database", "Cloud"] },
  { icon: Smartphone, title: "Full Stack", description: "End-to-end development from concept to deployment.", features: ["Complete", "DevOps", "Support"] },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive interfaces that users love.", features: ["Research", "Wireframe", "Prototype"] },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16 text-center lg:text-left">
          <span className="text-purple-500 text-xs sm:text-sm tracking-widest uppercase">What I Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">My Services</h2>
          <div className="accent-line mt-4 mx-auto lg:mx-0" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-5 sm:p-8 bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl card-hover"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-purple-500/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                <service.icon className="text-purple-500 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4 sm:mb-6 line-clamp-2">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span key={j} className="px-2 sm:px-3 py-1 bg-[#0a0a0a] border border-gray-800 rounded text-gray-500 text-xs">{feature}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-8 sm:mt-12">
          <motion.a href="#contact" className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get a Free Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
