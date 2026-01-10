"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const stats = [
  { icon: Code2, value: "10+", label: "Projects" },
  { icon: Users, value: "30%", label: "Perf Boost" },
  { icon: Rocket, value: "20%", label: "Engagement" },
  { icon: Zap, value: "3+", label: "Years Exp" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16 text-center lg:text-left">
          <span className="text-purple-500 text-xs sm:text-sm tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Get To Know Me</h2>
          <div className="accent-line mt-4 mx-auto lg:mx-0" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="space-y-4 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
              <p>I&apos;m a <span className="text-white">passionate Full Stack Web Developer</span> with hands-on experience in MERN, Flask, and DevOps tools. I&apos;ve built and led impactful projects including AI-driven applications and e-commerce platforms.</p>
              <p>With a <span className="text-white">Bachelor&apos;s in Computer Engineering</span> from the University of Mumbai, I bring both academic knowledge and practical expertise to every project.</p>
              <p className="hidden sm:block">I&apos;m known for <span className="text-white">creative thinking, teamwork, and delivering projects ahead of deadlines</span>. My passion extends to UI/UX design, photography, and continuous learning.</p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {["Problem Solver", "Team Leader", "Quick Learner", "Detail Oriented"].map((trait, i) => (
                <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#111] border border-gray-800 rounded-lg text-gray-400 text-xs sm:text-sm">{trait}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-4 sm:p-6 bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl card-hover text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-purple-500/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <stat.icon className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-500 mt-1 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
