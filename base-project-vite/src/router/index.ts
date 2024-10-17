import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/child-app-1',
        name: 'child1',
        component: () => import('@/views/child/child-app-1.vue'),
      },
      {
        path: '/child-app-2',
        name: 'child2',
        component: () => import('@/views/child/child-app-2.vue'),
      },
      {
        path: '/child-app-3',
        name: 'child3',
        component: () => import('@/views/child/child-app-3.vue'),
      },
      {
        path: '/logging',
        name: 'logging',
        component: () => import('@/views/base/logging.vue'),
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
