import type { Metadata } from "next";
import { Geist, Alexandria, Poppins } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Aryan Soni",
    template: "%s | Aryan Soni",
  },

  verification: {
    google: "mDna30TIZZ4xk1Ysl1YEjXLxqDWz_Ucxww9AH95hW5E",
  },

  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, and scalable web applications. Explore my projects, experience, and skills.",

  keywords: [
    "Aryan Soni",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
  ],

  authors: [{ name: "Aryan Soni" }],
  creator: "Aryan Soni",

  metadataBase: new URL("https://aryan-portfolio-rust-one.vercel.app/"),

  openGraph: {
    title: "Aryan Soni",
    description:
      "Explore my portfolio, projects, and experience in modern web development.",
    url: "https://aryan-portfolio-rust-one.vercel.app/",
    siteName: "Aryan Portfolio",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Aryan Soni Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aryan Soni",
    description:
      "Explore my portfolio, projects, and experience in modern web development.",
    images: ["/image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${alexandria.variable} antialiased ${poppins.className}`}
      >
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}