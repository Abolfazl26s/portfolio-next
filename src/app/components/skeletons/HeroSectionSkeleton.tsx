const HeroSectionSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full xl:w-auto">
      <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
      <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
      <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
      <div className="flex gap-4 mt-4">
        <div className="w-24 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        <div className="w-24 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
};
export default HeroSectionSkeleton;
