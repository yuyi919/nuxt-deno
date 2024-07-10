export default defineNuxtConfig({
  // extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui"],

  ui: {
    icons: ["heroicons", "simple-icons"],
  },

  nitro: {
    experimental: {
      websocket: true,
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-07-10",
});