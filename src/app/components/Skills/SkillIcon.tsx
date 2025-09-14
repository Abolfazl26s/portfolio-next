import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaWordpress,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "@icons-pack/react-simple-icons";
import { VscTerminalCmd } from "react-icons/vsc";
import { LuWrench } from "react-icons/lu";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandAdobeXd, TbBrandAdobePhotoshop } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

// A component that renders the specific brand icon for each skill
const SkillIcon = ({ name, size = 48 }: { name: string; size?: number }) => {
  const iconProps = {
    size,
    className: "transition-transform transform group-hover:scale-110",
  };
  const normalizedName = name.toLowerCase();

  switch (true) {
    // Frontend
    case normalizedName.includes("html"):
      return <FaHtml5 {...iconProps} color="#E34F26" />;
    case normalizedName.includes("css"):
      return <FaCss3Alt {...iconProps} color="#1572B6" />;
    case normalizedName.includes("bootstrap"):
      return <FaBootstrap {...iconProps} color="#7952B3" />;
    case normalizedName.includes("javascript"):
      return <SiJavascript {...iconProps} color="#F7DF1E" />;
    case normalizedName.includes("jquery"):
      return <DiJqueryLogo {...iconProps} color="#0769AD" />;
    case normalizedName.includes("react"):
      return <FaReact {...iconProps} color="#61DAFB" />;
    case normalizedName.includes("redux"):
      return <SiRedux {...iconProps} color="#764ABC" />;
    case normalizedName.includes("typescript"):
      return <SiTypescript {...iconProps} color="#61DAFB" />;

    // Backend
    case normalizedName.includes("node"):
    case normalizedName.includes("express"):
      return <FaNodeJs {...iconProps} color="#339933" />;
    case normalizedName.includes("mongo"):
      return <SiMongodb {...iconProps} color="#47A248" />;

    // Design
    case normalizedName.includes("figma"):
      return <FaFigma {...iconProps} color="#F24E1E" />;
    case normalizedName.includes("xd"):
      return <TbBrandAdobeXd {...iconProps} color="#FF61F6" />;
    case normalizedName.includes("photoshop"):
      return <TbBrandAdobePhotoshop {...iconProps} color="#31A8FF" />;

    // Tools & Others
    case normalizedName.includes("git"):
      return <FaGithub {...iconProps} color="#FFFFFF" />;
    case normalizedName.includes("wordpress"):
      return <FaWordpress {...iconProps} color="#21759B" />;
    case normalizedName.includes("pc assembly"):
      return <LuWrench {...iconProps} color="#d4d4d4" />;

    default:
      return <VscTerminalCmd {...iconProps} color="#FFFFFF" />;
  }
};

export default SkillIcon;
