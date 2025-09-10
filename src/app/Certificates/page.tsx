import { Metadata } from "next";
import CertificatesView from "./CertificatesView";
import { ICertificate } from "@/types"; // ICertificate را import کنید

export const metadata: Metadata = {
  title: "Portfolio | Certificates",
  description: "A list of my Certificates.",
};

// تابع برای دریافت داده‌ها
async function fetchCertificates(): Promise<ICertificate[]> {
  const API_URL = process.env.API_URL;

  if (!API_URL) {
    console.error("API_URL is not defined in environment variables.");
    return []; // همیشه یک آرایه برگردانید تا برنامه کرش نکند
  }

  try {
    const response = await fetch(API_URL, {
      // این بخش باعث می‌شود داده‌ها کش شوند و هر ۱ ساعت یکبار به‌روز شوند (ISR)
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Failed to fetch certificates:", response.statusText);
      return [];
    }

    const data = await response.json();
    // ساختار پاسخ API خود را اینجا تنظیم کنید
    return data.certificates || data || [];
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return [];
  }
}

// کامپوننت صفحه به یک کامپوننت async تبدیل می‌شود
export default async function CertificatesPage() {
  // داده‌ها در سرور دریافت می‌شوند
  const certificates = await fetchCertificates();

  // داده‌های دریافت شده به عنوان prop به کامپوننت کلاینت پاس داده می‌شوند
  return <CertificatesView certificates={certificates} />;
}
