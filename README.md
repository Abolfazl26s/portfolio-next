:root {
    /* --- رنگ‌های پایه - حالت روز --- */
    --background: #e1e1e1;
    /* پس‌زمینه اصلی (Slate 50) */
    --foreground: #0f172a;
    /* متن اصلی (Slate 900) */

    /* --- رنگ‌های کارت و بخش‌ها --- */
    --card-background: #ffffff;
    /* پس‌زمینه کارت‌ها (سفید) */
    --card-foreground: #0f172a;
    /* متن روی کارت‌ها (Slate 900) */

    /* --- رنگ اصلی و تعاملی --- */
    --primary: #14b8a6;
    /* رنگ اصلی گیرا (Teal 500) */
    --primary-foreground: #f8fafc;
    /* متن روی دکمه‌های اصلی (Slate 50) */

    /* --- رنگ‌های فرعی --- */
    --secondary: #64748b;
    /* متن ثانویه (Slate 500) */
    --border: #e2e8f0;

    --height: 35px;
    --imgSize: 180px;
    --imgRadius: 50%;
    --colorBorder: #888;


    --liquid-color: #3498db;
    /* رنگ پیش‌فرض مایع (آبی) */
    --wave-color-1: rgba(255, 255, 255, 0.7);
    --wave-color-2: rgba(255, 255, 255, 0.4);

    /* This is the single place you'll need to edit your font sizes */
    /* format: clamp(min-size, preferred-size, max-size) */

    --fs-400: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
    /* Body text (~16px to 18px) */
    --fs-500: clamp(1.125rem, 1rem + 0.625vw, 1.4rem);
    /* Subtitles (~18px to 22.4px) */
    --fs-600: clamp(1.4rem, 1.25rem + 0.75vw, 1.75rem);
    /* h3 (~22.4px to 28px) */
    --fs-700: clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem);
    /* h2 (~28px to 40px) */
    --fs-800: clamp(2.25rem, 1.8rem + 2.25vw, 3.5rem);
    /* h1 (~36px to 56px) */
}

html.dark {
    /* --- رنگ‌های پایه - حالت شب --- */
    --background: #0f172a;
    /* پس‌زمینه اصلی (Slate 900) */
    --foreground: #e2e8f0;
    /* متن اصلی (Slate 200) */

    /* --- رنگ‌های کارت و بخش‌ها --- */
    --card-background: #1e293b;
    /* پس‌زمینه کارت‌ها (Slate 800) */
    --card-foreground: #e2e8f0;
    /* متن روی کارت‌ها (Slate 200) */

    /* --- رنگ اصلی و تعاملی --- */
    --primary: #2dd4bf;
    /* رنگ اصلی روشن‌تر (Teal 400) */
    --primary-foreground: #0f172a;
    /* متن روی دکمه‌های اصلی (Slate 900) */

    /* --- رنگ‌های فرعی --- */
    --secondary: #94a3b8;
    /* متن ثانویه (Slate 400) */
    --border: #334155;


    --liquid-color: #4299e1;
    /* آبی روشن‌تر برای حالت تاریک */
    --wave-color-1: rgba(26, 32, 44, 0.7);
    --wave-color-2: rgba(26, 32, 44, 0.4);
}