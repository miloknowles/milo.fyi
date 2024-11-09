"use client";

export default function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string | React.ReactNode;
}) {
  return (
    <figure className="flex flex-col items-center">
      <img src={src} alt={alt} className="w-full rounded-lg" />
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
