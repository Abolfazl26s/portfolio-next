"use client";

import TitlePage from "@/app/components/shared/TitlePage";
import { SkillCategory } from "@/types";
import SkillCard from "./SkillCard";

interface SkillsViewProps {
  categorizedSkills: SkillCategory[];
}

const SkillsView = ({ categorizedSkills }: SkillsViewProps) => {
  return (
    <div className="pt-5 container mx-auto px-4">
      <TitlePage title="My Tech Stack" />

      <div className="space-y-12 mt-12 mb-16">
        {categorizedSkills.length > 0 ? (
          categorizedSkills.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center sm:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Could not load skills.</p>
        )}
      </div>
    </div>
  );
};

export default SkillsView;
