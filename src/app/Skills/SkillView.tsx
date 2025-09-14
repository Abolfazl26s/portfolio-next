"use client";

import TitlePage from "@/app/components/shared/TitlePage";
import { SkillCategory } from "@/types";
import SkillCard from "../components/Skills/SkillCard";
import { h1 } from "framer-motion/client";

interface SkillsViewProps {
  categorizedSkills: SkillCategory[];
}

const SkillsView = ({ categorizedSkills }: SkillsViewProps) => {
  console.log(categorizedSkills);
  return (
    <div className="pt-5">
      <TitlePage title="My Skills" />

      <div className="space-y-12 mt-12 mb-16 w-full">
        {categorizedSkills.length > 0 ? (
          categorizedSkills.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center sm:text-left">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-around md:justify-start gap-5 w-full">
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
