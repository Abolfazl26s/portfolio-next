"use client";

import { useState } from "react";
import { FileDown, Loader2 } from "lucide-react"; // آیکون لودینگ را اضافه می‌کنیم

interface DownloadCVButtonProps {
  cvUrl: string;
}

const DownloadCVButton = ({ cvUrl }: DownloadCVButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // شبیه‌سازی یک تاخیر کوتاه برای آماده‌سازی فایل (مثلاً ۱.۵ ثانیه)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // ایجاد یک لینک موقت برای شروع دانلود
      const link = document.createElement("a");
      link.href = cvUrl;
      link.setAttribute("download", "AbolfazlSaeidabadi-CV.pdf"); // نام فایل نهایی
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading} // دکمه در حالت لودینگ غیرفعال می‌شود
      className="flex justify-center items-center gap-2 rounded-lg bg-[var(--border)] px-4 py-3 font-semibold text-cyan-400 transition-all hover:opacity-90 w-full disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
    >
      {isLoading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          <span>Preparing...</span>
        </>
      ) : (
        <>
          <FileDown size={18} />
          <span>Download CV</span>
        </>
      )}
    </button>
  );
};

export default DownloadCVButton;
