import { DEFAULT_LOCALE } from "@/constants/i18n/i18n";
import { readFile, readdir } from "fs/promises";
import path from "path";

export async function getLocaleMessage(locale = DEFAULT_LOCALE) {
  const localeDir = path.join(process.cwd(), "messages", locale);
  const files = await readdir(localeDir);

  const allMessages: Record<string, string> = {};

  for (const file of files) {
    if (String(file).endsWith(".json")) {
      const namespace = path.basename(file, ".json");
      const content = await readFile(path.join(localeDir, file), "utf-8");
      allMessages[namespace] = JSON.parse(content);
    }
  }

  return allMessages;
}
