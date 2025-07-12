import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { SessionProvider } from "next-auth/react";
import AuthenticatedLayout from "../Auth/AuthenticatedLayout";

export default function AppInit({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <NextIntlClientProvider locale={locale}>
      <SessionProvider>
        <AuthenticatedLayout>{children}</AuthenticatedLayout>
      </SessionProvider>
    </NextIntlClientProvider>
  );
}
