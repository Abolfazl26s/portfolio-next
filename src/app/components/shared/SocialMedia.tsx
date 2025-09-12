"use client";

import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abolfazl-saeidabadi-6189bb1b0",
    icon: Linkedin,
    color: "text-blue-600",
  },
  {
    name: "Twitter",
    href: "#!",
    icon: Twitter,
    color: "text-blue-400",
  },
  {
    name: "Facebook",
    href: "#!",
    icon: Facebook,
    color: "text-blue-700",
  },
  {
    name: "GitHub",
    href: "https://github.com/Abolfazl26s",
    icon: Github,
    color: "text-gray-400",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex items-center justify-center md:justify-start gap-2 xl:justify-center
    ">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-[var(--primary)] ${social.color} transition-transform rounded-full ring p-2 scale-80 xl:scale-100`}
        >
          <social.icon size={24} />
        </Link>
      ))}
    </div>
  );
}
