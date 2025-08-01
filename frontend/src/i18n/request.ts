import { getLocaleMessage } from "@/utils/i18n/getLocaleMessages";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "en";

  const messages = await getLocaleMessage(locale);

  return {
    locale,
    defaultLocale: "pl",
    messages,
  };
});
