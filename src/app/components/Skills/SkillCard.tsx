import { Skill } from "@/types";
import SkillIcon from "@/app/components/Skills/SkillIcon";
import { motion } from "framer-motion";

const SkillCard = ({ skill }: { skill: Skill }) => {
  const level = Number(skill.levelOfSkill) || 0;
  const normalizedName = skill.name_en.toLowerCase();

  const progressPalette: Record<string, string> = {
    mysql: "bg-gradient-to-r from-[#00758f] via-[#00618a] to-[#f29111]",
  };

  const defaultProgress =
    "bg-gradient-to-r from-[#0ea5e9] via-[#14b8a6] to-[#22c55e]";

  const progressClass =
    Object.entries(progressPalette).find(([key]) =>
      normalizedName.includes(key)
    )?.[1] || defaultProgress;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group flex w-[140px] flex-col items-center justify-center gap-3 py-5  bg-gray-800/70 rounded-xl shadow-lg
                 border border-gray-700 hover:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
    >
      <SkillIcon name={skill.name_en} />
      <p className="font-semibold text-gray-100 text-center">{skill.name_en}</p>
      <div className="w-full px-4">
        <div className="h-2 w-full rounded-full bg-gray-700 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${progressClass}`}
            style={{ width: `${Math.min(level, 100)}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1 text-center">{level}%</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
