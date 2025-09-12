const CertificateCardSkeleton = () => {
  return (
    <div className="w-72 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800">
      {/* Skeleton for the image */}
      <div className="relative w-full h-40 mb-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

      {/* Skeleton for the title */}
      <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    </div>
  );
};

export default CertificateCardSkeleton;
