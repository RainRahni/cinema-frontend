import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import MoviePage from "@/views/MoviePage.vue";

const router = createRouter({
  history: createWebHistory(), // use createWebHistory
  routes: [
    { path: '/movie', component: MoviePage },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
  ]
})

export default router
