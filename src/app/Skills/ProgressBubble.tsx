import React, { useState, useMemo } from "react";
import "./ProgressBubble.css"; // این فایل را در مرحله بعد ایجاد می‌کنیم

const ProgressBubble: React.FC = () => {
  // استیت برای نگهداری درصد (عدد) و مقدار ورودی (رشته)
  const [percentage, setPercentage] = useState<number>(67);
  const [inputValue, setInputValue] = useState<string>("67");

  const colorInc = 100 / 3; // 33.33...

  // این تابع وضعیت رنگ را بر اساس درصد برمی‌گرداند ('red', 'orange', 'green')
  const colorState = useMemo((): "red" | "orange" | "green" => {
    if (percentage < colorInc) return "red";
    if (percentage < colorInc * 2) return "orange";
    return "green";
  }, [percentage, colorInc]);

  // مدیریت رویداد تغییر ورودی
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // مقدار ورودی را همیشه به‌روز کن

    // اگر ورودی خالی بود، به حالت پیش‌فرض برگرد
    if (value === "") {
      setPercentage(67);
      return;
    }

    const numValue = parseInt(value, 10);

    // اعتبارسنجی ورودی
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      setPercentage(numValue);
    }
  };

  // محاسبه موقعیت `top` برای آب
  const waterTopPosition = 100 - percentage;

  // تعریف کلاس‌های Tailwind بر اساس وضعیت رنگ
  // این روش ۱۰۰٪ با Tailwind سازگار است و مشکل Purge ندارد
  const colorClasses = {
    red: {
      border: "border-red-500",
      text: "text-red-900",
      waterBg: "bg-red-500/50",
      shadow: "shadow-red-500/40",
      textGlow: "drop-shadow-[0_0_10px_rgba(153,27,27,0.7)]", // معادل text-glow
    },
    orange: {
      border: "border-orange-500",
      text: "text-orange-900",
      waterBg: "bg-orange-500/50",
      shadow: "shadow-orange-500/40",
      textGlow: "drop-shadow-[0_0_10px_rgba(194,65,12,0.7)]",
    },
    green: {
      border: "border-green-500",
      text: "text-green-900",
      waterBg: "bg-green-400/50",
      shadow: "shadow-green-500/40",
      textGlow: "drop-shadow-[0_0_10px_rgba(21,128,61,0.7)]",
    },
  };

  const currentColors = colorClasses[colorState];

  return (
    <div className="wrapper flex flex-col items-center justify-center p-4 text-gray-300">
      {/* کانتینر اصلی حباب */}
      <div className={`mt-4 w-[130px] h-[130px]`}>
        <div
          className={`progress relative w-full h-full rounded-full border-[5px] shadow-2xl transition-all duration-1000 ease-in-out ${currentColors.border} ${currentColors.shadow}`}
        >
          {/* کانتینر داخلی برای ماسک کردن آب */}
          <div className="inner absolute w-[130px] h-[130px] rounded-full overflow-hidden z-[2] border-[5px] border-gray-800">
            {/* نمایش درصد */}
            <div
              className={`percent absolute w-full h-full flex items-center justify-center text-[88px] font-bold transition-all duration-1000 ease-in-out ${currentColors.text} ${currentColors.textGlow}`}
            >
              <span className="text-white text-[25px]">{percentage} %</span>
            </div>

            {/* عنصر آب متحرک */}
            <div
              className={`water absolute left-[-50%]  w-[200%] h-[200%] rounded-[40%] z-[1] transition-all duration-1000 ease-in-out ${currentColors.waterBg}`}
              style={{ top: `${waterTopPosition}%` }}
            ></div>

            {/* عنصر بازتاب نور */}
            <div className="glare absolute top-[-120%] left-[-120%] w-[200%] h-[200%] rounded-full bg-white/15 transform rotate-45 z-[5]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBubble;
