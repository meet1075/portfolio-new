"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const GITHUB_USERNAME = "meet1075";

export default function GitHubContributions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Orange theme — no contribution to dark orange
  const customTheme = {
    light: ["#1c1108", "#6b2c0d", "#c45c1e", "#e8822a", "#fb923c"],
    dark: ["#1c1108", "#6b2c0d", "#c45c1e", "#e8822a", "#fb923c"],
  };

  const cardContent = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          {/* GitHub Icon */}
          <div className="w-9 h-9 rounded-full bg-[#1c2128] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#f5f5f5]" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#f5f5f5] leading-tight">{GITHUB_USERNAME}</p>
            <p className="text-xs text-gray-500 leading-tight">github</p>
          </div>
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded bg-[#1c2128] text-[#f5f5f5] border border-white/10">
          follow
        </span>
      </div>

      {/* Calendar */}
      <div className="overflow-hidden w-full">
        {mounted ? (
          <GitHubCalendar
            username={GITHUB_USERNAME}
            theme={customTheme}
            fontSize={11}
            blockSize={10}
            blockMargin={3}
            colorScheme="dark"
            style={{ width: "100%" }}
          />
        ) : (
          <div className="h-[130px] flex items-center justify-center animate-pulse">
            <div className="text-gray-600 text-sm">Loading contributions...</div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-white/10 rounded-xl p-5 bg-[#161b22] hover:bg-[#1c2128] transition-colors cursor-pointer"
      >
        {cardContent}
      </a>

      <style>{`
        .react-github-calendar__chart text { fill: #6b7280 !important; font-size: 11px !important; }
        .react-github-calendar__calendar { width: 100% !important; }
      `}</style>
    </motion.section>
  );
}
