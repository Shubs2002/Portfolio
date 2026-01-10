"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind", "MUI", "Bootstrap", "HTML5", "CSS3"] },
  { title: "Backend & DB", skills: ["Node.js", "Express", "FastAPI", "Flask", "MongoDB", "PostgreSQL", "Neo4j", "SQL"] },
  { title: "DevOps & Tools", skills: ["Docker", "Nginx", "PM2", "Git", "GitHub", "Linux", "Auth0", "GraphQL"] },
  { title: "AI & Others", skills: ["Python", "OpenCV", "OpenAI", "GCP", "Veo", "GenAI", "Figma", "REST APIs"] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16 text-center lg:text-left">
          <span className="text-purple-500 text-xs sm:text-sm tracking-widest uppercase">My Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Technical Skills</h2>
          <div className="accent-line mt-4 mx-auto lg:mx-0" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 sm:p-8 bg-[#111] border border-gray-800 rounded-xl sm:rounded-2xl"
            >
              <h3 className="text-base sm:text-lg font-bold text-purple-500 mb-4 sm:mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + j * 0.03 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0a0a0a] border border-gray-800 rounded-lg text-gray-400 text-xs sm:text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
