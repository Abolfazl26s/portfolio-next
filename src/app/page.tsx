"use client";

import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-[var(--primary)] dark:text-[var(--primary)] dark:bg-[var(--foreground)] bg-[var(--background)] justify-center min-h-screen">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8 max-w-2xl">
          This is a sample portfolio website built with Next.js and Tailwind
          CSS. Explore my projects, skills, and experience.
        </p>
      </div>
    </main>
  );
}
