import { getLocaleMessage } from "@/utils/i18n/getLocaleMessages";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "en";
  // replace later with real locale
  const messages = await getLocaleMessage(locale);

  return {
    locale,
    defaultLocale: "pl",
    messages,
  };
});
