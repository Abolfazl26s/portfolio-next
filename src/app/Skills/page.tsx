import { Metadata } from "next";
import SkillsView from "./SkillView";
import { Skill, SkillCategory } from "@/types";

export const metadata: Metadata = {
  title: "Portfolio | Skills",
  description: "A list of my Skills.",
};

// This function fetches and categorizes skills on the server
async function getCategorizedSkills(): Promise<SkillCategory[]> {
  const API_URL = process.env.API_URL;
  if (!API_URL) return [];

  try {
    const response = await fetch(API_URL, { next: { revalidate: 3600 } });
    if (!response.ok) return [];

    const data = await response.json();
    const skills: Skill[] = data.skills || [];

    // Define categories
    const categories: { [key: string]: string[] } = {
      "Frontend Development": [
        "html",
        "css",
        "bootstrap",
        "javascript",
        "jquery",
        "react",
        "redux",
      ],
      "Backend & Database": ["node", "express", "mongodb"],
      "Design & UI/UX": ["figma", "xd", "photoshop"],
      "Tools & Others": ["github", "wordpress", "pc assembly"],
    };

    // Group skills into categories
    const categorizedSkills = Object.keys(categories)
      .map((title) => ({
        title,
        skills: skills.filter((skill) =>
          categories[title].some((catSkill) =>
            skill.name_en.toLowerCase().includes(catSkill)
          )
        ),
      }))
      .filter((category) => category.skills.length > 0); // Only return categories that have skills

    return categorizedSkills;
  } catch (error) {
    console.error("Failed to fetch or categorize skills:", error);
    return [];
  }
}

// This is a Server Component
export default async function SkillsPage() {
  const categorizedSkills = await getCategorizedSkills();
  return <SkillsView categorizedSkills={categorizedSkills} />;
}
