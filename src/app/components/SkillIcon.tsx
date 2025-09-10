import {
  Code,
  Database,
  Wind,
  Palette,
  GitBranch,
  Terminal,
} from "lucide-react";

// A simple component to render an icon based on the skill name
const SkillIcon = ({ name, size = 48 }: { name: string; size?: number }) => {
  const normalizedName = name.toLowerCase();

  switch (true) {
    case normalizedName.includes("html"):
    case normalizedName.includes("css"):
    case normalizedName.includes("react"):
    case normalizedName.includes("javascript"):
      return <Code size={size} className="text-cyan-400" />;
    case normalizedName.includes("node"):
    case normalizedName.includes("express"):
      return <Terminal size={size} className="text-green-400" />;
    case normalizedName.includes("mongo"):
      return <Database size={size} className="text-green-500" />;
    case normalizedName.includes("figma"):
    case normalizedName.includes("xd"):
    case normalizedName.includes("photoshop"):
      return <Palette size={size} className="text-purple-400" />;
    case normalizedName.includes("git"):
      return <GitBranch size={size} className="text-red-400" />;
    default:
      return <Wind size={size} className="text-gray-400" />;
  }
};

export default SkillIcon;
