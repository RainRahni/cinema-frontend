import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import MoviePage from "@/views/MoviePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/movie/:id', component: MoviePage },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
  ]
})

export default router
