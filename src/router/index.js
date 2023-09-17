import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue'),
    },
  ],
})

export default router
