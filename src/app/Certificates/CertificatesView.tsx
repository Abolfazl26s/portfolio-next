"use client";
import { usePathname } from "next/navigation";
import TitlePage from "../components/shared/TitlePage";

const CertificatesPage = () => {
  const title: string = usePathname().replace("/", "");
  return (
    <div className="pt-5">
      <TitlePage title={title} />
      {/* بقیه محتوای صفحه پروژه‌ها در اینجا قرار می‌گیرد */}
      <p>Here is a list of my Certificates.</p>
    </div>
  );
};

export default CertificatesPage;
