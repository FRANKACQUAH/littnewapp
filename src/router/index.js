// import "@fortawesome/fontawesom-free/css/all.css"
// import "material-design-icons-iconfont/dist/material-design-icon.css"
import { createRouter, createWebHistory } from 'vue-router'
// import { Vue } from 'vue'
// import { VueRouter } from 'vue-router'
import home from '@/views/Home.vue'
import About from '@/views/about.vue'
import Projects from '@/views/projects.vue'
import Trending from '@/views/trending.vue'
import Register from '@/views/register.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.


const routes = [
    { path: '/', name:"Home" , component: home,},
    { path: '/about', name:"About" , component: About,},
    { path: '/projects', name:"Projects" , component: Projects,},
    { path: '/trending', name:"Trending" , component: Trending,},
    { path: '/register', name:"Register" , component: Register,},
   
    // {
    //     name: 'About Us',
    //     path: '/about',
    //     component: () => import('./views/about.vue'),
    //   },
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router