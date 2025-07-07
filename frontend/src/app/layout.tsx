import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../styles/index.css";
import { getLocale } from "next-intl/server";

import AppInit from "@/components/AppInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "File Sharing",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <AppInit>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </AppInit>
    </html>
  );
}
