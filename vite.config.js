import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env;
export default defineConfig({
  plugins: [react()],
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  server: {
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
    proxy: {
      '/api': {
        target: 'http://your-other-server-url',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: './build_ready',
    emptyOutDir: true,
    sourcemap: true,
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
})