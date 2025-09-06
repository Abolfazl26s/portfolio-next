/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <-- مطمئن شوید مسیر app یا pages وجود دارد
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // <-- اگر از پوشه src استفاده می‌کنید
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "card-background": "var(--card-background)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
