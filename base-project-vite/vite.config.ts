import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // 解决控制台micro-app未定义警告
      template: {
        compilerOptions: {
          isCustomElement: (tag) => /^micro-app/.test(tag),
        },
      },
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 配置路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/child1/': {
        target: 'http://localhost:5678',
        changeOrigin: true,
      },
      '/dashboard/models/': {
        target: 'http://localhost:3000/models/',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:5173',
        },
      },
    },
  },
});
