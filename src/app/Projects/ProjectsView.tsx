"use client";

import { usePathname } from "next/navigation";
import { useCallback, useRef, useEffect } from "react";
import { usePaginatedFetch } from "@/hooks/usePaginatedFetch";
import { useMediaQuery } from "@/hooks/useMediaQuery"; // <-- Import the new hook
import { Project } from "@/types";
import TitlePage from "@/app/components/shared/TitlePage";
import ShapeMonitor from "../components/ShapeMonitor/page";
import Pagination from "../components/Pagination/page";

const ProjectsView = () => {
  const pathname = usePathname();
  const title: string = pathname.slice(1);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  // Use the media query hook to detect mobile screens
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Set the number of items per page based on the screen size
  const ITEMS_PER_PAGE = isMobile ? 4 : 9;

  const topOfPageRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const extractProjects = useCallback((data: unknown): Project[] => {
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
  } = usePaginatedFetch<Project>(
    API_URL,
    ITEMS_PER_PAGE, // <-- Pass the dynamic value here
    extractProjects
  );

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

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div ref={topOfPageRef}>
      <TitlePage title={title} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((project) => (
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
