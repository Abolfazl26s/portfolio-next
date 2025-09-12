import NavbarSkeleton from "./components/skeletons/NavbarSkeleton";
import HeroSectionSkeleton from "./components/skeletons/HeroSectionSkeleton";
import MiddlenavSkeleton from "./components/skeletons/MiddlenavSkeleton";

export default function Loading() {
  return (
    <div>
      <NavbarSkeleton />
      <main className="pt-25 md:pt-10 xl:pt-40 flex-col xl:flex items-start justify-center xl:justify-around xl:gap-6 px-2 md:px-6 xl:px-0 space-y-4 mb-4">
        <HeroSectionSkeleton />
        <div className="lg:w-3/4 w-full">
          <MiddlenavSkeleton />
          <div className="border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-4 animate-pulse">
            <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
