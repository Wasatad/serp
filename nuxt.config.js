export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: "static",

  router: {
    base: "/serp-molot-landing/",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "SERP и Молот",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Надежный рабочий инструмент для интернет-маркетологов",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/kbn3pfp.css",
      },
      {
        rel: "stylesheet",
        href: " https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald:wght@400;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["@assets/styles/scss/*.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
