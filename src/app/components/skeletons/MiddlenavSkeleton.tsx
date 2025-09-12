const MiddlenavSkeleton = () => {
  return (
    <div className="hidden lg:flex w-full justify-start gap-4 p-4 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="w-32 h-16 bg-gray-200 dark:bg-gray-800 rounded-lg"
        ></div>
      ))}
    </div>
  );
};
export default MiddlenavSkeleton;
