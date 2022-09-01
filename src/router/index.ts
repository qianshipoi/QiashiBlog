import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: () => import("../App.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
