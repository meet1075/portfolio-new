"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <p className="text-sm text-gray-300 leading-relaxed">
        I build full stack{" "}
        <span className="text-orange-400 font-medium">web applications and AI-powered system</span>,{" "}
       that solve real-world problems. I focus on clean architecture, performance, and intuitive user experiences.
      </p>
     
      <p className="text-sm text-gray-300 leading-relaxed">
        I work with{" "}
        <span className="text-orange-400 font-medium">Next.js</span>, using{" "}
        <span className="text-orange-400 font-medium">TypeScript</span> for type safety and structured development. I integrate{" "}
        <span className="text-orange-400 font-medium">AI models</span> into applications, develop intelligent{" "}
        <span className="text-orange-400 font-medium">agents</span> that automate workflows and enhance user interaction.

      </p>
      <p className="text-sm text-gray-300 leading-relaxed">
        I enjoy building products that look{" "} 
         <span className="text-orange-400 font-medium">good</span>,{" "}
          <span className="text-orange-400 font-medium">perform well</span>, 
          and{" "}
          <span className="text-orange-400 font-medium">scale efficiently</span>.
      </p>
      <p className="text-sm text-gray-300 leading-relaxed">
       Open to{" "}
       <span className="text-orange-400 font-medium">internships</span>,{" "}
       <span className="text-orange-400 font-medium">collaborations</span>,{" "}
       and{" "}
       <span className="text-orange-400 font-medium">impactful opportunities</span>.
      </p>
    </motion.section>
  );
}
