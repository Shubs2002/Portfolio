"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-800 safe-area-bottom">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left - Logo & Copyright */}
          <div>
            <motion.a href="#home" className="text-xl font-bold text-white" whileHover={{ scale: 1.05 }}>
              Shubham<span className="gradient-text">.</span>
            </motion.a>
            <p className="text-gray-600 text-xs mt-1">© {currentYear} All rights reserved.</p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex gap-8">
            {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>

          {/* Right - Social Links & Made with */}
          <div className="flex items-center gap-6">
            <p className="text-gray-500 flex items-center gap-1 text-sm">
              Made with <Heart size={14} className="text-purple-500" /> by Shubham
            </p>
            <div className="flex gap-2">
              {[
                { icon: Github, href: "https://github.com/Shubs2002" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-nakashe-01b497219/" },
                { icon: Instagram, href: "https://www.instagram.com/shubh.s28?igsh=MTNvNmN1OWptdHBuMA==" },
                { icon: Mail, href: "mailto:s.d.nakashe2002@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#111] border border-gray-800 rounded-lg flex items-center justify-center hover:border-purple-500 transition-all"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={14} className="text-gray-500" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          <motion.a href="#home" className="text-xl font-bold text-white" whileHover={{ scale: 1.05 }}>
            Shubham<span className="gradient-text">.</span>
          </motion.a>

          <div className="flex flex-wrap gap-4 justify-center">
            {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-xs">
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/Shubs2002" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-nakashe-01b497219/" },
              { icon: Instagram, href: "https://www.instagram.com/shubh.s28?igsh=MTNvNmN1OWptdHBuMA==" },
              { icon: Mail, href: "mailto:s.d.nakashe2002@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#111] border border-gray-800 rounded-lg flex items-center justify-center hover:border-purple-500 transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={14} className="text-gray-500" />
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 flex items-center gap-1 justify-center text-xs">
              Made with <Heart size={12} className="text-purple-500" /> by Shubham Nakashe
            </p>
            <p className="text-gray-600 text-[10px] mt-1">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
