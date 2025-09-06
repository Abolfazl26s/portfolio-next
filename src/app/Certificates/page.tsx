import { Metadata } from "next";
import CertificatesView from "./CertificatesView";

export const metadata: Metadata = {
  title: "Portfolio | Certificates",
  description: "A list of my Certificates.",
};

export default function ProjectsPage() {
  return <CertificatesView />;
}
