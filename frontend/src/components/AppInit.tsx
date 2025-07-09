"use client";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
// import { SessionProvider } from "next-auth/react";

export default function AppInit({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="pl">
      {children}
      {/* <SessionProvider>{children}</SessionProvider> */}
    </NextIntlClientProvider>
  );
}
