import microApp from '@micro-zoe/micro-app';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import './style.css';

microApp.start({
  'router-mode': 'native-scope',
  prefetchLevel: 1,
  // preFetchApps() {
  //   return [
  //     {
  //       name: 'child-app-3',
  //       url: 'http://localhost:3001',
  //       level: 1,
  //       'default-page': '/device-monitor',
  //     },
  //   ];
  // },
});
// setTimeout(() => {
//   localStorage.setItem('currentView', '基座设置的');
// }, 1000);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
