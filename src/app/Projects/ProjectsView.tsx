"use client";

import { usePathname } from "next/navigation";
import { useCallback, useRef, useEffect } from "react";
import { usePaginatedFetch } from "@/hooks/usePaginatedFetch";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Project, ProjectsApiResponse } from "@/types"; // 1. Import the new type
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

  // 2. Use the new, specific type instead of 'any'
  const extractProjects = useCallback(
    (data: ProjectsApiResponse): Project[] => {
      return data?.projectTemplate || [];
    },
    []
  );

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
