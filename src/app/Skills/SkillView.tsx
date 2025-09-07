"use client";

import { usePathname } from "next/navigation";
import TitlePage from "@/app/components/shared/TitlePage";

const SkillsView = () => {
  const pathname = usePathname();

  const title: string = pathname.slice(1);

  return (
    <div className="pt-5">
      <TitlePage title={title} />
      {/* بقیه محتوای صفحه پروژه‌ها در اینجا قرار می‌گیرد */}
      <p>Here is a list of my Skills.</p>
    </div>
  );
};

export default SkillsView;
