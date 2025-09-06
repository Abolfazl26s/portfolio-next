import { Metadata } from "next";
import SkillsView from "./SkillView";

export const metadata: Metadata = {
  title: "Portfolio | Skills",
  description: "A list of my Skills.",
};

export default function ProjectsPage() {
  return <SkillsView />;
}
