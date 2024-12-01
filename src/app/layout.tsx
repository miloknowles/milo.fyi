import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import { Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import { baseUrl } from "./sitemap";

import "@radix-ui/themes/styles.css";
// https://www.radix-ui.com/themes/docs/theme/token-reference
import "./theme-config.css";

import { Theme } from "@radix-ui/themes";
// import { ThemeProvider } from "next-themes";

import "./globals.css";

import Navigation from "src/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Milo Knowles",
    template: "%s | Milo Knowles",
  },
  description: "Welcome to my personal website.",
  openGraph: {
    title: "Milo Knowles",
    description: "Welcome to my personal website.",
    url: baseUrl,
    siteName: "Milo Knowles",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

// const newsreader = Newsreader({ subsets: ["latin"], variable: "--newsreader" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        // "bg-white text-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-2xl mx-4 lg:mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme radius="medium" grayColor="auto" accentColor="indigo">
            <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0 pt-6">
              <Navigation />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
            </main>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
