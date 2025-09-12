import "../components/shape.css"; // We still need the custom CSS for the shape

const ShapeMonitorSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Container for the monitor shape and skeleton image */}
      <div className="shapeMonitor scale-75">
        {/* Skeleton for the image */}
        <div className="w-[300px] h-[200px] bg-gray-300 dark:bg-gray-700 animate-pulse" />
        <div className="specker"></div>
      </div>

      {/* Skeleton for the text content */}
      <div className="mt-18 w-full flex flex-col items-center gap-2">
        {/* Skeleton for the title */}
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        {/* Skeleton for the time */}
        <div className="h-5 w-1/2 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default ShapeMonitorSkeleton;
