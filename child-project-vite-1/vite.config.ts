import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
// import isMicroChild from './is-micro-child';
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue()],
    base: '/child1/',
    server: {
      port: 5678,
    },
  };
});
