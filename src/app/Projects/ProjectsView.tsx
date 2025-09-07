"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import TitlePage from "@/app/components/shared/TitlePage";
import ShapeMonitor from "../components/ShapeMonitor/page";
import { Project } from "@/types";

const ProjectsView = () => {
  const pathname = usePathname();
  // We use the imported Project type here
  const [projects, setProjects] = useState<Project[]>([]);

  const title: string = pathname.slice(1);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Fetches project data from the API only once when the component mounts.
  useEffect(() => {
    const fetchProjects = async () => {
      if (!API_URL) {
        console.error("API URL is not defined.");
        return;
      }

      try {
        const response = await axios.get(API_URL);
        setProjects(response.data.projectTemplate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
  }, [API_URL]); // The effect depends on API_URL.

  return (
    <div>
      <TitlePage title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ShapeMonitor
            key={project.id}
            imgSrc={project.imgSrc}
            projectName={project.name_en}
            link={project.link}
            time={project.time_en}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
