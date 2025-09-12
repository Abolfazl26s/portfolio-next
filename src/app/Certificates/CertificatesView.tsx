"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ICertificate } from "@/types";
import TitlePage from "@/app/components/shared/TitlePage";
import CertificateCard from "@/app/components/Certificates/CertificateCard";
import CertificateModal from "@/app/components/Certificates/CertificateModal";

// Define the props structure for this component.
interface CertificatesViewProps {
  certificates: ICertificate[];
}

const CertificatesView = ({ certificates }: CertificatesViewProps) => {
  const [selectedCert, setSelectedCert] = useState<ICertificate | null>(null);

  return (
    <div className="pt-5 container mx-auto px-4">
      <TitlePage title="Certificates" />

      {certificates.length === 0 ? (
        <p className="text-center mt-8 text-gray-400">No certificates found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 xl:grid-cols-4 mt-8">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onSelect={setSelectedCert}
            />
          ))}
        </div>
      )}

      {/* AnimatePresence handles the modal's exit animation. */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            certificate={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesView;
