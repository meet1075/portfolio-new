import Link from "next/link";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link
            href="/"
            className="hover:text-[#f5f5f5] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <span>/</span>
          <span className="text-[#f5f5f5]">projects</span>
        </nav>

        {/* All Projects */}
        <Projects showFull={true} />
      </div>
    </main>
  );
}
