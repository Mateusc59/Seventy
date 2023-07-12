import en from './i18n/en.json';
import fr from './i18n/fr.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-graphql-client',
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        '@vueuse/nuxt',
        '@nuxtjs/supabase',
    ],
    css: ['@/assets/styles/main.scss'],
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        pages: {
            about: {
                en: '/about-us',
                fr: '/a-propos',
            },
        },
        vueI18n: {
            legacy: false,
            locale: 'en',
            fallbackLocale: 'en',
            messages: {
                en,
                fr,
            },
        },
    },
    plugins: [
        { src: '~/web-components/custom-cursor/custom-cursor.js', mode: 'client' },
        { src: '~/web-components/clip-container/clip-container', mode: 'client' },
    ],
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/dot.png' }],
        },
    },
});
