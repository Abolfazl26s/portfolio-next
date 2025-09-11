import Image from "next/image";
import { ICertificate } from "@/types";
import { motion } from "framer-motion";

interface CertificateCardProps {
  certificate: ICertificate;
  onSelect: (cert: ICertificate) => void; // Callback function to open the modal
}

const CertificateCard = ({ certificate, onSelect }: CertificateCardProps) => {
  return (
    // motion.div enables animations and layout transitions
    <motion.div
      layoutId={`card-container-${certificate.id}`} // Unique ID for shared layout animation
      onClick={() => onSelect(certificate)}
      className="w-full sm:w-65 cursor-pointer flex flex-col items-center text-center border border-gray-700 rounded-lg p-4 shadow-lg bg-gray-800
                 transition-transform transform hover:-translate-y-2 hover:shadow-cyan-500/50 will-change-transform"
    >
      <motion.div
        layoutId={`card-image-${certificate.id}`} // Unique ID for the image animation
        className="relative w-full h-40 mb-4 will-change-transform"
      >
        <Image
          src={certificate.imgSrc}
          alt={certificate.title_en}
          fill
          style={{ objectFit: "contain" }}
          className="rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75} // Image optimization for smoother animation
        />
      </motion.div>
      <motion.h3
        layoutId={`card-title-${certificate.id}`} // Unique ID for the title animation
        className="text-lg font-semibold text-gray-200 h-12 flex items-center"
      >
        {certificate.title_en}
      </motion.h3>
    </motion.div>
  );
};

export default CertificateCard;
