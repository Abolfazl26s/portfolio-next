import fs from "fs";
import path from "path";

// مسیر فعلی که پروژه در آن اجرا می‌شود را می‌گیرد
const projectRoot = process.cwd();
console.log("پروژه در حال اجرا از مسیر:", projectRoot);

// مسیر کامل فایل کانفیگ را می‌سازد
const configFilePath = path.join(projectRoot, "i18n.ts");
console.log("در حال جستجو برای فایل کانفیگ در:", configFilePath);

// بررسی می‌کند که آیا فایل در آن مسیر وجود دارد یا نه
if (fs.existsSync(configFilePath)) {
  console.log("✅ موفقیت: فایل i18n.ts پیدا شد!");
} else {
  console.log("❌ شکست: فایل i18n.ts در ریشه پروژه پیدا نشد.");
  console.log(
    "لطفاً مطمئن شوید که دقیقاً در همین مسیر قرار دارد و نام آن اشتباه تایپی ندارد."
  );
}
