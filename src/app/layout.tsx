import type { Metadata } from "next";
import { Space_Grotesk, Inter, Fleur_De_Leah } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fleurDeLeah = Fleur_De_Leah({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fleur-de-leah",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakshi Shingole — Software Engineer · Full Stack Developer · UI/UX Designer",
  description:
    "Portfolio of Sakshi Shingole — a Computer Science student who designs and builds user-friendly digital products across web, AI, cloud and modern software systems.",
  icons: {
    icon: [
      { url: "/profile.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
  keywords: [
    "Sakshi Shingole",
    "Software Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "AWS",
    "Cloud",
    "Portfolio",
  ],
  authors: [{ name: "Sakshi Shingole" }],
  creator: "Sakshi Shingole",
  openGraph: {
    title: "Sakshi Shingole — From Pixel to Product",
    description: "I design and build user-friendly digital products across web, AI, cloud and modern software systems.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakshi Shingole — From Pixel to Product",
    description: "I design and build user-friendly digital products across web, AI, cloud and modern software systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${fleurDeLeah.variable}`}>
      <body className="bg-[#F7F8F6] text-[#151515] font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
