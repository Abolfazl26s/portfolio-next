import Image from "next/image";
import { FileDown, Mail } from "lucide-react";
import type { ProfileData } from "@/types"; // مسیر فایل types.ts خود را وارد کنید
import SocialMedia from "./shared/SocialMedia"; // مسیر کامپوننت خود را چک کنید

type HeroSectionProps = {
  profileData: ProfileData;
};

// این یک Server Component است (بدون 'use client') که سریع‌تر است
export default function HeroSection({ profileData }: HeroSectionProps) {
  const { name, title, email, imageUrl, cvUrl } = profileData;

  return (
    <aside className="w-full max-w-sm flex-shrink-0">
      <div className="relative pt-19 text-center border-2 border-primary rounded-2xl bg-card-background p-6">
        <div className="absolute -top-25 left-1/2 -translate-x-1/2">
          <Image
            src={imageUrl}
            alt={name} // Alt text بهینه برای سئو
            width={128}
            height={128}
            priority // اولویت لود برای تصویر اصلی صفحه
            className="size-38 rounded-full border-4 border-white object-cover"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          {name}
        </h1>
        <h2 className="mt-2 text-md text-secondary">{title}</h2>

        <SocialMedia />

        <div className="mt-6 flex flex-col items-center justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
          >
            <Mail size={16} />
            {email}
          </a>
          <a
            href="/documents/AbolfazlSaeidabadi_CV.pdf" // مسیر صحیح فایل CV خود را وارد کنید
            download // استفاده از تگ <a> برای دانلود که صحیح‌تر است
            className="flex w-full max-w-48 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <FileDown size={18} />
            Download CV
          </a>
        </div>
      </div>
    </aside>
  );
}
