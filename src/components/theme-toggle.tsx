"use client";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type ThemeValue = "light" | "dark" | "system";

const OPTIONS: { value: ThemeValue; icon: React.ReactNode; label: string }[] = [
  { value: "light", icon: <SunIcon width={15} height={15} />, label: "Light" },
  { value: "dark", icon: <MoonIcon width={15} height={15} />, label: "Dark" },
  { value: "system", icon: <DesktopIcon width={15} height={15} />, label: "System" },
];

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const current = OPTIONS.find((o) => o.value === theme) ?? OPTIONS[2];

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
          open ? "w-[148px]" : "w-9",
        ].join(" ")}
      >
        {/* Trigger — shows current theme icon, toggles the picker */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          aria-label={open ? "Close theme picker" : "Open theme picker"}
        >
          {current.icon}
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

          {OPTIONS.map((option) => {
            const isActive = theme === option.value;
            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
                className={[
                  "flex h-9 w-[36px] flex-shrink-0 items-center justify-center transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
                ].join(" ")}
                aria-label={option.label}
                title={option.label}
              >
                {option.icon}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
