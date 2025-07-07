import { NextIntlClientProvider } from "next-intl";
import React from "react";

export default function AppInit({ children }: { children: React.ReactNode }) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
