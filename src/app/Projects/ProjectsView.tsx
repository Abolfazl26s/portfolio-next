"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react"; // Import useCallback for memoization
import { usePaginatedFetch } from "@/hooks/usePaginatedFetch";
import { Project } from "@/types";
import TitlePage from "@/app/components/shared/TitlePage";
import ShapeMonitor from "../components/ShapeMonitor/page";
import Pagination from "../components/Pagination/page";

const ProjectsView = () => {
  const pathname = usePathname();
  const title: string = pathname.slice(1);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  /**
   * Memoized function to safely extract the project array from the API response.
   * Using useCallback prevents this function from being recreated on every render,
   * which in turn prevents the usePaginatedFetch hook from re-running unnecessarily.
   */
  const extractProjects = useCallback((data: unknown): Project[] => {
    // A type guard to safely check if the response has the expected structure.
    if (
      data &&
      typeof data === "object" &&
      "projectTemplate" in data &&
      Array.isArray((data as { projectTemplate: unknown }).projectTemplate)
    ) {
      return (data as { projectTemplate: Project[] }).projectTemplate;
    }
    // Return an empty array if the structure is incorrect, preventing crashes.
    return [];
  }, []);

  // Use the custom hook to get data and pagination logic.
  const {
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
    loading,
    error,
  } = usePaginatedFetch<Project>(
    API_URL,
    6, // Items per page
    extractProjects // Pass the memoized extractor function
  );

  // Display a loading message while data is being fetched.
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading projects...
      </div>
    );
  }

  // Display an error message if the data fetch fails.
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Error fetching data: {error.message}
      </div>
    );
  }

  return (
    <div>
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

      {/* Render pagination controls only if there is more than one page. */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProjectsView;
