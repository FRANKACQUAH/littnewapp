import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@views/about.vue"
import Projects from "@views/projects.vue"
import Register from "@views/register.vue"


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const routes = [
{ path: '/', name : "Home",component: Home,},
{path:"/about",name:"About",component:About},
{path:"/projects",name:"Projects",component:Projects},
{path:"/register",name:"Register",component:Register},
    // {
    //     name: 'About Us',
    //     path: '/about',
    //     component: () => import('./views/about.vue'),
    //   },

]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;