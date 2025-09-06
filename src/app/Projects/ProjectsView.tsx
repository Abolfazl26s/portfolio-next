"use client";

import { usePathname } from "next/navigation";
import TitlePage from "@/app/components/shared/TitlePage";

const ProjectsView = () => {
  const pathname = usePathname();

  const title: string = pathname.slice(1);

  return (
    <div>
      <TitlePage title={title} />
      {/* بقیه محتوای صفحه پروژه‌ها در اینجا قرار می‌گیرد */}
      <p>Here is a list of my projects.</p>
    </div>
  );
};

export default ProjectsView;
