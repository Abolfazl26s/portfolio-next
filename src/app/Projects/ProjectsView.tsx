"use client";

import { usePathname } from "next/navigation";
import { useCallback, useRef, useEffect } from "react";
import { usePaginatedFetch } from "@/hooks/usePaginatedFetch";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Project, ProjectsApiResponse } from "@/types"; // ProjectsApiResponse را import کنید
import TitlePage from "@/app/components/shared/TitlePage";
import ShapeMonitor from "../components/ShapeMonitor/page";
import Pagination from "../components/Pagination/page";
import ProjectsLoadingView from "./ProjectsLoadingView";

const ProjectsView = () => {
  const pathname = usePathname();
  const title: string = pathname.slice(1);
  const API_URL = "/api/projects";

  const isMobile = useMediaQuery("(max-width: 768px)");
  const ITEMS_PER_PAGE = isMobile ? 4 : 9;

  const topOfPageRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  // The function now accepts 'unknown' and validates the data inside.
  const extractProjects = useCallback((data: unknown): Project[] => {
    // This is a type guard to ensure the data has the expected shape.
    if (
      data &&
      typeof data === "object" &&
      "projectTemplate" in data &&
      Array.isArray((data as ProjectsApiResponse).projectTemplate)
    ) {
      // Only after the check passes, we treat it as ProjectsApiResponse.
      return (data as ProjectsApiResponse).projectTemplate;
    }
    // If the data is not in the expected format, return an empty array.
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
    <div ref={topOfPageRef} className="pt-5 container mx-auto px-4">
      <TitlePage title={title} />
      <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 xl:grid-cols-3 mt-8">
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
