"use client";
import { GraduationCap, HardDrive, Home, Shovel } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/Projects", icon: HardDrive },
  { name: "Skills", href: "/Skills", icon: Shovel },
  { name: "Certificates", href: "/Certificates", icon: GraduationCap },
];

export default function Middlenav() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flex items-center justify-center w-full h-30 text-[var(--primary)] dark:text-[var(--primary)] dark:bg-[var(--background)] bg-[var(--background)] ">
      <div className="flex basis-1/3"></div>
      <div className="flex items-center justify-start space-x-3 basis-2/3">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={` ${
              pathName === item.href ? "active" : ""
            } flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white`}
          >
            <item.icon className="w-4 h-4 mr-2" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
