import { Metadata } from "next";
import ProjectsView from "./ProjectsView"; 
export const metadata: Metadata = {
  title: "Portfolio | Projects",
  description: "A list of my projects.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
