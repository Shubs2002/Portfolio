"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, Github, Linkedin, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:hidden order-first"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-2xl scale-110" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-purple-500/30">
                <img 
                  src="https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png" 
                  alt="Shubham Nakashe" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4">
              Shubham Nakashe
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 px-2 sm:px-0">
              Website Developer | App Developer | Computer Engineer | Freelancer
            </motion.p>

            <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 0.4, duration: 0.5 }} className="accent-line mb-6 sm:mb-10 mx-auto lg:mx-0" />

            {/* Contact info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
              {[
                { icon: Phone, text: "+91 9270291116", href: "tel:+919270291116" },
                { icon: Mail, text: "s.d.nakashe2002@gmail.com", href: "mailto:s.d.nakashe2002@gmail.com", truncate: true },
                { icon: Globe, text: "www.shubham-nakashe.dev", href: "https://www.shubham-nakashe.dev" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-colors justify-center lg:justify-start group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-purple-500 transition-colors flex-shrink-0">
                    <item.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className={`text-sm sm:text-base ${item.truncate ? "truncate max-w-[200px] sm:max-w-none" : ""}`}>{item.text}</span>
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-medium text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Work Together
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 sm:px-8 py-3 border border-gray-700 rounded-xl text-white font-medium hover:border-purple-500 hover:bg-purple-500/10 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/Shubs2002" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-nakashe-01b497219/" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5 text-gray-400" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-3xl scale-110" />
              <div className="relative w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-purple-500/30">
                <img 
                  src="https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png" 
                  alt="Shubham Nakashe" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stats */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 xl:px-5 xl:py-3 bg-[#111] border border-gray-800 rounded-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-bold">10+</span>
                <span className="text-gray-500 text-sm ml-1">Projects</span>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 xl:px-5 xl:py-3 bg-[#111] border border-gray-800 rounded-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-white font-bold">3+</span>
                <span className="text-gray-500 text-sm ml-1">Years Exp</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown size={24} className="sm:w-7 sm:h-7 text-gray-600" />
      </motion.div>
    </section>
  );
}
