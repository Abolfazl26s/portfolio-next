import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";

import { Providers } from "./providers";
import Navbar from "./components/shared/Navbar";
import Middlenav from "./components/shared/Middlenav";
import HeroSection from "./components/HeroSection";
import type { ProfileData } from "@/types";
import RouteProgress from "./components/shared/RouteProgress";
import ScrollToTopButton from "./components/shared/ScrollToTopButton";

import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // 400: regular, 500: medium, 600: semi-bold, 700: bold
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});
export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

// این داده‌ها می‌تواند از یک API یا CMS خوانده شود
const sampleProfileData: ProfileData = {
  name: " Abolfazl Saeidabadi",
  title: " Frontend Developer",
  email: "asaeidabadi243@gmail.com",
  imageUrl: "/images/Me.jpg",
  cvUrl: "/documents/AbolfazlSaeidabadi-CV.pdf", // مسیر فایل رزومه خود را قرار دهید
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning={true}
      className={`${poppins.className} ${spaceGrotesk.variable} dark:bg-[var(--background)] bg-[var(--background)]`}
    >
      <body className="min-h-screen text-[var(--foreground)] transition-colors duration-300">
        <Providers>
          <Suspense fallback={null}>
            <RouteProgress />
          </Suspense>
          <div className="container mx-auto px-2 md:px-6 xl:px-0">
            <Navbar />
            <main className="pt-25 md:pt-10 xl:pt-40 flex-col xl:flex items-start justify-center xl:justify-around xl:gap-6 space-y-4 mb-4 text-[var(--primary)] dark:text-[var(--primary)] min-h-screen">
              <HeroSection profileData={sampleProfileData} />

              <div className="xl:w-3/4 w-full xl:mt-[-120px]">
                <Middlenav />
                <div className=" border-2 border-primary rounded-2xl p-4">
                  {children}
                  <ScrollToTopButton />
                </div>
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
