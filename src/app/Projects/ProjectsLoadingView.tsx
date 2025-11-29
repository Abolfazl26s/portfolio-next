import TitlePage from "@/app/components/shared/TitlePage";
import ShapeMonitorSkeleton from "./ShapeMonitorSkeleton";

const ProjectsLoadingView = () => {
  // We'll render 6 skeletons for a nice grid layout on most screens
  const skeletonCount = 6;

  return (
    <div className="pt-5 container mx-auto px-4">
      <TitlePage title="Projects" />
      <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 xl:grid-cols-3 mt-8">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <ShapeMonitorSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsLoadingView;
