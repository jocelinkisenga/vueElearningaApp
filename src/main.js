import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import './assets/main.css'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    route : [
        {
            path: '/',
            name : 'home',
            component : 'home'
        },
        {
            path: '/about',
            name : 'about',
            component : 'about'
        },
        {
            path : '/contact',
            name : 'contact',
            component : 'contact'
        }
    ]
});

const app = createApp(App)
app.use(router).mount('#app')

app.mount('app')
