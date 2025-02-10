import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
    tailwindcss(),
    // VitePWA({
    //     registerType: 'autoUpdate',
    //     devOptions: {
    //         enabled: true,
    //     },
    //     manifest: {
    //         name: 'Ruleta Festival',
    //         short_name: 'Ruleta',
    //         description: 'Juego de ruleta para el festival',
    //         theme_color: '#000000',
    //         background_color: '#ffffff',
    //         display: 'standalone',
    //         start_url: '/',
    //         icons: [
    //             {
    //                 src: '/icons/icon-192x192.png',
    //                 sizes: '192x192',
    //                 type: 'image/png'
    //             },
    //             {
    //                 src: '/icons/icon-512x512.png',
    //                 sizes: '512x512',
    //                 type: 'image/png'
    //             }
    //         ]
    //     },
    //     workbox: {
    //         globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    //     }
    // })
    ],
})