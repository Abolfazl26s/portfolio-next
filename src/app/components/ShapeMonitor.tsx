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
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <div className="specker"></div>
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex translate-y-2 flex-col items-center gap-1 rounded-2xl border border-white/15 bg-black/70 px-5 py-4 text-center text-white shadow-[0_12px_32px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
              <span className="text-base font-bold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                View Live
              </span>
              <span className="text-sm text-white/85">Open in new tab</span>
            </div>
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
