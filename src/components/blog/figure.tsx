"use client";

import { cn } from "@/lib/utils";

export default function Figure({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string | React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col items-center", className)}>
      <img src={src} alt={alt} className="w-full rounded-lg" />
      {caption && (
        <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
