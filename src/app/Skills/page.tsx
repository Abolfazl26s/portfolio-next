import { Metadata } from "next";
import SkillsView from "./SkillView";
import { getSkills } from "@/lib/data-service";
import { SkillCategory } from "@/types";

export const metadata: Metadata = {
  title: "Portfolio | Skills",
  description: "A list of my Skills.",
};

// This logic now runs on the server using the fast data service
async function getCategorizedSkills(): Promise<SkillCategory[]> {
  const skills = await getSkills();
  if (!skills || skills.length === 0) return [];

  const categories: { [key: string]: string[] } = {
    "Frontend Development": [
      "html",
      "css",
      "bootstrap",
      "javascript",
      "vanilla",
      "jquery",
      "react",
      "redux",
      "typescript",
    ],
    "Backend & Database": ["node", "express", "mongodb"],
    "Design & UI/UX": ["figma", "xd", "photoshop"],
    "Tools & Others": ["github", "wordpress", "pc assembly"],
  };

  const categorizedSkills = Object.keys(categories)
    .map((title) => ({
      title,
      skills: skills.filter((skill) =>
        categories[title].some((catSkill) =>
          skill.name_en.toLowerCase().includes(catSkill)
        )
      ),
    }))
    .filter((category) => category.skills.length > 0);

  return categorizedSkills;
}

// This is a Server Component
export default async function SkillsPage() {
  const categorizedSkills = await getCategorizedSkills();
  return <SkillsView categorizedSkills={categorizedSkills} />;
}
