"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Users, Star } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Megahack 3.0", description: "National hackathon" },
  { icon: Award, title: "VCET Project Showcase", description: "National level" },
  { icon: Star, title: "Atharva College", description: "National showcase" },
  { icon: Trophy, title: "Code-o-Fiesta", description: "Coding competition" },
  { icon: Award, title: "Oscillation Paper", description: "Tech presentation" },
  { icon: Star, title: "VCET Quiz", description: "Runner up" },
];

const organizations = [
  { role: "Technical Head", org: "ADC Club" },
  { role: "Technical Head", org: "NSS Club" },
  { role: "PR Team", org: "CSI Club" },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16 text-center lg:text-left">
          <span className="text-purple-500 text-xs sm:text-sm tracking-widest uppercase">Recognition</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Achievements</h2>
          <div className="accent-line mt-4 mx-auto lg:mx-0" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Achievements */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
              <Trophy className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />Awards
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
              {achievements.map((achievement, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#111] border border-gray-800 rounded-lg sm:rounded-xl">
                  <div className="p-1.5 sm:p-2 bg-purple-500/10 rounded-lg flex-shrink-0">
                    <achievement.icon className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-medium text-xs sm:text-sm truncate">{achievement.title}</h4>
                    <p className="text-gray-500 text-[10px] sm:text-xs truncate">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
              <Users className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />Leadership
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {organizations.map((org, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.1 }} className="p-4 sm:p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl sm:rounded-2xl">
                  <h4 className="text-base sm:text-lg font-bold text-white">{org.role}</h4>
                  <p className="text-purple-500 text-sm">{org.org}</p>
                </motion.div>
              ))}
            </div>

            {/* Strengths */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Key Strengths</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Creative", "Teamwork", "Multi-tasking", "UI/UX", "Leadership"].map((strength, i) => (
                  <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-gray-400 text-xs sm:text-sm">{strength}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
