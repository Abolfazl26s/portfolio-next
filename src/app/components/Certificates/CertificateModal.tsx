import { ICertificate } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react"; // 1. Import the X icon

interface CertificateModalProps {
  certificate: ICertificate;
  onClose: () => void;
}

const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
  return (
    // Overlay (dark background)
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Closes modal when clicking on the overlay
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      {/* Modal content container */}
      <motion.div
        layoutId={`card-container-${certificate.id}`} // Shared layoutId with the card
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking on its content
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden will-change-transform"
      >
        {/* Close button with icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-full
                     transition-colors cursor-pointer duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Close modal"
        >
          <X size={24} /> {/* 2. Use the X icon */}
        </button>

        {/* Enlarged image */}
        <motion.div
          layoutId={`card-image-${certificate.id}`} // Shared layoutId with the card image
          className="relative w-full h-96 md:h-[60vh] will-change-transform"
        >
          <Image
            src={certificate.imgSrc}
            alt={certificate.title_en}
            fill
            style={{ objectFit: "contain" }}
            quality={75} // Image optimization for smoother animation
          />
        </motion.div>

        {/* Details and additional content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {certificate.title_en}
          </h3>
          {/* Add more details about the certificate here */}
          <p className="text-gray-400 mb-6">
            This certificate validates expertise in...
          </p>
          {/* Old close button removed */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
