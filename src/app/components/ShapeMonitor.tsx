import Image from "next/image";
import Link from "next/link";
import { ShapeMonitorProps } from "@/types";
import { CalendarClock } from "lucide-react";
import "./shape.css";

export default function ShapeMonitor({
  imgSrc,
  projectName,
  time,
  link,
}: ShapeMonitorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* The entire card is a clickable link that opens in a new tab. */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 dark:hover:text-[var(--foreground)] hover:scale-105 hover:text-[var(--secondary)] group"
      >
        {/* This div contains the monitor-like shape and image. */}
        <div className="shapeMonitor scale-75 relative overflow-visible">
          {/* Using Next.js's Image component for automatic optimization. */}
          <Image
            width={250}
            height={200}
            src={imgSrc}
            alt={projectName} // Alt text is important for accessibility.
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <div className="specker"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <span className="text-sm font-semibold">View Live</span>
            <span className="text-xs text-gray-200">Tap to open</span>
          </div>
        </div>

        {/* Text content for the card. */}
        <div className="mt-18 text-center text-[var(--primary)]">
          {/* Using h2 for a card title is better for HTML semantics than h1. */}
          <h4 className="mb-3 text-md font-bold">{projectName}</h4>
          <p className="text-sm text-[var(--muted-foreground)] flex items-center justify-center gap-2">
            <CalendarClock className="h-5 w-5" /> Time: {time}
          </p>
        </div>
      </Link>
    </div>
  );
}
