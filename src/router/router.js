import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';

const routes = [
  {
    path: '',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash
      }
    }
  },
})

export default router
