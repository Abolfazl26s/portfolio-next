const SkillCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      {/* Skeleton for the icon */}
      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>

      {/* Skeleton for the title */}
      <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    </div>
  );
};

export default SkillCardSkeleton;
