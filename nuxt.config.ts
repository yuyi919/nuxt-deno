import * as path from "path";

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
      // "readable-stream",
      // "string_decoder",
    ],
  },
  alias: {
    ws: path.join(__dirname, "node_modules/ws/wrapper.mjs"),
    events: path.join(__dirname, "node_modules/eventemitter2"),
  },
  nitro: {
    rollupConfig: {
      external: ["string_decoder", "bufferutil", "utf-8-validate"],
    },
    externals: {
      external: ["string_decoder", "bufferutil", "utf-8-validate"],
    },
    experimental: {
      websocket: true,
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-07-10",
});
