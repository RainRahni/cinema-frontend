import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // import the router

createApp(App).use(router).mount('#app') // use the router

