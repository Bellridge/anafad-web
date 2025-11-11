import AppLayout from "@/components/layouts/AppLayout";
import { ToastProvider } from "@/context/ToastContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anafad | Global Trade. Architected Capital.",
    template: "%s | Anafad",
  },
  description:
    "Anafad is a global trade and investment platform connecting emerging markets with architected capital solutions. Build, scale, and trade globally with confidence.",
  keywords: [
    "Anafad",
    "global trade",
    "capital markets",
    "international finance",
    "investment platform",
    "trade logistics",
    "emerging markets",
    "fintech",
  ],
  authors: [{ name: "Anafad", url: "https://anafad.com" }],
  creator: "Anafad",
  publisher: "Anafad Inc.",
  metadataBase: new URL("https://anafad.com"),

  openGraph: {
    type: "website",
    url: "https://anafad.com",
    title: "Anafad | Global Trade. Architected Capital.",
    description:
      "Connect with the future of international trade and capital. Anafad empowers global businesses through technology-driven financial solutions.",
    siteName: "Anafad",
    images: [
      {
        url: "https://res.cloudinary.com/dmbqk1irb/image/upload/v1762120834/Anafad_Limited_Logo_-_Emblem_in_Deep_Blue-2-removebg-preview_wyyqwx.png",
        width: 1200,
        height: 630,
        alt: "Anafad Global Trade Platform",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anafad | Global Trade. Architected Capital.",
    description:
      "Empowering emerging markets with architected capital and global trade solutions.",
    creator: "@anafad",
    images: [
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1762120834/Anafad_Limited_Logo_-_Emblem_in_Deep_Blue-2-removebg-preview_wyyqwx.png",
    ],
  },

  icons: {
    icon: [
      { url: "./favicon.ico" },
      { url: "./icon.png", type: "image/png" },
      { url: "./icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  manifest: "./site.webmanifest",
  themeColor: "#001f3f",
  colorScheme: "light",
  alternates: {
    canonical: "https://anafad.com",
    languages: {
      "en-US": "https://anafad.com",
    },
  },

  category: "Business, Finance, Trade",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href="./site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <AppLayout>{children}</AppLayout>
        </ToastProvider>
      </body>
    </html>
  );
}
