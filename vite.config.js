import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/bitfinex-api': {
                target: 'https://api-pub.bitfinex.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/bitfinex-api/, ''),
            },
        },
    },
});