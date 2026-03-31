import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const headingFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Ronak Patel | Senior Software Engineer",
  description: "Portfolio of Ronak Patel, Senior Software Engineer with expertise in Node.js, NestJS, React, Laravel, and cloud-native systems.",
  openGraph: {
    title: "Ronak Patel | Senior Software Engineer",
    description: "Experience, projects, and technical strengths across full-stack engineering and scalable backend systems.",
    type: "website"
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ronak1040.github.io")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
