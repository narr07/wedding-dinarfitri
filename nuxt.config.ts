// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    ['@storyblok/nuxt', {
      accessToken: 'kXd5cgeWzNkSFg6mSoxzcwtt',
      apiOptions: {
        region: 'ap',
      },
    }],
  ],
  ui: {
    global: true,
    icons: ['pepicons', 'openmoji'],
  },

})
