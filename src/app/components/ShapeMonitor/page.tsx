import Image from "next/image";
import Link from "next/link";
import "./shape.css";
import { ShapeMonitorProps } from "@/types";
import { CalendarClock } from "lucide-react";

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
        className="transition-transform duration-300 dark:hover:text-[var(--foreground)] hover:scale-105 hover:text-[var(--secondary)] "
      >
        {/* This div contains the monitor-like shape and image. */}
        <div className="shapeMonitor">
          {/* Using Next.js's Image component for automatic optimization. */}
          <Image
            width={250}
            height={200}
            src={imgSrc}
            alt={projectName} // Alt text is important for accessibility.
            loading="lazy"
          />
          <div className="specker"></div>
        </div>

        {/* Text content for the card. */}
        <div className="mt-18 text-center">
          {/* Using h2 for a card title is better for HTML semantics than h1. */}
          <h2 className="mb-3 text-md font-bold">{projectName}</h2>
          <p className="text-sm text-[var(--muted-foreground)] flex items-center justify-center gap-2">
            <CalendarClock className="h-5 w-5" /> Time: {time}
          </p>
        </div>
      </Link>
    </div>
  );
}
