"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "HelloAi",
    description: "HelloAI is an AI-powered meeting platform that enables real-time voice calls with intelligent agents, automatic transcription, summaries, and post-meeting chat interactions. It combines video, AI processing, and smart automation to transform meetings into searchable, interactive experiences.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "TanStack React Query",
      "Drizzle ORM",
      "PostgreSQL",
      "Stream Video & Chat",
      "OpenAI",
      "Inngest",
      "Better Auth"
    ],
    liveUrl: "https://helloai-agent.vercel.app",
    githubUrl: "https://github.com/meet1075/helloai",
  },
  {
    title: "ApiForge",
    description: "ApiForge is a developer-friendly platform that makes API testing simple, allowing you to test REST and WebSocket endpoints effortlessly while generating production-ready code in seconds.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack React Query",
      "Prisma ORM",
      "PostgreSQL",
      "Better Auth",
      "AI APIs"
    ],
    // liveUrl: "#",
    githubUrl: "https://github.com/meet1075/apiforge",
  },
  {
    title: "BuildUi",
    description: "BuildUI is an AI app builder that helps you create and edit full projects just by describing what you want. You can chat with it, make changes, and instantly preview your app — all in one simple workspace.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack React Query",
      "Prisma ORM",
      "PostgreSQL",
      "Clerk Authentication",
      "Clerk Billing",
      "Inngest",
      "OpenAI",
      "E2B Sandbox"],
    // ],    liveUrl: "#",
    githubUrl: "https://github.com/meet1075/buildui",
  },
  {
    title: "InterviewMate",
    description: "InterviewMate is an AI-powered interview preparation platform that generates domain-specific questions, evaluates answers with intelligent feedback, and tracks user performance through mock interviews and leaderboards.",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Clerk Authentication",
      "OpenAI API",
      "Tailwind CSS"
    ],
    liveUrl: "https://interviewmatee.vercel.app/",
    githubUrl: "https://github.com/meet1075/interviewmate",
  },
];

interface ProjectsProps {
  limit?: number;
  showViewAll?: boolean;
  titleOnly?: boolean;
  showFull?: boolean;
}

export default function Projects({ limit, showViewAll = false, titleOnly = false, showFull = false }: ProjectsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <h2 className="text-base font-mono text-gray-400">Projects I've Built</h2>
      <div className="space-y-3">
        {titleOnly ? (
          displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-all"
            >
              <h3 className="text-base font-medium text-[#f5f5f5]">{project.title}</h3>
            </motion.div>
          ))
        ) : (
          displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-lg p-4"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-semibold text-[#f5f5f5] mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                {!showFull && (
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="text-xs text-gray-400 hover:text-gray-300 transition-colors underline underline-offset-2"
                  >
                    {expandedIndex === index ? "Show Less ∨" : "Know More ∧"}
                  </button>
                )}

                {(showFull || expandedIndex === index) && (
                  <motion.div
                    initial={showFull ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`space-y-3 pt-2 ${showFull ? "" : "border-t border-white/10"}`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-400 hover:text-[#f5f5f5] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Repo
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-gray-400 hover:text-[#f5f5f5] transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Visit
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* View All Projects Button */}
      {showViewAll && (
        <div className="flex justify-center mt-6">
          <Link
            href="/projects"
            className="text-xs text-gray-400 hover:text-gray-300 transition-colors underline underline-offset-2"
          >
            More Projects →
          </Link>
        </div>
      )}
    </motion.section>
  );
}
