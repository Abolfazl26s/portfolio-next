import { Skill } from "@/types";
import SkillIcon from "@/app/components/Skills/SkillIcon";
import { motion } from "framer-motion";

const SkillCard = ({ skill }: { skill: Skill }) => {
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex w-[120px] flex-col items-center justify-center py-5  bg-gray-800 rounded-lg shadow-lg
                 border border-gray-700 hover:border-cyan-500 transition-colors duration-300"
    >
      <SkillIcon name={skill.name_en} />
      <p className="font-semibold text-gray-200 text-center">{skill.name_en}</p>
    </motion.div>
  );
};

export default SkillCard;
