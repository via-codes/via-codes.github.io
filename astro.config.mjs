import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@consts': '/src/consts',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@lib': '/src/lib'
      }
    }
  }
});
