import TitlePage from "@/app/components/shared/TitlePage";
import CertificateCardSkeleton from "../components/Certificates/CertificateCardSkeleton";

export default function Loading() {
  return (
    <div className="pt-5 container mx-auto px-4">
      <TitlePage title="Certificates" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 place-items-center">
        {/* Render a few skeleton cards to match the page layout */}
        {Array.from({ length: 6 }).map((_, index) => (
          <CertificateCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
