import { defineNuxtConfig } from 'nuxt/config'

import 'node:crypto';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Incognitee',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        // {
        //   hid: 'robots',
        //   name: 'robots',
        //   content: 'noindex',
        // },
        {
          hid: 'msapplication-TileColor',
          name: 'msapplication-TileColor',
          content: '#1c1c26',
        },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: '#1c1c26',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#1c1c26',
        },
      ],
    },
  },
  experimental: {
    externalVue: false,
  },
  routeRules: {
    '/': { ssr: true },
  },
  imports: {
    autoImport: false,
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['nuxt-svgo', '@pinia/nuxt', '@nuxt/content', '@nuxt/ui', '@nuxtjs/tailwindcss' ],
  plugins: [{ src: '~/plugins/lockScroll', mode: 'client' }],
  svgo: {
    defaultImport: 'component',
    global: false,
  },
  ssr: true,
  vite: {
    define: {
      process: {},
      global: 'globalThis',
    },
    // This is not ideal and should work via `unenv` directly..
    resolve: {
      alias: {
        crypto: './node_modules/unenv/runtime/node/crypto/node.cjs',
        assert: './node_modules/unenv/runtime/mock/proxy.cjs',
        http: './node_modules/unenv/runtime/node/http/index.cjs',
        buffer: './node_modules/unenv/runtime/node/buffer/index.cjs',
        os: './node_modules/unenv/runtime/mock/proxy.cjs',
        url: './node_modules/unenv/runtime/node/url/index.cjs',
        zlib: './node_modules/unenv/runtime/mock/proxy.cjs',
        'process/': './node_modules/unenv/runtime/mock/proxy.cjs',
        process: './node_modules/unenv/runtime/mock/proxy.cjs',
        stream: './node_modules/unenv/runtime/mock/proxy.cjs',
        _stream_duplex: './node_modules/unenv/runtime/mock/proxy.cjs',
        _stream_passthrough: './node_modules/unenv/runtime/mock/proxy.cjs',
        _stream_readable: './node_modules/unenv/runtime/mock/proxy.cjs',
        _stream_writable: './node_modules/unenv/runtime/mock/proxy.cjs',
        _stream_transform: './node_modules/unenv/runtime/mock/proxy.cjs',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
})
