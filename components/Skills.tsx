"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/FFFFFF" },
  { name: "RAG", icon: "🧠" },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <h2 className="text-base font-mono text-gray-400">Skills + Tools</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded text-gray-300"
          >
            {skill.icon.startsWith("http") ? (
              <img
                src={skill.icon}
                alt={skill.name}
                width={16}
                height={16}
                className="w-4 h-4"
              />
            ) : (
              <span className="text-sm leading-none">{skill.icon}</span>
            )}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
