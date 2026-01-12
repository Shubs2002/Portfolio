"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-top ${
          isScrolled || isMobileMenuOpen ? "bg-[#0a0a0a] border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.a href="#home" className="text-xl sm:text-2xl font-bold text-white z-50" whileHover={{ scale: 1.05 }}>
              Shubham<span className="gradient-text">.</span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <motion.a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide" whileHover={{ y: -2 }}>
                  {link.name}
                </motion.a>
              ))}
              <motion.a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg text-white text-sm font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              type="button"
              className="lg:hidden text-white p-2 -mr-2 z-50 relative" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0a0a0a]"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl sm:text-3xl text-gray-300 hover:text-white py-4 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.35 }}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
