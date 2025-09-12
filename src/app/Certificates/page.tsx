import { Metadata } from "next";
import CertificatesView from "./CertificatesView";
import { getCertificates } from "@/lib/data-service"; // Import from your data service

export const metadata: Metadata = {
  title: "Portfolio | Certificates",
  description: "A list of my academic and professional certificates.",
};

// This is a Server Component that fetches data server-side.
export default async function CertificatesPage() {
  // Fetch data on the server using the centralized service.
  // This is extremely fast and benefits from server-side caching.
  const certificates = await getCertificates();

  // Pass the fetched data as a prop to the Client Component.
  return <CertificatesView certificates={certificates} />;
}
