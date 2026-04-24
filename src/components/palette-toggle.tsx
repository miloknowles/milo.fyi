"use client";

import { useEffect, useRef, useState } from "react";

type PaletteValue = "indigo" | "violet" | "blue" | "teal" | "orange" | "rose";

const STORAGE_KEY = "palette";
const DEFAULT_PALETTE: PaletteValue = "indigo";

const PALETTES: {
  value: PaletteValue;
  label: string;
  swatch: string;
  ring: string;
}[] = [
  {
    value: "indigo",
    label: "Indigo",
    swatch: "bg-indigo-500",
    ring: "ring-indigo-500",
  },
  {
    value: "violet",
    label: "Violet",
    swatch: "bg-violet-500",
    ring: "ring-violet-500",
  },
  {
    value: "blue",
    label: "Blue",
    swatch: "bg-blue-500",
    ring: "ring-blue-500",
  },
  {
    value: "teal",
    label: "Teal",
    swatch: "bg-teal-500",
    ring: "ring-teal-500",
  },
  {
    value: "orange",
    label: "Orange",
    swatch: "bg-orange-500",
    ring: "ring-orange-500",
  },
  {
    value: "rose",
    label: "Rose",
    swatch: "bg-rose-500",
    ring: "ring-rose-500",
  },
];

// 36 (trigger) + 1 (divider) + 6 × 32 (swatches) = 229
const EXPANDED_WIDTH = "w-[229px]";

export default function PaletteToggle() {
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState<PaletteValue>(DEFAULT_PALETTE);
  const containerRef = useRef<HTMLDivElement>(null);

  // Restore persisted palette on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as PaletteValue | null;
    if (stored && PALETTES.some((p) => p.value === stored)) {
      setPalette(stored);
      if (stored !== DEFAULT_PALETTE) {
        document.documentElement.setAttribute("data-palette", stored);
      }
    }
  }, []);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  function selectPalette(value: PaletteValue) {
    setPalette(value);
    if (value === DEFAULT_PALETTE) {
      document.documentElement.removeAttribute("data-palette");
    } else {
      document.documentElement.setAttribute("data-palette", value);
    }
    localStorage.setItem(STORAGE_KEY, value);
    setOpen(false);
  }

  const current = PALETTES.find((p) => p.value === palette)!;

  return (
    <div ref={containerRef} className="flex items-center">
      <div
        className={[
          "flex items-center overflow-hidden",
          "h-9 rounded-full",
          "border border-neutral-200 dark:border-neutral-700",
          "bg-white dark:bg-neutral-900",
          "shadow-sm",
          "transition-[width] duration-300 ease-in-out",
          open ? EXPANDED_WIDTH : "w-9",
        ].join(" ")}
      >
        {/* Trigger — colored dot showing current palette */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center"
          aria-label={open ? "Close palette picker" : "Open palette picker"}
        >
          <span
            className={`block h-3.5 w-3.5 rounded-full ${current.swatch}`}
          />
        </button>

        {/* Options that slide in to the right */}
        <div
          className={[
            "flex items-center",
            "transition-opacity duration-200",
            open ? "opacity-100 delay-100" : "opacity-0",
          ].join(" ")}
        >
          {/* Divider */}
          <div className="h-4 w-px flex-shrink-0 bg-neutral-200 dark:bg-neutral-700" />

          {PALETTES.map((p) => {
            const isActive = palette === p.value;
            return (
              <button
                key={p.value}
                onClick={() => selectPalette(p.value)}
                className="flex h-9 w-8 flex-shrink-0 items-center justify-center"
                aria-label={p.label}
                title={p.label}
              >
                <span
                  className={[
                    "block h-3.5 w-3.5 rounded-full transition-all",
                    p.swatch,
                    isActive
                      ? `ring-2 ring-offset-1 ring-offset-white dark:ring-offset-neutral-900 ${p.ring}`
                      : "opacity-60 hover:opacity-100 hover:scale-110",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
