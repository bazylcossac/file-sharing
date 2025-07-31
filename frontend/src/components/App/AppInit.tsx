import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { SessionProvider } from "next-auth/react";
import AuthenticatedLayout from "../Auth/AuthenticatedLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function AppInit({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const queryClient = new QueryClient();

  return (
    <NextIntlClientProvider locale={locale}>
      <SessionProvider>
        <AuthenticatedLayout>{children}</AuthenticatedLayout>
      </SessionProvider>
    </NextIntlClientProvider>
  );
}
