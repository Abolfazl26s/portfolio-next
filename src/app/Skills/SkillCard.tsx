import { Skill } from "@/types";
import SkillIcon from "@/app/components/SkillIcon";
import { motion } from "framer-motion";

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg
                 border border-gray-700 hover:border-cyan-500 transition-colors duration-300"
    >
      <SkillIcon name={skill.name_en} />
      <p className="font-semibold text-gray-200 text-center">{skill.name_en}</p>
    </motion.div>
  );
};

export default SkillCard;
