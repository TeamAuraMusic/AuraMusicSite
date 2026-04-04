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
  title: "AuraMusic – Your Ultimate YouTube Music Client for Android",
  description:
    "A modern Android music player with YouTube Music integration, powerful audio features, live lyrics, and a beautiful Material 3 interface. Free & open source.",
  keywords: [
    "AuraMusic",
    "YouTube Music",
    "Android music player",
    "Material 3",
    "open source",
    "live lyrics",
    "offline music",
  ],
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "AuraMusic – Your Ultimate YouTube Music Client",
    description:
      "Experience YouTube Music with powerful audio controls, beautiful Material 3 design, and seamless performance on Android.",
    url: "https://www.auramusic.site",
    siteName: "AuraMusic",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("auramusic-theme");var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches);if(d)document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark")}catch(e){}})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
