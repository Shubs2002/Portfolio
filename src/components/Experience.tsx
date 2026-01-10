"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  { title: "Software Developer Trainee", company: "Synergy Technology Services", period: "Mar 2025 - Jun 2025", description: "Contributed to The Orchard using React, Flask, GraphQL, Neo4j, and Docker.", tech: ["React", "Flask", "GraphQL", "Docker"] },
  { title: "PHP Intern", company: "VCET Internship", period: "May 2023 - Dec 2023", description: "Developed transcript generation system for colleges.", tech: ["PHP", "MySQL"] },
];

const education = [
  { degree: "B.E. Computer Engineering", institution: "University of Mumbai", period: "2020 - 2024" },
  { degree: "Higher Secondary", institution: "Seth K.V. Parekh Anand Jr. College", period: "2018 - 2020" },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16 text-center lg:text-left">
          <span className="text-purple-500 text-xs sm:text-sm tracking-widest uppercase">My Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Experience & Education</h2>
          <div className="accent-line mt-4 mx-auto lg:mx-0" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Work */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div className="p-2.5 sm:p-3 bg-purple-500/10 rounded-lg sm:rounded-xl"><Briefcase className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Work</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }} className="relative pl-6 sm:pl-8 border-l-2 border-gray-800">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-purple-500 rounded-full" />
                  <div className="p-4 sm:p-6 bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl">
                    <div className="flex items-center gap-2 text-purple-500 text-xs sm:text-sm mb-2"><Calendar size={12} className="sm:w-3.5 sm:h-3.5" />{exp.period}</div>
                    <h4 className="text-base sm:text-lg font-bold text-white">{exp.title}</h4>
                    <p className="text-purple-500 text-xs sm:text-sm mb-2 sm:mb-3">{exp.company}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tech.map((tech, j) => (<span key={j} className="px-2 py-0.5 sm:py-1 bg-[#0a0a0a] border border-gray-800 rounded text-gray-500 text-[10px] sm:text-xs">{tech}</span>))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div className="p-2.5 sm:p-3 bg-purple-500/10 rounded-lg sm:rounded-xl"><GraduationCap className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }} className="relative pl-6 sm:pl-8 border-l-2 border-gray-800">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-purple-500 rounded-full" />
                  <div className="p-4 sm:p-6 bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl">
                    <div className="flex items-center gap-2 text-purple-500 text-xs sm:text-sm mb-2"><Calendar size={12} className="sm:w-3.5 sm:h-3.5" />{edu.period}</div>
                    <h4 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-purple-500 text-xs sm:text-sm">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl sm:rounded-2xl">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Certifications</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Fullstack Web Development</p>
                    <p className="text-gray-500 text-xs sm:text-sm">QSpiders - MERN Stack</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Enterprise Java Full-Stack</p>
                    <p className="text-gray-500 text-xs sm:text-sm">QSpiders - Java, Spring Boot</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
