export default defineNuxtConfig({
  // extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui"],

  ui: {
    icons: ["heroicons", "simple-icons"],
  },

  build: {
    transpile: [
      // "@satorijs/core",
      // "@cordisjs/core",
      "readable-stream",
      "string_decoder",
    ],
  },
  nitro: {
    rollupConfig: {
      external: ["string_decoder"],
    },
    externals: {
      external: ["string_decoder"],
    },
    experimental: {
      websocket: true,
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-07-10",
});
