const NavbarSkeleton = () => {
  return (
    <div className="w-full h-16 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
    </div>
  );
};
export default NavbarSkeleton;
