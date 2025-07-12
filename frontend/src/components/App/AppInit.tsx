import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { SessionProvider } from "next-auth/react";
import AuthenticatedLayout from "../Auth/AuthenticatedLayout";

export default function AppInit({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider>
      <SessionProvider>
        <AuthenticatedLayout>{children}</AuthenticatedLayout>
      </SessionProvider>
    </NextIntlClientProvider>
  );
}
