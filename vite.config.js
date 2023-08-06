import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

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

        babelPresetEnvTargets: ["chrome >= 40", "firefox >= 40", "safari >= 7"],
        maximumFileSizeToCacheInBytes: 5000000,
        cleanupOutdatedCaches: true,
        offlineGoogleAnalytics: true,
        navigateFallback: "/index.html",
        runtimeCaching: [
          {
            urlPattern: new RegExp(
              "^https://fonts.(?:googleapis|gstatic).com/(.*)"
            ),
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts",
              expiration: {
                maxEntries: 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|gif|jpg|jpeg|svg|ico)$/i,
            handler: "CacheFirst",

            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 60,
              },
            },
          },
          {
            urlPattern: /\.(?:js)$/i,
            handler: "CacheFirst",

            options: {
              cacheName: "js",
              expiration: {
                maxEntries: 60,
              },
            },
          },
          {
            urlPattern: /\.(?:css)$/i,
            handler: "CacheFirst",

            options: {
              cacheName: "css",
              expiration: {
                maxEntries: 60,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // cache RESTAPI URL https://chatdosen.my.id
          {
            urlPattern: new RegExp("^https://chatdosen.my.id/(.*)"),
            handler: "NetworkFirst",
            options: {
              cacheName: "api",
              expiration: {
                maxEntries: 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },

              networkTimeoutSeconds: 10,

              backgroundSync: {
                name: "api-queue",
                options: {
                  maxRetentionTime: 60 * 60,
                },
              },
            },
          },
          // cache Image URL https://chatdosen.my.id/images
          {
            urlPattern: new RegExp("^https://chatdosen.my.id/images/(.*)"),
            handler: "CacheFirst",
            options: {
              cacheName: "images-apis",
              expiration: {
                maxEntries: 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },

              backgroundSync: {
                name: "images-apis-queue",
                options: {
                  maxRetentionTime: 60 * 60,
                },
              },
            },
          },
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
