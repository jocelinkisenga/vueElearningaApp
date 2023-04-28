import {createRouter, createWebHistory} from 'vue-router'

import home from '../components/pages/Home.vue'
import about from '../components/pages/about.vue'
import contact from '../components/pages/contact.vue'
import notFound from '../components/pages/notFound.vue'

const routes = [
    {
        path : '/',
        component : home
    },
    {
        path : '/contact',
        component : contact,
        
    },
    {
        path : '/about',
        component : about
    },
    {
        path : '/:pathMach(.*)*',
        component : notFound
    }
]

const router = createRouter(
    {
        history : createWebHistory(),
        routes,
    },

)

export default router