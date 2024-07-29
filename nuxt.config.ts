// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
    configFile: './formkit.config.ts',
  },
  modules: ["@nuxt/image", "@formkit/nuxt"]
})