"use client";
import { GraduationCap, HardDrive, Home, Shovel, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  return (
    <div className="fixed xl:relative top-24 lg:top-32 xl:top-0 rounded-bl-lg rounded-tl-lg z-50 right-0 text-[var(--primary)] dark:text-[var(--primary)] dark:bg-[var(--border)] bg-[var(--background)]  xl:dark:bg-[var(--background)]">
      {/* Tablet & Desktop Navigation Container */}
      <div className="hidden lg:flex container mx-auto px-4">
        {/*
          - md to lg: Vertical column (flex-col)
          - lg and up: Horizontal row (lg:flex-row)
        */}
        <div className="flex w-full lg:flex-col xl:flex-row md:items-center lg:items-center justify-end md:space-y-3 lg:space-y-0 gap-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                ${pathName === item.href ? "active" : ""}
                flex items-center justify-center px-4 py-2 lg:px-8 lg:py-4 text-sm font-medium
                text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800
                dark:hover:bg-gray-700 dark:text-white hover:scale-105
                transition-transform duration-300 w-full lg:w-auto
              `}
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="lg:hidden flex justify-end p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-2 p-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  ${pathName === item.href ? "active" : ""}
                    
                  flex items-center px-4 py-3 text-sm font-medium
                  text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800
                  dark:hover:bg-gray-700 dark:text-white
                  ${pathName === item.href ? "active" : ""}
                `}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
