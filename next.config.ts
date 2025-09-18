import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // biome-ignore lint/suspicious/useAwait: only for redirecteds require async
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/supplier/configuration",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
