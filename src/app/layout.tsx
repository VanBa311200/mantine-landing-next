import * as Sentry from "@sentry/nextjs";
import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import { ColorSchemeScript } from "@mantine/core";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/providers";
import "@mantine/core/styles.css";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const isProduction = process.env.NODE_ENV === "production";

const baseMetadata: Metadata = {
  title: "Aster Studio",
  description: "Modern product landing page built with Next.js and Mantine UI",
};

export function generateMetadata(): Metadata {
  if (!isProduction) {
    return baseMetadata;
  }

  return {
    ...baseMetadata,
    other: {
      ...(baseMetadata.other ?? {}),
      ...Sentry.getTraceData(),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
