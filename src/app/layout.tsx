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
  title: "Mehdi — Software & Systems Engineer | C, POSIX & Next.js Fullstack",
  description:
    "Portfolio d'ingénieur logiciel & systèmes : programmation bas niveau en C, réseaux POSIX, ordonnancement Unix et architectures web réactives Next.js & TypeScript.",
  keywords: [
    "Mehdi",
    "Software Engineer",
    "Ingénieur Logiciel",
    "Systèmes C",
    "POSIX Sockets",
    "Next.js",
    "TypeScript",
    "Fullstack Developer",
    "Linux Kernel API",
    "Valgrind",
    "Computer Science",
  ],
  authors: [{ name: "Mehdi", url: "https://github.com/mehddium" }],
  creator: "Mehdi",
  metadataBase: new URL("https://mehddium.github.io/portfolio/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mehdi — Software & Systems Engineer",
    description:
      "De la programmation C bas niveau au développement web fullstack Next.js. Projets concrets, études de cas documentées et résultats chiffrés.",
    url: "https://mehddium.github.io/portfolio/",
    siteName: "Mehdi Portfolio",
    locale: "fr_FR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi — Software & Systems Engineer",
    description:
      "De la programmation C bas niveau au développement web fullstack Next.js. Études de cas et code source.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mehddium.github.io/portfolio/#person",
        name: "Mehdi",
        jobTitle: "Software & Systems Engineer",
        url: "https://mehddium.github.io/portfolio/",
        sameAs: ["https://github.com/mehddium"],
        knowsAbout: [
          "C (C99/C11)",
          "POSIX Network Programming",
          "Operating Systems",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
        ],
        description:
          "Software & Systems Engineer specialized in low-level POSIX C, Unix network daemons, and reactive Next.js fullstack applications.",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://mehddium.github.io/portfolio/#webpage",
        url: "https://mehddium.github.io/portfolio/",
        name: "Mehdi — Portfolio Développeur Systèmes & Web",
        mainEntity: {
          "@id": "https://mehddium.github.io/portfolio/#person",
        },
      },
    ],
  };

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#0e1017] text-[#f4f5f8]">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
