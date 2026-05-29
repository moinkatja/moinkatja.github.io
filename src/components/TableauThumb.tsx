import { useState } from "react";
import { tableauStaticImageUrl, tableauThumbUrl } from "../lib/tableau";

interface TableauThumbProps {
  workbook: string;
  view?: string;
  alt: string;
  className?: string;
  src?: string;
  /** cover = uniform crop (project cards); contain = full viz (story section) */
  fit?: "cover" | "contain";
}

export function TableauThumb({
  workbook,
  view = "Dashboard",
  alt,
  className = "",
  src,
  fit = "cover",
}: TableauThumbProps) {
  const primary = src ?? tableauThumbUrl(workbook, view);
  const fallback = tableauStaticImageUrl(workbook, view);

  const [currentSrc, setCurrentSrc] = useState(primary);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex aspect-16/10 w-full min-h-48 items-center justify-center bg-linear-to-br from-turquoise-soft to-pink-soft ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-sm font-semibold text-muted">Open on Tableau ↗</span>
      </div>
    );
  }

  const fitClasses =
    fit === "contain"
      ? "block w-full max-h-[min(32rem,70vh)] object-contain object-center"
      : "block aspect-16/10 w-full min-h-48 object-cover object-top";

  return (
    <img
      src={currentSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      decoding="async"
      className={`${fitClasses} ${className}`}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
        else setFailed(true);
      }}
    />
  );
}
