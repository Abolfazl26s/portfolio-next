import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Locale } from "./src/types"; // (این فایل را در مرحله بعد می‌سازیم)

// تابع برای استخراج پیام‌ها
function extractLocaleMessages(obj: any, locale: Locale): any {
  const result: any = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      if ("en" in value && "fa" in value) {
        result[key] = value[locale];
      } else {
        result[key] = extractLocaleMessages(value, locale);
      }
    }
  }
  return result;
}

export default getRequestConfig(async ({ locale }) => {
  if (!["en", "fa"].includes(locale)) notFound();

  const response = await fetch(
    "https://abolfazl26s.github.io/project_data/data/db.json",
    {
      next: { revalidate: 3600 }, // کش به مدت ۱ ساعت
    }
  );
  const allTranslations = await response.json();

  return {
    locale,
    messages: extractLocaleMessages(allTranslations, locale as Locale),
  };
});
