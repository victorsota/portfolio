import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redireciona as requisições para a API do Resend
      '/emails': {
        target: 'http://localhost:5173', // Alvo da API do Resend
        changeOrigin: true, // Altera a origem para o domínio da API
        rewrite: (path) => path.replace(/^\/emails/, ''), // Remove "/emails" do início da URL
      },
    },
  },
})
