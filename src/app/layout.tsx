import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import { Providers } from "./providers";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
import type { Locale } from "../types";
import Navbar from "./components/shared/Navbar";
import Middlenav from "./components/shared/Middlenav";
import HeroSection from "./components/HeroSection";
import type { ProfileData } from "@/types";
import "./globals.css";
import ScrollToTopButton from "./components/shared/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // 400: regular, 500: medium, 600: semi-bold, 700: bold
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
  cvUrl: "/documents/AbolfazlSaeidabadi-cv.pdf", // مسیر فایل رزومه خود را قرار دهید
};
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale }; // استفاده از تایپ
}) {
  // const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning={true}
      className={`${poppins.className} dark:bg-[var(--background)] bg-[var(--background)]`}
    >
      <body className=" container mr-auto ml-auto  text-[var(--foreground)] transition-colors duration-300">
        {/* <NextIntlClientProvider locale={locale} > */}
        <Providers>
          <Navbar />
          <main className="pt-25 md:pt-10 xl:pt-40 flex-col xl:flex items-start justify-center xl:justify-around xl:gap-6 px-2 md:px-6 xl:px-0 space-y-4 mb-4 text-[var(--primary)] dark:text-[var(--primary)]  min-h-screen">
            <HeroSection profileData={sampleProfileData} />

            <div className="lg:w-3/4 w-full">
              <Middlenav />
              <div className=" border-2 border-primary rounded-2xl p-4">
                {children}
                <ScrollToTopButton />
              </div>
            </div>
          </main>
        </Providers>

        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
