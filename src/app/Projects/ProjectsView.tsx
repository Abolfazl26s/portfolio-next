// app/projects/ProjectsView.tsx

"use client";

import { usePathname } from "next/navigation";
import { useCallback, useRef, useEffect } from "react";
import { usePaginatedFetch } from "@/hooks/usePaginatedFetch";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Project } from "@/types";
import TitlePage from "@/app/components/shared/TitlePage";
import ShapeMonitor from "../components/ShapeMonitor/page";
import Pagination from "../components/Pagination/page";
import ProjectsLoadingView from "./ProjectsLoadingView"; // <-- 1. Import the new loading component

const ProjectsView = () => {
  const pathname = usePathname();
  const title: string = pathname.slice(1);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  const isMobile = useMediaQuery("(max-width: 768px)");
  const ITEMS_PER_PAGE = isMobile ? 4 : 9;

  const topOfPageRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const extractProjects = useCallback((data: unknown): Project[] => {
    // ... (your existing extraction logic)
    if (
      data &&
      typeof data === "object" &&
      "projectTemplate" in data &&
      Array.isArray((data as { projectTemplate: unknown }).projectTemplate)
    ) {
      return (data as { projectTemplate: Project[] }).projectTemplate;
    }
    return [];
  }, []);

  const {
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
    loading,
    error,
  } = usePaginatedFetch<Project>(API_URL, ITEMS_PER_PAGE, extractProjects);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      topOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 2. Replace the simple loading text with the skeleton component
  if (loading) {
    return <ProjectsLoadingView />;
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div ref={topOfPageRef} className="pt-5">
      <TitlePage title={title} />
      <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 xl:grid-cols-3">
        {currentItems
          // .sort((a, b) => a.name_en.localeCompare(b.name_en)) // It's better to sort data after fetching, not on every render
          .map((project) => (
            <ShapeMonitor
              key={project.id}
              imgSrc={project.imgSrc}
              projectName={project.name_en}
              link={project.link}
              time={project.time_en}
            />
          ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProjectsView;
