
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  
  // https://vitejs.dev/config/
  export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: 'src/index.jsx', // 진입 파일 경로
        },
        output: {
          dir: 'dist',
          format: 'es',
          sourcemap: true,
        },
      },
      plugins: [react()],
    },
  });
