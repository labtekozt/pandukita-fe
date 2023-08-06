import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
const getCache = ({ name, pattern }) => ({
  urlPattern: pattern,
  handler: "CacheFirst",
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2, // 2 years
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});

const getNetwork = ({ name, pattern }) => ({
  urlPattern: pattern,
  handler: "NetworkFirst",
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24,
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["**/*"],
      start_url: "/", // <== don't forget to set this

      workbox: {
        // network first strategy
        // https://developers.google.com/web/tools/workbox/modules/workbox-strategies#network_first_network_falling_back_to_cache
        runtimeCaching: [
          getCache({
            name: "images",
            pattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          }),
          getCache({
            name: "css",
            pattern: /\.(?:css)$/,
          }),
          getCache({
            name: "js",
            pattern: /\.(?:js)$/,
          }),
          getCache({
            name: "fonts",
            pattern: /\.(?:woff|woff2|ttf|otf|eot)$/,
          }),
          // cache google fonts
          getCache({
            name: "google-fonts",
            pattern: /^https:\/\/fonts\.googleapis\.com/,
          }),
          // cache api request from our server https://chatdosen.my.id/api/v1
          getNetwork({
            name: "api",
            pattern: /^https:\/\/chatdosen\.my\.id\/api\/v1/,
          }),
          // cache api images from our server https://chatdosen.my.id/images
          getCache({
            name: "api-images",
            pattern: /^https:\/\/chatdosen\.my\.id\/images/,
          }),
        ],
      },

      manifest: {
        short_name: "PanduKita",
        name: "PanduKita - Panduan Wisata Kita",
        icons: [
          {
            src: "manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "logo2.png",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
        ],
        start_url: "./",
        display: "standalone",
        theme_color: "#00a388",
        description: "Panduan Wisata Kita - PanduKita",
        background_color: "#ffffff",
        orientation: "portrait",
        dir: "ltr",
        lang: "id-ID",
        scope: "/",
        categories: ["travel", "tourism"],
        launch_handler: {
          enabled: true,
        },
        edge_side_panel: {
          enabled: true,
          position: "right",
        },

        prefer_related_applications: false,
      },
      mode: "production",
      strategies: "generateSW",
    }),
  ],
  build: {
    target: "esnext",
  },
});
