import TitlePage from "@/app/components/shared/TitlePage";
import SkillCardSkeleton from "@/app/components/Skills/SkillCardSkeleton";

export default function SkillsLoading() {
  const skeletonCount = 10; // تعداد اسکلت‌ها برای نمایش

  return (
    <div className="pt-5 container mx-auto px-4">
      <TitlePage title="My Tech Stack" />
      <div className="space-y-12 mt-12 mb-16">
        {/* Skeleton for a category */}
        <div>
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6 mx-auto sm:mx-0"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <SkillCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
