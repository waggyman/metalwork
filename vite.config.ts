import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// GitHub Pages serves project sites at https://<user>.github.io/<repo>/
// Set GITHUB_PAGES=true in CI, or VITE_BASE=/your-repo-name/ locally.
const base =
  process.env.VITE_BASE ??
  (process.env.GITHUB_PAGES === 'true'
    ? `/${process.env.GITHUB_REPOSITORY_NAME ?? 'metalwork'}/`
    : '/')

export default defineConfig({
  base,
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
