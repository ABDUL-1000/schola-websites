import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import { fileURLToPath, URL } from 'node:url'

const config = defineConfig({
  plugins: [
    devtools({ eventBusConfig: { port: 42073 } }),

    nitro({ rollupConfig: { external: [/^@sentry\//] } }),

    tsconfigPaths({ projects: ['./tsconfig.json'] }),

    tailwindcss(),

    tanstackStart(),

    viteReact(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

export default config
