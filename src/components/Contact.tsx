"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Globe, Send, Linkedin, Github, Calendar, CheckCircle, AlertCircle, Loader2, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
      const mailtoLink = `mailto:s.d.nakashe2002@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
      window.location.href = mailtoLink;
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: "Shubham" }, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 9270291116", href: "tel:+919270291116" },
    { icon: Mail, label: "Email", value: "s.d.nakashe2002@gmail.com", href: "mailto:s.d.nakashe2002@gmail.com" },
    { icon: Globe, label: "Website", value: "shubham-nakashe.dev", href: "https://www.shubham-nakashe.dev" },
    { icon: Calendar, label: "Schedule a Meet", value: "Book a call with me", href: "https://cal.com/shubham-wcjybp" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16 text-center lg:text-left">
          <span className="text-purple-500 text-xs sm:text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Let&apos;s Connect</h2>
          <div className="accent-line mt-4 mx-auto lg:mx-0" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a key={i} href={info.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#111] border border-gray-800 rounded-xl group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-purple-500 transition-colors flex-shrink-0">
                    <info.icon className="text-gray-400 group-hover:text-purple-500 transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs sm:text-sm">{info.label}</p>
                    <p className="text-white text-sm sm:text-base truncate">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="mt-6 sm:mt-8">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 text-center lg:text-left">Follow Me</h4>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                {[{ icon: Github, href: "https://github.com/Shubs2002" }, { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-nakashe-01b497219/" }, { icon: Instagram, href: "https://www.instagram.com/shubh.s28?igsh=MTNvNmN1OWptdHBuMA==" }, { icon: Mail, href: "mailto:s.d.nakashe2002@gmail.com" }].map((social, i) => (
                  <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center hover:border-purple-500 transition-all" whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                    <social.icon size={18} className="sm:w-5 sm:h-5 text-gray-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Send Message</h3>
              
              {status === "success" && (
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={18} /> Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={18} /> Failed to send. Please try again.
                </div>
              )}

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">Your Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={status === "loading"} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:border-purple-500 focus:outline-none transition-colors disabled:opacity-50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">Your Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={status === "loading"} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:border-purple-500 focus:outline-none transition-colors disabled:opacity-50" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">Message</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} disabled={status === "loading"} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:border-purple-500 focus:outline-none transition-colors resize-none disabled:opacity-50" placeholder="Tell me about your project..." />
                </div>
                <motion.button type="submit" disabled={status === "loading"} className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg sm:rounded-xl text-white font-medium flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-70" whileHover={{ scale: status === "loading" ? 1 : 1.02 }} whileTap={{ scale: status === "loading" ? 1 : 0.98 }}>
                  {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={16} className="sm:w-[18px] sm:h-[18px]" /> Send Message</>}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
