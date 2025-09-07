"use client";

import { usePathname } from "next/navigation";
import TitlePage from "@/app/components/shared/TitlePage";
import { Skill } from "@/types"; 
import ProgressBubble from "./ProgressBubble";


const skillsData: Skill[] = [
  { name_en: "JavaScript", levelOfSkill: 90 },
  { name_en: "TypeScript", levelOfSkill: 80 },
  { name_en: "React", levelOfSkill: 85 },
  { name_en: "Next.js", levelOfSkill: 88 },
  { name_en: "Node.js", levelOfSkill: 75 },
  { name_en: "Tailwind CSS", levelOfSkill: 95 },
];

const SkillsView = () => {
  const pathname = usePathname();
  const title: string = pathname.slice(1);

  return (
    <div className="pt-5">
      <TitlePage title={title} />
      <ProgressBubble />
    </div>
  );
};

export default SkillsView;
