import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SuccessfulSignUp from '../views/SuccessfulSignUp.vue';

const routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: '/successful-sign-up',
    component: SuccessfulSignUp
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
