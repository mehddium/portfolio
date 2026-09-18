import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehdi — Software & Systems Engineer Portfolio",
  description:
    "Portfolio of Mehdi: Fullstack Web Developer, C & Systems Programmer, Networking & UI/UX Design. Modern Neo-Brutalist Edition.",
  keywords: [
    "Mehdi",
    "Portfolio",
    "Software Engineer",
    "Fullstack",
    "Next.js",
    "C Programming",
    "Networking",
    "POSIX Sockets",
    "Neo-Brutalism",
    "TypeScript",
  ],
  authors: [{ name: "Mehdi", url: "https://github.com/mehddium" }],
  openGraph: {
    title: "Mehdi — Software & Systems Engineer Portfolio",
    description: "Fullstack Web & Low-Level C Systems Engineer Portfolio",
    url: "https://mehddium.github.io/portfolio/",
    siteName: "Mehdi Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
