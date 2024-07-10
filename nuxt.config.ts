export default defineNuxtConfig({
  extends: [],
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
});
