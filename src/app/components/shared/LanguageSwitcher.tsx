"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/navigation";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      disabled={isPending}
      className="bg-transparent p-1 border rounded-md border-border text-foreground"
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
};
export default LanguageSwitcher;
