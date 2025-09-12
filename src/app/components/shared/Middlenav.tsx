"use client";
import { GraduationCap, HardDrive, Home, Shovel, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion"; // 1. Import motion and AnimatePresence

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/Projects", icon: HardDrive },
  { name: "Skills", href: "/Skills", icon: Shovel },
  { name: "Certificates", href: "/Certificates", icon: GraduationCap },
];

export default function Middlenav() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  // 2. Define animation variants for the menu panel
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  // 3. Define animation variants for each menu item
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed xl:relative top-24 lg:top-32 xl:top-0 rounded-bl-lg rounded-tl-lg z-50 right-0 text-[var(--primary)] dark:text-[var(--primary)] dark:bg-[var(--border)] bg-[var(--background)]  xl:dark:bg-[var(--background)]">
      {/* --- Desktop Navigation (xl breakpoint and up) --- */}
      <div className="hidden lg:flex-col xl:flex  container mx-auto px-4">
        <div className="flex w-full flex-row items-center justify-end gap-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                ${pathName === item.href ? "active border-2" : ""}
                flex items-center justify-center px-8 py-4 text-sm font-medium
                text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800
                dark:hover:bg-gray-700 dark:text-white hover:scale-105
                transition-transform duration-300 w-auto
              `}
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* --- Mobile & Tablet Navigation (Hamburger Menu) --- */}
      <div className="xl:hidden flex justify-between items-center px-2 py-2 shadow-lg">
        <div>{isOpen && <ThemeSwitcher />}</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} className="text-cyan-300 animate-pulse" />
          )}
        </button>
      </div>

      {/* 4. Use AnimatePresence to handle the exit animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="xl:hidden"
            variants={menuVariants} // Apply menu variants
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col space-y-2 p-2">
              {navigation.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={`
                      ${pathName === item.href ? "active border-2" : ""}
                      flex items-center px-4 py-3 text-sm font-medium
                      text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800
                      dark:hover:bg-gray-700 dark:text-white
                    `}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
