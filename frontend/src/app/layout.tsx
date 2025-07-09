import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./../styles/index.css";
import { getLocale } from "next-intl/server";

import AppInit from "@/components/AppInit";

const PlusJakarataSans = Plus_Jakarta_Sans({
  variable: "--font-jakarata-sans",
});

export const metadata: Metadata = {
  title: "File Sharing",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await getLocale()) || "pl";

  return (
    <html lang={locale}>
      <AppInit>
        <body
          className={`${PlusJakarataSans.variable} antialiased bg-[#1a1b1e] text-[#f5f5f5]`}
        >
          {children}
        </body>
      </AppInit>
    </html>
  );
}
