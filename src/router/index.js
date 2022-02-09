import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const routes = [
    { path: '/', 
    component: Home },

    // {
    //     name: 'About Us',
    //     path: '/about',
    //     component: () => import('./views/about.vue'),
    //   },
    ]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router