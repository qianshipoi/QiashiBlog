import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/comp',
    name: 'Comp',
    component: () => import('../views/Comp.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
