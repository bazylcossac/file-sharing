import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // webpack(config) {
  //   // Wyłącz cache – build będzie wolniejszy, ale stabilny
  //   config.cache = false;
  //   return config;
  // },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
