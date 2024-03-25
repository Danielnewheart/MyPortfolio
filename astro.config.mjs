import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    domains: ['mxeyphnpicullbfsgzzz.supabase.co'],
  },
  experimental: {
    clientPrerender: true,
  },
  // build: {
  //     assetsPrefix: {
  //         'png': "https://mxeyphnpicullbfsgzzz.supabase.co",
  //         'jpg': "https://mxeyphnpicullbfsgzzz.supabase.co",
  //         'jpeg': "https://mxeyphnpicullbfsgzzz.supabase.co",
  //     },
  // },
});