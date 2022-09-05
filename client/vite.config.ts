import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }
    ],
  },
  css: {
  preprocessorOptions: {
    less: {
      modifyVars: {
        white: '#333',
        'component-background': '#777',
        'primary-color': '#1DA57A',
        'link-color': '#1DA57A',
        'border-radius-base': '2px',
      },
      javascriptEnabled: true,
    },
  }
}
})
