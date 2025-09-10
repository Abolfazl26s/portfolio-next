"use client";

import { useState } from "react";
import TitlePage from "@/app/components/shared/TitlePage"; // Assumed component
import { ICertificate } from "@/types";
import CertificateCard from "./CertificateCard";
import CertificateModal from "../components/CertificateModal";
import { AnimatePresence } from "framer-motion";

interface CertificatesViewProps {
  certificates: ICertificate[];
}

const CertificatesView = ({ certificates }: CertificatesViewProps) => {
  const title = "Certificates";

  // State to keep track of the currently selected certificate for the modal
  const [selectedCert, setSelectedCert] = useState<ICertificate | null>(null);

  return (
    <div className="pt-5 container mx-auto px-4">
      <TitlePage title={title} />

      <div className="flex flex-wrap justify-center gap-8 mt-8 mb-8">
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onSelect={setSelectedCert} // Pass the state setter to the card
          />
        ))}
      </div>

      {/* AnimatePresence handles the animation of components when they are removed from the DOM */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            certificate={selectedCert}
            onClose={() => setSelectedCert(null)} // Function to close the modal
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesView;
