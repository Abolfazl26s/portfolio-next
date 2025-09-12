import Image from "next/image";
import { FileDown, Mail } from "lucide-react";
import type { ProfileData } from "@/types"; // مسیر فایل types.ts خود را وارد کنید
import SocialMedia from "./shared/SocialMedia"; // مسیر کامپوننت خود را چک کنید
import DownloadCVButton from "./shared/DownloadCVButton";

type HeroSectionProps = {
  profileData: ProfileData;
};

// این یک Server Component است (بدون 'use client') که سریع‌تر است
export default function HeroSection({ profileData }: HeroSectionProps) {
  const { name, title, email, imageUrl, cvUrl } = profileData;

  return (
    <div
      className="w-full lg:w-3/4 xl:w-1/4 flex flex-wrap text-center items-center justify-center pb-4 gap-y-6 rounded-2xl border-2 border-primary relative pt-30
    md:justify-start md:text-left md:space-x-8 md:px-10 md:items-start md:py-8 xl:pt-30 xl:top-40 xl:sticky"
    >
      <div className="image">
        <Image
          src={imageUrl}
          alt={name}
          width={160}
          height={160}
          className="rounded-2xl border-4 border-white border-primary shadow-lg lg:w-48 lg:h-48 object-cover
          absolute -top-20 left-1/2 transform -translate-x-1/2
          md:relative md:top-0 md:h-60 md:w-60 xl:absolute xl:-top-20 xl:justify-center"
          priority={true}
        />
      </div>
      <div className="info flex-col items-center justify-center md:justify-start xl:justify-center">
        <h1 className="sm:text font-bold text-foreground xl:text-center">
          {name}
        </h1>
        <h3 className="mt-2 text-md text-secondary xl:text-center">{title}</h3>

        <SocialMedia />

        <div className="mt-6 flex-col justify-center items-center w-full">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center md:justify-start gap-2 mb-4 text-sm text-secondary hover:text-primary transition-colors"
          >
            <Mail size={16} />
            {email}
          </a>
          <DownloadCVButton cvUrl="/documents/AbolfazlSaeidabadi-CV.pdf" />
        </div>
      </div>
    </div>
  );
}
