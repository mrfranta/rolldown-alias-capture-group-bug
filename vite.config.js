import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@app(?!\/(?:excluded))(\/.*)?$/,
        replacement: path.resolve(__dirname, 'src/app') + '$1'
      }
    ]
  }
})
