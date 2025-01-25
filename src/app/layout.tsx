import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import localFont from "next/font/local";
import clsx from "clsx";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const neue = localFont({
  src: "../../public/fonts/NeueHaasUnica-Light.woff2",
  weight: "300",
  variable: "--font-neue",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Sameer Jadav",
    template: "%s | Sameer Jadav",
  },
  description:
    "Frontend developer with a passion for learning and building awesome projects. Expanding skillset with full stack development for high-performance apps.",
  authors: [{ name: "Sameer Jadav", url: "https://sameerjadav.me" }],
  creator: "Sameer Jadav",
  publisher: "Sameer Jadav",
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
  openGraph: {
    title: "Sameer Jadav",
    description:
      "Frontend developer with a passion for learning and building awesome projects. Expanding skillset with full stack development for high-performance apps.",
    url: "https://sameerjadav.me",
    siteName: "Sameer Jadav",
    images: [
      {
        url: "https://sameerjadav.me/og.png",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Jadav",
    description:
      "Frontend developer with a passion for learning and building awesome projects. Expanding skillset with full stack development for high-performance apps.",
    creator: "@SameerJadav_",
    site: "@SameerJadav_",
    images: ["https://sameerjadav.me/og.png"],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("bg-black text-white", neue.variable)}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
