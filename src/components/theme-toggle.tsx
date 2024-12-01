"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // Only render after first client-side mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a skeleton/placeholder
  }

  return (
    <IconButton size="3" variant="ghost">
      {theme === "dark" && (
        <SunIcon width="16" height="16" onClick={() => setTheme("light")} />
      )}
      {theme === "light" && (
        <MoonIcon width="16" height="16" onClick={() => setTheme("dark")} />
      )}
    </IconButton>
  );
}
